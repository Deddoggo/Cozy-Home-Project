import type { Category } from "../categories/types";

export type ShopItem = {
  _id: string;
  category: Category;
  title: string;
  description: string;
  basePrice: number;
  image: string;
}

export type InputCreateItem = {
  _id: string;
  category: Category;
  title: string;
  description: string;
  basePrice: number;
  image: string;
};

export type InputUpdateItem = {
  _id: string;
  category: Category;
  title: string;
  description: string;
  basePrice: number;
  image: string;
};