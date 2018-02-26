import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';
import Table, { TableBody, TableCell, TableHead, TableRow, } from 'material-ui/Table';
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
class ModuleOpen extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleChange = (pro) => (event, check) => {
            pro.use = check;
            this.setState({
                [pro]: check,
            });
        };
        this.changeCheckBox = (pro) => (event) => {
            pro.defaul = event.target.checked;
            this.setState({
                [pro]: event.target.checked,
            });
        };
        this.handlePageClick = (data) => {
            this.setState({ currentPage: data.selected });
        };
        this.state = {
            open: false,
            rowsPerPage: 2,
            currentPage: 0,
            list: [
                {
                    id: 11,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: true,
                    other: '/',
                    use: true,
                },
                {
                    id: 12,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
                {
                    id: 13,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
                {
                    id: 14,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
                {
                    id: 15,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
            ],
        };
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (React.createElement("div", null,
            React.createElement("p", { className: "crumbs" }, "\u5168\u5C40 / \u5E94\u7528\u7BA1\u7406 / \u6A21\u5757\u914D\u7F6E"),
            React.createElement("h4", { className: "title" }, "\u57DF\u540D\u914D\u7F6E"),
            React.createElement(Paper, { className: "root-paper" },
                React.createElement("div", { className: "table-hidden" },
                    React.createElement(Table, { className: this.props.classes.table },
                        React.createElement(TableHead, { className: "table-head" },
                            React.createElement(TableRow, null,
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u6A21\u5757\u540D\u79F0"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u57DF\u540D"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u9ED8\u8BA4"),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, "\u522B\u540D"),
                                React.createElement(TableCell, { numeric: true }, "\u4F7F\u7528\u57DF\u540D"))),
                        React.createElement(TableBody, { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                            .map((n, index) => {
                            return (React.createElement(TableRow, { hover: true, className: index % 2 === 0 ? this.props.classes.evenRow : '', key: n.id },
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.name),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.domain),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true },
                                    React.createElement(Checkbox, { className: "table-check-box", checked: n.defaul, onChange: this.changeCheckBox(n), value: "n.defaul" })),
                                React.createElement(TableCell, { className: this.props.classes.tableCell, numeric: true }, n.other),
                                React.createElement(TableCell, { numeric: true },
                                    React.createElement(Switch, { checked: n.use, onChange: this.handleChange(n), "aria-label": "n.use" }))));
                        })))),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: '<', nextLabel: '>', breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: 'break-me', pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: 'pagination', activeClassName: 'active' })))));
    }
}
export default withStyles(styles)(ModuleOpen);
