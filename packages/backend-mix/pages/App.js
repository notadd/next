import * as React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../layouts/Header';
import Configurations from './Configurations';
import Debug from './Debug';
import Extension from './Extension';
import Login from './Login';
import Mail from './Mail';
import Seo from './Seo';
import Side from '../layouts/SideBar';
import Upload from './Upload';
import ModuleOpen from './ModuleOpen';
import ModuleDomain from './ModuleDomain';
import ModuleImport from './ModuleImport';
import ModuleInstall from './ModuleInstall';
import AddonOpen from './AddonOpen';
import AddonImport from './AddonImport';
import AddonInstall from './AddonInstall';
import { HashRouter } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (React.createElement(HashRouter, { basename: "/" },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/login", component: Login }),
                React.createElement(Route, { strict: true, path: "/", children: () => {
                        return (React.createElement("div", { className: "main-view" },
                            React.createElement(Header, null),
                            React.createElement("div", { className: "right-view" },
                                React.createElement(Side, null),
                                React.createElement("div", { className: "view" },
                                    React.createElement(Route, { exact: true, path: "/configurations", component: Configurations }),
                                    React.createElement(Route, { exact: true, path: "/seo", component: Seo }),
                                    React.createElement(Route, { exact: true, path: "/upload", component: Upload }),
                                    React.createElement(Route, { exact: true, path: "/mail", component: Mail }),
                                    React.createElement(Route, { exact: true, path: "/debug", component: Debug }),
                                    React.createElement(Route, { exact: true, path: "/extension", component: Extension }),
                                    React.createElement(Route, { exact: true, path: "/module/open-module", component: ModuleOpen }),
                                    React.createElement(Route, { exact: true, path: "/module/domain-config", component: ModuleDomain }),
                                    React.createElement(Route, { exact: true, path: "/module/import-export", component: ModuleImport }),
                                    React.createElement(Route, { exact: true, path: "/module/install", component: ModuleInstall }),
                                    React.createElement(Route, { exact: true, path: "/addon/openAddon", component: AddonOpen }),
                                    React.createElement(Route, { exact: true, path: "/addon/import-export", component: AddonImport }),
                                    React.createElement(Route, { exact: true, path: "/addon/install", component: AddonInstall })))));
                    } }))));
    }
}
export default App;
