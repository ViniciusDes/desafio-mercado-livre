import React, { useContext } from "react";
import { Container, Form, ContentLogo } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Logo from "../../assets/Logo_ML.png";
import { useRouter } from "next/dist/client/router";
import { ProductsContext } from "../../context/productsContext";

export default function SearchBox() {
  const router = useRouter();
  const context = useContext(ProductsContext);

  const onChangeSearch = (e) => {
    const { value } = e.target;
    const { setQuery } = context;

    setQuery(value);
  };

  const handleSearch = (e) => {
    const { query } = context;
    e.preventDefault();

    if (!query) {
      return;
    }

    router.push({ pathname: "/items", query: { query: query } });
  };

  return (
    <Container>
      <ContentLogo>
        <Image
          className="img-logo-header"
          src={Logo}
          alt="My Image"
          width={40}
          height={30}
        />
      </ContentLogo>
      <Form>
        <input
          value={context.query}
          placeholder="Buscar produtos, marcas e muito mais…"
          onChange={onChangeSearch}
        />
        <button onClick={handleSearch}>
          <SearchIcon color="#000" />
        </button>
      </Form>
    </Container>
  );
}
