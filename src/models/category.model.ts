import { Product } from "./product.model";

export interface Category {
  _id: string;
  name: string;
  image: string;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}
