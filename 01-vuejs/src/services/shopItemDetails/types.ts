import type { ShopItem } from "@/services/shopItems/types";

export type ShopItemDetail = {
  _id: string;
  shopItem: ShopItem;
  title: string;
  description: string;
  additionalPrice: number;
  optionalDescription: string;
}

export type InputCreateItemDetail = {
  _id: string;
  shopItem: ShopItem;
  title: string;
  description: string;
  additionalPrice: number;
  optionalDescription: string;
};

export type InputUpdateItemDetail = {
  _id: string;
  shopItem: ShopItem;
  title: string;
  description: string;
  additionalPrice: number;
  optionalDescription: string;
};