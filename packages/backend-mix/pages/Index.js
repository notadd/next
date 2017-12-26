import * as React from 'react';
import { Switch } from "react-router";
import Header from '../layouts/Header';
import Side from '../layouts/SideBar';
import withRoot from '../components/withRoot';
import Configurations from '../pages/Configurations';
import Seo from '../pages/Seo';
import Upload from '../pages/Upload';
import Mail from '../pages/Mail';
import Extension from '../pages/Extension';
import Debug from '../pages/Debug';
import { Route, } from 'react-router-dom';
class Index extends React.Component {
    render() {
        return (React.createElement("div", { className: "main-view" },
            React.createElement(Header, null),
            React.createElement("div", { className: "right-view" },
                React.createElement(Side, null),
                React.createElement("div", { className: "view" },
                    React.createElement(Switch, null,
                        React.createElement(Route, { exact: true, path: "configurations", component: Configurations }),
                        React.createElement(Route, { exact: true, path: "seo", component: Seo }),
                        React.createElement(Route, { exact: true, path: "upload", component: Upload }),
                        React.createElement(Route, { exact: true, path: "mail", component: Mail }),
                        React.createElement(Route, { exact: true, path: "debug", component: Debug }),
                        React.createElement(Route, { exact: true, path: "extension", component: Extension }))))));
    }
}
export default withRoot(Index);
