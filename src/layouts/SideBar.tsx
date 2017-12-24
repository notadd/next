import * as React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ChatBubble from 'material-ui-icons/ChatBubble';
import Notifications from 'material-ui-icons/Notifications';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import * as classNames from 'classnames';
import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import Avatar from 'material-ui/Avatar';
import { NavLink } from 'react-router-dom';

const styles = {
    bigAvatar: {
        'width': '50px',
        'height': '50px',
        'margin-top': '35px',
        'margin-right': '20px',
    },
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
        'border-bottom': '1px solid #e0e0e0'
    },
};

type State = {
    navs: any,
    user: object
};

class SideBar extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        navs: [
            {
                name: '全局设置',
                open: false,
                index: 0,
                children: [
                    {
                        'name': '参数配置',
                        'path': '/configurations',
                        'open': false,
                        'children': [],
                    },
                    {
                        'name': 'SEO设置',
                        'path': '/seo',
                        'open': false,
                        'children': [],
                    }
                ]
            },
            {
                name: '附件设置',
                open: false,
                index: 1,
                children: [
                    {
                        'name': '上传设置',
                        'path': '/upload',
                        'open': false,
                        'children': [],
                    }
                ]
            },
            {
                name: '应用管理',
                open: false,
                index: 2,
                children: [
                    {
                        'name': '模块配置',
                        'path': '/module',
                        'open': false,
                        'children': [
                            {
                                'name': '开启模块',
                                'path': '/module/open-module'
                            },
                            {
                                'name': '域名配置',
                                'path': '/module/domain-config'
                            },
                            {
                                'name': '导入导出',
                                'path': '/module/import-export'
                            },
                            {
                                'name': '本地安装',
                                'path': '/module/install'
                            },
                        ]
                    },
                    {
                        'name': '插件配置',
                        'path': '/addon',
                        'open': false,
                        'children': [
                            {
                                'name': '开启插件',
                                'path': '/addon/openAddon'
                            },
                            {
                                'name': '导入导出',
                                'path': '/addon/import-export'
                            },
                            {
                                'name': '本地安装',
                                'path': '/addon/install'
                            },
                        ],
                    },
                    {
                        'name': '拓展配置',
                        'path': '/extension',
                        'open': false,
                        'children': [],
                    }
                ]
            },
            {
                name: '全局插件',
                open: false,
                index: 3,
                children: []
            },
            {
                name: '系统插件',
                open: false,
                index: 4,
                children: [
                    {
                        'name': '菜单管理',
                        'path': '/menu',
                        'open': false,
                        'children': [],
                    },
                    {
                        'name': '邮件设置',
                        'path': '/mail',
                        'open': false,
                        'children': [],
                    },
                    {
                        'name': '调试工具',
                        'path': '/debug',
                        'open': false,
                        'children': [],
                    }
                ]
            }
        ],
        user: {
            name: '管理员',
            email: 'zhhu_123@163.com',
            user_img: require('../assets/images/user.jpg'),
            message: 5,
        },
    };

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

    handleSelected(father: any) {
        let select = false;
        const arr = father.children;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].path === location.pathname) {
                select = true;
                break;
            }
        }
        return select;
    }

    render() {
        return (
            <div className="sideBar">
                <div className="userBox">
                    <div
                        style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            height: 'inherit',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Avatar
                            alt={this.state.user.name}
                            src={this.state.user.user_img}
                            className={this.props.classes.bigAvatar}
                        />
                        <div className="user-right">
                            <p>{this.state.user.name}</p>
                            <p>{this.state.user.email}</p>
                            <div>
                                <Badge
                                    className={this.props.classes.badge}
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
                                    className={this.props.classes.badge}
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
                                    className={this.props.classes.badge}
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
                    this.state.navs.map((item, index) => {
                        return (
                            <List
                                className={this.props.classes.root}
                                key={index}
                                style={{paddingTop: 0, paddingBottom: 0}}
                            >
                                <ListItem
                                    button
                                    onClick={() => this.handleClick(index, null)}
                                    className={
                                        classNames(item.open ? this.props.classes.selectFirstLevelMenu : ''
                                        , item.open ? 'selectFirstLevelMenu' : '')}
                                    style={{
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 23,
                                        paddingRight: 25,
                                        height: 52
                                    }}
                                >
                                    <ListItemIcon>
                                        <InboxIcon/>
                                    </ListItemIcon>
                                    <ListItemText inset primary={item.name}/>
                                    {item.open ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse component="li" in={item.open} unmountOnExit>
                                    <List
                                        disablePadding
                                        style={{
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            borderBottom: '1px solid #e0e0e0'
                                        }}
                                    >
                                        {
                                            item.children.map((child, childIndex) => {
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
                                                            className={classNames(this.props.classes.childItem,
                                                                child.open ? this.props.classes.innerRoot : '',
                                                                child.open ? 'innerRootSelect' : '',
                                                            )}
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
                                                                    <ExpandLess/>
                                                                ) : child.hasOwnProperty('children')
                                                                    && child.children.length > 0
                                                                    && child.open === false ? (
                                                                    <ExpandMore/>
                                                                ) : null
                                                            }
                                                        </ListItem>
                                                        {
                                                            child.hasOwnProperty('children') && child.children.length
                                                                ? (
                                                                <Collapse component="li" in={child.open} unmountOnExit>
                                                                    <List
                                                                        disablePadding
                                                                        style={{borderBottom: '1px solid #e0e0e0'}}
                                                                    >
                                                                        {
                                                                            child.children.map((inner, innertIndex) => {
                                                                                return (
                                                                                    <NavLink
                                                                                        to={inner.path}
                                                                                        className={
                                                                                            this.props.classes.innerRoot
                                                                                        }
                                                                                        activeClassName={
                                                                                            classNames(
                                                                                                this.
                                                                                                props.
                                                                                                classes.innerSelectBtn,
                                                                                                'innerSelectBtn'
                                                                                            )
                                                                                        }
                                                                                        key={
                                                                                            index.toString()
                                                                                            + childIndex
                                                                                            + innertIndex
                                                                                        }
                                                                                    >
                                                                                        <ListItemText
                                                                                            style={{paddingLeft: 78}}
                                                                                            inset
                                                                                            primary={inner.name}
                                                                                        />
                                                                                    </NavLink>
                                                                                );
                                                                            })
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
                                </Collapse>
                            </List>
                        );
                    })
                }
            </div>
        );
    }
}

export default withStyles(styles)<{}>(SideBar);
