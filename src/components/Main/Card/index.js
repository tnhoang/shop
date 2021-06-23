import React from "react";
import Rate from "../Rate";
import styled from "styled-components";
import { Text } from "../../Text";
import { Button } from "antd";
import { COLOR, FONT } from "../../../constants";

export const CardContainer = styled.div`
  max-width: 350px;
  width: 100%;

  padding: 16px;
  border: 1px solid ${COLOR.border};
  border-radius: 28px;
`;
export const Img = styled.div`
  /* max-width: 220px; */
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

export default function Card({ title }) {
  return (
    <>
      <CardContainer onClick={() => console.log(456)}>
        <Img src="" />
        <Text fontSize={FONT.big} style={{ "margin-top": "10px" }}>
          Title here
        </Text>
        <Rate quantity rateCount="above" />
        <PriceContainer price={11}>
          <Price>
            <Text fontSize={FONT.small} color={COLOR.textLight}>
              Price
            </Text>
            <Text fontWeight="bold">$ 325</Text>
          </Price>
          <Button shape="round" size="large">
            <Text fontWeight="bold">Add to cart</Text>
          </Button>
        </PriceContainer>
      </CardContainer>
    </>
  );
}
