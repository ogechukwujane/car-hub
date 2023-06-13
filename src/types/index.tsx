import { MouseEventHandler } from "react";

export interface customButtonPrps {
  title: string;
  containerStyle: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
