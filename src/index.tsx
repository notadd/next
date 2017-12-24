import * as React from 'react';
import { render } from 'react-dom';
import App from './pages/App';
import './assets/css/main.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

render(
    <Router>
        <Route path="/" component={App}/>
    </Router>,
    document.querySelector('#root')
);
