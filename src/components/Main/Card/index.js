import { Button } from "antd";
import React from "react";
import { useStore } from "../../../store/useStore";
import { COLOR, FONT } from "../../../utils/constants/css";
import { Rate, Text } from "../../base";
import { CardContainer, Img, Price, PriceContainer } from "./Elements";

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
      <Text fontSize={FONT.large} fontWeight={FONT.bold}>
        {title}
      </Text>
      <Rate quantity rateCount={ratingCount} value={rating} disabled />
      <PriceContainer price={price}>
        <Price>
          <Text fontSize={FONT.small} color={COLOR.textLight}>
            Price
          </Text>
          <Text fontWeight="bold">$ {price}</Text>
        </Price>
        <Button
          style={{
            borderRadius: "12px",
            padding: "0px 22px",
          }}
          size="large"
        >
          <Text>Add to cart</Text>
        </Button>
      </PriceContainer>
    </CardContainer>
  );
}
