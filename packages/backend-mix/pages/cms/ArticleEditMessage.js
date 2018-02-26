import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Switch from 'material-ui/Switch';
import { MenuItem } from 'material-ui/Menu';
import 'rc-color-picker/assets/index.css';
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
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
    switchHeight: {
        'height': '20px',
    },
    switchDefault: {
        'height': 'inherit',
    },
};
class ArticleEditMessage extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        let type = '';
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        }
        this.state = {
            typeName: 'NotAdd',
            otherName: 'news',
            color: '',
            description: '',
            link: 'www.baidu.com',
            pageType: type,
            enabled: true,
            intro: '',
            sort: 3,
            type: '',
            types: [
                {
                    id: '10',
                    type: '单行文本框',
                },
                {
                    id: '11',
                    type: '多行文本框',
                },
                {
                    id: '12',
                    type: '单选框',
                },
                {
                    id: '13',
                    type: '多选框',
                },
                {
                    id: '14',
                    type: '复选框',
                },
                {
                    id: '15',
                    type: '日期时间选择',
                },
                {
                    id: '16',
                    type: '日期时间范围选择',
                },
                {
                    id: '17',
                    type: '下拉菜单',
                },
                {
                    id: '18',
                    type: '上传图片',
                },
                {
                    id: '19',
                    type: '上传文件',
                },
            ],
        };
    }
    render() {
        return (React.createElement("div", { className: "configurations" },
            React.createElement("p", { className: "crumbs" },
                "CMS ",
                React.createElement("b", null, "/"),
                " \u6587\u7AE0\u7BA1\u7406 / \u5206\u7C7B\u7BA1\u7406 / \u7F16\u8F91"),
            React.createElement("h4", { className: "title" }, this.state.pageType === '1' ? '新增信息项' : '编辑信息项'),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u4FE1\u606F\u9879\u540D\u79F0"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('typeName'), value: this.state.typeName }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u4FE1\u606F\u9879\u4ECB\u7ECD"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('intro'), value: this.state.intro })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '12px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u6392\u5E8F"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('sort'), value: this.state.sort }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControlLabel, { label: "\u5FC5\u586B\u9879", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => {
                                        this.setState({ enabled: checked });
                                    }, checked: this.state.enabled }) }))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '12px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u4FE1\u606F\u9879\u7C7B\u578B"),
                                React.createElement(Select, { className: "form-select-underline", value: this.state.type, onChange: this.handleChange('type'), input: React.createElement(Input, { name: "type" }) }, this.state.types.map((item, index) => {
                                    return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                }))))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(ArticleEditMessage);
