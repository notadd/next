import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { History } from 'history';
import { HashRouter } from 'react-router-dom';
import * as classNames from 'classnames';
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
import PageTypeEdit from './cms/PageTypeEdit';
import Message from './cms/Message';

import Drawer from 'material-ui/Drawer';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Setting from 'material-ui-icons/Settings';
import MenuIcon from 'material-ui-icons/Menu';
import FullScreen from 'material-ui-icons/Fullscreen';
import Search from 'material-ui-icons/Search';
import MoreHoriz from 'material-ui-icons/MoreHoriz';
import Tv from 'material-ui-icons/Tv';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Select from 'react-select';
import createHashHistory from 'history/createHashHistory';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import 'react-select/dist/react-select.css';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';

type State = {
    current: number,
    fullScreen: boolean,
    open: boolean,
    navs: Array<any>,
    user: object,
    openSearch: boolean,
    selectedOption: object,
    selectOptions: Array<any>,
};
const drawerWidth = 260;
const styles = (theme: Theme): StyleRules => ({
    drawerDocked: {
        height: 'calc(100vh - 70px)',
        width: drawerWidth,
        position: 'fixed',
        top: 70,
        zIndex: 500,
        boxShadow: '3px 0 6px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
    drawerPaper: {
        width: 'inherit',
        top: 'auto',
        overflow: 'visible',
        transform: 'translateX(0) !important',
    },
    drawerPaperClose: {
        top: 70,
        width: 90,
        overflow: 'visible',
        zIndex: 1,
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },
    xsDrawerPaperClose: {
        width: 0,
        position: 'fixed',
        zIndex: 500,
        transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
        transform: 'translateX(-260px) !important',
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
        'min-width': '56px',
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

const stylesType = {} as StyleRules;

interface Props extends WithStyles<keyof typeof stylesType> {
    history: History;
    open: boolean;
    width: string;
}

class App extends React.Component<Props, State> {
    state = {
        open: true,
        current: 0,
        navs: [
            {
                name: '全局',
                path: '/all',
                side: [
                    {
                        name: '全局设置',
                        open: false,
                        index: 0,
                        icon: 'view_quilt',
                        children: [
                            {
                                'name': '参数配置',
                                'path': '/configurations',
                                'open': false,
                                'children': [],
                            },
                            {
                                'name': 'SEO设置',
                                'path': '/seo',
                                'open': false,
                                'children': [],
                            }
                        ]
                    },
                    {
                        name: '附件设置',
                        icon: 'insert_drive_file',
                        open: false,
                        index: 1,
                        children: [
                            {
                                'name': '上传设置',
                                'path': '/upload',
                                'open': false,
                                'children': [],
                            }
                        ]
                    },
                    {
                        name: '应用管理',
                        open: false,
                        icon: 'work',
                        index: 2,
                        children: [
                            {
                                'name': '模块配置',
                                'path': '/module',
                                'open': false,
                                'children': [
                                    {
                                        'name': '开启模块',
                                        'path': '/module/open-module'
                                    },
                                    {
                                        'name': '域名配置',
                                        'path': '/module/domain-config'
                                    },
                                    {
                                        'name': '导入导出',
                                        'path': '/module/import-export'
                                    },
                                    {
                                        'name': '本地安装',
                                        'path': '/module/install'
                                    },
                                ]
                            },
                            {
                                'name': '插件配置',
                                'path': '/addon',
                                'open': false,
                                'children': [
                                    {
                                        'name': '开启插件',
                                        'path': '/addon/openAddon'
                                    },
                                    {
                                        'name': '导入导出',
                                        'path': '/addon/import-export'
                                    },
                                    {
                                        'name': '本地安装',
                                        'path': '/addon/install'
                                    },
                                ],
                            },
                            {
                                'name': '拓展配置',
                                'path': '/extension',
                                'open': false,
                                'children': [],
                            }
                        ]
                    },
                    {
                        name: '全局插件',
                        open: false,
                        index: 3,
                        icon: 'extension',
                        children: []
                    },
                    {
                        name: '系统插件',
                        icon: 'widgets',
                        open: false,
                        index: 4,
                        children: [
                            {
                                'name': '菜单管理',
                                'path': '/menu',
                                'open': false,
                                'children': [],
                            },
                            {
                                'name': '邮件设置',
                                'path': '/mail',
                                'open': false,
                                'children': [],
                            },
                            {
                                'name': '调试工具',
                                'path': '/debug',
                                'open': false,
                                'children': [],
                            }
                        ]
                    }
                ],
            },
            {
                name: 'CMS',
                path: '/cms',
                side: [
                    {
                        name: '文章管理',
                        open: false,
                        index: 0,
                        icon: 'reorder',
                        children: [
                            {
                                'name': '全部文章',
                                'path': '/cms/article',
                                'open': false,
                                'children': [],
                            },
                            {
                                'name': '分类管理',
                                'path': '/cms/article/type',
                                'open': false,
                                'children': [],
                            },
                            {
                                'name': '回收站',
                                'path': '/cms/article/recycle',
                                'open': false,
                                'children': [],
                            }
                        ]
                    },
                    {
                        name: '页面管理',
                        icon: 'note',
                        open: false,
                        index: 1,
                        children: [
                            {
                                'name': '全部页面',
                                'path': '/cms/page',
                                'open': false,
                                'children': [],
                            },
                            {
                                'name': '分类管理',
                                'path': '/cms/page/type',
                                'open': false,
                                'children': [],
                            }
                        ]
                    },
                    {
                        name: '模块管理',
                        open: false,
                        icon: 'view_carousel',
                        index: 2,
                        children: []
                    },
                    {
                        name: '信息管理',
                        open: false,
                        index: 3,
                        icon: 'chat_bubble',
                        children: [
                            {
                                'name': '客户留言',
                                'path': '/cms/message',
                                'open': false,
                                'children': [],
                            },
                        ]
                    },
                ],
            },
            {
                name: '商城',
                path: '/mall',
                side: [],
            },
            {
                name: '用户中心',
                path: '/user',
                side: [],
            },
            {
                name: '微信',
                path: '/weChat',
                side: [],
            },
            {
                name: '论坛',
                path: '/bbs',
                side: [],
            }
        ],
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
    toggleDrawer = () => {
        if (this.props.width !== 'sm') {
            this.setState({
                open: !this.state.open,
            });
        }
    };
    handleChange = (event: any, value: number) => {
        this.setState({current: value });
    };
    handleOpenSearch = () => {
        this.setState({ openSearch: true });
    };
    handleFullScreen = () => {
        this.setState({ fullScreen: !this.state.fullScreen });
        if (this.state.fullScreen) {
            const el = document;
            let cfs;
            if (el.webkitCancelFullScreen) {
                cfs = el.webkitCancelFullScreen;
            } else if (el['mozCancelFullScreen']) {
                cfs = el['mozCancelFullScreen'];
            } else if (el['exitFullScreen']) {
                cfs = el['exitFullScreen'];
            } else if (el['cancelFullScreen']) {
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
        } else {
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
    handleClose = () => {
        this.setState({
            openSearch: false,
        });
    };
    handleChangeSelect = (selectedOption: object) => {
        this.setState({ selectedOption });
        createHashHistory().push(selectedOption['url']);
    };
    render() {
        const { current, openSearch, selectedOption, selectOptions, open } = this.state;
        const { classes } = this.props;
        const selectValue = selectedOption && selectedOption.value;
        const wd = this.props.width;
        const condition = (open === false && ((wd === 'md') || (wd === 'lg') || (wd === 'xl'))) || (wd === 'sm');
        return (
            <HashRouter  basename="/">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        strict
                        path="/"
                        children={() => {
                            return (
                                <div className="main-view">
                                    {
                                        wd === 'xs' ?
                                            <div className="mobile-header">
                                                <div className="top-menu">
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        className={this.props.classes.menuBtn}
                                                        color="contrast"
                                                        onClick={this.toggleDrawer}
                                                    >
                                                        <MenuIcon/>
                                                    </IconButton>
                                                    <Link to="/home">
                                                        <img
                                                            className={this.props.classes.logo}
                                                            src={require('../assets/images/notadd_logo.png')}
                                                        />
                                                    </Link>
                                                    <div>
                                                        <IconButton
                                                            aria-haspopup="true"
                                                            style={{marginLeft: '0'}}
                                                            className={this.props.classes.menuBtn}
                                                            onClick={this.handleOpenSearch}
                                                            color="contrast"
                                                        >
                                                            <Search/>
                                                        </IconButton>
                                                        <IconButton
                                                            aria-haspopup="true"
                                                            style={{marginLeft: '0'}}
                                                            className={this.props.classes.menuBtn}
                                                            color="contrast"
                                                        >
                                                            <MoreHoriz/>
                                                        </IconButton>
                                                        <Popover
                                                            open={openSearch}
                                                            anchorPosition={{ top: 0, left: 0 }}
                                                            anchorOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'right',
                                                            }}
                                                            transformOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'right',
                                                            }}
                                                            classes={{
                                                                paper: classes.popPaper
                                                            }}
                                                            className="mobile-search"
                                                            onClose={this.handleClose}
                                                        >
                                                            <Search className="search-icon" />
                                                            <Select
                                                                name="form-field-name"
                                                                className="searchSelect"
                                                                value={selectValue}
                                                                placeholder="请输入关键词..."
                                                                onChange={this.handleChangeSelect}
                                                                options={selectOptions}
                                                            />
                                                        </Popover>
                                                    </div>
                                                </div>
                                                <div className="menus-list">
                                                    <BottomNavigation
                                                        value={current}
                                                        onChange={this.handleChange}
                                                        showLabels
                                                        className={this.props.classes.root}
                                                    >
                                                        {
                                                            this.state.navs.map((item, index) => {
                                                                return (
                                                                    <BottomNavigationButton
                                                                        classes={{
                                                                            root: this.props.classes.navBtn,
                                                                            label: this.props.classes.btnLabel,
                                                                            selected: this.props.classes.selectRoot,
                                                                            selectedLabel: this.props.classes.selectedLabel,
                                                                        }}
                                                                        key={index}
                                                                        label={item.name}
                                                                    />
                                                                );
                                                            })
                                                        }
                                                    </BottomNavigation>
                                                    <div className={this.props.classes.navUser}>
                                                        <IconButton
                                                            aria-haspopup="true"
                                                            className={this.props.classes.iconBtn}
                                                            style={{marginRight: '30px'}}
                                                            color="contrast"
                                                        >
                                                            <Tv/>
                                                        </IconButton>
                                                        <IconButton
                                                            aria-haspopup="true"
                                                            className={this.props.classes.iconBtn}
                                                            style={{marginRight: '10px'}}
                                                            color="contrast"
                                                        >
                                                            <Setting/>
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            </div> :
                                            <div className="header">
                                                <div className={this.props.classes.headerLeft}>
                                                    <Link to="/home">
                                                        <img
                                                            className={this.props.classes.logo}
                                                            src={require('../assets/images/notadd_logo.png')}
                                                        />
                                                    </Link>
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        className={this.props.classes.menuBtn}
                                                        color="contrast"
                                                        onClick={this.toggleDrawer}
                                                    >
                                                        <MenuIcon/>
                                                    </IconButton>
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        style={{marginLeft: '0'}}
                                                        className={this.props.classes.menuBtn}
                                                        onClick={this.handleFullScreen}
                                                        color="contrast"
                                                    >
                                                        <FullScreen/>
                                                    </IconButton>
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        style={{marginLeft: '0'}}
                                                        className={this.props.classes.menuBtn}
                                                        onClick={this.handleOpenSearch}
                                                        color="contrast"
                                                    >
                                                        <Search/>
                                                    </IconButton>
                                                    <Popover
                                                        open={openSearch}
                                                        anchorPosition={{ top: 0, left: 0 }}
                                                        anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        classes={{
                                                            paper: classes.popPaper
                                                        }}
                                                        onClose={this.handleClose}
                                                    >
                                                        <Search className="search-icon" />
                                                        <Select
                                                            name="form-field-name"
                                                            className="searchSelect"
                                                            value={selectValue}
                                                            placeholder="请输入关键词..."
                                                            onChange={this.handleChangeSelect}
                                                            options={selectOptions}
                                                        />
                                                    </Popover>
                                                    <BottomNavigation
                                                        value={current}
                                                        onChange={this.handleChange}
                                                        showLabels
                                                        className={this.props.classes.root}
                                                    >
                                                        {
                                                            this.state.navs.map((item, index) => {
                                                                return (
                                                                    <BottomNavigationButton
                                                                        classes={{
                                                                            root: this.props.classes.navBtn,
                                                                            label: this.props.classes.btnLabel,
                                                                            selected: this.props.classes.selectRoot,
                                                                            selectedLabel: this.props.classes.selectedLabel,
                                                                        }}
                                                                        key={index}
                                                                        label={item.name}
                                                                    />
                                                                );
                                                            })
                                                        }
                                                    </BottomNavigation>
                                                </div>
                                                <div className={this.props.classes.navUser}>
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        className={this.props.classes.iconBtn}
                                                        style={{marginRight: '30px'}}
                                                        color="contrast"
                                                    >
                                                        <Tv/>
                                                    </IconButton>
                                                    <IconButton
                                                        aria-haspopup="true"
                                                        className={this.props.classes.iconBtn}
                                                        style={{marginRight: '10px'}}
                                                        color="contrast"
                                                    >
                                                        <Setting/>
                                                    </IconButton>
                                                </div>
                                            </div>
                                    }
                                    <div className={classNames('view', condition && 'smallSide-view')}>
                                        {
                                            condition ?
                                                <Drawer
                                                    type="persistent"
                                                    classes={{
                                                        modal: classes.root,
                                                        docked: classNames(
                                                            classes.drawerDocked,
                                                            !this.state.open && classes.drawerPaperClose
                                                        ),
                                                        paper: classes.drawerPaper
                                                    }}
                                                    onClose={this.toggleDrawer}
                                                    open={this.state.open}
                                                >
                                                    <Side
                                                        open={this.state.open}
                                                        sideNav={this.state.navs[this.state.current].side}
                                                    />
                                                </Drawer>
                                                :
                                                <Drawer
                                                    type="persistent"
                                                    classes={{
                                                        modal: classes.root,
                                                        docked: classNames(
                                                            classes.drawerDocked,
                                                            !this.state.open && classes.xsDrawerPaperClose
                                                        ),
                                                        paper: classes.drawerPaper
                                                    }}
                                                    onClose={this.toggleDrawer}
                                                    open={this.state.open}
                                                >
                                                    <Side
                                                        open={this.state.open}
                                                        sideNav={this.state.navs[this.state.current].side}
                                                    />
                                                </Drawer>
                                        }
                                        <div
                                            className={
                                                classNames('content', this.state.open && wd !== 'sm' && 'move-content')
                                            }
                                        >
                                            <Switch>
                                                <Route exact path="/configurations" component={Configurations}/>
                                                <Route exact path="/home" component={Home}/>
                                                <Route exact path="/seo" component={Seo}/>
                                                <Route exact path="/upload" component={Upload}/>
                                                <Route exact path="/menu" component={Menus}/>
                                                <Route exact path="/menu/edit/:id" component={MenuEdit}/>
                                                <Route exact path="/mail" component={Mail}/>
                                                <Route exact path="/debug" component={Debug}/>
                                                <Route exact path="/extension" component={Extension}/>
                                                <Route exact path="/module/open-module" component={ModuleOpen}/>
                                                <Route exact path="/module/domain-config" component={ModuleDomain}/>
                                                <Route exact path="/module/import-export" component={ModuleImport}/>
                                                <Route exact path="/module/install" component={ModuleInstall}/>
                                                <Route exact path="/addon/openAddon" component={AddonOpen}/>
                                                <Route exact path="/addon/import-export" component={AddonImport}/>
                                                <Route exact path="/addon/install" component={AddonInstall}/>
                                                <Route exact path="/cms/article" component={Article}/>
                                                <Route exact path="/cms/article/edit/:id" component={ArticleEdit}/>
                                                <Route exact path="/cms/article/type" component={ArticleType}/>
                                                <Route
                                                    exact
                                                    path="/cms/article/type/edit/:id"
                                                    component={ArticleTypeEdit}
                                                />
                                                <Route exact path="/cms/article/recycle" component={ArticleRecycle}/>
                                                <Route exact path="/cms/page" component={Page}/>
                                                <Route exact path="/cms/page/edit/:id" component={PageEdit}/>
                                                <Route exact path="/cms/page/type" component={PageType}/>
                                                <Route exact path="/cms/page/type/edit/:id" component={PageTypeEdit}/>
                                                <Route exact path="/cms/message" component={Message}/>
                                                <Route path="/" render={() => (<Redirect to="/home"/>)}/>
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    />
                </Switch>
            </HashRouter>
        );
    }
}
export default compose(withStyles(styles), withWidth())(App);
