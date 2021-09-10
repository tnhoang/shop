import { Button, Rate as RateAnt } from "antd";
import styled from "styled-components";
import { COLOR, FONT } from "../utils/constants/css";

export const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  ${(p) =>
    p.primary
      ? `
          color: ${COLOR.white};
          background-color: ${COLOR.primary} 
        `
      : `
          color: ${COLOR.text};
          background-color: ${COLOR.white}  
        `};

  ${(p) =>
    p.large
      ? `
          font-size: ${FONT.large};
          padding: 1.5rem 3rem;`
      : ` 
          font-size: ${FONT.medium};
          padding: .75rem 1.5rem
        `};
`;

export const Text = styled.div`
  color: ${(p) => p.color || COLOR.text};
  font-size: ${(p) => p.fontSize || FONT.medium};
  font-weight: ${(p) => p.fontWeight || FONT.normal};
`;

export const Rate = ({ value, rateCount, disabled }) => {
  return (
    <>
      <RateAnt
        style={{ fontSize: "1rem", color: "#FFC427" }}
        allowHalf
        disabled={disabled}
        defaultValue={Number.parseFloat(value)}
      />
      <span> &nbsp; {isNaN(rateCount) ? rateCount : `(${rateCount})`}</span>
    </>
  );
};
