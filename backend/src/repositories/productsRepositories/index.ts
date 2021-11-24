import { IProductsResponse } from "../../types/productsTypes";

interface IProductResponseAPI {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  sold_quantity: number;
  shipping: {
    free_shipping: boolean;
  };
  seller: {
    eshop?: {
      nick_name?: string;
    };
  };
}

class ProductsRepositories {
  prepareDataToReturnSearchsProducts(products: []): IProductsResponse {
    let items = products?.map((product: IProductResponseAPI) => {
      const {
        id,
        title,
        price,
        currency_id,
        thumbnail,
        condition,
        shipping,
        seller,
      } = product;

      return {
        id,
        title,
        author: {
          name: seller.eshop?.nick_name,
          lastname: "",
        },
        price: {
          currency: currency_id,
          amount: price,
          decimals: 0,
        },
        picture: thumbnail,
        condition,
        freeShipping: shipping.free_shipping,
      };
    });

    const res = {
      data: {
        categories: [""],
        items: items,
      },
    };

    return res.data;
  }

  prepareDataToReturnProductById(
    product: IProductResponseAPI,
    description: string
  ) {
    const {
      id,
      title,
      price,
      currency_id,
      thumbnail,
      condition,
      shipping,
      seller,
      sold_quantity,
    } = product;

    return {
      author: {
        name: seller?.eshop?.nick_name,
        lastname: "",
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: 0,
        },
        picture: thumbnail,
        condition,
        free_hipping: shipping.free_shipping,
        sold_quantity,
        description,
      },
    };
  }
}

export { ProductsRepositories };
