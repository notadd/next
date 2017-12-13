import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ChatBubble from 'material-ui-icons/ChatBubble';
import Notifications from 'material-ui-icons/Notifications';
import sides from '../../api/side.json';
import classNames from 'classnames';
import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import user from '../../assets/image/user.jpg';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    bigAvatar: {
        width: 50,
        height: 50,
        marginTop: 35,
        marginRight: 20,
    },
    badge: {
        boxSizing: 'border-box',
        border: '2px solid #fff',
        fontSize: 12,
        height: 20,
        width: 20,
    },
    root: {
        width: '100%',
        maxWidth: 260,
        background: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: sides,
            user: {
                name: '管理员',
                email: 'zhhu_123@163.com',
                user_img: user,
                message: 5,
            },
        };
    }

    handleClick(index) {
        const self = this;
        Object.keys(this.state.navs).forEach(item => {
            if (item === index.toString()) {
                self.state.navs[ item ].open = !self.state.navs[ item ].open;
            } else {
                self.state.navs[ item ].open = false;
            }
        });
        self.setState({ sides });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className='sideBar'>
                <div className='userBox'>
                    <div style={ { background: 'rgba(0, 0, 0, 0.5)', height: 'inherit', display: 'flex', justifyContent: 'center' } }>
                        <Avatar
                            alt={ this.state.user.name }
                            src={ this.state.user.user_img }
                            className={ classes.bigAvatar }
                        />
                        <div className='user-right'>
                            <p>{ this.state.user.name }</p>
                            <p>{ this.state.user.email }</p>
                            <div>
                                <Badge className={ classNames(classes.badge, 'badgeIcon') }
                                    classes={ {
                                        colorAccent: classes.badge,
                                    } }
                                    style={ { border: 0 } }
                                    badgeContent={ 4 } color='accent'>
                                    <Notifications/>
                                </Badge>
                                <Badge className={ classNames(classes.badge, 'badgeIcon') }
                                    classes={ {
                                        colorAccent: classes.badge,
                                    } }
                                    style={ { border: 0, marginLeft: 30 } }
                                    badgeContent={ 4 } color='accent'>
                                    <MailIcon/>
                                </Badge>
                                <Badge className={ classNames(classes.badge, 'badgeIcon') }
                                    classes={ {
                                        colorAccent: classes.badge,
                                    } }
                                    style={ { border: 0, marginLeft: 30 } }
                                    badgeContent={ 4 } color='accent'>
                                    <ChatBubble/>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.navs.map((item, index) => {
                        return (
                            <List className={ classes.root } key={ index } style={ { paddingTop: 0, paddingBottom: 0 } }>
                                <ListItem button onClick={ () => this.handleClick(index) } style={ { paddingTop: 0, paddingBottom: 0, height: 52 } }>
                                    <ListItemIcon>
                                        <InboxIcon/>
                                    </ListItemIcon>
                                    <ListItemText inset primary={ item.name }/>
                                    {item.open ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse component='li' in={ item.open } transitionDuration='auto' unmountOnExit>
                                    <List disablePadding>
                                        {
                                            item.children.map((child, childIndex) => {
                                                return (
                                                    <ListItem button key={ index.toString() + childIndex }>
                                                        <ListItemText inset primary={ child.name }/>
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </List>
                                </Collapse>
                            </List>
                        );
                    })
                }
            </div>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
