import { createGlobalStyle, css } from "styled-components";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
  font-family: "Roboto Mono", monospace;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
