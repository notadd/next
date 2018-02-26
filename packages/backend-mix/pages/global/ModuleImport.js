import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FileDownload from 'material-ui-icons/FileDownload';
import FileUpload from 'material-ui-icons/FileUpload';
import Table, { TableBody, TableCell, TableHead, TableRow, } from 'material-ui/Table';
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
};
class ModuleImport extends React.Component {
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
                        window.console.log(i);
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
            checkedAll: false,
            rowsPerPage: 2,
            currentPage: 0,
            list: [
                {
                    id: 11,
                    check: false,
                    name: 'notadd',
                    description: '一些说明',
                    version: '0.777',
                },
                {
                    id: 12,
                    check: false,
                    name: 'notadd1',
                    description: '一些说明',
                    version: '0.456',
                },
                {
                    id: 13,
                    check: false,
                    name: 'notadd2',
                    description: '一些说明',
                    version: '0.777',
                },
                {
                    id: 14,
                    check: false,
                    name: 'notadd3',
                    description: '一些说明',
                    version: '0.777',
                },
                {
                    id: 15,
                    check: false,
                    name: 'notadd4',
                    description: '一些说明',
                    version: '0.7777',
                },
            ],
        };
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (React.createElement("div", null,
            React.createElement("div", { className: "top-action-module clearfix" },
                React.createElement("div", { className: "pull-left" },
                    React.createElement("p", { className: "crumbs" }, "\u5168\u5C40 / \u5E94\u7528\u7BA1\u7406 / \u6A21\u5757\u914D\u7F6E"),
                    React.createElement("h4", { className: "title" }, "\u5BFC\u5165/\u5BFC\u51FA")),
                React.createElement("div", { className: "btn-group pull-right" },
                    React.createElement(IconButton, { className: this.props.classes.menuBtn, title: "\u5BFC\u5165" },
                        React.createElement(FileUpload, null)),
                    React.createElement(IconButton, { className: this.props.classes.menuBtn, title: "\u5BFC\u51FA" },
                        React.createElement(FileDownload, null)))),
            React.createElement(Paper, { className: "root-paper" },
                React.createElement("div", { className: "table-hidden" },
                    React.createElement(Table, { className: this.props.classes.table },
                        React.createElement(TableHead, { className: "table-head" },
                            React.createElement(TableRow, null,
                                React.createElement(TableCell, { className: "table-cell-status", numeric: true },
                                    React.createElement(Checkbox, { checked: this.state.checkedAll, onChange: this.handleChangeAll('checkedAll'), value: "checkedAll" })),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u6A21\u5757\u540D\u79F0"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u63CF\u8FF0"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u7248\u672C"))),
                        React.createElement(TableBody, { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                            .map((n, index) => {
                            return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : '', key: n.id },
                                React.createElement(TableCell, { padding: "checkbox", className: "table-cell-status", numeric: true },
                                    React.createElement(Checkbox, { checked: n.check, onChange: this.handleChange(n), value: "n.check" })),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.description),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.version)));
                        })))),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: '<', nextLabel: '>', breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: 'break-me', pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: 'pagination', activeClassName: 'active' })))));
    }
}
export default withStyles(styles)(ModuleImport);
