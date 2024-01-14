import Cart from "./cart.model";
import { user } from "./user.model";

export interface cartResponse {
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

export interface paymentResponse {
  status: string,
  session: string
}


