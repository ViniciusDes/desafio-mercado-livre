import { ProductQueryRequest } from "../types/productsTypes";
import api from "./meliAPI";

export async function getProducts(q: ProductQueryRequest) {
  try {
    const res = await api.get(`/sites/MLA/search?q=:${q}`);

    if (res.status !== 200) {
      throw new Error("Erro ao listar produtos");
    }

    return { products: res.data.results };
  } catch (error) {
    throw new Error("Erro ao listar produtos");
  }
}

export async function getProductById(id: string) {
  try {
    const res = await api.get(`https://api.mercadolibre.com/items/${id}`);

    if (res.status !== 200) {
      throw new Error("Erro ao listar produto");
    }

    return { data: res.data };
  } catch (error) {
    throw new Error("Erro ao listar produto");
  }
}

export async function getDescritptionProduct(id: string) {
  try {
    const res = await api.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );

    if (res.status !== 200) {
      throw new Error("Erro ao carregar descrição do produto");
    }

    return { data: res.data };
  } catch (error) {
    throw new Error("Erro ao carregar descrição do produto");
  }
}
