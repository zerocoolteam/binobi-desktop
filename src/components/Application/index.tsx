import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Layout/Header';
import Main from '../Layout/Main';

import * as style from './style.css';

const Application = () => (
  <BrowserRouter>
    <div className={style.mainBack}>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default Application;
