import Cart from "./cart.model";
import { user } from "./user.model";

export interface ApiResponse {
  status: string;
  data: {
    getCart: Cart;
    totalPrice: number;
  };
}

export interface UserResponse {
  status: string;
  data: {
    users: user[];
  };
}


