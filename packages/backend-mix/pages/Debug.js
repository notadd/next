import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormControlLabel } from "material-ui/Form";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Switch from "material-ui/Switch";
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
        "color": "#333",
        "flex-direction": "row-reverse",
        "font-size": "16px !important",
        "margin": "0",
        "width": "100%",
    },
    smallBtn: {
        "border-radius": "4px",
        "font-size": "12px",
        "height": "24px",
        "min-height": "24px",
        "min-width": "48px",
        "padding": "0",
        "width": "48px",
    }
};
class Seo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            debug: false,
            test: false,
        };
    }
    render() {
        return (React.createElement("div", { className: "configurations" },
            React.createElement("p", { className: "crumbs" },
                "\u5168\u5C40 ",
                React.createElement("b", null, "/"),
                " \u7CFB\u7EDF\u63D2\u4EF6"),
            React.createElement("h4", { className: "title" }, "\u8C03\u8BD5\u5DE5\u5177"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "缓存清除", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Button, { color: "primary", className: this.props.classes.smallBtn, raised: true, dense: true }, "\u6E05\u9664") }))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "-10px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "Debug模式", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { onChange: (event, checked) => this.setState({ debug: checked }), checked: this.state.debug }) }))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "-10px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "测试模式", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { onChange: (event, checked) => this.setState({ test: checked }), checked: this.state.test }) }))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(Seo);
