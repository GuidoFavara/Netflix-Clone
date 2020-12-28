/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { App } from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
