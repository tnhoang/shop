import styled from "styled-components";
import { COLOR } from "../../../constants/css";

export const CardContainer = styled.div`
  max-width: 350px;
  min-width: 280px;
  width: 100%;
  padding: 16px;

  border: 1px solid ${COLOR.border};
  border-radius: 28px;
`;
export const Img = styled.div`
  height: 220px;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;
export const Price = styled.div``;
