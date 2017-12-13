import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'assets/less/main.less';
import reducer from './redux/reducers';

const store = createStore(reducer);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={ store }>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => render(App));
}
