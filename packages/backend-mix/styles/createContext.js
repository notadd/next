import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createMuiTheme } from 'material-ui/styles';
import { indigo, green } from 'material-ui/colors';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
const ind = indigo;
const theme = createMuiTheme({
    palette: {
        primary: ind.A500,
        secondary: green,
    },
});
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;
export const sheetsManager = new Map();
export default function createContext() {
    return {
        jss,
        theme,
        sheetsManager,
        sheetsRegistry: new SheetsRegistry(),
    };
}
