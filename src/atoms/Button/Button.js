import React from "react";
import { type } from "./constants";
import { StyledButton } from "./styled";
export default function Button({ type, label }) {
  return <StyledButton type={type}>{label}</StyledButton>;
}

Button.defaultProps = {
  type: type.primary,
};
