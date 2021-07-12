import styled from "styled-components";
import { COLOR } from "../../../constants/css";

export const CardContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 16px;

  border: 1px solid ${COLOR.border};
  border-radius: 28px;

  @media (min-width: 768px) {
    width: 250px;
  }
`;
export const Img = styled.div`
  height: 300px;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  @media (min-width: 768px) {
    height: 240px;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;
export const Price = styled.div``;
