import styled from "styled-components";
import { primary, secondary } from "../../shared/palette";
import { type as buttonTypes } from "./constants";

export const StyledButton = styled.div`
  padding: 0.5rem 1rem;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  border: 1px solid
    ${({ type }) => {
      switch (type) {
        case buttonTypes.primary:
          return primary;
          break;
        case buttonTypes.primaryOutlined:
          return primary;
          break;
        case buttonTypes.secondary:
          return secondary;
          break;
        case buttonTypes.secondaryOutlined:
          return secondary;
          break;
      }
    }};

  background-color: ${({ type }) => {
    switch (type) {
      case buttonTypes.primary:
        return primary;
        break;
      case buttonTypes.primaryOutlined:
        return "none";
        break;
      case buttonTypes.secondary:
        return secondary;
        break;
      case buttonTypes.secondaryOutlined:
        return "none";
        break;
    }
  }};

  color: ${({ type }) => {
    switch (type) {
      case buttonTypes.primary:
        return "white";
        break;
      case buttonTypes.primaryOutlined:
        return primary;
        break;
      case buttonTypes.secondary:
        return "white";
        break;
      case buttonTypes.secondaryOutlined:
        return secondary;
        break;
    }
  }};

  &:hover {
    cursor: pointer;
  }
`;
