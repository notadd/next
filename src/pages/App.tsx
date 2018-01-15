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
// import NpmSearchExtension from './NpmSearchExtension';
// import BarExtension from './BarExtension';
import createHashHistory from 'history/createHashHistory';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';
import { History } from 'history';
import 'react-select/dist/react-select.css';

type State = {
    open: boolean,
    current: number,
    navs: object,
    value: number,
    user: object,
    fullScreen: boolean,
    openSearch: boolean,
    selectedOption: object,
    selectOptions: Array<any>,
};
const drawerWidth = 260;
const styles = (theme: Theme): StyleRules => ({
    paperRoot: {
        top: 70,
        width: drawerWidth,
    },
    drawerPaper: {
        position: 'fixed',
        height: '100%',
        top: 70,
        width: drawerWidth,
        boxShadow: '3px 0 6px 0 rgba(0, 0, 0, 0.05)',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 0,
        overflowX: 'hidden',
        top: 70,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    header: {
        'align-items': 'center',
        background: '#3f51b5',
        boxShadow: '0px 1px 4px 0 rgba(0, 0, 0, 0.3)',
        display: 'flex',
        'justify-content': 'space-between',
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

const stylesType = {} as StyleRules;

interface Props extends WithStyles<keyof typeof stylesType> {
    history: History;
}

class App extends React.Component<Props, State> {
    state = {
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
    toggleDrawer = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    handleChange = (event: any, value: any) => {
        this.setState({ value });
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
        const { value, openSearch, selectedOption, selectOptions } = this.state;
        const { classes } = this.props;
        const selectValue = selectedOption && selectedOption.value;
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
                                    <div className={this.props.classes.header}>
                                        <div className={this.props.classes.headerLeft}>
                                            <Link to="/home">
                                                <img
                                                    className={this.props.classes.logo}
                                                    src={require('../assets/images/notadd_logo.png')}
                                                />
                                            </Link>
                                            <IconButton
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                className={this.props.classes.menuBtn}
                                                color="contrast"
                                                onClick={this.toggleDrawer}
                                            >
                                                <MenuIcon/>
                                            </IconButton>
                                            <IconButton
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                style={{marginLeft: '0'}}
                                                className={this.props.classes.menuBtn}
                                                onClick={this.handleFullScreen}
                                                color="contrast"
                                            >
                                                <FullScreen/>
                                            </IconButton>
                                            <IconButton
                                                aria-owns={open ? 'menu-appbar' : null}
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
                                                value={value}
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
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                className={this.props.classes.iconBtn}
                                                style={{marginRight: '30px'}}
                                                color="contrast"
                                            >
                                                <Tv/>
                                            </IconButton>
                                            <IconButton
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                className={this.props.classes.iconBtn}
                                                style={{marginRight: '10px'}}
                                                color="contrast"
                                            >
                                                <Setting/>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <Hidden mdUp>
                                        <Drawer
                                            type="temporary"
                                            open={this.state.open}
                                            onClose={this.toggleDrawer}
                                            ModalProps={{
                                                keepMounted: true, // Better open performance on mobile.
                                            }}
                                        >
                                            <Side/>
                                        </Drawer>
                                    </Hidden>
                                    <Hidden smDown implementation="css">
                                        <Drawer
                                            type="persistent"
                                            classes={{
                                                modal: classes.root,
                                                paper: classes.drawerPaper,
                                            }}
                                            ModalProps={{
                                                keepMounted: true,
                                            }}
                                            onClose={this.toggleDrawer}
                                            open={this.state.open}
                                        >
                                            <Side/>
                                        </Drawer>
                                    </Hidden>
                                    <div className="view">
                                        <Switch>
                                            <Route exact path="/configurations" component={Configurations}/>
                                            <Route exact path="/home" component={Home}/>
                                            <Route exact path="/seo" component={Seo}/>
                                            <Route exact path="/upload" component={Upload}/>
                                            <Route exact path="/menu" component={Menus}/>
                                            <Route exact path="/menu/edit" component={MenuEdit}/>
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
                                            <Route path="/" render={() => (<Redirect to="/home"/>)}/>
                                        </Switch>
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
export default withStyles(styles, { withTheme: true })<{}>(App);
