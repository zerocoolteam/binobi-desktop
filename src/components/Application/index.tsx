import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Layout/Header';
import Main from '../Layout/Main';

const Application = () => (
    <BrowserRouter>
        <div style={{ background: '#E5E5E5' }}>
            <Header />
            <Main />
        </div>
    </BrowserRouter>
);

export default Application;
