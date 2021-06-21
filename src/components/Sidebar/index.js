import React from "react";
import styled from "styled-components";
import { COLOR, FONT, HEADER } from "../../constants";
import { Text } from "../Text";

import { Rate, Checkbox, Input, Button } from "antd";

export const Container = styled.div`
  width: 300px;
  border: 1px solid ${COLOR.border};
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
`;
export const Header = styled.div`
  border-bottom: 1px solid ${COLOR.border};
  display: flex;
  align-items: center;
  padding: 20px 32px;
  height: ${HEADER.width};
`;
export const Filter = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLOR.border};
`;
export const Categories = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLOR.border};
`;
export const Price = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLOR.border};
  display: grid;
  gap: 18px;
`;
export const Rating = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLOR.border};
`;
export const Ads = styled.div`
  width: 100%;
  height: 100%;
  background-color: silver;
`;

export const PriceRange = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoriesOption = styled.div`
  padding: 12px 10px;
  display: grid;
  row-gap: 10px; ;
`;

export function Title({ children }) {
  return <Text fontSize={FONT.small}>{children}</Text>;
}

export default function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Text fontSize={FONT.medium} fontWeight={FONT.bold}>
            🎄 OYOTEE
          </Text>
        </Header>
        <Filter>
          <Title>Filter</Title>
        </Filter>
        <Categories>
          <Title>Categories</Title>
          <CategoriesOption>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <Checkbox>
                  <Text fontSize={FONT.small} color={COLOR.texts}>
                    Checkbox
                  </Text>
                </Checkbox>
                <br />
              </div>
            ))}
          </CategoriesOption>
        </Categories>
        <Price>
          <Title>Price range</Title>
          <PriceRange>
            <Input
              placeholder="Min"
              size="small"
              bordered
              prefix="$"
              style={{
                border: `1px solid ${COLOR.border}`,
                "border-radius": ".5rem",
                width: "70px",
                "text-align": "center",
              }}
            />
            <Input
              placeholder="Max"
              bordered
              prefix="$"
              style={{
                border: `1px solid ${COLOR.border}`,
                "border-radius": ".5rem",
                width: "70px",
              }}
            />
          </PriceRange>
          <Button
            style={{
              "background-color": `${COLOR.primary}`,
              color: `${COLOR.white}`,
              "border-radius": ".5rem",
              padding: ".2rem 1.5rem",
              "font-size": `#B6DEBF`,
            }}
          >
            Set Price
          </Button>
        </Price>
        <Rating>
          <Title>Rating</Title>
          <Rate
            style={{ "font-size": "1rem", color: "#FFC427" }}
            allowHalf
            defaultValue={3.5}
          />
        </Rating>
        <Ads />
      </Wrapper>
    </Container>
  );
}
