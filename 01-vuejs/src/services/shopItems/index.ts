// the axios instance and types
import http from "../api";
import type { APIResponse } from "../types";
import type { InputCreateItem, InputUpdateItem, ShopItem } from "./types";

export class ShopItemsService {
  async getShopItems() {
    return await http.get<ShopItem[]>("shop-items");
  }
  
  async deleteShopItem(id: number) {
    return await http.delete<APIResponse<boolean>>(`shop-items/${id}`);
  }
  
  async createShopItem(input: InputCreateItem) {
    return await http.post<APIResponse<ShopItem>>("shop-items", input);
  }
  
  async updateShopItem(input: InputUpdateItem) {
    return await http.put<APIResponse<boolean>>("shop-items", input);
  }
}