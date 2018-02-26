import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import ErrorIcon from 'material-ui-icons/ErrorOutline';
import Add from 'material-ui-icons/Add';
import Cached from 'material-ui-icons/Cached';
import Dialog, { DialogActions, DialogContent, DialogTitle, } from 'material-ui/Dialog';
const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
    },
};
class ArticleType extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleCloseTip = () => {
            this.setState({ openTip: false });
        };
        this.handleSubmit = () => {
            if (this.state.nodeLength > 0) {
                this.setState({
                    open: false,
                    openTip: true,
                });
            }
            else {
                this.setState({ open: false });
            }
        };
        this.state = {
            open: false,
            openTip: false,
            modalName: '产品中心',
            modalId: '',
            nodeLength: 0,
            treeData: [
                {
                    id: 1,
                    title: '产品中心',
                    children: [],
                },
                {
                    expanded: true,
                    id: 2,
                    title: '新闻资讯',
                    children: [
                        {
                            id: 21,
                            title: '媒体报道',
                            children: [],
                        },
                        {
                            id: 22,
                            title: '行业资讯',
                            children: [
                                {
                                    id: 221,
                                    title: '资讯1-1',
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 23,
                            title: '企业公告',
                            children: [],
                        },
                    ],
                },
                {
                    id: 3,
                    title: '视频中心',
                    children: [
                        {
                            id: 31,
                            title: '新闻XXX',
                            children: [],
                        },
                    ],
                },
                {
                    id: 4,
                    title: '其他资讯',
                    children: [
                        {
                            id: 41,
                            title: '0109资讯1-1',
                            children: [],
                        },
                        {
                            id: 42,
                            title: '0109资讯1-2',
                            children: [],
                        },
                    ],
                },
            ],
        };
    }
    render() {
        const handleClickRemove = (pro) => {
            this.setState({
                open: true,
                modalName: pro.node.title,
                modalId: pro.node.id,
                nodeLength: pro.node.children.length,
            });
        };
        return (React.createElement("div", null,
            React.createElement("div", { className: "top-action-module clearfix" },
                React.createElement("div", { className: "pull-left" },
                    React.createElement("p", { className: "crumbs" },
                        "CMS ",
                        React.createElement("b", null, "/"),
                        " \u6587\u7AE0\u7BA1\u7406"),
                    React.createElement("h4", { className: "title" }, "\u5206\u7C7B\u7BA1\u7406")),
                React.createElement("div", { className: "btn-group pull-right" },
                    React.createElement(Link, { to: '/cms/article/type/edit/' + 'add' },
                        React.createElement(IconButton, { className: this.props.classes.menuBtn, title: "\u65B0\u589E" },
                            React.createElement(Add, null))),
                    React.createElement(IconButton, { className: this.props.classes.menuBtn, title: "\u5237\u65B0" },
                        React.createElement(Cached, null)))),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("div", { className: "menus-manager" },
                    React.createElement(SortableTree, { treeData: this.state.treeData, onChange: treeData => this.setState({ treeData }), rowHeight: 40, generateNodeProps: (rowInfo) => ({
                            buttons: [
                                React.createElement(IconButton, { key: rowInfo.node.id, title: "\u7F16\u8F91" },
                                    React.createElement(Link, { to: '/cms/article/type/edit/' + rowInfo.node.id },
                                        React.createElement(ModeEdit, null))),
                                React.createElement(IconButton, { key: rowInfo.node.id, onClick: () => handleClickRemove(rowInfo), title: "\u5220\u9664" },
                                    React.createElement(DeleteIcon, null)),
                            ],
                        }) }))),
            React.createElement(Dialog, { open: this.state.open, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", className: "dialog-content-action" },
                React.createElement(DialogTitle, { id: "alert-dialog-title", className: "dialog-title" },
                    React.createElement(IconButton, { onClick: this.handleClose },
                        React.createElement(ClearIcon, null))),
                React.createElement(DialogContent, { className: "dialog-content" },
                    React.createElement("h4", null,
                        "\u786E\u5B9A\u8981\u5220\u9664\u5206\u7C7B\u540D\u79F0\"",
                        this.state.modalName,
                        "\"\u5417?")),
                React.createElement(DialogActions, { className: "dialog-actions" },
                    React.createElement(Button, { onClick: this.handleClose }, "\u53D6\u6D88"),
                    React.createElement(Button, { onClick: this.handleSubmit, autoFocus: true }, "\u786E\u8BA4\u63D0\u4EA4"))),
            React.createElement(Dialog, { open: this.state.openTip, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", className: "dialog-content-action dialog-tip" },
                React.createElement(DialogTitle, { id: "alert-dialog-title", className: "dialog-title" },
                    React.createElement(IconButton, { onClick: this.handleCloseTip },
                        React.createElement(ClearIcon, null))),
                React.createElement(DialogContent, { className: "dialog-content" },
                    React.createElement("h4", null,
                        React.createElement(IconButton, null,
                            React.createElement(ErrorIcon, null)),
                        "\u5220\u9664\u5931\u8D25\uFF01"),
                    React.createElement("p", null, "\u8981\u5220\u9664\u6B64\u5206\u7C7B\u5FC5\u987B\u5148\u5220\u9664\u5B50\u5C42\u7EA7\uFF01")))));
    }
}
export default withStyles(styles)(ArticleType);
