import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormControlLabel, FormControl } from "material-ui/Form";
import Switch from "material-ui/Switch";
import Input, { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
const styles = {
    root: {
        "padding": "40px 30px",
    },
    container: {
        display: "flex",
        "flex-wrap": "wrap",
        "margin": "0",
    },
    labelClass: {
        "color": "#b8b8b8",
    },
    menu: {
        "width": "200px",
    },
    formLabel: {
        "flex-direction": "row-reverse",
        "margin": "0",
        "font-size": "16px !important",
        "color": "#333",
        "width": "100%",
    },
    formLabelFont: {
        "font-size": "16px",
    },
    subLabel: {
        "font-size": "12px",
        "color": "#808080",
    },
    switchHeight: {
        "height": "20px",
    },
    switchDefault: {
        "height": "inherit",
    },
    helpText: {
        color: "#808080",
        fontSize: "12px",
        marginTop: 0,
    },
    underline: {
        "&:before": {
            background: "#dfdfdf",
        }
    },
};
class MenuEdit extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            webName: "NotAdd",
            domainName: "",
            siteOpen: true,
            multiDomainOpen: false,
            keepRecord: "",
            companyName: "",
            copyright: "",
            statisticalCode: "",
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("p", { className: "crumbs" },
                "\u5168\u5C40 ",
                React.createElement("b", null, "/"),
                " \u7CFB\u7EDF\u63D2\u4EF6"),
            React.createElement("h4", { className: "title" }, "\u83DC\u5355\u7BA1\u7406"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u83DC\u5355\u540D\u79F0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("webName"), value: this.state.webName }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "\u662F\u5426\u5F00\u542F", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ siteOpen: checked }), checked: this.state.siteOpen }) }))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(MenuEdit);
