export type ProductQueryRequest = string | string[] | undefined;

export type ProductParamsRequest = string;

export type ProductItem = {
  id: string;
  title: string;
  author: {
    name?: string;
    lastname?: string;
  };
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  freeShipping: boolean;
};

export interface IProductsResponse {
  categories: Array<string>;
  items: Array<ProductItem>;
}
