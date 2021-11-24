import {
  getDescritptionProduct,
  getProductById,
  getProducts,
} from "../externalServices";
import { IProductsResponse, ProductQueryRequest } from "../types/productsTypes";
import { ProductsRepositories } from "../repositories/productsRepositories";

class ProductsService {
  constructor() {}

  async searchProducts(q: ProductQueryRequest): Promise<IProductsResponse> {
    const data = await getProducts(q);
    console.log("data"), data;
    const productsRepositories = new ProductsRepositories();

    return productsRepositories.prepareDataToReturnSearchsProducts(
      data.products
    );
  }

  async searchById(id: string) {
    const { data } = await getProductById(id);

    const productDescription = await getDescritptionProduct(data.id);

    const productsRepositories = new ProductsRepositories();

    return productsRepositories.prepareDataToReturnProductById(
      data,
      productDescription.data.plain_text
    );
  }

  async getDescriptionById(id: string) {
    const product = await getDescritptionProduct(id);

    return product;
  }
}

export { ProductsService };
