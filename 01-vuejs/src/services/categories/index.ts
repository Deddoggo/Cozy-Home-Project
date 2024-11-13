import type {
  Category,
  InputCreateCategory,
  InputUpdateCategory,
} from "@/services/categories/types";
import http from "@/services/api";
import type { APIResponse } from "@/services/types";

export class CategoriesService {
  async getCategories() {
    return await http.get<APIResponse<Category[]>>("categories");
  }

  async deleteCategory(id: number) {
    return await http.delete<APIResponse<boolean>>(`categories/${id}`);
  }

  async createCategory(input: InputCreateCategory) {
    return await http.post<APIResponse<Category>>("categories", input);
  }

  async updateCategory(input: InputUpdateCategory) {
    return await http.put<APIResponse<boolean>>("categories", input);
  }

  async getCategory(id: Category) {
    return await http.get<Category>(`categories/${id}`);
  }
}
