import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import logo from '../assets/images/logo.svg';
import sides from '../api/side.json';
import { MenuItemLink } from 'react-admin';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 236,
        background: '#fff',
        boxShadow: '1px 0 4px 0 rgba(0, 0, 0, 0.3)',
        height: '100%',
        position: 'fixed',
    },
    logoStyle: {
        alignItems: 'center',
        display: 'flex',
        height: 64,
        justifyContent: 'center',
    },
    text: {
        fontSize: '14px',
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

// We shouldn't need PureComponent here as it's connected
// but for some reason it keeps rendering even though mapStateToProps returns the same object
class Sidebar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            navs: sides,
        };
    }
    handleClick(index) {
        const self = this;
        Object.keys(this.state.navs).forEach(item => {
            if (item === index.toString()) {
                self.state.navs[item].open = !self.state.navs[item].open;
            } else {
                self.state.navs[item].open = false;
            }
        });
        self.setState({ sides });
    };
    render() {
        return (
            <div className={ this.props.classes.root }>
                <div className={ this.props.classes.logoStyle }>
                    <img src={ logo } alt=''/>
                </div>
                {
                    this.state.navs.map((item, index) => {
                        return (
                            <List key={ index }>
                                <ListItem button onClick={ () => this.handleClick(index) }
                                    style={ { height: '60px', padding: '0 16px' } }>
                                    <ListItemIcon>
                                        <Icon>{ item.icon }</Icon>
                                    </ListItemIcon>
                                    <ListItemText inset primary={ item.name } classes={ { text: this.props.classes.text } }/>
                                    {item.open ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse component='li' in={ item.open } transitionDuration='auto' unmountOnExit>
                                    {
                                        item.children.map((child, childIndex) => {
                                            return (
                                                <MenuItemLink
                                                    to={ child.path }
                                                    key={ index.toString() + childIndex }
                                                    style={ { height: '48px', padding: 0, width: '100%', display: 'flex', justifyContent: 'center', fontSize: '14px' } }
                                                    primaryText={ child.name }/>
                                            );
                                        })
                                    }
                                </Collapse>
                            </List>
                        );
                    })
                }
            </div>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
