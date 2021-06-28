import React from "react";
import { Input } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

import { COLOR, FONT } from "../../constants/css";
import { Btn, Text } from "../base";
import Card from "./Card";
import {
  Container,
  Header,
  LeftHeader,
  MenuBarMobile,
  RightHeader,
  Body,
  BodyContainer,
  Search,
  SearchDescription,
  Sorting,
  SortButtons,
  ListCard,
} from "./Elements";

export default function Main({
  setTogglePreview,
  setToggleSidebar,
  setPreviewObj,
}) {
  return (
    <Container>
      <Header>
        <LeftHeader>
          <MenuBarMobile>
            <MenuOutlined
              onClick={() => setToggleSidebar(true)}
              style={{ fontSize: "1.2rem" }}
            />
          </MenuBarMobile>
        </LeftHeader>
        <RightHeader>
          <Btn>A</Btn>
          <Btn>B</Btn>
        </RightHeader>
      </Header>
      <Body>
        <BodyContainer>
          <Search>
            <Input
              allowClear
              prefix={<SearchOutlined />}
              bordered={false}
              style={{
                borderRadius: "22px",
                padding: "12px 30px",
                backgroundColor: "#FBFBFB",
              }}
            />
            <SearchDescription>
              <Text color={COLOR.textLight}>Search result for </Text>
              <Text fontWeight={FONT.bold}> &nbsp; "Monstera"</Text>
            </SearchDescription>
          </Search>
          <Sorting>
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
            {[1, 2, 3, 4].map((c) => (
              <Card
                img=""
                title={"sdfdsf" + c}
                rating="1"
                ratingCount={123}
                price="213"
                key={c}
                onClick={() => console.log(123)}
                setPreviewObj={setPreviewObj}
                setTogglePreview={setTogglePreview}
              />
            ))}
          </ListCard>
        </BodyContainer>
      </Body>
    </Container>
  );
}
