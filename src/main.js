import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './assets/styles/main.less';

// Components.
import App from './App';

// language.
import { cn, en } from './i18n';
import englishMessages from 'ra-language-english';
const messages = {
    cn: cn,
    en: { ...englishMessages, ...en },
};

render(
    <App messages={ messages }/>,
    document.querySelector('#root')
);
