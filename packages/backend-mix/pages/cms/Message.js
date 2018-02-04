import * as React from "react";
import withStyles from "material-ui/styles/withStyles";
import ReactPaginate from "react-paginate";
import Paper from "material-ui/Paper";
import ExpandMore from "material-ui-icons/ExpandMore";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import Collapse from "material-ui/transitions/Collapse";
const styles = {
    evenRow: {
        "background": "#f7f7f7",
    },
    root: {
        "padding": "40px 30px",
    },
    menuBtn: {},
};
class Message extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checkedAll: false,
            rowsPerPage: 4,
            currentPage: 0,
            open: false,
            modalId: "",
            modalName: "",
            list: [
                {
                    id: 1,
                    collapse: false,
                    name: "王先生1",
                    phone: "13999554621",
                    email: "ibenchu@qq.com",
                    time: "2017-12-01 13:34:35",
                    msg: "你好，我对贵公司的产品很有兴趣",
                },
                {
                    id: 2,
                    collapse: false,
                    name: "王先生2",
                    phone: "13999554621",
                    email: "ibenchu@qq.com",
                    time: "2017-12-01 13:34:35",
                    msg: "你好，我对贵公司的产品很有兴趣",
                },
                {
                    id: 3,
                    collapse: false,
                    name: "王先生3",
                    phone: "13999554621",
                    email: "ibenchu@qq.com",
                    time: "2017-12-01 13:34:35",
                    msg: "你好，我对贵公司的产品很有兴趣",
                },
                {
                    id: 4,
                    collapse: false,
                    name: "王先生4",
                    phone: "13999554621",
                    email: "ibenchu@qq.com",
                    time: "2017-12-01 13:34:35",
                    msg: "你好，我对贵公司的产品很有兴趣",
                },
                {
                    id: 5,
                    collapse: false,
                    name: "王先生5",
                    phone: "13999554621",
                    email: "ibenchu@qq.com",
                    time: "2017-12-01 13:34:35",
                    msg: "你好，我对贵公司的产品很有兴趣",
                },
            ],
        };
        this.handlePageClick = (data) => {
            this.setState({ currentPage: data.selected });
        };
        this.handleClick = (pro) => {
            pro.collapse = !pro.collapse;
            this.setState({
                [pro]: pro.collapse,
            });
        };
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (React.createElement("div", { className: "top-action-module cms-message" },
            React.createElement("p", { className: "crumbs" }, "CMS / \u4FE1\u606F\u7BA1\u7406"),
            React.createElement("h4", { className: "title" }, "\u5BA2\u6237\u7559\u8A00"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("ul", { className: "table-head" },
                    React.createElement("li", null),
                    React.createElement("li", null, "\u59D3\u540D"),
                    React.createElement("li", null, "\u7535\u8BDD"),
                    React.createElement("li", null, "\u90AE\u7BB1"),
                    React.createElement("li", null, "\u65F6\u95F4")),
                React.createElement("ul", { className: "table-body" }, list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                    .map((n, index) => {
                    return (React.createElement("li", { key: n.id },
                        React.createElement("div", { className: index % 2 === 0 ? this.props.classes.evenRow : "" },
                            React.createElement("div", { onClick: () => this.handleClick(n) }, n.collapse ?
                                React.createElement(ExpandMore, { style: {
                                        color: "#808080",
                                        width: 20,
                                        height: 20
                                    } }) :
                                React.createElement(KeyboardArrowRight, { style: {
                                        color: "#808080",
                                        width: 20,
                                        height: 20
                                    } })),
                            React.createElement("div", null, n.name),
                            React.createElement("div", null, n.phone),
                            React.createElement("div", null, n.email),
                            React.createElement("div", null, n.time)),
                        React.createElement(Collapse, { in: n.collapse, timeout: "auto", unmountOnExit: true, className: "collapse-msg" },
                            "\u7559\u8A00\uFF1A",
                            n.msg)));
                })),
                React.createElement("div", { className: "table-pagination" },
                    React.createElement(ReactPaginate, { previousLabel: "<", nextLabel: ">", breakLabel: React.createElement("a", { href: "javascript:;" }, "..."), breakClassName: "break-me", pageCount: list.length / rowsPerPage, marginPagesDisplayed: 2, pageRangeDisplayed: 2, onPageChange: this.handlePageClick, containerClassName: "pagination", activeClassName: "active" })))));
    }
}
export default withStyles(styles)(Message);
