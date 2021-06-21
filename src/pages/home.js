import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export default function Home() {
  return (
    <div>
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </div>
  );
}
