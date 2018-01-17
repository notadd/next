import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Side from '../layouts/SideBar';
import Home from './Home';
import Configurations from './Configurations';
import Debug from './Debug';
import Extension from './Extension';
import Login from './Login';
import Mail from './Mail';
import Menus from './Menus';
import MenuEdit from './MenuEdit';
import Seo from './Seo';
import Upload from './Upload';
import ModuleOpen from './ModuleOpen';
import ModuleDomain from './ModuleDomain';
import ModuleImport from './ModuleImport';
import ModuleInstall from './ModuleInstall';
import AddonOpen from './AddonOpen';
import AddonImport from './AddonImport';
import AddonInstall from './AddonInstall';
import Article from './cms/Article';
import ArticleEdit from './cms/ArticleEdit';
import ArticleType from './cms/ArticleType';
import ArticleTypeEdit from './cms/ArticleTypeEdit';
import ArticleRecycle from './cms/ArticleRecycle';
import Page from './cms/Page';
import PageEdit from './cms/PageEdit';
import PageType from './cms/PageType';
import Message from './cms/Message';
import { HashRouter } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Setting from 'material-ui-icons/Settings';
import MenuIcon from 'material-ui-icons/Menu';
import FullScreen from 'material-ui-icons/Fullscreen';
import Search from 'material-ui-icons/Search';
import Tv from 'material-ui-icons/Tv';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Select from 'react-select';
import createHashHistory from 'history/createHashHistory';
import { withStyles } from 'material-ui/styles';
import 'react-select/dist/react-select.css';
import * as classNames from 'classnames';
const drawerWidth = 260;
const styles = (theme) => ({
    drawerPaper: {
        height: 'calc(100vh - 70px)',
        width: drawerWidth,
        position: 'relative',
        boxShadow: '3px 0 6px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
    xsDrawerPaper: {
        height: 'calc(100vh - 70px)',
        width: drawerWidth,
        position: 'fixed',
        zIndex: 500,
        top: 70,
        boxShadow: '3px 0 6px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
    drawerPaperClose: {
        width: 90,
        overflowX: 'hidden',
        position: 'relative',
        transform: 'translateX(0) !important',
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
    xsDrawerPaperClose: {
        width: 0,
        overflowX: 'hidden',
        position: 'fixed',
        zIndex: 500,
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
    headerLeft: {
        'align-items': 'center',
        display: 'flex',
    },
    logo: {
        marginLeft: '30px',
        width: '88px',
    },
    root: {
        background: '#3f51b5',
        color: '#fff',
        paddingLeft: '15px',
        height: '70px',
        'justify-content': 'flex-start',
    },
    menuBtn: {
        'align-self': 'stretch',
        borderRadius: 0,
        height: 'auto',
        fontSize: '24px',
        marginLeft: '60px',
        '&:hover': {
            background: '#3949a3',
        },
    },
    navBtn: {
        flex: 'none',
        padding: '0 3px',
        width: 'auto',
        fontSize: '14px',
        '&:hover': {
            background: '#3949a3',
        },
    },
    btnLabel: {
        color: '#fff',
        fontSize: '14px',
    },
    selectedLabel: {
        color: '#ffffff',
    },
    selectRoot: {
        background: '#3949a3',
    },
    navUser: {
        'align-items': 'center',
        display: 'flex',
        float: 'right',
        'justify-content': 'center',
    },
    iconBtn: {
        fontSize: '18px',
        width: '28px',
    },
    textFieldRoot: {
        padding: 0,
    },
    textFieldInput: {
        fontSize: 12,
        boxSizing: 'border-box',
        padding: '0 30px 0 58px',
        height: 70,
        width: '100%'
    },
    popPaper: {
        position: 'fixed',
        left: '0 !important',
        top: '0 !important',
        boxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: 0,
        width: '330px',
        maxWidth: '100vw',
        overflowX: 'visible',
        overflowY: 'visible',
    },
});
const stylesType = {};
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
            current: 1,
            navs: [
                {
                    name: '全局',
                    path: '/all',
                },
                {
                    name: 'CMS',
                    path: '/cms',
                },
                {
                    name: '商城',
                    path: '/mall',
                },
                {
                    name: '用户中心',
                    path: '/user',
                },
                {
                    name: '微信',
                    path: '/weChat',
                },
                {
                    name: '论坛',
                    path: '/bbs',
                }
            ],
            value: 0,
            user: {
                name: '后台管理员',
            },
            fullScreen: false,
            openSearch: false,
            selectedOption: {
                value: '',
                url: '',
            },
            selectOptions: [
                {
                    value: '参数配置',
                    label: '参数配置',
                    url: '/configurations',
                },
                {
                    value: 'SEO设置',
                    label: 'SEO设置',
                    url: '/seo',
                },
            ],
        };
        this.toggleDrawer = () => {
            this.setState({
                open: !this.state.open,
            });
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
        this.handleOpenSearch = () => {
            this.setState({ openSearch: true });
        };
        this.handleFullScreen = () => {
            this.setState({ fullScreen: !this.state.fullScreen });
            if (this.state.fullScreen) {
                const el = document;
                let cfs;
                if (el.webkitCancelFullScreen) {
                    cfs = el.webkitCancelFullScreen;
                }
                else if (el['mozCancelFullScreen']) {
                    cfs = el['mozCancelFullScreen'];
                }
                else if (el['exitFullScreen']) {
                    cfs = el['exitFullScreen'];
                }
                else if (el['cancelFullScreen']) {
                    cfs = el['cancelFullScreen'];
                }
                let wscript;
                if (typeof cfs !== 'undefined' && cfs) {
                    cfs.call(el);
                    return;
                }
                if (typeof window['ActiveXObject'] !== 'undefined') {
                    wscript = new window['ActiveXObject']('WScript.Shell');
                    if (wscript !== null) {
                        wscript.SendKeys('{F11}');
                    }
                }
            }
            else {
                const el = document.documentElement;
                const rfs = el.webkitRequestFullScreen
                    || el['mozRequestFullScreen']
                    || el['msRequestFullScreen']
                    || el['requestFullScreen'];
                let wscript;
                if (typeof rfs !== 'undefined' && rfs) {
                    rfs.call(el);
                    return;
                }
                if (typeof window['ActiveXObject'] !== 'undefined') {
                    wscript = new window['ActiveXObject']('WScript.Shell');
                    if (wscript) {
                        wscript.SendKeys('{F11}');
                    }
                }
            }
        };
        this.handleClose = () => {
            this.setState({
                openSearch: false,
            });
        };
        this.handleChangeSelect = (selectedOption) => {
            this.setState({ selectedOption });
            createHashHistory().push(selectedOption['url']);
        };
    }
    render() {
        const { value, openSearch, selectedOption, selectOptions } = this.state;
        const { classes } = this.props;
        const selectValue = selectedOption && selectedOption.value;
        return (React.createElement(HashRouter, { basename: "/" },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/login", component: Login }),
                React.createElement(Route, { strict: true, path: "/", children: () => {
                        return (React.createElement("div", { className: "main-view" },
                            React.createElement("div", { className: "header" },
                                React.createElement("div", { className: this.props.classes.headerLeft },
                                    React.createElement(Link, { to: "/home" },
                                        React.createElement("img", { className: this.props.classes.logo, src: require('../assets/images/notadd_logo.png') })),
                                    React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", className: this.props.classes.menuBtn, color: "contrast", onClick: this.toggleDrawer },
                                        React.createElement(MenuIcon, null)),
                                    React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", style: { marginLeft: '0' }, className: this.props.classes.menuBtn, onClick: this.handleFullScreen, color: "contrast" },
                                        React.createElement(FullScreen, null)),
                                    React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", style: { marginLeft: '0' }, className: this.props.classes.menuBtn, onClick: this.handleOpenSearch, color: "contrast" },
                                        React.createElement(Search, null)),
                                    React.createElement(Popover, { open: openSearch, anchorPosition: { top: 0, left: 0 }, anchorOrigin: {
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }, transformOrigin: {
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }, classes: {
                                            paper: classes.popPaper
                                        }, onClose: this.handleClose },
                                        React.createElement(Search, { className: "search-icon" }),
                                        React.createElement(Select, { name: "form-field-name", className: "searchSelect", value: selectValue, placeholder: "请输入关键词...", onChange: this.handleChangeSelect, options: selectOptions })),
                                    React.createElement(BottomNavigation, { value: value, onChange: this.handleChange, showLabels: true, className: this.props.classes.root }, this.state.navs.map((item, index) => {
                                        return (React.createElement(BottomNavigationButton, { classes: {
                                                root: this.props.classes.navBtn,
                                                label: this.props.classes.btnLabel,
                                                selected: this.props.classes.selectRoot,
                                                selectedLabel: this.props.classes.selectedLabel,
                                            }, key: index, label: item.name }));
                                    }))),
                                React.createElement("div", { className: this.props.classes.navUser },
                                    React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", className: this.props.classes.iconBtn, style: { marginRight: '30px' }, color: "contrast" },
                                        React.createElement(Tv, null)),
                                    React.createElement(IconButton, { "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": "true", className: this.props.classes.iconBtn, style: { marginRight: '10px' }, color: "contrast" },
                                        React.createElement(Setting, null)))),
                            React.createElement("div", { className: "view" },
                                React.createElement(Hidden, { smUp: true, implementation: "css" },
                                    React.createElement(Drawer, { type: "persistent", classes: {
                                            modal: classes.root,
                                            docked: classNames(classes.xsDrawerPaper, !this.state.open && classes.xsDrawerPaperClose),
                                            paper: classNames(classes.xsDrawerPaper, !this.state.open && classes.xsDrawerPaperClose),
                                        }, onClose: this.toggleDrawer, open: this.state.open },
                                        React.createElement(Side, { open: this.state.open }))),
                                React.createElement(Hidden, { smDown: true, implementation: "css" },
                                    React.createElement(Drawer, { type: "persistent", classes: {
                                            modal: classes.root,
                                            docked: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                                        }, onClose: this.toggleDrawer, open: this.state.open },
                                        React.createElement(Side, { open: this.state.open }))),
                                React.createElement("div", { className: classNames('content', this.state.open && 'move-content') },
                                    React.createElement(Switch, null,
                                        React.createElement(Route, { exact: true, path: "/configurations", component: Configurations }),
                                        React.createElement(Route, { exact: true, path: "/home", component: Home }),
                                        React.createElement(Route, { exact: true, path: "/seo", component: Seo }),
                                        React.createElement(Route, { exact: true, path: "/upload", component: Upload }),
                                        React.createElement(Route, { exact: true, path: "/menu", component: Menus }),
                                        React.createElement(Route, { exact: true, path: "/menu/edit", component: MenuEdit }),
                                        React.createElement(Route, { exact: true, path: "/mail", component: Mail }),
                                        React.createElement(Route, { exact: true, path: "/debug", component: Debug }),
                                        React.createElement(Route, { exact: true, path: "/extension", component: Extension }),
                                        React.createElement(Route, { exact: true, path: "/module/open-module", component: ModuleOpen }),
                                        React.createElement(Route, { exact: true, path: "/module/domain-config", component: ModuleDomain }),
                                        React.createElement(Route, { exact: true, path: "/module/import-export", component: ModuleImport }),
                                        React.createElement(Route, { exact: true, path: "/module/install", component: ModuleInstall }),
                                        React.createElement(Route, { exact: true, path: "/addon/openAddon", component: AddonOpen }),
                                        React.createElement(Route, { exact: true, path: "/addon/import-export", component: AddonImport }),
                                        React.createElement(Route, { exact: true, path: "/addon/install", component: AddonInstall }),
                                        React.createElement(Route, { exact: true, path: "/cms/article", component: Article }),
                                        React.createElement(Route, { exact: true, path: "/cms/article/edit/:id", component: ArticleEdit }),
                                        React.createElement(Route, { exact: true, path: "/cms/article/type", component: ArticleType }),
                                        React.createElement(Route, { exact: true, path: "/cms/article/type/edit", component: ArticleTypeEdit }),
                                        React.createElement(Route, { exact: true, path: "/cms/article/recycle", component: ArticleRecycle }),
                                        React.createElement(Route, { exact: true, path: "/cms/page", component: Page }),
                                        React.createElement(Route, { exact: true, path: "/cms/page/edit/:id", component: PageEdit }),
                                        React.createElement(Route, { exact: true, path: "/cms/page/type", component: PageType }),
                                        React.createElement(Route, { exact: true, path: "/cms/message", component: Message }),
                                        React.createElement(Route, { path: "/", render: () => (React.createElement(Redirect, { to: "/home" })) }))))));
                    } }))));
    }
}
export default withStyles(styles, { withTheme: true })(App);
