import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Person from 'material-ui-icons/Person';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import logo from '../../assets/image/logo.svg';

const styles = {
    header: {
        background: '#3f51b5',
        boxShadow: '0px 1px 4px 0 rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
    },
    root: {
        background: '#3f51b5',
        color: '#657180',
        paddingLeft: '104px',
        height: '70px',
        justifyContent: 'flex-start',
    },
    navBtn: {
        flex: 'none',
        padding: '0 38px',
        width: 'auto',
        fontSize: '14px',
    },
    btnLabel: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px',
        fontWeight: 'bold',
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
            open: false,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { value } = this.state;
        return (
            <div className={ this.props.classes.header }>
                <div className='logo'>
                    <img src={ logo } alt=''/>
                </div>
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
                <div className={ this.props.classes.navUser }>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        className={ this.props.classes.iconBtn }
                        onClick={ this.handleMenu }
                        color='contrast'
                    >
                        <Person/>
                    </IconButton>
                    <span style={ { color: '#fff', marginRight: '16px' } }>{ this.state.user.name }</span>
                    <IconButton
                        aria-owns={ open ? 'menu-appbar' : null }
                        aria-haspopup='true'
                        className={ this.props.classes.iconBtn }
                        color='contrast'
                        onClick={ this.handleClick }
                    >
                        <ArrowDropDown/>
                    </IconButton>
                </div>
                <Menu
                    id='simple-menu'
                    anchorEl={ this.state.anchorEl }
                    open={ this.state.open }
                    onRequestClose={ this.handleRequestClose }
                >
                    <MenuItem onClick={ this.handleRequestClose }>退出登陆</MenuItem>
                </Menu>
            </div>
        );
    }
}

HeaderLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HeaderLayout);
