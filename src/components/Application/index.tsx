import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Layout/Header';
import Main from '../Layout/Main';

const Application = () => (
    <Router>
        <div style={{ background: '#E5E5E5' }}>
            <Header />
            <Main />
        </div>
    </Router>
);

export default Application;
