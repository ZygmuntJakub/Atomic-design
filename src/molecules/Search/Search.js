import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import { StyledSearchContainer, StyledSearchInput } from "./styled";

export default function Search() {
  return (
    <StyledSearchContainer>
      <StyledSearchInput>
        <Label content="Search the site" />
        <Input placeholder="Enter keyword..." />
      </StyledSearchInput>
      <Button label="Search" />
    </StyledSearchContainer>
  );
}
