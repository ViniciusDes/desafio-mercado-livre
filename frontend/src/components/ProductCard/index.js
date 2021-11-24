import React from "react";
import { LabelPrice, BoxLeftContent, LabelTitle, Container } from "./styled";
import { formatCurrency } from "../../utils/functions";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function ProductCard({ data }) {
  const router = useRouter();
  const handleProductDetails = async () => {
    router.push({ pathname: `/items/${data.id}` });
  };

  return (
    <Container onClick={handleProductDetails}>
      <BoxLeftContent>
        <img src={data.picture} width={180} height={180} layout="responsive" />

        <div>
          <LabelPrice>$ {formatCurrency(data.price.amount)}</LabelPrice>

          <LabelTitle>{data.title} </LabelTitle>
        </div>
      </BoxLeftContent>
    </Container>
  );
}
