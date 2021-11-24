import { Request, Response } from "express";
import { ProductsService } from "../services/productsService";
import {
  ProductQueryRequest,
  ProductParamsRequest,
} from "../types/productsTypes";

interface IProductQuery {
  q: ProductQueryRequest;
}

interface IProductParams {
  id: ProductParamsRequest;
}

class ProductsController {
  async searchProducts(
    req: Request<null, null, null, IProductQuery>,
    res: Response
  ) {
    const { q } = req.query;
    console.log("q", q);

    const productsService = new ProductsService();
    const productsResponse = await productsService.searchProducts(q);
    console.log("productsResponse", productsResponse);

    return res.send({
      sucess: true,
      data: productsResponse,
    });
  }

  async searchProductByid(
    req: Request<IProductParams, null, null, null>,
    res: Response
  ) {
    const { id } = req.params;

    const productsService = new ProductsService();

    const productsResponse = await productsService.searchById(id);

    return res.send({
      sucess: true,
      data: productsResponse,
    });
  }
}

export { ProductsController };
