import styled from "styled-components";
import { primary } from "../../shared/palette";

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  width: fit-content;
  border-radius: 8px;
  border: 1px solid ${primary};
  color: ${primary};
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  outline: none;
  transition: border-radius 0.5s ease;

  &:focus {
    border-radius: 16px !important;
  }
`;
