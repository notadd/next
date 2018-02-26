import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Search from 'material-ui-icons/Search';
import Add from 'material-ui-icons/Add';
import Cached from 'material-ui-icons/Cached';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Table, { TableBody, TableCell, TableHead, TableRow, } from 'material-ui/Table';
import Dialog, { DialogActions, DialogContent, DialogTitle, } from 'material-ui/Dialog';
import * as classNames from 'classnames';
const styles = {
    evenRow: {
        'background': '#f7f7f7',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
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
    root: {
        'padding': '40px 30px',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'left',
        'padding': '0',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    formLabelFont: {
        'font-size': '16px',
    },
    formControlMargin: {
        'margin-bottom': '34px',
    },
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
};
class Article extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleChangeAll = (name) => (event) => {
            const rowPage = this.state.rowsPerPage;
            const currentPage = this.state.currentPage + 1;
            if (event.target.checked) {
                for (let i = 0; i < this.state.list.length; i += 1) {
                    if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                        this.state.list[i].check = true;
                    }
                }
            }
            else {
                for (let i = 0; i < this.state.list.length; i += 1) {
                    if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                        this.state.list[i].check = false;
                    }
                }
            }
            this.setState({
                [name]: event.target.checked,
            });
        };
        this.handleChange = (pro) => (event) => {
            const rowPage = this.state.rowsPerPage;
            const currentPage = this.state.currentPage + 1;
            this.setState({
                checkedAll: true
            });
            pro.check = event.target.checked;
            for (let i = 0; i < this.state.list.length; i += 1) {
                if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                    if (this.state.list[i].check === false) {
                        this.setState({
                            checkedAll: false
                        });
                    }
                }
            }
            this.setState({
                [pro]: event.target.checked,
            });
        };
        this.handleClickRemove = (pro) => {
            this.setState({
                modalName: pro.name,
                modalId: pro.id,
                open: true,
                modalType: 0,
            });
        };
        this.handleBatchRemove = () => {
            const rowPage = this.state.rowsPerPage;
            const currentPage = this.state.currentPage + 1;
            const arr = new Array();
            for (let i = 0; i < this.state.list.length; i += 1) {
                if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                    if (this.state.list[i].check) {
                        arr.push(this.state.list[i].check);
                        this.setState({
                            open: true,
                            modalType: 1,
                            modalNum: arr.length,
                        });
                    }
                    else {
                        this.setState({
                            openMessageTip: true,
                            message: '请选择要删除的文章',
                        });
                    }
                }
            }
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleSubmit = () => {
            this.setState({ open: false });
        };
        this.handleCloseTip = () => {
            this.setState({ openMessageTip: false });
        };
        this.toggleDrawer = () => {
            this.setState({
                right: !this.state.right,
            });
        };
        this.handleChangeSearch = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
                current: val,
            });
        };
        this.handleChangeIsTop = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleChangeChild = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
        this.handleSubmitSearch = () => {
            this.setState({
                right: !this.state.right,
            });
        };
        this.handlePageClick = (data) => {
            const rowPage = this.state.rowsPerPage;
            const currentPage = this.state.currentPage + 1;
            for (let i = 0; i < this.state.list.length; i += 1) {
                if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                    if (this.state.list[i].check === true) {
                        this.state.list[i].check = false;
                    }
                }
            }
            this.setState({
                currentPage: data.selected,
                checkedAll: false,
            });
        };
        this.state = {
            right: false,
            checkedAll: false,
            rowsPerPage: 3,
            currentPage: 0,
            open: false,
            modalId: '',
            modalName: '',
            modalType: 0,
            modalNum: 0,
            openMessageTip: false,
            list: [
                {
                    id: 1,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯1',
                    time: '2017-12-01 13:20:59',
                },
                {
                    id: 2,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯2',
                    time: '2017-12-01 13:20:59',
                },
                {
                    id: 3,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯3',
                    time: '2017-12-01 13:20:59',
                },
                {
                    id: 4,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯4',
                    time: '2017-12-01 13:20:59',
                },
                {
                    id: 5,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯5',
                    time: '2017-12-01 13:20:59',
                },
                {
                    id: 6,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯4',
                    time: '2017-12-01 13:20:59',
                },
                {
                    id: 7,
                    check: false,
                    name: '标题名称测试标题名称测试标题名称测试标题名称测试',
                    type: '新闻资讯5',
                    time: '2017-12-01 13:20:59',
                },
            ],
            message: '',
            type: '',
            isTop: '',
            childType: '',
            types: [
                {
                    id: '12',
                    type: '新闻1',
                    children: [
                        {
                            id: '121',
                            type: '新闻1-1',
                        },
                        {
                            id: '122',
                            type: '新闻1-2',
                        },
                    ],
                },
                {
                    id: '13',
                    type: '新闻2',
                    children: [],
                },
                {
                    id: '14',
                    type: '新闻3',
                    children: [],
                },
            ],
            isTops: [
                {
                    id: '12',
                    type: '无',
                },
                {
                    id: '13',
                    type: '是',
                },
                {
                    id: '14',
                    type: '否',
                },
            ],
            keyword: '',
            options: [
                {
                    value: '110000',
                    label: '北京',
                    children: [
                        {
                            value: '110000',
                            label: '北京市',
                            children: [
                                {
                                    value: '110101',
                                    label: '东城区'
                                },
                                {
                                    value: '110102',
                                    label: '西城区'
                                },
                            ],
                        },
                    ],
                },
                {
                    value: '130000',
                    label: '河北省',
                    children: [
                        {
                            value: '130100',
                            label: '石家庄市',
                            children: [
                                {
                                    value: '130102',
                                    label: '长安区'
                                },
                                {
                                    value: '130104',
                                    label: '桥西区'
                                },
                            ],
                        },
                        {
                            value: '130200',
                            label: '唐山市',
                            children: [
                                {
                                    value: '130202',
                                    label: '路南区',
                                },
                            ],
                        },
                    ],
                },
            ],
            current: 1,
        };
    }
    render() {
        const { currentPage, rowsPerPage, list, modalType, openMessageTip, message } = this.state;
        return (React.createElement("div", { className: classNames('cms', this.state.right && 'move-cms') },
            React.createElement("div", { className: "top-action-module clearfix" },
                React.createElement("div", { className: "pull-left" },
                    React.createElement("p", { className: "crumbs" }, "CMS / \u6587\u7AE0\u7BA1\u7406"),
                    React.createElement("h4", { className: "title" }, "\u5168\u90E8\u6587\u7AE0")),
                React.createElement("div", { className: "btn-group pull-right" },
                    React.createElement(IconButton, { className: this.props.classes.menuBtn, onClick: this.toggleDrawer, title: "\u641C\u7D22" }, this.state.right ? React.createElement(Search, null) : React.createElement(Search, null)),
                    React.createElement(IconButton, { className: this.props.classes.menuBtn, onClick: this.handleBatchRemove, title: "\u5220\u9664" },
                        React.createElement(DeleteIcon, null)),
                    React.createElement(Link, { to: '/cms/article/edit/' + 'add' },
                        React.createElement(IconButton, { className: this.props.classes.menuBtn, title: "\u65B0\u589E" },
                            React.createElement(Add, null))),
                    React.createElement(IconButton, { className: this.props.classes.menuBtn, title: "\u5237\u65B0" },
                        React.createElement(Cached, null)))),
            React.createElement(Paper, { className: "root-paper" },
                React.createElement("div", { className: "table-hidden" },
                    React.createElement(Table, { className: this.props.classes.table },
                        React.createElement(TableHead, { className: "table-head" },
                            React.createElement(TableRow, null,
                                React.createElement(TableCell, { className: "table-cell-status" },
                                    React.createElement(Checkbox, { checked: this.state.checkedAll, onChange: this.handleChangeAll('checkedAll'), value: "checkedAll" })),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u6587\u7AE0\u540D\u79F0"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u5206\u7C7B"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u53D1\u5E03\u65F6\u95F4"),
                                React.createElement(TableCell, { numeric: true }))),
                        React.createElement(TableBody, { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                            .map((n, index) => {
                            return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : '', key: n.id },
                                React.createElement(TableCell, { padding: "checkbox", className: "table-cell-status" },
                                    React.createElement(Checkbox, { checked: n.check, onChange: this.handleChange(n), value: "n.check" })),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.type),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.time),
                                React.createElement(TableCell, { className: "table-action-btn", numeric: true },
                                    React.createElement(Link, { to: '/cms/article/edit/' + n.id },
                                        React.createElement(IconButton, { className: this.props.classes.btnEdit, title: "\u7F16\u8F91" },
                                            React.createElement(ModeEdit, null))),
                                    React.createElement(IconButton, { className: this.props.classes.btnDelete, onClick: () => this.handleClickRemove(n), title: "\u5220\u9664" },
                                        React.createElement(DeleteIcon, null)))));
                        })))),
                React.createElement(Snackbar, { className: "message-snack-bar", anchorOrigin: { vertical: 'top', horizontal: 'right' }, open: openMessageTip, onClose: this.handleCloseTip, SnackbarContentProps: {
                        'aria-describedby': 'message-id',
                    }, message: React.createElement("span", { id: "message-id" }, message) }),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: '<', nextLabel: '>', breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: 'break-me', pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: 'pagination', activeClassName: 'active' }))),
            React.createElement(Dialog, { open: this.state.open, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", className: "dialog-content-action" },
                React.createElement(DialogTitle, { id: "alert-dialog-title", className: "dialog-title" },
                    React.createElement(IconButton, { onClick: this.handleClose },
                        React.createElement(ClearIcon, null))),
                React.createElement(DialogContent, { className: "dialog-content" }, modalType === 0 ? React.createElement("h4", null,
                    "\u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0\u540D\u79F0\"",
                    this.state.modalName,
                    "\"\u5417?") :
                    React.createElement("h4", null,
                        "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\"",
                        this.state.modalNum,
                        "\"\u4E2A\u6587\u7AE0\u5417?")),
                React.createElement(DialogActions, { className: "dialog-actions" },
                    React.createElement(Button, { onClick: this.handleClose }, "\u53D6\u6D88"),
                    React.createElement(Button, { onClick: this.handleSubmit, autoFocus: true }, "\u786E\u8BA4\u63D0\u4EA4"))),
            React.createElement(Drawer, { className: "search-side", anchor: "right", open: this.state.right },
                React.createElement("div", { className: "search-side-content", tabIndex: 0, role: "button" },
                    React.createElement(Paper, { className: this.props.classes.root },
                        React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u6587\u7AE0\u5206\u7C7B"),
                                React.createElement(Select, { className: this.props.classes.formLabelFont, value: this.state.type, onChange: this.handleChangeSearch('type'), input: React.createElement(Input, { name: "type" }) }, this.state.types.map((item, index) => {
                                    return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                })),
                                this.state.types[this.state.current].children.length > 0 ?
                                    React.createElement(FormControl, { fullWidth: true, style: { marginTop: '4px' } },
                                        React.createElement(Select, { className: this.props.classes.formLabelFont, value: this.state.childType, onChange: this.handleChangeChild('childType'), input: React.createElement(Input, { name: "type" }) }, this.state.types[this.state.current]
                                            .children.map((sub, i) => {
                                            return (React.createElement(MenuItem, { className: "input-drop-paper", value: i, key: i }, sub.type));
                                        }))) : React.createElement("div", null)),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u662F\u5426\u7F6E\u9876"),
                                React.createElement(Select, { className: this.props.classes.formLabelFont, value: this.state.isTop, onChange: this.handleChangeIsTop('isTop'), input: React.createElement(Input, { name: "type" }) }, this.state.isTops.map((item, index) => {
                                    return (React.createElement(MenuItem, { className: "input-drop-paper", value: index, key: index }, item.type));
                                }))),
                            React.createElement(FormControl, { fullWidth: true, className: this.props.classes.formControlMargin },
                                React.createElement(InputLabel, { className: this.props.classes.formLabelFont }, "\u5173\u952E\u5B57"),
                                React.createElement(Input, { className: this.props.classes.formLabelFont, classes: {
                                        underline: this.props.classes.underline,
                                    }, onChange: this.handleChangeSearch('keyword'), value: this.state.keyword })),
                            React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 2, fontSize: 12, borderRadius: 4 }, onClick: this.handleSubmitSearch }, "\u641C\u7D22")))))));
    }
}
export default withStyles(styles)(Article);
