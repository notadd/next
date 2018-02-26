import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Editor from '../../components/Editor';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';
const styles = {
    root: {
        'padding': '40px 30px',
        'margin-bottom': '60px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
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
    formControlMargin: {
        'margin-bottom': '32px',
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
const stylesType = {};
class PageEdit extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleEditorChange = (content, id) => {
            this.state.list[id].content = content;
            this.setState({
                list: this.state.list,
            });
        };
        this.handleAddEditor = () => {
            const arr = Object.assign([], this.state.list);
            arr.push({
                id: this.state.num + 1,
                content: '',
                path: 'neditor/',
            });
            this.setState({
                list: arr,
                num: this.state.num + 1,
            });
        };
        this.handelSubmit = () => {
            window.console.log(this.state.list);
        };
        this.handleRemoveEditor = (index) => {
            const arr = Object.assign([], this.state.list);
            arr.splice(index, 1);
            this.setState({
                list: arr,
            });
        };
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
            types: [
                {
                    id: '12',
                    type: '新闻1',
                },
                {
                    id: '13',
                    type: '新闻2',
                },
                {
                    id: '14',
                    type: '新闻3',
                },
            ],
            name: 'NotAdd',
            otherName: '新闻资讯',
            type: '',
            isOpen: false,
            pageType: type,
            num: 0,
            content: '',
            ready: '',
            list: [
                {
                    id: 0,
                    content: '',
                    path: 'neditor/',
                },
            ],
        };
    }
    render() {
        return (React.createElement("div", { className: "top-action-module cms" },
            React.createElement("p", { className: "crumbs" }, "CMS / \u9875\u9762\u7BA1\u7406 / \u5168\u90E8\u9875\u9762"),
            React.createElement("h4", { className: "title" }, this.state.pageType === '1' ? '新增' : '编辑'),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 24 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 8, style: { paddingRight: '40px' }, className: "grid-editor-module" },
                            React.createElement(FormControl, { fullWidth: true, required: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u6807\u9898"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('name'), value: this.state.name })),
                            this.state.list.map((item, index) => {
                                return (React.createElement("div", { className: "editor", key: index },
                                    React.createElement(Editor, { path: item.path, editor: item, handleEditorChange: this.handleEditorChange }),
                                    index === 0 ?
                                        React.createElement("span", { onClick: this.handleAddEditor }, "\u6DFB\u52A0") :
                                        React.createElement("span", { onClick: () => this.handleRemoveEditor(index) }, "\u5220\u9664")));
                            })),
                        React.createElement(Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(FormControl, { fullWidth: true, required: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u522B\u540D"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('otherName'), value: this.state.otherName })),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5206\u7C7B"),
                                React.createElement(Select, { className: this.props.classes.formLabelFont, value: this.state.type, onChange: this.handleChange('type'), input: React.createElement(Input, { name: "type", id: "type-simple" }) }, this.state.types.map((item, index) => {
                                    return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                }))),
                            React.createElement(FormControlLabel, { label: "\u5F00\u542F", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, className: this.props.classes.formControlMargin, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => this.setState({ isOpen: checked }), checked: this.state.isOpen }) }))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 }, onClick: this.handelSubmit }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(PageEdit);
