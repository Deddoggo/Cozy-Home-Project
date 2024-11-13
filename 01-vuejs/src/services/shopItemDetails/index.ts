import type {
  ShopItemDetail,
  InputCreateItemDetail,
  InputUpdateItemDetail,
} from "@/services/shopItemDetails/types";
import http from "@/services/api";
import type { APIResponse } from "@/services/types";

export class ShopItemDetailsService {
  async getItemDetails() {
    return await http.get<APIResponse<ShopItemDetail[]>>("shop-items-details");
  }

  async deleteItemDetails(id: number) {
    return await http.delete<APIResponse<boolean>>(`shop-items-details/${id}`);
  }

  async createItemDetails(input: InputCreateItemDetail) {
    return await http.post<APIResponse<ShopItemDetail>>("shop-items-details", input);
  }

  async updateItemDetails(input: InputUpdateItemDetail) {
    return await http.put<APIResponse<boolean>>("shop-items-details", input);
  }

  async getShopItemDetails(id: string) {
    return await http.get<ShopItemDetail[]>(`shop-items-details/shop-item/${id}`);
  }
}
