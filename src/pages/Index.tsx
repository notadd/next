import * as React from 'react';
import { Switch } from "react-router";
import Header from '../layouts/Header';
import Side from '../layouts/SideBar';
import Configurations from '../pages/Configurations';
import Seo from '../pages/Seo';
import Upload from '../pages/Upload';
import Mail from '../pages/Mail';
import Extension from '../pages/Extension';
import Debug from '../pages/Debug';
import Drawer from 'material-ui/Drawer';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import {
    Route,
} from 'react-router-dom';

const drawerWidth = 240;

const styles = (theme: any) => ({
    root: {
        width: '100%',
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
});

type State = {
    open: boolean,
};

class Index extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        open: true
    };
    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <div className="main-view">
                <Header/>
                <div className="right-view">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        type="persistent"
                        open={open}
                    >
                    <Side/>
                    </Drawer>
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

export default withStyles(styles)<{}>(Index);
