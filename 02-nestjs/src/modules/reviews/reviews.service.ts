import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';
import mongoose, { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema';
import { ShopItem } from '../shop.items/schemas/shop.item.schema';
import aqp from 'api-query-params';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(ShopItem.name) private shopItemModel: Model<ShopItem>,
  ) {}

  // Check if the user ID is valid
  async isValidUserId(_id: string): Promise<boolean> {
    if (!mongoose.Types.ObjectId.isValid(_id)) return false;
    const userExists = await this.userModel.exists({ _id });
    return !!userExists;
  }

  // Check if the shopItem ID is valid
  async isValidShopItemId(_id: string): Promise<boolean> {
    if (!mongoose.Types.ObjectId.isValid(_id)) return false;
    const shopItemExists = await this.shopItemModel.exists({ _id });
    return !!shopItemExists;
  }

  // Create a new review
  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const { user, shopItem } = createReviewDto;

    // Check if the user and shop item IDs are valid
    const userExists = await this.isValidUserId(user);
    const shopItemExists = await this.isValidShopItemId(shopItem);

    if (!userExists)
      throw new NotFoundException(`User with ID ${user} not found`);
    if (!shopItemExists)
      throw new NotFoundException(`Shop item with ID ${shopItem} not found`);

    const newReview = new this.reviewModel(createReviewDto);
    return newReview.save();
  }

  // Find all reviews with optional search by rating or comment
async findAll(query: string, current = 1, pageSize = 10) {
  const { filter, sort } = aqp(query);

  // Check if filter.query is numeric for rating, otherwise search by comment
  if (filter.query) {
    const queryValue = Number(filter.query);
    filter.$or = [
      !isNaN(queryValue) ? { rating: queryValue } : {}, // Only use rating if query is a number
      { comment: { $regex: `.*${filter.query}.*`, $options: 'i' } }, // Matches comments containing the query string
    ].filter(condition => Object.keys(condition).length > 0); // Remove empty objects if query is not numeric

    delete filter.query; // Remove query after it's processed
  }

  // Remove pagination parameters if they exist
  if (filter.current) delete filter.current;
  if (filter.pageSize) delete filter.pageSize;

  const totalItems = await this.reviewModel.find(filter).countDocuments();
  const totalPages = Math.ceil(totalItems / pageSize);

  const skip = (current - 1) * pageSize;
  const results = await this.reviewModel
    .find(filter)
    .limit(pageSize)
    .skip(skip)
    .sort(sort as any);

  return { results, totalItems, totalPages };
}

  // Find one review by ID
  async findOne(id: string): Promise<Review> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Invalid ID: ${id}`);
    }

    const review = await this.reviewModel.findById(id).exec();
    if (!review) throw new NotFoundException(`Review with ID ${id} not found`);

    return review;
  }

  // Update a review by ID
  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    if (
      updateReviewDto.user &&
      !(await this.isValidUserId(updateReviewDto.user))
    ) {
      throw new BadRequestException(`Invalid user ID: ${updateReviewDto.user}`);
    }

    if (
      updateReviewDto.shopItem &&
      !(await this.isValidShopItemId(updateReviewDto.shopItem))
    ) {
      throw new BadRequestException(
        `Invalid shop item ID: ${updateReviewDto.shopItem}`,
      );
    }

    const updatedReview = await this.reviewModel
      .findByIdAndUpdate(id, updateReviewDto, { new: true })
      .exec();

    if (!updatedReview)
      throw new NotFoundException(`Review with ID ${id} not found`);

    return updatedReview;
  }

  // Delete a review by ID
  async remove(id: string): Promise<Review> {
    const deletedReview = await this.reviewModel.findByIdAndDelete(id).exec();
    if (!deletedReview)
      throw new NotFoundException(`Review with ID ${id} not found`);

    return deletedReview;
  }
}
