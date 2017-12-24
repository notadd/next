import createBrowserHistory from "history/createBrowserHistory";
import * as React from 'react';
import { Route, RouteProps, Router, Switch } from "react-router";
import Header from "../layouts/Header";
import Configurations from "./Configurations";
import Debug from "./Debug";
import Extension from "./Extension";
import Login from './Login';
import Mail from "./Mail";
import Seo from "./Seo";
import Side from '../layouts/SideBar';
import Upload from "./Upload";

type Props = RouteProps;

const history = createBrowserHistory();

class App extends React.Component<Props, {}> {
    state = {
    };
    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route strict path="/" children={() => {
                        return <div className="main-view">
                            <Header/>
                            <div className="right-view">
                                <Side/>
                                <div className="view">
                                    <Route exact path="/configurations" component={Configurations}/>
                                    <Route exact path="/seo" component={Seo}/>
                                    <Route exact path="/upload" component={Upload}/>
                                    <Route exact path="/mail" component={Mail}/>
                                    <Route exact path="/debug" component={Debug}/>
                                    <Route exact path="/extension" component={Extension}/>
                                </div>
                            </div>
                        </div>
                    }}/>
                    <Route exact path="/asdsfsfsf" component={Login} />
                </Switch>
            </Router>
        );
    }
}
export default App;