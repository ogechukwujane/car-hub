"use client";

import { customButtonPrps } from "@/types";

export const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType
}: customButtonPrps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
