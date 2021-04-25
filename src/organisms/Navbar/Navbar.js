import React from "react";
import Search from "../../molecules/Search/Search";
import {
  StyledNavbarContainer,
  StyledNavbarContent,
  Logo,
  MenuItem,
} from "./styled";

export default function Navbar() {
  return (
    <StyledNavbarContainer>
      <StyledNavbarContent>
        <Logo />
        {[...Array(5)].map(() => (
          <MenuItem />
        ))}
        <Search />
      </StyledNavbarContent>
    </StyledNavbarContainer>
  );
}
