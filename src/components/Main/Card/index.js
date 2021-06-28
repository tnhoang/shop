import React from "react";
import { Button } from "antd";

import { Rate, Text } from "../../base";
import { COLOR, FONT } from "../../../constants/css";
import { CardContainer, Img, PriceContainer, Price } from "./Elements";

export default function Card({
  title,
  rating,
  ratingCount,
  price,
  setPreviewObj,
  setTogglePreview,
}) {
  const selectCard = () => {
    setPreviewObj({ title: title });
    setTogglePreview(true);
  };
  return (
    <CardContainer onClick={selectCard}>
      <Img src="" />
      <Text fontSize={FONT.large}>{title}</Text>
      <Rate quantity rateCount={ratingCount} value={rating} disabled />
      <PriceContainer price={price}>
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
  );
}
