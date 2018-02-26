import * as React from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Setting from 'material-ui-icons/Settings';
import MenuIcon from 'material-ui-icons/Menu';
import FullScreen from 'material-ui-icons/Fullscreen';
import Search from 'material-ui-icons/Search';
import Tv from 'material-ui-icons/Tv';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
// import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';

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

type State = {
    current: number,
    navs: object,
    value: number,
    user: object,
    fullScreen: boolean,
    openSearch: boolean,
};

class HeaderLayout extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
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
    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };
    handleOpenSearch = () => {
        this.setState({ openSearch: true });
    };
    handleFullScreen = () => {
        this.setState({ fullScreen: !this.state.fullScreen });
        if (this.state.fullScreen) {
            const el: any = document;
            let cfs;

            if (el.webkitCancelFullScreen) {
                cfs = el.webkitCancelFullScreen;
            } else if (el.mozCancelFullScreen) {
                cfs = el.mozCancelFullScreen;
            } else if (el.exitFullScreen) {
                cfs = el.exitFullScreen;
            } else if (el.cancelFullScreen) {
                cfs = el.cancelFullScreen;
            }
            let wscript;
            if (typeof cfs !== 'undefined' && cfs) {
                cfs.call(el);
                return;
            }
            const w: any = window;
            if (typeof w.ActiveXObject !== 'undefined') {
                wscript = new w.ActiveXObject('WScript.Shell');
                if (wscript !== null) {
                    wscript.SendKeys('{F11}');
                }
            }
        } else {
            const el: any = document.documentElement;
            const rfs = el.webkitRequestFullScreen
                || el.mozRequestFullScreen
                || el.msRequestFullScreen
                || el.requestFullScreen;
            let wscript;
            if (typeof rfs !== 'undefined' && rfs) {
                rfs.call(el);
                return;
            }
            const w: any = window;
            if (typeof w.ActiveXObject !== 'undefined') {
                wscript = new w.ActiveXObject('WScript.Shell');
                if (wscript) {
                    wscript.SendKeys('{F11}');
                }
            }
        }
    };
    render() {
        const { value, openSearch  } = this.state;
        const { classes } = this.props;
        return (
            <div className="header">
                <div className={this.props.classes.headerLeft}>
                    <img className={this.props.classes.logo} src={require('../assets/images/notadd_logo.png')}/>
                    <IconButton
                        aria-haspopup="true"
                        className={this.props.classes.menuBtn}
                        color="contrast"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <IconButton
                        aria-haspopup="true"
                        style={{background: 'none', marginLeft: '0'}}
                        className={this.props.classes.menuBtn}
                        onClick={this.handleFullScreen}
                        color="contrast"
                    >
                        <FullScreen/>
                    </IconButton>
                    <IconButton
                        aria-haspopup="true"
                        style={{background: 'none', marginLeft: '0'}}
                        className={this.props.classes.menuBtn}
                        onClick={this.handleOpenSearch}
                        color="contrast"
                    >
                        <Search/>
                    </IconButton>
                    <Popover
                        open={openSearch}
                        anchorEl="anchorPosition"
                        anchorPosition={{ top: 150, left: 0 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={this.handleOpenSearch}
                    >
                        <TextField
                            defaultValue="react-bootstrap"
                            label="Bootstrap"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.textFieldRoot,
                                    input: classes.textFieldInput,
                                },
                            }}
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
        );
    }
}

export default withStyles(styles)<{}>(HeaderLayout);
