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
        'text-align': 'center',
        'padding': '0',
    },
    tableCellStatus: {
        'text-align': 'left',
        'padding-left': '12px',
        'padding-right': '0',
        'width': '40px',
    },
};
let id = 0;
function createData(check, name, description, version) {
    id += 1;
    return { id, check, name, description, version };
}
const list = [
    createData(false, 'notadd', '一些说明', '0.777'),
    createData(false, 'notadd2', '一些说明', '0.456'),
    createData(false, 'notadd3', '一些说明', '0.7777'),
    createData(false, 'notadd4', '一些说明', '0.77477'),
    createData(false, 'notadd5', '一些说明', '0.24325'),
];
class AddonImport extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checkedAll: false,
            rowsPerPage: 2,
            currentPage: 0,
        };
        this.handleChangeAll = (name) => (event) => {
            if (event.target.checked) {
                list.map(item => {
                    item.check = true;
                });
            }
            else {
                list.map(item => {
                    item.check = false;
                });
            }
            this.setState({
                [name]: event.target.checked,
            });
        };
        this.handleChange = (pro) => (event) => {
            this.state.checkedAll = true;
            pro.check = true;
            if (!event.target.checked) {
                pro.check = false;
            }
            list.map(item => {
                if (item.check === false) {
                    this.state.checkedAll = false;
                }
            });
            this.setState({
                [pro]: event.target.checked,
            });
        };
        this.handlePageClick = (data) => {
            this.setState({ currentPage: data.selected });
        };
    }
    render() {
        const { currentPage, rowsPerPage } = this.state;
        return (React.createElement("div", { className: "top-action-module" },
            React.createElement("p", { className: "crumbs" }, "\u5168\u5C40 / \u5E94\u7528\u7BA1\u7406 / \u63D2\u4EF6\u914D\u7F6E"),
            React.createElement("h4", { className: "title" }, "\u5BFC\u5165/\u5BFC\u51FA"),
            React.createElement("div", { className: "btn-group" },
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(FileUpload, null)),
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(FileDownload, null))),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement(Table, { className: this.props.classes.table },
                    React.createElement(TableHead, { className: "table-head" },
                        React.createElement(TableRow, null,
                            React.createElement(TableCell, { className: this.props.classes.tableCellStatus },
                                React.createElement(Checkbox, { checked: this.state.checkedAll, onChange: this.handleChangeAll('checkedAll'), value: "checkedAll" })),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u63D2\u4EF6\u540D\u79F0"),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u63CF\u8FF0"),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u7248\u672C"))),
                    React.createElement(TableBody, { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                        .map((n, index) => {
                        return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : '', key: n.id },
                            React.createElement(TableCell, { padding: "checkbox" },
                                React.createElement(Checkbox, { checked: n.check, onChange: this.handleChange(n), value: "n.check" })),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.description),
                            React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.version)));
                    }))),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: '<', nextLabel: '>', breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: 'break-me', pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: 'pagination', activeClassName: 'active' })))));
    }
}
export default withStyles(styles)(AddonImport);
