import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import ReactPaginate from "react-paginate";
import Paper from "material-ui/Paper";
import Checkbox from "material-ui/Checkbox";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import ClearIcon from "material-ui-icons/Clear";
import ReplyAll from "material-ui-icons/ReplyAll";
import Cached from "material-ui-icons/Cached";
import Table, { TableBody, TableCell, TableHead, TableRow, } from "material-ui/Table";
import Dialog, { DialogActions, DialogContent, DialogTitle, } from "material-ui/Dialog";
const styles = {
    evenRow: {
        "background": "#f7f7f7",
    },
    menuBtn: {
        "width": "32px",
        "height": "32px",
        "border-radius": "50%",
        "background-color": "#3f51b5",
        "color": "#fff",
        "margin-left": "10px",
    },
    btnEdit: {
        "width": "32px",
        "height": "32px",
        "border-radius": "50%",
        "background-color": "#3f51b5",
        "color": "#fff",
        "margin-left": "10px",
        "box-shadow": "0px 2px 4px 0 rgba(0, 0, 0, 0.3)",
    },
    btnDelete: {
        "width": "32px",
        "height": "32px",
        "border-radius": "50%",
        "background-color": "#fff",
        "color": "#808080",
        "margin-left": "10px",
        "box-shadow": "0px 2px 4px 0 rgba(0, 0, 0, 0.3)",
    },
    root: {
        "padding": "40px 30px",
    },
    table: {
        "border-top": "1px solid rgba(235, 235, 235, 1)",
        "border-collapse": "inherit",
    },
    tableCell: {
        "text-align": "left",
        "padding": "0",
    },
    tableCellStatus: {
        "text-align": "left",
        "padding-left": "0",
        "padding-right": "0",
        "width": "40px",
    },
};
class ArticleRecycle extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checkedAll: false,
            rowsPerPage: 2,
            currentPage: 0,
            open: false,
            modalId: "",
            modalName: "",
            list: [
                {
                    id: 1,
                    check: false,
                    name: "标题名称测试标题名称测试标题名称测试标题名称测试",
                    author: "新闻资讯1",
                },
                {
                    id: 2,
                    check: false,
                    name: "标题名称测试标题名称测试标题名称测试标题名称测试",
                    author: "新闻资讯2",
                },
                {
                    id: 3,
                    check: false,
                    name: "标题名称测试标题名称测试标题名称测试标题名称测试",
                    author: "新闻资讯3",
                },
                {
                    id: 4,
                    check: false,
                    name: "标题名称测试标题名称测试标题名称测试标题名称测试",
                    author: "新闻资讯4",
                },
                {
                    id: 5,
                    check: false,
                    name: "标题名称测试标题名称测试标题名称测试标题名称测试",
                    author: "新闻资讯5",
                },
            ],
        };
        this.handleChangeAll = (name) => (event) => {
            if (event.target.checked) {
                this.state.list.map(item => {
                    item.check = true;
                });
            }
            else {
                this.state.list.map(item => {
                    item.check = false;
                });
            }
            this.setState({
                [name]: event.target.checked,
            });
        };
        this.handleClickEdit = (pro) => {
            window.console.log(pro);
        };
        this.handleChange = (pro) => (event) => {
            this.state.checkedAll = true;
            pro.check = true;
            if (!event.target.checked) {
                pro.check = false;
            }
            this.state.list.map(item => {
                if (item.check === false) {
                    this.state.checkedAll = false;
                }
            });
            this.setState({
                [pro]: event.target.checked,
            });
        };
        this.handleClickRemove = (pro) => {
            this.state.modalName = pro.name;
            this.state.modalId = pro.id;
            this.setState({
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
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (React.createElement("div", { className: "top-action-module cms" },
            React.createElement("p", { className: "crumbs" }, "CMS / \u6587\u7AE0\u7BA1\u7406"),
            React.createElement("h4", { className: "title" }, "\u56DE\u6536\u7AD9"),
            React.createElement("div", { className: "btn-group" },
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(DeleteIcon, null)),
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(Cached, null))),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement(Table, { className: this.props.classes.table },
                    React.createElement(TableHead, { className: "table-head" },
                        React.createElement(TableRow, null,
                            React.createElement(TableCell, { className: this.props.classes.tableCellStatus },
                                React.createElement(Checkbox, { checked: this.state.checkedAll, onChange: this.handleChangeAll("checkedAll"), value: "checkedAll" })),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u6587\u7AE0\u540D\u79F0"),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u4F5C\u8005"),
                            React.createElement(TableCell, { numeric: true }))),
                    React.createElement(TableBody, { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                        .map((n, index) => {
                        return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : "", key: n.id },
                            React.createElement(TableCell, { padding: "checkbox", className: this.props.classes.tableCellStatus },
                                React.createElement(Checkbox, { checked: n.check, onChange: this.handleChange(n), value: "n.check" })),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.author),
                            React.createElement(TableCell, { numeric: true },
                                React.createElement(IconButton, { className: this.props.classes.btnEdit, onClick: () => this.handleClickEdit(n) },
                                    React.createElement(ReplyAll, null)),
                                React.createElement(IconButton, { className: this.props.classes.btnDelete, onClick: () => this.handleClickRemove(n) },
                                    React.createElement(DeleteIcon, null)))));
                    }))),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: "<", nextLabel: ">", breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: "break-me", pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: "pagination", activeClassName: "active" }))),
            React.createElement(Dialog, { open: this.state.open, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", className: "dialog-content" },
                React.createElement(DialogTitle, { id: "alert-dialog-title", className: "dialog-title" },
                    React.createElement(IconButton, { onClick: this.handleClose },
                        React.createElement(ClearIcon, null))),
                React.createElement(DialogContent, { className: "dialog-content" },
                    React.createElement("h4", null,
                        "\u786E\u5B9A\u8981\u5220\u9664\u6587\u7AE0\u540D\u79F0\"",
                        this.state.modalName,
                        "\"\u5417?")),
                React.createElement(DialogActions, { className: "dialog-actions" },
                    React.createElement(Button, { onClick: this.handleClose }, "\u53D6\u6D88"),
                    React.createElement(Button, { onClick: this.handleSubmit, autoFocus: true }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(ArticleRecycle);
