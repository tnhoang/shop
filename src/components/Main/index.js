import React, { useState } from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
import { Text } from "../Text";
import { SearchOutlined } from "@ant-design/icons";
import Rate from "./Rate";
import Card from "./Card";
import { Btn, MyText } from "../baseComponents";
import { COLOR, HEADER } from "../../constants";
import ItemPreview from "../ItemPreview";

export const Container = styled.div`
  border: 1px solid black;
  overflow-y: scroll;
  height: 100vh;

  /* width: 100%; */
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
`;

export const Body = styled.div`
  /* display: flex; */
`;
export const Search = styled.div`
  width: 100%;
  border: 1px solid green;
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
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  /* overflow-y: scroll; */
  /* height: 400px; */

  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */
  gap: 10px;
  /* grid-gap: 10px; */
  border: 3px solid red;
  justify-content: space-around;
  align-items: center;
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
  border-right: 1px solid ${COLOR.border};
  padding: 20px 30px;
`;
export default function Main({
  togglePreview,
  setTogglePreview,
  toggleSidebar,
  setToggleSidebar,
}) {
  return (
    <Container>
      <Header>
        <HeaderButtons>
          <HearderButton
            active
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            Sidebar
          </HearderButton>
          <HearderButton onClick={() => setTogglePreview(!togglePreview)}>
            Preview
          </HearderButton>
          <HearderButton onClick={() => setToggleSidebar(!toggleSidebar)}>
            Sidebar
          </HearderButton>
        </HeaderButtons>
      </Header>
      <Body>
        <ItemContent>
          <Search>
            <Input
              allowClear
              prefix={<SearchOutlined />}
              // size="large"
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
            {/* <MyText>Sort</MyText> */}
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
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
            <Card img="" title="" rating="1" price="213" key="2" />
          </ListCard>
        </ItemContent>
      </Body>
    </Container>
  );
}
