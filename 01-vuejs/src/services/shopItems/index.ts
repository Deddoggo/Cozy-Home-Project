// the axios instance and types
import http from "../api";
import type { APIResponse } from "../types";
import type { InputCreateItem, InputUpdateItem, ShopItem } from "./types";

async function getShopItems() {
  return await http.get<APIResponse<ShopItem[]>>("shopItem");
}

async function deleteShopItem(id: number) {
  return await http.delete<APIResponse<boolean>>(`shopItem/${id}`);
}

async function createShopItem(input: InputCreateItem) {
  return await http.post<APIResponse<ShopItem>>("shopItem", input);
}

async function updateShopItem(input: InputUpdateItem) {
  return await http.put<APIResponse<boolean>>("shopItem", input);
}

export default {
  getShopItems,
  createShopItem,
  updateShopItem,
  deleteShopItem,
};