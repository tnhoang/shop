import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import ItemPreview from "../components/ItemPreview";
export const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%; */
`;
export const Wrapper = styled.div`
  /* max-width: 100%; */
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 100%;

  border: 1px solid green;
`;
export default function Home() {
  const [togglePreview, setTogglePreview] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
    console.log("sidebar ");
  }, []);

  return (
    <Container>
      <Wrapper>
        <Sidebar toggleSidebar={toggleSidebar} />
        <Main
          togglePreview={togglePreview}
          setTogglePreview={setTogglePreview}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <ItemPreview
          togglePreview={togglePreview}
          setTogglePreview={setTogglePreview}
        />
      </Wrapper>
    </Container>
  );
}
