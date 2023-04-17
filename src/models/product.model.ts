export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string[];
  price: number;
  favorite: boolean;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
