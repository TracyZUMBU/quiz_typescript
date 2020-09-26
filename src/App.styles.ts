import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height:100%;
        font-size:62.5%
    }

    body {
        height:100vh;
        background-image: url(${BackgroundImage});
        backgroundd-size: cover;
        background-position: bottom;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  > p {
    color: #1d1e18;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    position: absolute;
    top: 20%;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    backgroud-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 4rem;
    text-align: center;
    margin: 20px;
    text-transform: uppercase;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #d9fff5, #6b8f71);
    border: 2;
    position: absolute;
    bottom: 10%;
    width: 20rem;
    border-radius: 5rem;
    padding: 1rem 0;
  }
`;
