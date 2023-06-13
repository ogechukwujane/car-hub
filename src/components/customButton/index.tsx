"use client";

import { customButtonPrps } from "@/types";

export const CustomButton = ({
  title,
  containerStyle,
  handleClick,
}: customButtonPrps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
