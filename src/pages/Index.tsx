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
import {
    Route,
} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <div className="main-view">
                <Header/>
                <div className="right-view">
                    <Side/>
                    <div className="view">
                        <Switch>
                            <Route exact  path="configurations" component={Configurations}/>
                            <Route exact  path="seo" component={Seo}/>
                            <Route exact  path="upload" component={Upload}/>
                            <Route exact  path="mail" component={Mail}/>
                            <Route exact  path="debug" component={Debug}/>
                            <Route exact  path="extension" component={Extension}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRoot(Index);
