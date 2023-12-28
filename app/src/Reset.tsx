import { memo } from "react";
import { BaseProps } from "./BaseProps";

interface Props extends BaseProps {
  onClick: () => void;
}

export const Reset = memo(({ onClick }: Props) => {
  console.log("Rendering Reset component.");

  return <button onClick={onClick}>Reset</button>;
});
