"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jss_1 = require("jss");
var jss_preset_default_1 = require("jss-preset-default");
var styles_1 = require("material-ui/styles");
var colors_1 = require("material-ui/colors");
var createGenerateClassName_1 = require("material-ui/styles/createGenerateClassName");
var theme = styles_1.createMuiTheme({
    palette: {
        primary: colors_1.indigo['A500'],
        secondary: colors_1.green,
    },
});
var jss = jss_1.create(jss_preset_default_1.default());
jss.options.createGenerateClassName = createGenerateClassName_1.default;
exports.sheetsManager = new Map();
function createContext() {
    return {
        jss: jss,
        theme: theme,
        sheetsManager: exports.sheetsManager,
        sheetsRegistry: new jss_1.SheetsRegistry(),
    };
}
exports.default = createContext;
