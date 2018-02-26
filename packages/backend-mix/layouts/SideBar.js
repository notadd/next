import * as React from 'react';
import { NavLink } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import * as classNames from 'classnames';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMore from 'material-ui-icons/ExpandMore';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import ChatBubble from 'material-ui-icons/ChatBubble';
import Notifications from 'material-ui-icons/Notifications';
import Badge from 'material-ui/Badge';
import compose from 'recompose/compose';
import MailIcon from 'material-ui-icons/Mail';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import withWidth from 'material-ui/utils/withWidth';
import withStyles from 'material-ui/styles/withStyles';
const styles = {
    badge: {
        'box-sizing': 'border-box',
        'border': '2px solid #fff',
        'font-size': '12px',
        'height': '20px',
        'width': '20px',
    },
    root: {
        'width': '100%',
        'max-width': '260px',
        'background': '#fff',
    },
    childItem: {
        'background': '#f7f7f7',
        'padding': '0',
        'height': '40px',
    },
    innerRoot: {
        'background': '#ededed',
    },
    innerSelectBtn: {
        'background': '#e0e0e0',
        'color': '#333',
    },
    selectFirstLevelMenu: {
        'background': '#f7f7f7',
        'border-top': '1px solid #e0e0e0',
        'border-bottom': '1px solid #e0e0e0',
        'color': '#333333',
    },
};
class SideBar extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            navs: props.sideNav,
            open: props.open,
            user: {
                name: '管理员',
                email: 'zhhu_123@163.com',
                user_img: require('../assets/images/user.jpg'),
                message: 5,
            },
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            navs: nextProps.sideNav,
        });
    }
    componentDidMount() {
        const user = localStorage.getItem('notadd_user');
        if (user === null) {
            createHashHistory().push('/login');
            window.location.reload();
        }
        else {
            const userState = Object.assign(this.state.user);
            userState.name = JSON.parse(user).username;
            this.setState({ user: userState });
        }
    }
    handleCollapse(index, subIndex) {
        const sides = Object.assign({}, this.state.navs);
        if (subIndex === null) {
            Object.keys(sides).forEach(item => {
                if (item === index.toString()) {
                    sides[item].open = !sides[item].open;
                }
                else {
                    sides[item].open = false;
                }
            });
        }
        else {
            const childArr = sides[index].children;
            Object.keys(childArr).forEach(item => {
                if (item === subIndex.toString()) {
                    childArr[Number(item)].open = !childArr[Number(item)].open;
                }
                else {
                    childArr[Number(item)].open = false;
                }
            });
        }
        const arr = new Array();
        Object.keys(sides).forEach(item => {
            arr.push(sides[item]);
        });
        this.setState({ navs: arr });
    }
    handleEnterSub(index, subIndex) {
        const sides = Object.assign({}, this.state.navs);
        Object.keys(sides).forEach(item => {
            if (item === index.toString()) {
                sides[item].open = true;
            }
        });
        const arr = new Array();
        Object.keys(sides).forEach(item => {
            arr.push(sides[item]);
        });
        this.setState({ navs: arr });
    }
    handleMouseLeave() {
        const wd = this.props.width;
        const open = this.state.open;
        const condition = (open === false && ((wd === 'md') || (wd === 'lg') || (wd === 'xl'))) || (wd === 'sm');
        if (condition) {
            const sides = Object.assign({}, this.state.navs);
            Object.keys(sides).forEach(item => {
                sides[item].open = false;
            });
            const arr = new Array();
            Object.keys(sides).forEach(item => {
                arr.push(sides[item]);
            });
            this.setState({ navs: arr });
        }
    }
    render() {
        const { width, classes } = this.props;
        const wd = width;
        const open = this.state.open;
        const condition = (open === false && ((wd === 'md') || (wd === 'lg') || (wd === 'xl'))) || (wd === 'sm');
        return (React.createElement("div", { className: "sideBar" },
            React.createElement("div", { className: "userBox" },
                React.createElement("div", null,
                    React.createElement(Avatar, { alt: this.state.user.name, src: this.state.user.user_img, className: "bigAvatar" }),
                    React.createElement("div", { className: "user-right" },
                        React.createElement("p", null, this.state.user.name),
                        React.createElement("p", null, this.state.user.email),
                        React.createElement("div", null,
                            React.createElement(Badge, { className: classNames(this.props.classes.badge, 'badgeIcon'), classes: {
                                    colorAccent: this.props.classes.badge,
                                }, style: { border: 0 }, badgeContent: 4, color: "accent" },
                                React.createElement(Notifications, null)),
                            React.createElement(Badge, { className: classNames(this.props.classes.badge, 'badgeIcon'), classes: {
                                    colorAccent: this.props.classes.badge,
                                }, style: { border: 0, marginLeft: 30 }, badgeContent: 4, color: "accent" },
                                React.createElement(MailIcon, null)),
                            React.createElement(Badge, { className: classNames(this.props.classes.badge, 'badgeIcon'), classes: {
                                    colorAccent: this.props.classes.badge,
                                }, style: { border: 0, marginLeft: 30 }, badgeContent: 4, color: "accent" },
                                React.createElement(ChatBubble, null)))))),
            this.state.navs &&
                this.state.navs.map((item, index) => {
                    return (React.createElement(List, { className: this.props.classes.root, key: index, style: { paddingTop: 0, paddingBottom: 0 } },
                        condition ?
                            React.createElement(ListItem, { className: classNames(item.open ?
                                    this.props.classes.selectFirstLevelMenu : '', 'list-item', item.open ? 'selectFirstLevelMenu' : ''), onMouseEnter: () => this.handleCollapse(index, null), onMouseLeave: () => this.handleMouseLeave() },
                                React.createElement(Icon, { className: "list-icon", style: { color: 'inherit' } }, item.icon),
                                React.createElement(ListItemText, { className: "list-text", inset: true, style: { padding: 0 }, primary: item.name }))
                            :
                                React.createElement(ListItem, { button: true, onClick: () => this.handleCollapse(index, null), className: classNames(item.open ?
                                        this.props.classes.selectFirstLevelMenu : '', item.open ? 'selectFirstLevelMenu' : '') },
                                    React.createElement(Icon, { style: { color: 'inherit' } }, item.icon),
                                    React.createElement(ListItemText, { inset: true, style: { paddingLeft: 40 }, primary: item.name }),
                                    item.open ?
                                        React.createElement(ExpandMore, { style: {
                                                color: 'inherit',
                                                width: 20,
                                                height: 20,
                                            } })
                                        :
                                            React.createElement(KeyboardArrowRight, { style: {
                                                    color: 'inherit',
                                                    width: 20,
                                                    height: 20,
                                                } })),
                        item.children.length > 0
                            &&
                                React.createElement(Collapse, { component: "li", in: item.open, unmountOnExit: true },
                                    React.createElement(List, { disablePadding: true, style: {
                                            paddingTop: 0,
                                            paddingBottom: 0
                                        } }, item.children.map((child, childIndex) => {
                                        return (React.createElement(List, { style: {
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                            }, onMouseEnter: () => this.handleEnterSub(index, childIndex), onMouseLeave: () => this.handleMouseLeave(), key: index.toString() + childIndex },
                                            React.createElement(ListItem, { button: true, className: classNames(this.props.classes.childItem, child.open ? this.props.classes.innerRoot : '', child.open ? 'innerRootSelect' : ''), style: {
                                                    paddingRight: 25,
                                                } },
                                                child.hasOwnProperty('children')
                                                    && child.children.length ? (React.createElement(ListItemText, { onClick: () => this.handleCollapse(index, childIndex), style: { paddingLeft: 78 }, inset: true, primary: child.name })) : (React.createElement(NavLink, { to: child.path, activeClassName: "selectBtn", exact: true },
                                                    React.createElement(ListItemText, { style: { paddingLeft: 78 }, inset: true, primary: child.name }))),
                                                child.hasOwnProperty('children')
                                                    && child.children.length > 0
                                                    && child.open ? (React.createElement(ExpandMore, { style: {
                                                        color: 'inherit',
                                                        width: 20,
                                                        height: 20,
                                                    } })) : child.hasOwnProperty('children')
                                                    && child.children.length > 0
                                                    && child.open === false ? (React.createElement(KeyboardArrowRight, { style: {
                                                        color: 'inherit',
                                                        width: 20,
                                                        height: 20,
                                                    } })) : null),
                                            child.hasOwnProperty('children')
                                                && child.children.length
                                                ?
                                                    (React.createElement(Collapse, { component: "li", in: child.open, unmountOnExit: true },
                                                        React.createElement(List, { disablePadding: true, style: {
                                                                borderBottom: '1px solid #e0e0e0'
                                                            } }, child.children.map((inner, innerIndex) => (React.createElement(NavLink, { exact: true, to: inner.path, className: this.props
                                                                .classes
                                                                .innerRoot, activeClassName: classNames(classes
                                                                .innerSelectBtn, 'innerSelectBtn'), key: index.toString()
                                                                + childIndex
                                                                + innerIndex },
                                                            React.createElement(ListItemText, { style: {
                                                                    paddingLeft: 78
                                                                }, inset: true, primary: inner.name }))))))) : null));
                                    })))));
                })));
    }
}
export default compose(withStyles(styles), withWidth())(SideBar);
