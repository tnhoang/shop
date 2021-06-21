import styled from "styled-components";
import { COLOR, FONT } from "../constants";

export const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize || FONT.medium};
  font-weight: ${({ fontWeight }) => fontWeight || FONT.normal};
  color: ${({ color }) => color || COLOR.text};
`;
