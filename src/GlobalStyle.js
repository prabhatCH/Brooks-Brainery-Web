import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
  color: white;
  /* overflow: hidden; */
  overflow-x: hidden;
}


`;
