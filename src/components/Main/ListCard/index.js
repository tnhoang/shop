import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import ProductQuery from "../../../store/queries";
import Card from "../Card";

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 25px;
  column-gap: 10px;
  row-gap: 20px;
`;

export default function ListCard() {
  const { data, error, isLoading, isError } = ProductQuery();

  if (isLoading) {
    return <Loader type="ThreeDots" height={30} />;
  }

  if (isError) {
    return `Error happend: ${error.messsage}`;
  }

  return (
    <>
      <ListCardContainer>
        {data?.map((product, i) => (
          <Card
            img=""
            title={product.title}
            rating={product.rating}
            ratingCount={product.ratingCount}
            price={product.price}
            key={i}
          />
        ))}
      </ListCardContainer>
    </>
  );
}
