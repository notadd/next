import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { CircularProgress } from 'material-ui/Progress';
import axios from 'axios';
const styles = {
    card: {
        minWidth: 275,
    },
    disabled: {
        background: 'none !important',
        border: '1px solid #e0e0e0',
    },
    formLabelFont: {
        fontSize: '16px',
    },
};
class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            userName: '',
            password: '',
            loading: false,
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            this.setState({
                loading: true,
            });
            axios.post('http://192.168.149.120:3000/auth/token', {
                username: this.state.userName,
                password: this.state.password,
            }).then(response => {
                if (response.status === 200) {
                    const user = {
                        username: this.state.userName,
                        password: this.state.password
                    };
                    localStorage.setItem('notadd_user', JSON.stringify(user));
                    localStorage.setItem('notadd_token', response.data.access_token);
                    this.props.history.push('/index');
                }
            });
        };
    }
    render() {
        return (React.createElement("div", { className: "login" },
            React.createElement("div", { className: "wrapBox" },
                React.createElement(Card, { className: "innerBox" },
                    React.createElement(CardContent, { style: { padding: 0 } },
                        React.createElement("h3", { className: "boxTitle" }, "\u767B\u5F55"),
                        React.createElement(Tooltip, { placement: "bottom", title: "Login", onClick: this.handleSubmit },
                            React.createElement(Button, { fab: true, color: "accent", className: "absolute" },
                                React.createElement(KeyboardArrowRight, null))),
                        React.createElement(FormControl, { fullWidth: true, style: { marginTop: 65 } },
                            React.createElement(InputLabel, { htmlFor: "user-name", className: this.props.classes.formLabelFont }, "\u7528\u6237\u540D"),
                            React.createElement(Input, { id: "user-name", className: this.props.classes.formLabelFont, onChange: this.handleChange('userName'), value: this.state.userName })),
                        React.createElement(FormControl, { fullWidth: true, style: { marginTop: 35 } },
                            React.createElement(InputLabel, { className: this.props.classes.formLabelFont, htmlFor: "user-password" }, "\u5BC6\u7801"),
                            React.createElement(Input, { onKeyUp: (event) => {
                                    if (event.keyCode === 13) {
                                        this.handleSubmit(event);
                                    }
                                }, className: this.props.classes.formLabelFont, id: "user-password", type: "password", onChange: this.handleChange('password'), value: this.state.password }))),
                    React.createElement(CardActions, { style: { marginTop: 30, padding: 0 } },
                        React.createElement(Button, { raised: true, disabled: this.state.userName === '' || this.state.password === '' || this.state.loading, color: "primary", style: {
                                width: '100%',
                                height: 48,
                                fontSize: 14,
                                borderRadius: 4,
                                margin: 0
                            }, className: this.state.userName === ''
                                || this.state.password === '' ?
                                this.props.classes.disabled : '', onClick: this.handleSubmit }, this.state.loading ? React.createElement("div", null,
                            React.createElement(CircularProgress, { size: 24 })) : React.createElement("span", null, " \u767B\u5F55")))))));
    }
}
export default withStyles(styles)(Login);
