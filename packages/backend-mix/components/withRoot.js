import * as React from "react";
import { withStyles, MuiThemeProvider } from "material-ui/styles";
import { wrapDisplayName } from "recompose";
import createContext from "../styles/createContext";
import JssProvider from "react-jss/lib/JssProvider";
const decorate = withStyles(theme => ({
    "@global": {
        html: {
            background: theme.palette.background.default,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
        },
        body: {
            margin: 0,
        },
    },
}));
const AppWrapper = decorate(props => props.children);
const context = createContext();
function withRoot(BaseComponent) {
    class WithRoot extends React.Component {
        componentDidMount() {
            const jssStyles = document.querySelector("#jss-server-side");
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }
        render() {
            return (React.createElement(JssProvider, { registry: context.sheetsRegistry, jss: context.jss },
                React.createElement(MuiThemeProvider, { theme: context.theme, sheetsManager: context.sheetsManager },
                    React.createElement(AppWrapper, null,
                        React.createElement(BaseComponent, null)))));
        }
    }
    if (process.env.NODE_ENV !== "production") {
        WithRoot.displayName = wrapDisplayName(BaseComponent, "withRoot");
    }
    return WithRoot;
}
export default withRoot;
