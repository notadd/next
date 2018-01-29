import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { History } from 'history';
import createHashHistory from 'history/createHashHistory';
import * as classNames from 'classnames';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMore from 'material-ui-icons/ExpandMore';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import ChatBubble from 'material-ui-icons/ChatBubble';
import Notifications from 'material-ui-icons/Notifications';
import Badge from 'material-ui/Badge';
import compose from 'recompose/compose';
import MailIcon from 'material-ui-icons/Mail';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import withWidth from 'material-ui/utils/withWidth';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';

const styles = {
    badge: {
        'box-sizing': 'border-box',
        'border': '2px solid #fff',
        'font-size': '12px',
        'height': '20px',
        'width': '20px',
    },
    root: {
        'width': '100%',
        'max-width': '260px',
        'background': '#fff',
    },
    childItem: {
        'background': '#f7f7f7',
        'padding': '0',
        'height': '40px',
    },
    innerRoot: {
        'background': '#ededed' ,
    },
    innerSelectBtn: {
        'background': '#e0e0e0',
        'color': '#333',
    },
    selectFirstLevelMenu: {
        'background': '#f7f7f7',
        'border-top': '1px solid #e0e0e0',
        'border-bottom': '1px solid #e0e0e0',
        'color': '#333333',
    },
};

type User = {
    name: string;
    email: string;
    user_img: string;
    message: number;
};

type State = {
    navs: Array<any>;
    user: User;
    open: boolean,
};

interface Props {
    history?: History;
    open: boolean;
    width: string;
    sideNav: Array<any>;
}

type PropsWithStyles = Props & WithStyles<keyof typeof styles>;

