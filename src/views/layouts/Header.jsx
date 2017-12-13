import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Setting from 'material-ui-icons/Settings';
import MenuIcon from 'material-ui-icons/Menu';
import FullScreen from 'material-ui-icons/Fullscreen';
import Search from 'material-ui-icons/Search';
import Tv from 'material-ui-icons/Tv';
import IconButton from 'material-ui/IconButton';
import logo from '../../assets/image/notadd_logo.png';

const styles = {
    header: {
        alignItems: 'center',
        background: '#3f51b5',
        boxShadow: '0px 1px 4px 0 rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerLeft: {
        alignItems: 'center',
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
        justifyContent: 'flex-start',
    },
    menuBtn: {
        alignSelf: 'stretch',
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
        alignItems: 'center',
        display: 'flex',
        float: 'right',
        justifyContent: 'center',
    },
    iconBtn: {
        fontSize: '18px',
        width: '28px',
    },
};

class HeaderLayout extends Component {
    constructor(props) {
        super(props);
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
                },
            ],
            value: 0,
            user: {
                name: '后台管理员',
            },
            anchorEl: null,
            fullScreen: true,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    handleFullScreen = () => {
        this.setState({ fullScreen: !this.state.fullScreen });
        if (this.state.fullScreen) {
            const el = document;
            const cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;
            let wscript;
            if (typeof cfs !== 'undefined' && cfs) {
                cfs.call(el);
                return;
            }
            if (typeof window.ActiveXObject !== 'undefined') {
                wscript = new window.ActiveXObject('WScript.Shell');
                if (wscript !== null) {
                    wscript.SendKeys('{F11}');
                }
            }
        } else {
            const el = document.documentElement;
            const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
            let wscript;
            if (typeof rfs !== 'undefined' && rfs) {
                rfs.call(el);
                return;
            }
            if (typeof window.ActiveXObject !== 'undefined') {
                wscript = new window.ActiveXObject('WScript.Shell');
                if (wscript) {
                    wscript.SendKeys('{F11}');
                }
            }
        }
    };
    render() {
        const { value } = this.state;
        return (
            <div className={ this.props.classes.header }>
                <div className={ this.props.classes.headerLeft }>
                    <img className={ this.props.classes.logo } src={ logo } alt=''/>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        className={ this.props.classes.menuBtn }
                        onClick={ this.handleMenu }
                        color='contrast'
                    >
                        <MenuIcon/>
                    </IconButton>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        style={ { background: 'none', marginLeft: '0' } }
                        className={ this.props.classes.menuBtn }
                        onClick={ this.handleFullScreen }
                        color='contrast'
                    >
                        <FullScreen/>
                    </IconButton>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        style={ { background: 'none', marginLeft: '0' } }
                        className={ this.props.classes.menuBtn }
                        color='contrast'
                    >
                        <Search/>
                    </IconButton>
                    <BottomNavigation
                        value={ value }
                        onChange={ this.handleChange }
                        showLabels
                        className={ this.props.classes.root }
                    >
                        {
                            this.state.navs.map((item, index) => {
                                return (
                                    <BottomNavigationButton classes={ {
                                        root: this.props.classes.navBtn,
                                        label: this.props.classes.btnLabel,
                                        selected: this.props.classes.selectRoot,
                                        selectedLabel: this.props.classes.selectedLabel,
                                    } } key={ index } label={ item.name }/>
                                );
                            })
                        }
                    </BottomNavigation>
                </div>
                <div className={ this.props.classes.navUser }>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        className={ this.props.classes.iconBtn }
                        style={ { marginRight: '30px' } }
                        onClick={ this.handleMenu }
                        color='contrast'
                    >
                        <Tv/>
                    </IconButton>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        className={ this.props.classes.iconBtn }
                        color='contrast'
                        onClick={ this.handleClick }
                    >
                        <Setting/>
                    </IconButton>
                </div>
            </div>
        );
    }
}

HeaderLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HeaderLayout);
