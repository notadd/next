import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import logo from '../assets/images/logo.svg';
import sides from '../api/side.json';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
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
            <div className='sideBar'>
                <div className='logo'>
                    <img src={ logo } alt=''/>
                </div>
                {
                    this.state.navs.map((item, index) => {
                        return (
                            <List className={ this.props.classes.root } key={ index }>
                                <ListItem button onClick={ () => this.handleClick(index) }>
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

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Sidebar);
