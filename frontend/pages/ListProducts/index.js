import React, { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../src/components/ProductCard";
import { ProductsContext } from "../../src/context/productsContext";
import { Container, Separator } from "./styled";

export default function ListProducts() {
  const context = useContext(ProductsContext);
  const { items } = context;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleData();
  }, [items]);

  const handleData = () => {
    const { items } = context;
    if (items.length > 0) console.log(items.slice(0, 4));

    if (items.length > 0) {
      setProducts(items.slice(10, 14));
      // }
      // console.log(items.items.slice(0, 4));
      // console.log("items", setProducts(itemsData.items.slice(0, 4)));
    }
  };

  return (
    <Container>
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard data={product} />
          <Separator />
        </Fragment>
      ))}
    </Container>
  );
}
