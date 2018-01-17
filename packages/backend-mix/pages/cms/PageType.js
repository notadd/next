import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';
import ModeEdit from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Add from 'material-ui-icons/Add';
import Cached from 'material-ui-icons/Cached';
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
class PageType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [{}],
        };
        this.handleClickEdit = (pro) => {
            window.console.log(pro);
        };
        this.state = {
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
        return (React.createElement("div", { className: "top-action-module" },
            React.createElement("p", { className: "crumbs" },
                "CMS ",
                React.createElement("b", null, "/"),
                " \u9875\u9762\u7BA1\u7406"),
            React.createElement("h4", { className: "title" }, "\u5206\u7C7B\u7BA1\u7406"),
            React.createElement("div", { className: "btn-group" },
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(DeleteIcon, null)),
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(Add, null)),
                React.createElement(IconButton, { className: this.props.classes.menuBtn },
                    React.createElement(Cached, null))),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("div", { className: "menus-manager" },
                    React.createElement(SortableTree, { treeData: this.state.treeData, onChange: treeData => this.setState({ treeData }), getNodeKey: ({ node }) => node.id, generateNodeProps: ({ node, path }) => ({
                            buttons: [
                                React.createElement(IconButton, { onClick: () => this.handleClickEdit(node) },
                                    React.createElement(ModeEdit, null)),
                            ],
                        }) })))));
    }
}
export default withStyles(styles)(PageType);
