import { MouseEventHandler } from "react";

export interface customButtonPrps {
  title: string;
  containerStyle: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
