import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import BookQuery from "../../../store/queries";
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
  const { data, error, isLoading, isError } = BookQuery();

  if (isLoading) {
    return <Loader type="ThreeDots" color="#cccccc" height={30} />;
  }

  if (isError) {
    return `Error happend: ${error.messsage}`;
  }

  return (
    <>
      <ListCardContainer>
        {data?.map((c, i) => (
          <Card
            img=""
            title={c.title}
            rating={c.rating}
            ratingCount={c.ratingCount}
            price={c.price}
            key={i}
          />
        ))}
      </ListCardContainer>
    </>
  );
}
