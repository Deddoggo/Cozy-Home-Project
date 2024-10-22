import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShopItem, ShopItemDocument } from '@/modules/shop.items/schemas/shop.item.schema';
import { CreateShopItemDto } from './dto/create-shop.item.dto';
import { UpdateShopItemDto } from './dto/update-shop.item.dto';

@Injectable()
export class ShopItemsService {
  constructor(
    @InjectModel(ShopItem.name) private shopItemModel: Model<ShopItemDocument>
  ) {}

  // Create a new shop item
  async create(createShopItemDto: CreateShopItemDto): Promise<ShopItem> {
    const newShopItem = new this.shopItemModel(createShopItemDto);
    return newShopItem.save();
  }

  // Find all shop items
  async findAll(): Promise<ShopItem[]> {
    return this.shopItemModel.find().exec(); // Returns all shop items from the database
  }

  // Find one shop item by ID
  async findOne(id: number): Promise<ShopItem> {
    return this.shopItemModel.findById(id).exec();
  }

  // Update a shop item by ID
  async update(id: number, updateShopItemDto: UpdateShopItemDto): Promise<ShopItem> {
    return this.shopItemModel.findByIdAndUpdate(id, updateShopItemDto, { new: true }).exec();
  }

  // Delete a shop item by ID
  async remove(id: string): Promise<ShopItem> {
    return this.shopItemModel.findByIdAndDelete(id).exec();
  }
}
