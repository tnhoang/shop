import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { COLOR, FONT } from "../../constants/css";
import LocalStorageService from "../../store/localStorageService";
import { useStore } from "../../store/useStore";
import { Btn, Text } from "../base";
import {
  Body,
  BodyContainer,
  Container,
  Header,
  LeftHeader,
  MenuBarMobile,
  RightHeader,
  Search,
  SearchDescription,
  SortButtons,
  Sorting,
} from "./Elements";
import ListCard from "./ListCard";

export default function Main() {
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  const history = useHistory();
  const logout = () => {
    LocalStorageService.clearToken();
    history.push("/");
  };
  return (
    <Container>
      <Header>
        <LeftHeader>
          <MenuBarMobile>
            <MenuOutlined
              onClick={toggleSidebar}
              style={{ fontSize: "1.2rem" }}
            />
          </MenuBarMobile>
        </LeftHeader>
        <RightHeader>
          {LocalStorageService.getAccessToken() ? (
            <Btn onClick={logout}>Logout</Btn>
          ) : (
            <Btn onClick={() => history.push("/signin")}>Sign In</Btn>
          )}
          {/* <Btn>B</Btn> */}
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
              <Btn primary="true">Relevance</Btn>
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
          <ListCard />
        </BodyContainer>
      </Body>
    </Container>
  );
}
