import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormControl } from "material-ui/Form";
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
    underline: {
        "&:before": {
            background: "#dfdfdf",
        }
    },
};
class ArticleTypeEdit extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            typeName: "NotAdd",
            otherName: "news",
            color: "#ff3300",
            description: "",
            link: "www.baidu.com",
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
                "CMS ",
                React.createElement("b", null, "/"),
                " \u6587\u7AE0\u7BA1\u7406 / \u5206\u7C7B\u7BA1\u7406"),
            React.createElement("h4", { className: "title" }, "\u7F16\u8F91"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5206\u7C7B\u540D\u79F0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("typeName"), value: this.state.typeName }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u522B\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("otherName"), value: this.state.otherName })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "12px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5185\u94FE"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("link"), value: this.state.link }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u63CF\u8FF0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("description"), value: this.state.description })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "12px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u989C\u8272"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange("color"), value: this.state.color })))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(ArticleTypeEdit);
