import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);