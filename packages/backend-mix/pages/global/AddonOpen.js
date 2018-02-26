import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import Switch from 'material-ui/Switch';
import Table, { TableBody, TableCell, TableHead, TableRow, } from 'material-ui/Table';
import Dialog, { DialogActions, DialogContent, DialogTitle, } from 'material-ui/Dialog';
const styles = {
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
    root: {
        'padding': '40px 30px',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'center',
        'padding': '0',
    },
};
class AddonOpen extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleChange = (pro) => (event, checked) => {
            pro.status = checked;
            this.setState({
                [pro]: checked,
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
        this.handlePageClick = (data) => {
            this.setState({ currentPage: data.selected });
        };
        this.state = {
            open: false,
            modalId: '',
            modalName: '',
            rowsPerPage: 2,
            currentPage: 0,
            list: [
                {
                    id: 11,
                    name: '用户中心',
                    author: 'Mark',
                    descri: '一键分析项目源码，直观了解项目代码质量，提供代码安全扫描功能',
                    status: true,
                },
                {
                    id: 12,
                    name: '商城',
                    author: 'Mark',
                    descri: 'fefreg',
                    status: true,
                },
                {
                    id: 13,
                    name: '商家',
                    author: 'Mark',
                    descri: 'fefreg',
                    status: false,
                },
                {
                    id: 14,
                    name: 'CMS',
                    author: 'Mark',
                    descri: 'fefreg',
                    status: false,
                },
                {
                    id: 15,
                    name: 'Notadd2',
                    author: 'Mark',
                    descri: 'fefreg',
                    status: true,
                },
            ],
        };
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (React.createElement("div", null,
            React.createElement("p", { className: "crumbs" }, "\u5168\u5C40 / \u5E94\u7528\u7BA1\u7406 / \u63D2\u4EF6\u914D\u7F6E"),
            React.createElement("h4", { className: "title" }, "\u5F00\u542F\u63D2\u4EF6"),
            React.createElement(Paper, { className: "root-paper" },
                React.createElement("div", { className: "table-hidden" },
                    React.createElement(Table, { className: this.props.classes.table },
                        React.createElement(TableHead, { className: "table-head" },
                            React.createElement(TableRow, null,
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u63D2\u4EF6\u540D\u79F0"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u4F5C\u8005"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u63CF\u8FF0"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u72B6\u6001"),
                                React.createElement(TableCell, { numeric: true }))),
                        React.createElement(TableBody, { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                            .map((n, index) => {
                            return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : '', key: n.id },
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.author),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.descri),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true },
                                    React.createElement(Switch, { checked: n.status, onChange: this.handleChange(n), "aria-label": "n.status" })),
                                React.createElement(TableCell, { numeric: true },
                                    React.createElement(IconButton, { className: this.props.classes.menuBtn, onClick: () => this.handleClickOpen(n), title: "\u5220\u9664" },
                                        React.createElement(DeleteIcon, null)))));
                        })))),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: '<', nextLabel: '>', breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: 'break-me', pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: 'pagination', activeClassName: 'active' }))),
            React.createElement(Dialog, { open: this.state.open, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", className: "dialog-content-action" },
                React.createElement(DialogTitle, { id: "alert-dialog-title", className: "dialog-title" },
                    React.createElement(IconButton, { onClick: this.handleClose },
                        React.createElement(ClearIcon, null))),
                React.createElement(DialogContent, { className: "dialog-content" },
                    React.createElement("h4", null,
                        "\u786E\u5B9A\u8981\u5220\u9664\u63D2\u4EF6\u540D\u79F0\"",
                        this.state.modalName,
                        "\"\u5417?")),
                React.createElement(DialogActions, { className: "dialog-actions" },
                    React.createElement(Button, { onClick: this.handleClose }, "\u53D6\u6D88"),
                    React.createElement(Button, { onClick: this.handleClose, autoFocus: true }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(AddonOpen);
