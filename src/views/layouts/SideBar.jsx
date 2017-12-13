import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import sides from '../../api/side.json';

const styles = theme => ({
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
                {
                    this.state.navs.map((item, index) => {
                        return (
                            <List className={ classes.root } key={ index }>
                                <ListItem button onClick={ () => this.handleClick(index) }>
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
