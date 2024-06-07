import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    html {
        font-size: 10px;
        overflow-x: hidden;
    }

    body, html {
        font-family: 'Pretendard-Regular', sans-serif;
        background-color: #e2e9f0;
        font-weight: 400,
        margin: 0;
        font-size: 16px;
    }

    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;
