import React, { useState, useEffect } from "react";
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
import productApi from "../api/productApi";

export default function Main({
  setTogglePreview,
  setToggleSidebar,
  setPreviewObj,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductList() {
      try {
        const data = await productApi.getAll();
        setProducts(data.products);
      } catch (error) {
        console.log("Failed to fetch produtcs: " + error.message);
      }
    }
    fetchProductList();
  }, []);
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
            {products.map((c) => (
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
