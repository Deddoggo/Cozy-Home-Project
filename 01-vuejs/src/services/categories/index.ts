import type { Category, InputCreateCategory, InputUpdateCategory } from "../categories/types";
import http from "../api";
import type { APIResponse } from "../types";


async function getCategories() {
  return await http.get<APIResponse<Category[]>>("category");
}

async function deleteCategory(id: number) {
  return await http.delete<APIResponse<boolean>>(`category/${id}`);
}

async function createCategory(input: InputCreateCategory) {
  return await http.post<APIResponse<Category>>("category", input);
}

async function updateCategory(input: InputUpdateCategory) {
  return await http.put<APIResponse<boolean>>("category", input);
}

export default {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};