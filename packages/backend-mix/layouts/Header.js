import * as React from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Setting from 'material-ui-icons/Settings';
import MenuIcon from 'material-ui-icons/Menu';
import FullScreen from 'material-ui-icons/Fullscreen';
import Search from 'material-ui-icons/Search';
import Tv from 'material-ui-icons/Tv';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import withStyles from 'material-ui/styles/withStyles';
const styles = {
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
        background: '#3949a3',
        borderRadius: 0,
        height: 'auto',
        fontSize: '24px',
        marginLeft: '60px',
    },
    navBtn: {
        flex: 'none',
        padding: '0 3px',
        width: 'auto',
        fontSize: '14px',
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
        borderRadius: 4,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
};
class HeaderLayout extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
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
            anchorEl: null,
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
                else if (el.mozCancelFullScreen) {
                    cfs = el.mozCancelFullScreen;
                }
                else if (el.exitFullScreen) {
                    cfs = el.exitFullScreen;
                }
                else if (el.cancelFullScreen) {
                    cfs = el.cancelFullScreen;
                }
                let wscript;
                if (typeof cfs !== 'undefined' && cfs) {
                    cfs.call(el);
                    return;
                }
                const w = window;
                if (typeof w.ActiveXObject !== 'undefined') {
                    wscript = new w.ActiveXObject('WScript.Shell');
                    if (wscript !== null) {
                        wscript.SendKeys('{F11}');
                    }
                }
            }
            else {
                const el = document.documentElement;
                const rfs = el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                    || el.msRequestFullScreen
                    || el.requestFullScreen;
                let wscript;
                if (typeof rfs !== 'undefined' && rfs) {
                    rfs.call(el);
                    return;
                }
                const w = window;
                if (typeof w.ActiveXObject !== 'undefined') {
                    wscript = new w.ActiveXObject('WScript.Shell');
                    if (wscript) {
                        wscript.SendKeys('{F11}');
                    }
                }
            }
        };
    }
    render() {
        const { value, openSearch } = this.state;
        const { classes } = this.props;
        return (React.createElement("div", { className: "header" },
            React.createElement("div", { className: this.props.classes.headerLeft },
                React.createElement("img", { className: this.props.classes.logo, src: require('../assets/images/notadd_logo.png') }),
                React.createElement(IconButton, { "aria-haspopup": "true", className: this.props.classes.menuBtn, color: "contrast" },
                    React.createElement(MenuIcon, null)),
                React.createElement(IconButton, { "aria-haspopup": "true", style: { background: 'none', marginLeft: '0' }, className: this.props.classes.menuBtn, onClick: this.handleFullScreen, color: "contrast" },
                    React.createElement(FullScreen, null)),
                React.createElement(IconButton, { "aria-haspopup": "true", style: { background: 'none', marginLeft: '0' }, className: this.props.classes.menuBtn, onClick: this.handleOpenSearch, color: "contrast" },
                    React.createElement(Search, null)),
                React.createElement(Popover, { open: openSearch, anchorEl: "anchorPosition", anchorPosition: { top: 150, left: 0 }, anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, onClose: this.handleOpenSearch },
                    React.createElement(TextField, { defaultValue: "react-bootstrap", label: "Bootstrap", InputProps: {
                            disableUnderline: true,
                            classes: {
                                root: classes.textFieldRoot,
                                input: classes.textFieldInput,
                            },
                        } })),
                React.createElement(BottomNavigation, { value: value, onChange: this.handleChange, showLabels: true, className: this.props.classes.root }, this.state.navs.map((item, index) => {
                    return (React.createElement(BottomNavigationButton, { classes: {
                            root: this.props.classes.navBtn,
                            label: this.props.classes.btnLabel,
                            selected: this.props.classes.selectRoot,
                            selectedLabel: this.props.classes.selectedLabel,
                        }, key: index, label: item.name }));
                }))),
            React.createElement("div", { className: this.props.classes.navUser },
                React.createElement(IconButton, { "aria-haspopup": "true", className: this.props.classes.iconBtn, style: { marginRight: '30px' }, color: "contrast" },
                    React.createElement(Tv, null)),
                React.createElement(IconButton, { "aria-haspopup": "true", className: this.props.classes.iconBtn, style: { marginRight: '10px' }, color: "contrast" },
                    React.createElement(Setting, null)))));
    }
}
export default withStyles(styles)(HeaderLayout);
