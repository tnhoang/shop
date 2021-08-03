import React from "react";
import { Button } from "antd";

import { Rate, Text } from "../../base";
import { COLOR, FONT } from "../../../constants/css";
import { CardContainer, Img, PriceContainer, Price } from "./Elements";
import { useStore } from "../../../useStore";

export default function Card({ title, rating, ratingCount, price }) {
  const togglePreview = useStore((state) => state.togglePreview);
  const setPreviewObj = useStore((state) => state.setPreviewObj);

  const onSelectingCard = () => {
    setPreviewObj({ title, rating, ratingCount, price });
    togglePreview();
  };
  return (
    <CardContainer onClick={onSelectingCard}>
      <Img src="" />
      <Text fontSize={FONT.large}>{title}</Text>
      <Rate quantity rateCount={ratingCount} value={rating} disabled />
      <PriceContainer price={price}>
        <Price>
          <Text fontSize={FONT.small} color={COLOR.textLight}>
            Price
          </Text>
          <Text fontWeight="bold">$ {price}</Text>
        </Price>
        <Button shape="round" size="large">
          <Text fontWeight="bold">Add to cart</Text>
        </Button>
      </PriceContainer>
    </CardContainer>
  );
}
