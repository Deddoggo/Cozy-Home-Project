import type {
  Review,
  InputCreateReview,
  InputUpdateReview,
} from "@/services/reviews/types";
import http from "@/services/api";
import type { APIResponse } from "@/services/types";

export class ReviewsService {
  async getReviews() {
    return await http.get<APIResponse<Review[]>>("reviews");
  }

  async deleteReview(id: number) {
    return await http.delete<APIResponse<boolean>>(`reviews/${id}`);
  }

  async createReview(input: InputCreateReview) {
    return await http.post<APIResponse<Review>>("reviews", input);
  }

  async updateReview(input: InputUpdateReview) {
    return await http.put<APIResponse<boolean>>("reviews", input);
  }

  async getReviewByShopItem(id: string) {
    return await http.get<Review[]>(`reviews/shop-item/${id}`);
  }
}
