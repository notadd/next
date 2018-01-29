import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormLabel, FormControlLabel, FormControl } from "material-ui/Form";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Radio from "material-ui/Radio";
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
        "font-size": "12px",
    },
    subLabel: {
        "font-size": "12px",
        "color": "#808080",
    },
    switchHeight: {
        "height": "20px",
    },
    switchDefault: {
        "height": "inherit"
    }
};
class Upload extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            appendageSize: 1024,
            imgSize: 1024,
            videoSize: 1024,
            extensionNames: "jpg,jpeg,png",
            fileNames: "txt",
            videoNames: ".flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.\n" +
                "webm,.mp3,.wav,.mid,.html,.php",
            managementDocumentsNames: "",
            managementImagesNames: "",
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
                " \u9644\u4EF6\u8BBE\u7F6E"),
            React.createElement("h4", { className: "title" }, "\u4E0A\u4F20\u8BBE\u7F6E"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(FormLabel, null, "\u56FE\u7247\u5904\u7406\u5F15\u64CE"),
                                React.createElement(FormControlLabel, { value: "GD", control: React.createElement(Radio, null), label: "GD库" }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u9644\u4EF6\u5927\u5C0F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("appendageSize"), value: this.state.appendageSize, endAdornment: React.createElement(InputAdornment, { position: "end" }, "KB") })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "0px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u56FE\u7247\u5927\u5C0F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("imgSize"), value: this.state.imgSize }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u89C6\u9891\u5927\u5C0F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("videoSize"), value: this.state.videoSize })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "0px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u56FE\u7247\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("extensionNames"), value: this.state.extensionNames }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("fileNames"), value: this.state.fileNames })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "0px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u4E0A\u4F20\u89C6\u9891\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("videoNames"), value: this.state.videoNames }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u7BA1\u7406\u6587\u4EF6\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("managementDocumentsNames"), value: this.state.managementDocumentsNames })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: "0px" } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u7BA1\u7406\u56FE\u7247\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange("managementImagesNames"), value: this.state.managementImagesNames })))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(Upload);
