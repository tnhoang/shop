import { createGlobalStyle } from "styled-components";
import { COLOR } from "../constants/css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Helvetica, sans-serif;
    color: ${COLOR.text};
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
