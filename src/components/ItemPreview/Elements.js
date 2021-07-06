import styled from "styled-components";
import { HEADER } from "../../constants/css";

export const ContainerBig = styled.div`
  @media (min-width: 767px) {
    display: block;
    width: 450px;
    height: 100vh;

    overflow-y: scroll;
  }
  @media (max-width: 767px) {
    position: fixed;

    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: #fff;
    ${({ togglePreview }) => (togglePreview ? `right: 0;` : `right: -200%;`)}
  }
`;

export const PreviewContainer = styled.div`
  max-width: 650px;
  padding: 0 30px;
`;

export const PreviewHeader = styled.div`
  display: flex;
  height: ${HEADER.height};
`;

export const ClosePreview = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const PreviewDetail = styled.div``;

export const Img = styled.div`
  width: 100%;
  height: ${({ height }) => height};

  background-color: silver;
  border-radius: 12px;
`;

export const ListImg = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;

  margin: 20px 0;

  overflow-x: scroll;
`;

export const Tabs = styled.div`
  height: 48px;
`;

export const Taolaohere = styled.div``;

export const PreviewButtons = styled.div``;