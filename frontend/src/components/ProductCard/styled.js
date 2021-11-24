import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const Container = styled.div`
  display: flex;

  padding: 16px 50px 16px 10px;
  background-color: #fff;
  cursor: pointer;
`;

export const LabelPrice = styled.p`
  font-size: 24px;
  color: ${colors.colorPrimaryFont};
  padding-left: 16px;
  margin-top: 12px;
`;

export const LabelTitle = styled.p`
  font-size: 18px;
  color: ${colors.colorPrimaryFont};

  margin-top: 32px;
  padding-left: 16px;
`;

export const BoxLeftContent = styled.div`
  display: flex;

  img {
    border-radius: 4px;
  }
`;
