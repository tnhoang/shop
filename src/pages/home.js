import React from "react";
import styled from "styled-components";
import ItemPreview from "../components/ItemPreview";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export const Wrapper = styled.div`
  max-width: 2010px;
  display: grid;
  grid-template-columns: auto 1fr auto;

  width: 100%;
  margin: 0 auto;
`;
export default function Home() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
      <ItemPreview />
    </Wrapper>
  );
}
