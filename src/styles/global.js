import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
  }

  :root {
    font-size: 16px;
    @media(min-width: ${DEVICE_BREAKPOINTS.XS} ){
      font-size: 14px;
    }

  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-family: "Roboto", sans-serif;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover , a:hover {
    filter: brightness(0.9);
  }

`;