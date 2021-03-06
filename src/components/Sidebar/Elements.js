import { Input } from "antd";
import styled from "styled-components";
import { COLOR, HEADER, PADDING } from "../../utils/constants/css";

const PaddingTitle = "12px 30px";

export const Container = styled.div`
  @media (max-width: 1100px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    height: 100vh;
    width: 230px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 50px 0px 90px;

    transition: 0.2s ease-in-out;
    ${({ sidebarState }) =>
      sidebarState
        ? `
          left:0;
          opacity: 100%;
          `
        : `
          left: -100%;
            opacity: 0;
      `};
  }

  @media (min-width: 1024px) {
    display: block;
    width: 270px;
    border: 1px solid ${COLOR.border};
  }
`;

export const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${HEADER.height};
  padding: ${PADDING};

  border-bottom: 1px solid ${COLOR.border};
`;

export const SidebarToggle = styled.div`
  top: 1.2rem;
  right: 0.4rem;

  cursor: pointer;
  @media (min-width: 1100px) {
    display: none;
  }
`;

export const Filter = styled.div`
  padding: ${PaddingTitle};
  border-bottom: 1px solid ${COLOR.border};
`;

export const Categories = styled.div`
  padding: ${PaddingTitle};
  border-bottom: 1px solid ${COLOR.border};
`;

export const CategoriesSelection = styled.div`
  display: grid;
  padding: 12px 10px;
  row-gap: 10px; ;
`;

export const Pricing = styled.div`
  display: grid;
  gap: 18px;
  padding: ${PaddingTitle};
  border-bottom: 1px solid ${COLOR.border};
`;

export const PriceRange = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputPrice = styled(Input)`
  width: 70px;

  border: 1px solid ${COLOR.border};
  border-radius: 0.5rem;
`;

export const Rating = styled.div`
  padding: ${PaddingTitle};
  border-bottom: 1px solid ${COLOR.border};
`;

export const Ads = styled.div`
  width: 100%;
  height: 100%;

  background-color: silver;
`;
