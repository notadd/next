import * as React from 'react';
import Header from '../layouts/Header';
import Side from '../layouts/SideBar';
import withRoot from '../components/withRoot';
import Configurations from '../pages/Configurations';
import Seo from '../pages/Seo';
import Upload from '../pages/Upload';
import Mail from '../pages/Mail';
import Extension from '../pages/Extension';
import Debug from '../pages/Debug';
import Hello from '../pages/Hello';
import {
    Route
} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <div className="main-view">
                <Header/>
                <div className="right-view">
                    <Side/>
                    <div className="view">
                        <Route path="/configurations" component={Configurations}/>
                        <Route path="/seo" component={Seo}/>
                        <Route path="/upload" component={Upload}/>
                        <Route path="/mail" component={Mail}/>
                        <Route path="/debug" component={Debug}/>
                        <Route path="/extension" component={Extension}/>
                        <Route path="/hello" component={Hello}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRoot(Index);
