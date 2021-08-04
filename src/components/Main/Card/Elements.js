import styled from "styled-components";
import { COLOR } from "../../../constants/css";

export const CardContainer = styled.div`
  width: 100%;
  padding: 16px;

  border: 1px solid ${COLOR.border};
  border-radius: 28px;

  @media (max-width: 768px) {
    max-width: 450px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
`;
export const Img = styled.div`
  height: 300px;
  background-image: url("https://m.media-amazon.com/images/I/71z+RZ09EzL._AC_SX466_.jpg");
  background-size: cover;

  margin-bottom: 10px;
  @media (min-width: 768px) {
    height: 240px;
  }
  @media (max-width: 380px) {
    height: 200px;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;
export const Price = styled.div``;
