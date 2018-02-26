import axios from 'axios';
import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import { CircularProgress } from 'material-ui/Progress';
const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    formLabelFont: {
        'font-size': '16px',
    },
};
class Seo extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleSubmit = () => {
            this.setState({
                loading: true,
            });
            if (this.state.title && this.state.describe && this.state.keywords) {
                axios.post('http://localhost:3000/graphql?', {
                    query: `
                mutation {
                    webName: setSetting(key: "global.title", value: "${this.state.title}") {
                    key,
                    value,
                    },
                    domainName: setSetting(key: "global.describe", value: "${this.state.describe}") {
                    key,
                    value,
                    },  
                    siteOpen: setSetting(key: "global.keywords", value: "${this.state.keywords}") {
                    key,
                    value,
                    }, 
                }
            `,
                }).then(response => {
                    if (!response.data.errors) {
                        this.setState({
                            error: false,
                            open: true,
                            loading: false,
                            errorMessage: '提交成功！!',
                        });
                    }
                    else {
                        this.setState({
                            error: true,
                            open: true,
                            loading: false,
                            errorMessage: response.data.errors[0].message,
                        });
                    }
                });
            }
            else {
                let message = '';
                if (!this.state.title) {
                    message = '请输入标题';
                }
                else if (!this.state.describe) {
                    message = '请输入描述';
                }
                else if (!this.state.keywords) {
                    message = '请输入关键字';
                }
                this.setState({
                    error: true,
                    open: true,
                    loading: false,
                    errorMessage: message,
                });
            }
        };
        this.state = {
            title: '',
            describe: '',
            keywords: '',
            loading: false,
            transition: undefined,
            open: false,
            errorMessage: '',
            error: false,
        };
    }
    componentDidMount() {
        axios.post('http://localhost:3000/graphql?', {
            query: `
                query {
                    title: getSettingByKey(key: "global.title") {
                    key,
                    value,
                    },
                    describe: getSettingByKey(key: "global.describe") {
                    key,
                    value,
                    },  
                    keywords: getSettingByKey(key: "global.keywords") {
                    key,
                    value,
                    },
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                const results = response.data.data;
                Object.keys(results).forEach((a) => {
                    if (results[a] !== null) {
                        const d = {};
                        d[a] = results[a].value;
                        this.setState(d);
                    }
                });
            }
        });
    }
    render() {
        return (React.createElement("div", { className: "configurations" },
            React.createElement("p", { className: "crumbs" },
                "\u5168\u5C40 ",
                React.createElement("b", null, "/"),
                " \u5168\u5C40\u8BBE\u7F6E"),
            React.createElement("h4", { className: "title" }, "SEO\u914D\u7F6E"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.title },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u6807\u9898"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, onChange: this.handleChange('title'), value: this.state.title })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.describe },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u63CF\u8FF0"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, onChange: this.handleChange('describe'), value: this.state.describe })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.keywords },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u5173\u952E\u5B57"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, onChange: this.handleChange('keywords'), value: this.state.keywords })))),
                    React.createElement(Button, { raised: true, color: "primary", style: {
                            marginTop: 34,
                            fontSize: 12,
                            borderRadius: 4
                        }, disabled: this.state.loading, className: this.state.loading ?
                            'disabled-btn' : '', onClick: this.handleSubmit }, this.state.loading ? React.createElement("div", null,
                        React.createElement(CircularProgress, { size: 24 })) : '确认提交')),
                React.createElement(Snackbar, { classes: {
                        root: this.state.error ? 'error-prompt' : ''
                    }, open: this.state.open, anchorOrigin: { vertical: 'top', horizontal: 'right' }, onClose: this.handleClose, transition: this.state.transition, SnackbarContentProps: {
                        'aria-describedby': 'message-id',
                    }, message: React.createElement("span", { id: "message-id" }, this.state.errorMessage) }))));
    }
}
export default withStyles(styles)(Seo);
