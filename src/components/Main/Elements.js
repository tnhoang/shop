import styled from "styled-components";

import { COLOR, HEADER } from "../../constants/css";

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${HEADER.height};
  padding: 0 30px;

  border-bottom: 1px solid ${COLOR.border};
  border-right: 1px solid ${COLOR.border};
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBarMobile = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
`;

export const Body = styled.div``;

export const BodyContainer = styled.div`
  padding: 20px 30px;
  border-right: 1px solid ${COLOR.border};
`;

export const Search = styled.div`
  width: 100%;

  &::placeholder {
    background-color: #fbfbfb;
  }
`;
export const Sorting = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  margin: 20px 0;
`;

export const SortButtons = styled.div`
  display: flex;
  column-gap: 20px;

  overflow-x: scroll;
  scrollbar-width: none; /* In Firefox: hide scrollbar */
  &::-webkit-scrollbar {
    display: none; /* In Safari and Chrome: hide scrollbar */
  }
`;

export const ListCard = styled.div`
  // Auto scale cards by width but it justify content at start
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  border: 1px solid green;

  margin-top: 25px;
  column-gap: 10px;
  row-gap: 20px;
`;

export const SearchDescription = styled.div`
  display: flex;
  margin-top: 6px;
`;

// TODO: re-organize these components
export const HeaderButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const HearderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0 20px;

  color: ${COLOR.textLight};

  ${({ active }) =>
    active
      ? `
    border-bottom: 3px solid ${COLOR.primary};
    color: ${COLOR.text};
  `
      : ``};
`;
