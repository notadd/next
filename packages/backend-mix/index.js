import * as React from 'react';
import { render } from 'react-dom';
import App from './layouts/App';
import './assets/css/main.css';
render(React.createElement(App, null), document.querySelector('#root'));
