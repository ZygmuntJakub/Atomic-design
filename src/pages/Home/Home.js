import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import { StyledContainer, StyledContent, StyledFooter } from "./styled";

export default function Home({ logged }) {
  return (
    <StyledContainer>
      <Navbar />
      <StyledContent logged={logged} />
      <StyledFooter />
    </StyledContainer>
  );
}
