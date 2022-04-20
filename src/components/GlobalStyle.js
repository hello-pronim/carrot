import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
    margin: 0;
    > iframe{
      pointer-events: none;
    }
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
`;

export default GlobalStyle;
