import { Label } from "@material-ui/icons";
import Header from "../../src/components/Header";
import api from "../../src/services/api";
import { formatCurrency } from "../../src/utils/functions";
import {
  ContentDetailsProduct,
  PhotoProduct,
  ContentRightDetails,
  LabelQuantitySallers,
  LabelDescription,
  LabelPrice,
  ButtonBuy,
  TitleDescription,
  ContentImage,
  DescriptionProduct,
} from "./styledItem";
import { Container } from "./styledItem";

export default function Item({ data }) {
  console.log(data);

  const { item } = data;
  return (
    <Container>
      <Header />
      <ContentDetailsProduct>
        <ContentImage>
          <PhotoProduct src={item.picture} />
          <TitleDescription>Descripcíon del producto</TitleDescription>

          <DescriptionProduct>{item.description}</DescriptionProduct>
        </ContentImage>

        <ContentRightDetails>
          <LabelQuantitySallers>
            {item.condition} - {item.sold_quantity} vendidos
          </LabelQuantitySallers>
          <LabelDescription>{item.title}</LabelDescription>
          <LabelPrice>$ {item.price.amount}</LabelPrice>
          <ButtonBuy>Comprar</ButtonBuy>
        </ContentRightDetails>
      </ContentDetailsProduct>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await api.get(`/items/${id}`);

  const { data } = res.data;

  return { props: { data } };
}
