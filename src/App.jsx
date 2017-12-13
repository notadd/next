import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import routes from 'routes';
import createContext from './assets/js/createContext';
import indigoA500 from 'material-ui/colors';

// Apply some reset
const theme = createMuiTheme({
    palette: {
        primary: indigoA500,
    },
});

const context = createContext();

const App = () => (
    <MuiThemeProvider theme={ theme } sheetsManager={ context.sheetsManager }>
        <Router>
            {renderRoutes(routes)}
        </Router>
    </MuiThemeProvider>
);

export default App;
