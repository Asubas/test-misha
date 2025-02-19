export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface IProductState {
  product: IProduct;
  isLoading: boolean;
  error: string;
}
