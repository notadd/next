import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import ReactPaginate from 'react-paginate';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ModeEdit from 'material-ui-icons/ModeEdit';
import ClearIcon from 'material-ui-icons/Clear';
import ColorPicker from 'rc-color-picker';
import Tabs, { Tab } from 'material-ui/Tabs';
import Select from 'material-ui/Select';
import Switch from 'material-ui/Switch';
import { MenuItem } from 'material-ui/Menu';
import 'rc-color-picker/assets/index.css';
import Table, { TableBody, TableCell, TableHead, TableRow, } from 'material-ui/Table';
import Dialog, { DialogActions, DialogContent, DialogTitle, } from 'material-ui/Dialog';
const styles = {
    root: {},
    container: {
        'padding': '32px 30px 40px',
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
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'center',
        'padding': '0',
    },
    evenRow: {
        'background': '#f7f7f7',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#ffffff',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    },
    createBtn: {
        padding: 0,
        'line-height': '24px',
        'border-radius': '2px',
        'background-color': '#e0e0e0',
        'font-size': '12px',
        'margin-bottom': '10px',
        'min-height': '24px',
        'min-width': '80px',
    },
    btnEdit: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    },
    btnDelete: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#fff',
        'color': '#808080',
        'margin-left': '10px',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    },
};
class ArticleTypeEdit extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleChangeInput = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleChangeTab = (event, value) => {
            this.setState({ tab: value });
        };
        this.changeHandler = (pro) => {
            this.setState({
                color: pro.color,
            });
        };
        this.closeHandler = (pro) => {
            this.setState({
                color: pro.color,
            });
        };
        this.handleChange = (pro) => (event, check) => {
            pro.status = check;
            this.setState({
                [pro]: check,
            });
        };
        this.handleClickOpen = (pro) => {
            this.setState({
                modalName: pro.name,
                modalId: pro.id,
                open: true,
            });
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleSubmit = () => {
            this.setState({ open: false });
        };
        this.handlePageClick = (data) => {
            this.setState({ currentPage: data.selected });
        };
        let type = '';
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        }
        this.state = {
            tab: 0,
            typeName: 'NotAdd',
            otherName: 'news',
            color: '',
            description: '',
            link: 'www.baidu.com',
            pageType: type,
            type: '',
            types: [
                {
                    id: '12',
                    type: '分类1',
                },
                {
                    id: '13',
                    type: '分类2',
                },
                {
                    id: '14',
                    type: '分类3',
                },
            ],
            isCurrentType: true,
            isChildType: false,
            isAllTop: true,
            isPreTop: false,
            list: [
                {
                    id: 11,
                    sort: 1,
                    name: '新闻资讯',
                    status: false,
                },
                {
                    id: 12,
                    sort: 2,
                    name: '新闻资讯',
                    status: false,
                },
                {
                    id: 13,
                    sort: 4,
                    name: '新闻资讯',
                    status: false,
                },
                {
                    id: 14,
                    sort: 5,
                    name: '新闻资讯',
                    status: false,
                },
            ],
            open: false,
            modalId: '',
            modalName: '',
            rowsPerPage: 3,
            currentPage: 0,
        };
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (React.createElement("div", { className: "configurations" },
            React.createElement("p", { className: "crumbs" },
                "CMS ",
                React.createElement("b", null, "/"),
                " \u6587\u7AE0\u7BA1\u7406 / \u5206\u7C7B\u7BA1\u7406"),
            React.createElement("h4", { className: "title" }, this.state.pageType === '1' ? '新增' : '编辑'),
            React.createElement(Paper, null,
                React.createElement(Tabs, { className: "paper-tabs", value: this.state.tab, onChange: this.handleChangeTab, indicatorColor: "primary", textColor: "primary" },
                    React.createElement(Tab, { label: "\u57FA\u7840\u4FE1\u606F", className: "paper-tab" }),
                    React.createElement(Tab, { label: "\u6269\u5C55\u4FE1\u606F", className: "paper-tab" })),
                this.state.tab === 0 &&
                    React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                        React.createElement(Grid, { container: true, spacing: 40 },
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControl, { fullWidth: true, required: true },
                                    React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5206\u7C7B\u540D\u79F0"),
                                    React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                            underline: this.props.classes.underline,
                                        }, onChange: this.handleChangeInput('typeName'), value: this.state.typeName }))),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControl, { fullWidth: true, required: true },
                                    React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u522B\u540D"),
                                    React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                            underline: this.props.classes.underline,
                                        }, onChange: this.handleChangeInput('otherName'), value: this.state.otherName })))),
                        React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '12px' } },
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControl, { fullWidth: true },
                                    React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5185\u94FE"),
                                    React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                            underline: this.props.classes.underline,
                                        }, onChange: this.handleChangeInput('link'), value: this.state.link }))),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControl, { fullWidth: true },
                                    React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u63CF\u8FF0"),
                                    React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                            underline: this.props.classes.underline,
                                        }, onChange: this.handleChangeInput('description'), value: this.state.description })))),
                        React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '12px' } },
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControl, { fullWidth: true },
                                    React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont, style: { position: 'relative' } }, "\u989C\u8272"),
                                    React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                            underline: this.props.classes.underline,
                                        }, value: this.state.color, style: { marginTop: '0' } }),
                                    React.createElement(ColorPicker, { color: this.state.color, alpha: 30, onChange: this.changeHandler, onClose: this.closeHandler, placement: "bottomLeft", className: "form-color-picker" },
                                        React.createElement("span", { className: "rc-color-picker-trigger" })))),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControl, { fullWidth: true },
                                    React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u4E0A\u7EA7\u5206\u7C7B"),
                                    React.createElement(Select, { className: "form-select-underline", value: this.state.type, onChange: this.handleChangeInput('type'), input: React.createElement(Input, { name: "type" }) }, this.state.types.map((item, index) => {
                                        return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                    }))))),
                        React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '12px' } },
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControlLabel, { label: "\u663E\u793A\u5F53\u524D\u5206\u7C7B\u6587\u7AE0", classes: {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    }, control: React.createElement(Switch, { classes: {
                                            root: this.props.classes.switchHeight,
                                            default: this.props.classes.switchDefault,
                                        }, onChange: (event, checked) => {
                                            this.setState({ isCurrentType: checked });
                                        }, checked: this.state.isCurrentType }) })),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControlLabel, { label: "\u663E\u793A\u5168\u5C40\u7F6E\u9876\u6587\u7AE0", classes: {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    }, control: React.createElement(Switch, { classes: {
                                            root: this.props.classes.switchHeight,
                                            default: this.props.classes.switchDefault,
                                        }, onChange: (event, checked) => {
                                            this.setState({ isAllTop: checked });
                                        }, checked: this.state.isAllTop }) }))),
                        React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '12px' } },
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControlLabel, { label: "\u663E\u793A\u5B50\u7EA7\u5206\u7C7B\u6587\u7AE0", classes: {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    }, control: React.createElement(Switch, { classes: {
                                            root: this.props.classes.switchHeight,
                                            default: this.props.classes.switchDefault,
                                        }, onChange: (event, checked) => {
                                            this.setState({ isChildType: checked });
                                        }, checked: this.state.isChildType }) })),
                            React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                                React.createElement(FormControlLabel, { label: "\u663E\u793A\u4E0A\u7EA7\u7F6E\u9876\u6587\u7AE0", classes: {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    }, control: React.createElement(Switch, { classes: {
                                            root: this.props.classes.switchHeight,
                                            default: this.props.classes.switchDefault,
                                        }, onChange: (event, checked) => {
                                            this.setState({ isPreTop: checked });
                                        }, checked: this.state.isPreTop }) }))),
                        React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")),
                this.state.tab === 1 &&
                    React.createElement("div", { className: this.props.classes.container },
                        React.createElement(Button, { className: this.props.classes.createBtn },
                            React.createElement(Link, { to: '/cms/article/type/message/add', style: { color: '#808080' } }, "\u6DFB\u52A0\u4FE1\u606F\u9879")),
                        React.createElement("div", { className: "root-paper", style: { padding: 0 } },
                            React.createElement("div", { className: "table-hidden" },
                                React.createElement(Table, { className: this.props.classes.table },
                                    React.createElement(TableHead, { className: "table-head" },
                                        React.createElement(TableRow, null,
                                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u6392\u5E8F"),
                                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u4FE1\u606F\u9879\u540D\u79F0"),
                                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u662F\u5426\u5FC5\u586B"),
                                            React.createElement(TableCell, { numeric: true }))),
                                    React.createElement(TableBody, { className: "table-body" }, list.
                                        slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                                        .map((n, index) => {
                                        return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : '', key: n.id },
                                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.sort),
                                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true },
                                                React.createElement(Switch, { checked: n.status, onChange: this.handleChange(n), "aria-label": "n.status" })),
                                            React.createElement(TableCell, { className: "table-action-btn", numeric: true },
                                                React.createElement(Link, { to: '/cms/article/type/message/edit' },
                                                    React.createElement(IconButton, { className: this.props.classes.btnEdit, title: "\u7F16\u8F91" },
                                                        React.createElement(ModeEdit, null))),
                                                React.createElement(IconButton, { className: this.props.classes.btnDelete, onClick: () => this.handleClickOpen(n), title: "\u5220\u9664" },
                                                    React.createElement(DeleteIcon, null)))));
                                    }))))),
                        React.createElement("div", { className: "table-pagination" },
                            React.createElement(ReactPaginate, { previousLabel: '<', nextLabel: '>', breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: 'break-me', pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: 'pagination', activeClassName: 'active' })),
                        React.createElement(Dialog, { open: this.state.open, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", className: "dialog-content-action" },
                            React.createElement(DialogTitle, { id: "alert-dialog-title", className: "dialog-title" },
                                React.createElement(IconButton, { onClick: this.handleClose },
                                    React.createElement(ClearIcon, null))),
                            React.createElement(DialogContent, { className: "dialog-content" },
                                React.createElement("h4", null,
                                    "\u786E\u5B9A\u8981\u5220\u9664\u4FE1\u606F\u9879\u540D\u79F0\"",
                                    this.state.modalName,
                                    "\"\u5417?")),
                            React.createElement(DialogActions, { className: "dialog-actions" },
                                React.createElement(Button, { onClick: this.handleClose }, "\u53D6\u6D88"),
                                React.createElement(Button, { onClick: this.handleSubmit, autoFocus: true }, "\u786E\u8BA4\u63D0\u4EA4")))))));
    }
}
export default withStyles(styles)(ArticleTypeEdit);
