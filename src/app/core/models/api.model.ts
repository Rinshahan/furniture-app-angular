import Cart from "./cart.model";

export interface ApiResponse {
  status: string;
  data: {
    getCart: Cart;
    totalPrice: number;
  };
}


