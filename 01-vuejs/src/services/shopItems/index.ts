// the axios instance and types
import http from "@/services/api";
import type { APIResponse } from "@/services/types";
import type { InputCreateItem, InputUpdateItem, ShopItem } from "@/services/shopItems/types";

export class ShopItemsService {
  async getShopItems() {
    return await http.get<APIResponse<ShopItem[]>>("shop-items");
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

  async getShopItem(id: string) {
    return await http.get<ShopItem>(`shop-items/${id}`);
  }
}