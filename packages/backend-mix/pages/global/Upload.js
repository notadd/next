import axios from 'axios';
import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormLabel, FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
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
class Upload extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            GDisOPen: false,
            appendageSize: 1024,
            imgSize: 1024,
            videoSize: 1024,
            extensionNames: 'jpg,jpeg,png',
            fileNames: 'txt',
            videoNames: '.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.\n' +
                'webm,.mp3,.wav,.mid,.html,.php',
            managementDocumentsNames: '',
            managementImagesNames: '',
            loading: false,
            transition: undefined,
            open: false,
            errorMessage: '',
            error: false,
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleChangeChecked = (name) => (event, checked) => {
            this.setState({ [name]: checked });
        };
        this.handleSubmit = () => {
            const obj = Object.assign({}, this.state);
            delete obj.loading;
            delete obj.transition;
            delete obj.open;
            delete obj.errorMessage;
            delete obj.error;
            delete obj.GDisOPen;
            window.console.log(this.state);
            let pass = true;
            let message = '';
            Object.keys(obj).forEach(key => {
                if (!obj[key]) {
                    pass = false;
                    switch (key) {
                        case 'appendageSize':
                            message = '附件大小';
                            break;
                        case 'imgSize':
                            message = '图片大小';
                            break;
                        case 'videoSize':
                            message = '视频大小';
                            break;
                        case 'extensionNames':
                            message = '允许图片的扩展名';
                            break;
                        case 'fileNames':
                            message = '允许上传文件的扩展名';
                            break;
                        case 'videoNames':
                            message = '允许上传视频的扩展名';
                            break;
                        case 'managementDocumentsNames':
                            message = '允许管理文件的扩展名';
                            break;
                        case 'managementImagesNames':
                            message = '允许管理图片的扩展名';
                            break;
                        default: message = '';
                    }
                }
            });
            if (pass) {
                this.setState({
                    error: false,
                    loading: true,
                });
                axios.post('http://localhost:3000/graphql?', {
                    query: `
                mutation {
                    GDisOPen: setSetting(key: "global.GDisOPen", value: "${this.state.GDisOPen ? 1 : 0}") {
                    key,
                    value,
                    },
                    appendageSize: setSetting(key: "global.appendageSize", value: "${this.state.appendageSize}") {
                    key,
                    value,
                    },
                    imgSize: setSetting(key: "global.imgSize", value: "${this.state.imgSize}") {
                    key,
                    value,
                    },  
                    videoSize: setSetting(key: "global.videoSize", value: "${this.state.videoSize}") {
                    key,
                    value,
                    },
                    extensionNames: setSetting(key: "global.extensionNames", value: "${this.state.extensionNames}") {
                    key,
                    value,
                    },
                    fileNames: setSetting(key: "global.fileNames", value: "${this.state.fileNames}") {
                    key,
                    value,
                    },
                    videoNames: setSetting(key: "global.videoNames", value: "${this.state.videoNames}") {
                    key,
                    value,
                    },
                    managementDocumentsNames: setSetting(key: "global.managementDocumentsNames", 
                    value: "${this.state.managementDocumentsNames}") {
                    key,
                    value,
                    },
                    managementImagesNames: setSetting(key: "global.managementImagesNames",
                     value: "${this.state.managementImagesNames}") {
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
                this.setState({
                    error: true,
                    open: true,
                    loading: false,
                    errorMessage: `请输入${message}!`,
                });
            }
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
    }
    componentDidMount() {
        axios.post('http://localhost:3000/graphql?', {
            query: `
                query {
                    GDisOPen: getSettingByKey(key: "global.GDisOPen") {
                    key,
                    value,
                    },
                    appendageSize: getSettingByKey(key: "global.appendageSize") {
                    key,
                    value,
                    },
                    imgSize: getSettingByKey(key: "global.imgSize") {
                    key,
                    value,
                    },  
                    videoSize: getSettingByKey(key: "global.videoSize") {
                    key,
                    value,
                    },
                    extensionNames: getSettingByKey(key: "global.extensionNames") {
                    key,
                    value,
                    },
                    fileNames: getSettingByKey(key: "global.fileNames") {
                    key,
                    value,
                    },
                    videoNames: getSettingByKey(key: "global.videoNames") {
                    key,
                    value,
                    },
                    managementDocumentsNames: getSettingByKey(key: "global.managementDocumentsNames") {
                    key,
                    value,
                    },
                    managementImagesNames: getSettingByKey(key: "global.managementImagesNames") {
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
                        if (results[a].key === 'global.GDisOPen') {
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
                " \u9644\u4EF6\u8BBE\u7F6E"),
            React.createElement("h4", { className: "title" }, "\u4E0A\u4F20\u8BBE\u7F6E"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(FormLabel, null, "\u56FE\u7247\u5904\u7406\u5F15\u64CE"),
                                React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { value: "GDisOPen", onChange: this.handleChangeChecked('GDisOPen'), checked: this.state.GDisOPen }), label: "GD\u5E93" }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.appendageSize },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u9644\u4EF6\u5927\u5C0F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('appendageSize'), value: this.state.appendageSize, endAdornment: React.createElement(InputAdornment, { position: "end" }, "KB") })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.imgSize },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u56FE\u7247\u5927\u5C0F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('imgSize'), value: this.state.imgSize }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.videoSize },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u89C6\u9891\u5927\u5C0F"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('videoSize'), value: this.state.videoSize })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.extensionNames },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u56FE\u7247\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('extensionNames'), value: this.state.extensionNames }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.fileNames },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('fileNames'), value: this.state.fileNames })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.videoNames },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u4E0A\u4F20\u89C6\u9891\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('videoNames'), value: this.state.videoNames }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.managementDocumentsNames },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u7BA1\u7406\u6587\u4EF6\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('managementDocumentsNames'), value: this.state.managementDocumentsNames })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true, error: !this.state.managementImagesNames },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5141\u8BB8\u7BA1\u7406\u56FE\u7247\u7684\u6269\u5C55\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('managementImagesNames'), value: this.state.managementImagesNames })))),
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
export default withStyles(styles)(Upload);
