import * as React from 'react';
import Paper from 'material-ui/Paper';
import { FormControlLabel, FormControl, FormHelperText } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';
import { CircularProgress } from 'material-ui/Progress';
import withStyles from 'material-ui/styles/withStyles';
const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    labelClass: {
        'color': '#b8b8b8',
    },
    menu: {
        'width': '200px',
    },
    formLabel: {
        'flex-direction': 'row-reverse',
        'margin': '0',
        'font-size': '16px !important',
        'color': '#333',
        'width': '100%',
    },
    formLabelFont: {
        'font-size': '16px',
    },
    subLabel: {
        'font-size': '12px',
        'color': '#808080',
    },
    switchHeight: {
        'height': '20px',
    },
    switchDefault: {
        'height': 'inherit',
    },
    helpText: {
        color: '#808080',
        fontSize: '12px',
        marginTop: 0,
    },
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
};
class Configurations extends React.Component {
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
            if (this.state.webName) {
                this.setState({
                    loading: true,
                });
                axios.post('http://localhost:3000/graphql?', {
                    query: `
                mutation {
                    webName: setSetting(key: "global.webName", value: "${this.state.webName}") {
                    key,
                    value,
                    },
                    domainName: setSetting(key: "global.domainName", value: "${this.state.domainName}") {
                    key,
                    value,
                    },  
                    siteOpen: setSetting(key: "global.siteOpen", value: "${this.state.siteOpen ? 1 : 0}") {
                    key,
                    value,
                    },  
                    multiDomainOpen: setSetting(key: "global.multiDomainOpen",
                     value: "${this.state.multiDomainOpen ? 1 : 0}")
                     {
                    key,
                    value,
                    },  
                    keepRecord: setSetting(key: "global.keepRecord", value: "${this.state.keepRecord}") {
                    key,
                    value,
                    },  
                    companyName: setSetting(key: "global.companyName", value: "${this.state.companyName}") {
                    key,
                    value,
                    },  
                    copyright: setSetting(key: "global.copyright", value: "${this.state.copyright}") {
                    key,
                    value,
                    },  
                    statisticalCode: setSetting(key: "global.statisticalCode", value: "${this.state.statisticalCode}") {
                    key,
                    value,
                    },
                }
            `,
                }).then(response => {
                    if (!response.data.errors) {
                        this.setState({
                            open: true,
                            loading: false,
                            errorMessage: '提交成功！!',
                        });
                    }
                    else {
                        this.setState({
                            open: true,
                            loading: false,
                            errorMessage: response.data.errors[0].message,
                        });
                    }
                });
            }
            else {
                this.setState({
                    open: true,
                    loading: false,
                    errorMessage: '请输入网站名称!',
                });
            }
        };
        this.state = {
            webName: 'NotAdd',
            domainName: '',
            siteOpen: true,
            multiDomainOpen: false,
            keepRecord: '',
            companyName: '',
            copyright: '',
            statisticalCode: '',
            loading: false,
            transition: undefined,
            open: false,
            errorMessage: '',
        };
    }
    componentDidMount() {
        axios.post('http://localhost:3000/graphql?', {
            query: `
                query {
                    webName: getSettingByKey(key: "global.webName") {
                    key,
                    value,
                    },
                    domainName: getSettingByKey(key: "global.domainName") {
                    key,
                    value,
                    },  
                    siteOpen: getSettingByKey(key: "global.siteOpen") {
                    key,
                    value,
                    },  
                    multiDomainOpen: getSettingByKey(key: "global.multiDomainOpen") {
                    key,
                    value,
                    },  
                    keepRecord: getSettingByKey(key: "global.keepRecord") {
                    key,
                    value,
                    },  
                    companyName: getSettingByKey(key: "global.companyName") {
                    key,
                    value,
                    },  
                    copyright: getSettingByKey(key: "global.copyright") {
                    key,
                    value,
                    },  
                    statisticalCode: getSettingByKey(key: "global.statisticalCode") {
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
                        if (results[a].key === 'global.siteOpen' || results[a].key === 'global.multiDomainOpen') {
                            Number(results[a].value) === 1 ? d[a] = true : d[a] = false;
                        }
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
            React.createElement("h4", { className: "title" }, "\u53C2\u6570\u8BBE\u7F6E"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.webName },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7F51\u7AD9\u540D\u79F0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('webName'), value: this.state.webName }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7F51\u7AD9\u57DF\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('domainName'), value: this.state.domainName })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '16px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "\u7AD9\u70B9\u5F00\u542F", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ siteOpen: checked }), checked: this.state.siteOpen }) }),
                            React.createElement(FormHelperText, { classes: { root: this.props.classes.helpText } }, "\u5173\u95ED\u540E\u7F51\u7AD9\u5C06\u4E0D\u80FD\u8BBF\u95EE")),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "\u5F00\u542F\u591A\u57DF\u540D", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ multiDomainOpen: checked }), checked: this.state.multiDomainOpen }) }),
                            React.createElement(FormHelperText, { classes: { root: this.props.classes.helpText } }, "\u7531\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\u673A\u5236\uFF0C\u5B98\u65B9\u4E0D\u5BF9\u591A\u57DF\u540D\u505A\u7279\u6B8A\u652F\u6301\uFF0C\u53EF\u80FD\u5BFC\u81F4\u5176\u4ED6\u672A\u77E5\u95EE\u9898"))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5907\u6848\u4FE1\u606F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('keepRecord'), value: this.state.keepRecord }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u516C\u53F8\u540D\u79F0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('companyName'), value: this.state.companyName })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '10px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7EDF\u8BA1\u4EE3\u7801"),
                                React.createElement(Input, { id: "name-simple", multiline: true, rowsMax: "3", rows: "3", classes: {
                                        underline: this.props.classes.underline,
                                    }, className: this.props.classes.formLabelFont, onChange: this.handleChange('statisticalCode'), value: this.state.statisticalCode }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7248\u6743\u4FE1\u606F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('copyright'), value: this.state.copyright })))),
                    React.createElement(Button, { raised: true, color: "primary", style: {
                            marginTop: 34,
                            fontSize: 12,
                            borderRadius: 4
                        }, disabled: this.state.loading, className: this.state.loading ?
                            'disabled-btn' : '', onClick: this.handleSubmit }, this.state.loading ? React.createElement("div", null,
                        React.createElement(CircularProgress, { size: 24 })) : '确认提交')),
                React.createElement(Snackbar, { classes: {
                        root: !this.state.webName ? 'error-prompt' : ''
                    }, open: this.state.open, anchorOrigin: { vertical: 'top', horizontal: 'right' }, onClose: this.handleClose, transition: this.state.transition, SnackbarContentProps: {
                        'aria-describedby': 'message-id',
                    }, message: React.createElement("span", { id: "message-id" }, this.state.errorMessage) }))));
    }
}
export default withStyles(styles)(Configurations);
