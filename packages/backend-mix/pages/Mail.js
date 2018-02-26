import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormLabel, FormControlLabel, FormControl } from "material-ui/Form";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Input, { InputLabel } from "material-ui/Input";
import Radio, { RadioGroup } from "material-ui/Radio";
const styles = {
    root: {
        "padding": "40px 30px",
    },
    container: {
        "display": "flex",
        "flex-wrap": "wrap",
        "margin": "0",
    },
    formLabel: {
        "color": "#808080",
        "flex-direction": "row-reverse",
        "font-size": "16px !important",
        "margin": "0",
        "width": "100%",
    },
    FormControlLabel: {
        "font-size": "12px",
    },
    FormControlRoot: {
        "margin-left": "0",
        "margin-right": "40px",
    },
    radioDefault: {
        "margin-right": "5px",
        "width": "auto",
    },
    radioRoot: {
        "flex-direction": "row"
    },
};
class Seo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            sendingMode: "",
            encryptionMethod: "",
            serverAddress: "",
            serverPort: "",
            SMTPAccount: "",
            SMTPEmail: "",
            SMTPPassword: "",
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
                " \u7CFB\u7EDF\u63D2\u4EF6"),
            React.createElement("h4", { className: "title" }, "\u90AE\u4EF6\u8BBE\u7F6E"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(FormLabel, { className: this.props.classes.formLabel }, "\u53D1\u9001\u65B9\u5F0F"),
                                React.createElement(RadioGroup, { "aria-label": "gender", name: "gender1", classes: {
                                        root: this.props.classes.radioRoot,
                                    }, value: this.state.sendingMode, onChange: this.handleChange("sendingMode") },
                                    React.createElement(FormControlLabel, { classes: {
                                            root: this.props.classes.FormControlRoot,
                                            label: this.props.classes.FormControlLabel
                                        }, value: "Send Mail \u51FD\u6570", control: React.createElement(Radio, { classes: {
                                                default: this.props.classes.radioDefault,
                                            } }), label: "Send Mail \u51FD\u6570" }),
                                    React.createElement(FormControlLabel, { classes: {
                                            root: this.props.classes.FormControlRoot,
                                            label: this.props.classes.FormControlLabel
                                        }, value: "SMTP", control: React.createElement(Radio, { classes: {
                                                default: this.props.classes.radioDefault,
                                            } }), label: "SMTP" })))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(FormLabel, { className: this.props.classes.formLabel }, "\u52A0\u5BC6\u65B9\u5F0F"),
                                React.createElement(RadioGroup, { "aria-label": "gender", name: "gender1", classes: {
                                        root: this.props.classes.radioRoot,
                                    }, value: this.state.encryptionMethod, onChange: this.handleChange("encryptionMethod") },
                                    React.createElement(FormControlLabel, { classes: {
                                            root: this.props.classes.FormControlRoot,
                                            label: this.props.classes.FormControlLabel
                                        }, value: "\u4E0D\u52A0\u5BC6", control: React.createElement(Radio, { classes: {
                                                default: this.props.classes.radioDefault,
                                            } }), label: "\u4E0D\u52A0\u5BC6" }),
                                    React.createElement(FormControlLabel, { classes: {
                                            root: this.props.classes.FormControlRoot,
                                            label: this.props.classes.FormControlLabel
                                        }, value: "SSL", control: React.createElement(Radio, { classes: {
                                                default: this.props.classes.radioDefault,
                                            } }), label: "SSL" }))))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "0px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabel }, "\u670D\u52A1\u5668\u5730\u5740"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabel, onChange: this.handleChange("serverAddress"), value: this.state.serverAddress }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabel }, "\u670D\u52A1\u5668\u7AEF\u53E3"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabel, onChange: this.handleChange("serverPort"), value: this.state.serverPort })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "10px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabel }, "SMTP\u8D26\u53F7"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabel, onChange: this.handleChange("SMTPAccount"), value: this.state.SMTPAccount }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabel }, "\u53D1\u4FE1\u90AE\u7BB1\u5730\u5740"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabel, onChange: this.handleChange("SMTPEmail"), value: this.state.SMTPEmail })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "10px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabel }, "SMTP\u5BC6\u7801"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabel, onChange: this.handleChange("SMTPPassword"), value: this.state.SMTPPassword })))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4"),
                    React.createElement(Button, { raised: true, style: {
                            borderRadius: 4,
                            background: "#ededed",
                            fontSize: 12,
                            marginLeft: 6,
                            marginTop: 34
                        } }, "\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6")))));
    }
}
export default withStyles(styles)(Seo);
