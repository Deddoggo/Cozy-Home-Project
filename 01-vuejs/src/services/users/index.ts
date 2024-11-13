import type {
  User,
  InputCreateUser,
  InputUpdateUser,
} from "@/services/users/types";
import http from "@/services/api";
import type { APIResponse } from "@/services/types";

export class UsersService {
  async getUsers() {
    return await http.get<APIResponse<User[]>>("users");
  }

  async deleteUser(id: number) {
    return await http.delete<APIResponse<boolean>>(`users/${id}`);
  }

  async createUser(input: InputCreateUser) {
    return await http.post<APIResponse<User>>("users", input);
  }

  async updateUser(input: InputUpdateUser) {
    return await http.put<APIResponse<boolean>>("users", input);
  }

  async getUser(id: User) {
    return await http.get<User>(`users/${id}`);
  }
}
