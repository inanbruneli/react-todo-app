import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --BrightBlue: hsl(220, 98%, 61%);
    --CheckBackground: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    --lt-VeryLightGray: hsl(0, 0%, 98%);
    --lt-VeryLightGrayishBlue: hsl(236, 33%, 92%);
    --lt-LightGrayishBlue: hsl(233, 11%, 84%);
    --lt-DarkGrayishBlue: hsl(236, 9%, 61%);
    --lt-VeryDarkGrayishBlue: hsl(235, 19%, 35%);

    --dt-darkblue: hsl(235, 30%, 17%);
    --dt-VeryDarkBlue: hsl(235, 21%, 11%);
    --dt-VeryDarkDesaturatedBlue: hsl(235, 24%, 19%);
    --dt-LightGrayishBlue: hsl(234, 39%, 85%);
    --dt-LightGrayishBlue-hover: hsl(236, 33%, 92%);
    --dt-DarkGrayishBlue: hsl(234, 11%, 52%);
    --dt-VeryDarkGrayishBlue: hsl(233, 14%, 35%);
    --dt-VeryDarkGrayishBlue: hsl(237, 14%, 26%);
  }
  
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button{
    font-family: 'Josefin Sans', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;