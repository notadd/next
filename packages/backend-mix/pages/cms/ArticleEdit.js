import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Editor from '../../components/Editor';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';
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
    editor: {},
};
class ArticleEdit extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleDateChange = (date) => {
            this.setState({ time: date });
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleEditorChange = (content, id) => {
            this.setState({
                editor: {
                    content: content,
                }
            });
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
        };
        this.getImgURL = (event) => {
            this.setState({
                img: event.target.value.substr(12),
            });
        };
        let type = '';
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        }
        this.state = {
            webName: 'NotAdd',
            img: 'LOGO.png',
            type: '',
            topType: '',
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
            topTypes: [
                {
                    id: '00',
                    type: '全局',
                },
                {
                    id: '01',
                    type: '一级分类',
                },
                {
                    id: '02',
                    type: '二级分类',
                },
                {
                    id: '03',
                    type: '三级分类',
                },
                {
                    id: '04',
                    type: '当前分类',
                },
            ],
            abstract: '',
            time: moment(),
            link: 'http://',
            origin: 'www.ibenchu.com',
            kind: '新闻资讯',
            isHidden: false,
            pageType: type,
            path: 'neditor/',
            editor: {
                id: 0,
                content: '',
            },
        };
    }
    render() {
        return (React.createElement("div", { className: "top-action-module cms" },
            React.createElement("p", { className: "crumbs" }, "CMS / \u6587\u7AE0\u7BA1\u7406 / \u5168\u90E8\u6587\u7AE0"),
            React.createElement("h4", { className: "title" }, this.state.pageType === '1' ? '新增' : '编辑'),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 24 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 8, style: { paddingRight: '40px' }, className: "grid-editor-module" },
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u6587\u7AE0\u6807\u9898"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('webName'), value: this.state.webName })),
                            React.createElement("div", { className: "editor" },
                                React.createElement(Editor, { path: this.state.path, editor: this.state.editor, handleEditorChange: this.handleEditorChange }))),
                        React.createElement(Grid, { item: true, xs: 12, sm: 4 },
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin, style: { position: 'relative' } },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u7F29\u7565\u56FE"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, value: this.state.img }),
                                React.createElement(Input, { type: "file", className: "upload-image", onChange: this.getImgURL, classes: {
                                        underline: this.props.classes.underline,
                                    } })),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u5206\u7C7B"),
                                React.createElement(Select, { className: "form-select-underline", value: this.state.type, onChange: this.handleChange('type'), input: React.createElement(Input, { name: "type" }) }, this.state.types.map((item, index) => {
                                    return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                }))),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u6458\u8981"),
                                React.createElement(Input, { multiline: true, rowsMax: "3", rows: "3", classes: {
                                        underline: this.props.classes.underline,
                                    }, className: this.props.classes.formLabelFont, onChange: this.handleChange('abstract'), value: this.state.abstract })),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u7F6E\u9876"),
                                React.createElement(Select, { className: "form-select-underline", value: this.state.topType, onChange: this.handleChange('topType'), input: React.createElement(Input, { name: "type", id: "type-simple" }) }, this.state.topTypes.map((item, index) => {
                                    return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                }))),
                            React.createElement(FormControlLabel, { label: "\u9690\u85CF", classes: {
                                    root: this.props.classes.formLabel,
                                    label: this.props.classes.formLabel
                                }, className: this.props.classes.formControlMargin, control: React.createElement(Switch, { classes: {
                                        root: this.props.classes.switchHeight,
                                        default: this.props.classes.switchDefault,
                                    }, onChange: (event, checked) => {
                                        this.setState({ isHidden: checked });
                                    }, checked: this.state.isHidden }) }),
                            React.createElement(DatePicker, { className: "data-picker", style: { marginBottom: '32px' }, keyboard: true, clearable: true, returnMoment: true, format: "MMMM Do, YYYY", label: "\u53D1\u5E03\u65F6\u95F4", value: this.state.time, onChange: this.handleDateChange, animateYearScrolling: false }),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u6765\u6E90"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('origin'), value: this.state.origin })),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u6765\u6E90\u94FE\u63A5"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChange('link'), value: this.state.link })))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 }, onClick: this.handleSubmit }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(ArticleEdit);
