import * as React from 'react';
import Login from './Login';
import Index from './Index';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

class App extends React.Component {
    state = {
    };
    render() {
        return (
            <Switch>
                <Redirect path="/" exact to="/index"/>
                <Route path="/index" component={Index}/>
                <Route path="/login" component={Login} />
            </Switch>
        );
    }
}
export default App;