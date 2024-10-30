import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ShopItem, ShopItemDocument } from '@/modules/shop.items/schemas/shop.item.schema';
import { CreateShopItemDto } from './dto/create-shop.item.dto';
import { UpdateShopItemDto } from './dto/update-shop.item.dto';
import aqp from 'api-query-params';
import { Category, CategoryDocument } from '@/modules/categories/schemas/category.schema';

@Injectable()
export class ShopItemsService {
  constructor(
    @InjectModel(ShopItem.name) private shopItemModel: Model<ShopItemDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  //Check if the category _id is valid
  async isValidCategoryId(_id: string): Promise<boolean> {
    // Kiểm tra định dạng của _id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return false;
    }

    // Kiểm tra sự tồn tại của Category
    const categoryExists = await this.categoryModel.exists({ _id });
    return !!categoryExists; // Trả về true nếu tồn tại, ngược lại false
}

   // Create a new shop item
   async create(createShopItemDto: CreateShopItemDto): Promise<ShopItem> {
    // Kiểm tra sự tồn tại của Category
    const categoryExists = await this.isValidCategoryId(createShopItemDto.category);
    if (!categoryExists) {
      throw new NotFoundException(`Category with ID ${createShopItemDto.category} not found`);
    }

    // Nếu category tồn tại, tiếp tục tạo ShopItem
    const newShopItem = new this.shopItemModel(createShopItemDto);
    return newShopItem.save();
  }
  

  // Find all shop items

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, limit, sort } = aqp(query);

    // Assuming query should search title/description
    if (filter.query) {
        filter.$or = [
            { title: { $regex: `.*${filter.query}.*`, $options: "i" } },
            { description: { $regex: `.*${filter.query}.*`, $options: "i" } },
        ];
        delete filter.query;  // Remove query after it's processed
    }

    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;

    const totalItems = await this.shopItemModel.find(filter).countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * pageSize;
    const results = await this.shopItemModel
        .find(filter)
        .limit(pageSize)
        .skip(skip)
        .sort(sort as any);

    return { results, totalItems, totalPages };
}

  // Find one shop item by ID
  async findOne(id: string): Promise<ShopItem> {
    return this.shopItemModel.findById(id).exec();
  }

  // Update a shop item by ID
  async update(id: string, updateShopItemDto: UpdateShopItemDto): Promise<ShopItem> {
    // Kiểm tra nếu category ID trong DTO là hợp lệ
    if (updateShopItemDto.category && !(await this.isValidCategoryId(updateShopItemDto.category))) {
        throw new BadRequestException(`Invalid category ID: ${updateShopItemDto.category}`);
    }
    // Thực hiện cập nhật ShopItem
    const updatedShopItem = await this.shopItemModel.findByIdAndUpdate(id, updateShopItemDto, { new: true }).exec();
    
    if (!updatedShopItem) {
        throw new NotFoundException(`Shop item with ID ${id} not found`);
    }
    return updatedShopItem;
}

  // Delete a shop item by ID
  async remove(id: string): Promise<ShopItem> {
    return this.shopItemModel.findByIdAndDelete(id).exec();
  }
}
