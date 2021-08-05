import styled from "styled-components";
import { HEADER } from "../../constants/css";

export const ContainerBig = styled.div`
  overflow-y: scroll;

  @media (max-width: 767px) {
    position: fixed;

    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: #fff;
    ${({ previewState }) => (previewState ? `right: 0;` : `right: -200%;`)}
  }
  @media (min-width: 767px) {
    display: block;
    width: 450px;
    height: 100vh;
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

  background-image: url("https://m.media-amazon.com/images/I/71z+RZ09EzL._AC_SX466_.jpg");
  background-size: cover;
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

export const Taolaohere = styled.div`
  margin-top: 30px;
`;

export const PreviewButtons = styled.div``;
