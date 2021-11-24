import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Container = styled.div`
  background-color: #eeeeee;
  /* height: 100%; */
`;

export const ContentDetailsProduct = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  max-width: 1215px;
  background-color: #fff;

  margin: 0 auto;
  margin-top: 32px;

  img {
    width: 680px;
  }
`;

export const PhotoProduct = styled.img``;

export const ContentRightDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelQuantitySallers = styled.p`
  font-size: 14px;
  color: ${colors.colorSecondaryFont};
`;

export const LabelDescription = styled.p`
  font-size: 24px;
  color: ${colors.colorPrimaryFont};
  max-width: 300px;
  margin-top: 16px;
`;

export const LabelPrice = styled.p`
  font-size: 46px;
  color: ${colors.colorPrimaryFont};
  max-width: 300px;
  margin: 32px 0 32px 0;
`;

export const ButtonBuy = styled.button`
  margin-top: 32px;
  background-color: #3483fa;
  border-radius: 4px;
  color: #fff;
  height: 40px;
`;

export const TitleDescription = styled.p`
  font-size: 28px;
  color: ${colors.colorPrimaryFont};
  max-width: 300px;
  margin: 32px 0 32px 32px;
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;
`;

export const DescriptionProduct = styled.p`
  font-size: 16px;
  color: ${colors.colorSecondaryFont};
  margin: 0 0 32px 32px;
`;
