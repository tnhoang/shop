import React from "react";
import { Checkbox } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { FONT } from "../../utils/constants/css";
import { Btn, Text, Rate } from "../base";
import {
  Container,
  Wrapper,
  Header,
  Filter,
  Categories,
  CategoriesSelection,
  Pricing,
  PriceRange,
  InputPrice,
  Rating,
  Ads,
  SidebarToggle,
} from "./Elements";
import { useStore } from "../../store/useStore";

export default function Sidebar() {
  const sidebarState = useStore((state) => state.sidebarState);
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  const categories = [
    "Gardening",
    "Plants",
    "Seeds",
    "Bulbs",
    "Planters",
    "Others",
  ];

  return (
    <Container sidebarState={sidebarState}>
      <Wrapper>
        <Header>
          <SidebarToggle onClick={toggleSidebar}>
            <LeftOutlined style={{ fontSize: "1.2rem" }} />
          </SidebarToggle>
          <Text fontSize={FONT.large} fontWeight={FONT.bold}>
            SHOP 🎄
          </Text>
        </Header>
        <Filter>
          <Text fontWeight={FONT.bold}>Filter</Text>
        </Filter>
        <Categories>
          <Text fontWeight={FONT.bold}>Categories</Text>
          <CategoriesSelection>
            {categories?.map((name, i) => (
              <div key={i}>
                <Checkbox>
                  <Text>{name}</Text>
                </Checkbox>
              </div>
            ))}
          </CategoriesSelection>
        </Categories>
        <Pricing>
          <Text fontWeight={FONT.bold}>Price range</Text>
          <PriceRange>
            <InputPrice placeholder="Min" size="small" bordered prefix="$" />
            <InputPrice placeholder="Max" bordered prefix="$" />
          </PriceRange>
          <Btn primary="true">Set Price</Btn>
        </Pricing>
        <Rating>
          <Text fontWeight={FONT.bold}>Rating</Text>
          <Rate value={3.5} rateCount="above" />
        </Rating>
        <Ads />
      </Wrapper>
    </Container>
  );
}
