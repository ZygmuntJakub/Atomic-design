import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import { StyledContainer, StyledContent, StyledFooter } from "./styled";

export default function Home() {
  return (
    <StyledContainer>
      <Navbar />
      <StyledContent />
      <StyledFooter />
    </StyledContainer>
  );
}
