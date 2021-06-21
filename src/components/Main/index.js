import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
import { Text } from "../Text";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import Rate from "./Rate";
import Card from "./Card";
import { Btn, MyText } from "../baseComponents";
import { COLOR, HEADER } from "../../constants";
import ItemPreview from "../ItemPreview";

export const Container = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  padding: 0 30px;
  border-bottom: 1px solid ${COLOR.border};
  height: ${HEADER.width};
  display: flex;
  justify-content: space-between;
`;
export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;
`;
export const HeaderPersonal = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  column-gap: 20px;
`;
export const Cart = styled.div``;
export const Favorite = styled.div``;
export const Profile = styled.div``;
export const Body = styled.div`
  display: flex;
`;
export const Search = styled.div`
  &::placeholder {
    background-color: #fbfbfb;
  }
`;
export const Sorting = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  margin: 20px 0;
`;
export const ListCard = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;

  /* overflow-y: scroll; */
  /* height: 400px; */
`;

export const MyButton = styled(Button)`
  color: blue;
`;
export const SearchDescription = styled.div`
  display: flex;
  margin-top: 6px;
  /* For custom child in styled-components */
  /* div {
    color: red;
  } */
`;
export const SortButtons = styled.div`
  display: flex;
  column-gap: 20px;

  overflow-x: scroll;
  scrollbar-width: none; /* Firefox: hide scrollbar */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrom: hide scrollbar */
  }
`;

export const HearderButton = styled.div`
  height: 100%;
  width: ${({ width }) => width || "70px"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  /* margin-right: 30px; */
  color: ${COLOR.textLight};
  ${({ active }) =>
    active
      ? `
    border-bottom: 3px solid ${COLOR.primary};
    color: ${COLOR.text};
  `
      : ``};
`;
export const ItemContent = styled.div`
  width: 950px;
  border-right: 1px solid ${COLOR.border};
  padding: 20px 30px;
`;
export default function Main() {
  return (
    <Container>
      <Header>
        <HeaderButtons>
          <HearderButton active>Shop</HearderButton>
          <HearderButton>Shop</HearderButton>
          <HearderButton>Shop</HearderButton>
          <HearderButton>Shop</HearderButton>
        </HeaderButtons>
        <HeaderPersonal>
          <Cart>
            <HeartOutlined style={{ fontSize: "2rem" }} />
          </Cart>
          <Favorite>
            <HeartOutlined style={{ fontSize: "2rem" }} />
          </Favorite>
          <Profile>
            <HeartOutlined style={{ fontSize: "2rem" }} />
          </Profile>
        </HeaderPersonal>
      </Header>
      <Body>
        <ItemContent>
          <Search>
            <Input
              allowClear
              prefix={<SearchOutlined />}
              size="large"
              bordered={false}
              style={{
                borderRadius: "22px",
                padding: "12px 30px",
                backgroundColor: "#FBFBFB",
              }}
            />
            <SearchDescription>
              <MyText type="light">Search result for </MyText>
              <MyText type="bold"> &nbsp; "Monstera"</MyText>
            </SearchDescription>
          </Search>
          <Sorting>
            <MyText>Sort</MyText>
            <SortButtons>
              <Btn primary>Relevance</Btn>
              <Btn>Relevance</Btn>
              <Btn>Relevance</Btn>
              <Btn>Relevance</Btn>
              <Btn>Hello</Btn>
              <Btn>Hello</Btn>
              <Btn>Hello</Btn>
              <Btn>Hello</Btn>
              <Btn>Hello</Btn>
              <Btn>Hello</Btn>
            </SortButtons>
          </Sorting>
          <ListCard>
            <Card img="" title="" rating="1" price="213" key="1" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
          </ListCard>
        </ItemContent>
        <ItemPreview></ItemPreview>
      </Body>
    </Container>
  );
}
