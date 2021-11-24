import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  max-width: 1215px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  height: 39px;
  /* max-width: 600px; */
  position: relative;

  input {
    padding: 7px 60px 9px 15px;
    -webkit-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    height: 100%;
    border-radius: 2px;
    font-size: 18px;
    width: 100%;
  }

  button {
    position: absolute;
    right: 0;
    height: 100%;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const ContentLogo = styled.div`
  /* position: absolute; */
  padding-right: 20px;
  left: 0;
`;
