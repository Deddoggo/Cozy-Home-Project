import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateShopItemsDetailDto } from './dto/create-shop.items.detail.dto';
import { UpdateShopItemsDetailDto } from './dto/update-shop.items.detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ShopItem, ShopItemDocument } from '../shop.items/schemas/shop.item.schema';
import mongoose, { Model } from 'mongoose';
import { ShopItemDetail, ShopItemDetailDocument } from './schemas/shop.items.detail.schema';
import aqp from 'api-query-params';

@Injectable()
export class ShopItemsDetailsService {
  constructor(
    @InjectModel(ShopItemDetail.name) private shopItemsDetailModel: Model<ShopItemDetailDocument>,
    @InjectModel(ShopItem.name) private shopItemModel: Model<ShopItemDocument>,
  ) {}
  
  // Check if the shopItem _id is valid
  async isValidShopItemId(_id: string): Promise<boolean> {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return false;
    }

    const shopItemExists = await this.shopItemModel.exists({ _id });
    return !!shopItemExists;
  }

  // Create a new shop item detail
  async create(createShopItemsDetailDto: CreateShopItemsDetailDto): Promise<ShopItemDetail> {
    const shopItemExists = await this.isValidShopItemId(createShopItemsDetailDto.shopItem);
    if (!shopItemExists) {
      throw new NotFoundException(`Shop item with ID ${createShopItemsDetailDto.shopItem} not found`);
    }

    const newShopItemDetail = new this.shopItemsDetailModel(createShopItemsDetailDto);
    return newShopItemDetail.save();
  }

  // Find all shop item details
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

    const totalItems = await this.shopItemsDetailModel.find(filter).countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * pageSize;
    const results = await this.shopItemsDetailModel
        .find(filter)
        .limit(pageSize)
        .skip(skip)
        .sort(sort as any);

    return { results, totalItems, totalPages };
}

  // Find one shop item detail by ID
  async findOne(id: string): Promise<ShopItemDetail> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Invalid ID format`);
    }

    const shopItemDetail = await this.shopItemsDetailModel.findById(id).exec();
    if (!shopItemDetail) {
      throw new NotFoundException(`Shop item detail with ID ${id} not found`);
    }
    return shopItemDetail;
  }

  async findByShopItem(shopItemId: string): Promise<ShopItemDetail[]> {
    if (!mongoose.Types.ObjectId.isValid(shopItemId)) {
      throw new BadRequestException(`Invalid shop item ID format`);
    }

    const shopItemDetails = await this.shopItemsDetailModel.find({ shopItem: shopItemId }).exec();
    return shopItemDetails;
  }

  // Update a shop item detail by ID
  async update(id: string, updateShopItemsDetailDto: UpdateShopItemsDetailDto): Promise<ShopItemDetail> {
    if (updateShopItemsDetailDto.shopItem && !(await this.isValidShopItemId(updateShopItemsDetailDto.shopItem))) {
      throw new BadRequestException(`Invalid shop item ID: ${updateShopItemsDetailDto.shopItem}`);
    }

    const updatedShopItemDetail = await this.shopItemsDetailModel.findByIdAndUpdate(
      id,
      updateShopItemsDetailDto,
      { new: true }
    ).exec();

    if (!updatedShopItemDetail) {
      throw new NotFoundException(`Shop item detail with ID ${id} not found`);
    }
    return updatedShopItemDetail;
  }

  // Delete a shop item detail by ID
  async remove(id: string): Promise<ShopItemDetail> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Invalid ID format`);
    }

    const deletedShopItemDetail = await this.shopItemsDetailModel.findByIdAndDelete(id).exec();
    if (!deletedShopItemDetail) {
      throw new NotFoundException(`Shop item detail with ID ${id} not found`);
    }
    return deletedShopItemDetail;
  }
}
