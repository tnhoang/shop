import React, { useState } from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import ItemPreview from "../components/ItemPreview";
export const Container = styled.div``;
export const Wrapper = styled.div`
  max-width: 2010px;
  display: grid;
  grid-template-columns: auto 1fr auto;

  width: 100%;
  margin: 0 auto;
`;
export default function Home() {
  const [togglePreview, setTogglePreview] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const [previewObj, setPreviewObj] = useState({ title: "Superman" });

  return (
    <Container>
      <Wrapper>
        <Sidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <Main
          setTogglePreview={setTogglePreview}
          setToggleSidebar={setToggleSidebar}
          setPreviewObj={setPreviewObj}
        />
        <ItemPreview
          toggleProps={[togglePreview, setTogglePreview]}
          previewObj={previewObj}
        />
      </Wrapper>
    </Container>
  );
}
