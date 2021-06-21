import styled from "styled-components";
import { COLOR, FONT, PADDING } from "../constants";

import { Button } from "antd";

export const Btn = styled(Button)`
  border-radius: 0.5rem;
  font-size: ${FONT.small};
  height: 40px;

  color: ${({ primary }) => (primary ? `${COLOR.white}` : `${COLOR.text}`)};
  background-color: ${({ primary }) =>
    primary ? `${COLOR.primary}` : `${COLOR.white}`};
  padding: ${({ large }) => (large ? `${PADDING.large}` : `${PADDING.normal}`)};
`;

export const MyText = styled.div`
  font-weight: ${FONT.normal};

  ${({ type }) =>
    type === "light" &&
    `
    font-weight: ${FONT.light};
    color: ${COLOR.textLight};
  `}
  ${({ type }) =>
    type === "bold" &&
    `
    font-weight: ${FONT.bold};
  `}
`;
