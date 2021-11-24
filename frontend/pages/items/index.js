import React, { useContext, useEffect } from "react";
import Header from "../../src/components/Header";
import { ProductsContext } from "../../src/context/productsContext";
import api from "../../src/services/api";
import ListProducts from "../ListProducts";
import { Container } from "./styled";

function Items(data) {
  const context = useContext(ProductsContext);

  useEffect(() => {
    const { setItems } = context;
    setItems(data.data.items);
  }, []);

  return (
    <Container>
      <Header />
      <ListProducts />
    </Container>
  );
}

export async function getServerSideProps({ query }) {
  let res, data;
  const query_ = query.query;
  if (query_) {
    res = await api.get(`/items?q=:${query_}`);
    data = res.data.data;
  }
  return { props: { data, query: query_ } };
}

export default Items;
