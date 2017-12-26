import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControlLabel, FormControl, FormHelperText } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
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
        'font-size': '12px',
    },
    subLabel: {
        'font-size': '12px',
        'color': '#808080',
    },
    switchHeight: {
        'height': '20px',
    },
    switchDefault: {
        'height': 'inherit'
    }
};
class Configurations extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            webName: 'NotAdd',
            domainName: '',
            siteOpen: true,
            multiDomainOpen: false,
            keepRecord: '',
            companyName: '',
            copyright: '',
            statisticalCode: '',
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
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
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7F51\u7AD9\u540D\u79F0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('webName'), value: this.state.webName }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7F51\u7AD9\u57DF\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('domainName'), value: this.state.domainName })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '10px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "站点开启", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ siteOpen: checked }), checked: this.state.siteOpen }) }),
                            React.createElement(FormHelperText, { className: this.props.classes.subLabel }, "\u5173\u95ED\u540E\u7F51\u7AD9\u5C06\u4E0D\u80FD\u8BBF\u95EE")),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "开启多域名", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ multiDomainOpen: checked }), checked: this.state.multiDomainOpen }) }),
                            React.createElement(FormHelperText, { className: this.props.classes.subLabel }, "\u7531\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\u673A\u5236\uFF0C\u5B98\u65B9\u4E0D\u5BF9\u591A\u57DF\u540D\u505A\u7279\u6B8A\u652F\u6301\uFF0C\u53EF\u80FD\u5BFC\u81F4\u5176\u4ED6\u672A\u77E5\u95EE\u9898"))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '-10px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5907\u6848\u4FE1\u606F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('keepRecord'), value: this.state.keepRecord }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u516C\u53F8\u540D\u79F0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('companyName'), value: this.state.companyName })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '-10px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7EDF\u8BA1\u4EE3\u7801"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('statisticalCode'), value: this.state.statisticalCode }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u7248\u6743\u4FE1\u606F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('copyright'), value: this.state.copyright })))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(Configurations);
