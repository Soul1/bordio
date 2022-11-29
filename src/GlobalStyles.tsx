import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

const GlobalFonts = css`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url('./utils/fonts/Roboto-Medium.ttf') format('ttf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url('./utils/fonts/Roboto-Regular.ttf') format('ttf');
        font-weight: 400;
        font-style: normal;
    }
`;

export const GlobalStyles = createGlobalStyle`
  ${GlobalFonts}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  }

  #root {
    height: 100vh;
    overflow: hidden;
  }
`;
