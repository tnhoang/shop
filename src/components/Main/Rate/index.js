import React from "react";
import { Rate as RateAnt } from "antd";

export default function Rate({ value, rateCount, disabled }) {
  return (
    <>
      <RateAnt
        style={{ "font-size": "1rem", color: "#FFC427" }}
        allowHalf
        disabled={disabled}
        defaultValue={3.5}
      />
      <span> &nbsp; {isNaN(rateCount) ? rateCount : `(${rateCount})`}</span>
    </>
  );
}
