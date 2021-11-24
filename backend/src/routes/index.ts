import { Router } from "express";
import { ProductsController } from "../controllers/products";

const productContoller = new ProductsController();

const router = Router();

router.get("/api/items", productContoller.searchProducts);

router.get("/api/items/:id", productContoller.searchProductByid);

export { router };
