import type { ShopItem } from "../shopItems/types";
import type { User } from "../users/types";

export type Review = {
  _id: string;
  user: User;
  rating: number;
  image: string;
  comment: string;
  shopItem: ShopItem;
}

export type InputCreateReview = {
  _id: string;
  user: User;
  rating: number;
  image: string;
  comment: string;
  shopItem: ShopItem;
};

export type InputUpdateReview = {
  _id: string;
  user: User;
  rating: number;
  image: string;
  comment: string;
  shopItem: ShopItem;
};