class SideBar extends React.Component<PropsWithStyles, State> {
    constructor(props: PropsWithStyles, state: State) {
        super(props, state);
        this.state = {
            navs: props.sideNav,
            open: props.open,
            user: {
                name: '管理员',
                email: 'zhhu_123@163.com',
                user_img: require('../assets/images/user.jpg'),
                message: 5,
            },
        };
    }
    componentWillReceiveProps(nextProps: object) {
        this.setState({
            open: nextProps['open'],
            navs: nextProps['sideNav'],
        });
    }
    componentDidMount() {
        const user = localStorage.getItem('notadd_user');
        if (user === null) {
            createHashHistory().push('/login');
            window.location.reload();
        } else {
            const userState = Object.assign(this.state.user);
            userState.name = JSON.parse(user)['username'];
            this.setState({user: userState});
        }
    }
    handleClick(index: number, subIndex: any) {
        const sides = Object.assign({}, this.state.navs);
        if (subIndex === null) {
            Object.keys(sides).forEach(item => {
                if (item === index.toString()) {
                    sides[ item ].open = !sides[ item ].open;
                } else {
                    sides[ item ].open = false;
                }
            });
        } else {
            const childArr = sides[index].children;
            Object.keys(childArr).forEach(item => {
                if (item === subIndex.toString()) {
                    childArr[Number(item)].open = ! childArr[Number(item)].open;
                } else {
                    childArr[Number(item)].open = false;
                }
            });
        }
        const arr = new Array();
        Object.keys(sides).forEach(item => {
            arr.push(sides[item]);
        });
        this.setState({ navs: arr });
    }
    render() {
        const { width, classes } = this.props;
        const wd = width;
        const open = this.state.open;
        const condition = (open === false && ((wd === 'md') || (wd === 'lg') || (wd === 'xl'))) || (wd === 'sm');
        return (
            <div className="sideBar">
                <div
                    className="userBox"
                >
                    <div>
                        <Avatar
                            alt={this.state.user.name}
                            src={this.state.user.user_img}
                            className="bigAvatar"
                        />
                        <div className="user-right">
                            <p>{this.state.user.name}</p>
                            <p>{this.state.user.email}</p>
                            <div>
                                <Badge
                                    className={classNames(this.props.classes.badge, 'badgeIcon')}
                                    classes={{
                                        colorAccent: this.props.classes.badge,
                                    }}
                                    style={{border: 0}}
                                    badgeContent={4}
                                    color="accent"
                                >
                                    <Notifications/>
                                </Badge>
                                <Badge
                                    className={classNames(this.props.classes.badge, 'badgeIcon')}
                                    classes={ {
                                        colorAccent: this.props.classes.badge,
                                    } }
                                    style={{border: 0, marginLeft: 30}}
                                    badgeContent={4}
                                    color="accent"
                                >
                                    <MailIcon/>
                                </Badge>
                                <Badge
                                    className={classNames(this.props.classes.badge, 'badgeIcon')}
                                    classes={{
                                        colorAccent: this.props.classes.badge,
                                    }}
                                    style={{border: 0, marginLeft: 30}}
                                    badgeContent={4}
                                    color="accent"
                                >
                                    <ChatBubble/>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.navs &&
                    this.state.navs.map((item: any, index: number) => {
                        return (
                            <List
                                className={this.props.classes.root}
                                key={index}
                                style={{paddingTop: 0, paddingBottom: 0}}
                            >
                                {
                                    condition ?
                                        <ListItem
                                            className={
                                                classNames(
                                                    item.open ?
                                                    this.props.classes.selectFirstLevelMenu : '',
                                                    'list-item',
                                                    item.open ? 'selectFirstLevelMenu' : '',
                                                )
                                            }
                                            onMouseEnter={() => this.handleClick(index, null)}
                                        >
                                            <Icon style={{color: '#808080'}}>{item.icon}</Icon>
                                        </ListItem>
                                        :
                                        <ListItem
                                            button
                                            onClick={() => this.handleClick(index, null)}
                                            className={
                                                classNames(
                                                    item.open ?
                                                        this.props.classes.selectFirstLevelMenu : '',
                                                    item.open ? 'selectFirstLevelMenu' : '',
                                                )
                                            }
                                        >
                                            <Icon style={{color: 'inherit'}}>{item.icon}</Icon>
                                            <ListItemText inset style={{paddingLeft: 40}} primary={item.name}/>
                                            {
                                                item.open ?
                                                    <ExpandMore
                                                        style={{
                                                            color: 'inherit',
                                                            width: 20,
                                                            height: 20,
                                                        }}
                                                    />
                                                    :
                                                    <KeyboardArrowRight
                                                        style={{
                                                            color: 'inherit',
                                                            width: 20,
                                                            height: 20,
                                                        }}
                                                    />
                                            }
                                        </ListItem>
                                }
                                {
                                    item.children.length > 0 && <Collapse component="li" in={item.open} unmountOnExit>
                                        <List
                                            disablePadding
                                            style={{
                                                paddingTop: 0,
                                                paddingBottom: 0
                                            }}
                                        >
                                            {
                                                item.children.map((child: any, childIndex: number) => {
                                                    return (
                                                        <List
                                                            style={{
                                                                paddingTop: 0,
                                                                paddingBottom: 0,
                                                            }}
                                                            key={index.toString() + childIndex}
                                                        >
                                                            <ListItem
                                                                button
                                                                className={
                                                                    classNames(
                                                                        this.props.classes.childItem,
                                                                        child.open ? this.props.classes.innerRoot : '',
                                                                        child.open ? 'innerRootSelect' : '',
                                                                    )
                                                                }
                                                                style={{
                                                                    paddingRight: 25,
                                                                }}
                                                            >
                                                                {
                                                                    child.hasOwnProperty('children')
                                                                    && child.children.length ? (
                                                                        <ListItemText
                                                                            onClick={() =>
                                                                                this.handleClick(index, childIndex)}
                                                                            style={{paddingLeft: 78}}
                                                                            inset
                                                                            primary={child.name}
                                                                        />
                                                                    ) : (
                                                                        <NavLink
                                                                            to={child.path}
                                                                            activeClassName="selectBtn"
                                                                            exact
                                                                        >
                                                                            <ListItemText
                                                                                style={{paddingLeft: 78}}
                                                                                inset
                                                                                primary={child.name}
                                                                            />
                                                                        </NavLink>
                                                                    )
                                                                }
                                                                {
                                                                    child.hasOwnProperty('children')
                                                                    && child.children.length > 0
                                                                    && child.open ?  (
                                                                        <ExpandMore
                                                                            style={{
                                                                                color: '#808080',
                                                                                width: 20,
                                                                                height: 20,
                                                                            }}
                                                                        />
                                                                    ) : child.hasOwnProperty('children')
                                                                    && child.children.length > 0
                                                                    && child.open === false ? (
                                                                        <KeyboardArrowRight
                                                                            style={{
                                                                                color: '#808080',
                                                                                width: 20,
                                                                                height: 20,
                                                                            }}
                                                                        />
                                                                    ) : null
                                                                }
                                                            </ListItem>
                                                            {
                                                                child.hasOwnProperty('children')
                                                                && child.children.length
                                                                    ?
                                                                    (
                                                                        <Collapse
                                                                            component="li"
                                                                            in={child.open}
                                                                            unmountOnExit
                                                                        >
                                                                            <List
                                                                                disablePadding
                                                                                style={{
                                                                                    borderBottom: '1px solid #e0e0e0'
                                                                                }}
                                                                            >
                                                                                {
                                                                                    child.children.map(
                                                                                        (
                                                                                            inner: any,
                                                                                            innerIndex: number
                                                                                        ) => (
                                                                                            <NavLink
                                                                                                exact
                                                                                                to={inner.path}
                                                                                                className={
                                                                                                    this.props
                                                                                                        .classes
                                                                                                        .innerRoot
                                                                                                }
                                                                                                activeClassName={
                                                                                                    classNames(
                                                                                                        classes
                                                                                                        .innerSelectBtn,
                                                                                                        'innerSelectBtn'
                                                                                                    )
                                                                                                }
                                                                                                key={
                                                                                                    index.toString()
                                                                                                    + childIndex
                                                                                                    + innerIndex
                                                                                                }
                                                                                            >
                                                                                                <ListItemText
                                                                                                    style={{
                                                                                                        paddingLeft:
                                                                                                            78
                                                                                                    }}
                                                                                                    inset
                                                                                                    primary={
                                                                                                        inner.name
                                                                                                    }
                                                                                                />
                                                                                            </NavLink>
                                                                                            )
                                                                                        )
                                                                                }
                                                                            </List>
                                                                        </Collapse>
                                                                    ) : null
                                                            }
                                                        </List>
                                                    );
                                                })
                                            }
                                        </List>
                                    </Collapse>}
                            </List>
                        );
                    })
                }
            </div>
        );
    }
}

export default compose(withStyles(styles), withWidth())(SideBar);
