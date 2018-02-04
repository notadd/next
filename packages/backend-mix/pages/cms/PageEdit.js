import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { FormControlLabel, FormControl } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import Switch from "material-ui/Switch";
import Button from "material-ui/Button";
const styles = {
    root: {
        "padding": "40px 30px",
        "margin-bottom": "60px",
    },
    container: {
        display: "flex",
        "flex-wrap": "wrap",
        "margin": "0",
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
    formControlMargin: {
        "margin-bottom": "32px",
    },
    underline: {
        "&:before": {
            background: "#dfdfdf",
        }
    },
    switchHeight: {
        "height": "20px",
    },
    switchDefault: {
        "height": "inherit",
    },
};
class PageEdit extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: "NotAdd",
            otherName: "新闻资讯",
            type: "新闻资讯",
            isOpen: false,
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
    }
    render() {
        return (React.createElement("div", { className: "top-action-module cms" },
            React.createElement("p", { className: "crumbs" }, "CMS / \u9875\u9762\u7BA1\u7406 / \u5168\u90E8\u9875\u9762"),
            React.createElement("h4", { className: "title" }, "\u7F16\u8F91"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 24 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u6807\u9898"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("name"), value: this.state.name })),
                            React.createElement("div", { className: "editor" }, "\u7F16\u8F91\u5668\u63D2\u4EF6")),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u522B\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("otherName"), value: this.state.otherName })),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5206\u7C7B"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("type"), value: this.state.type })),
                            React.createElement(FormControlLabel, { label: "开启", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, className: this.props.classes.formControlMargin, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ isOpen: checked }), checked: this.state.isOpen }) }))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(PageEdit);
