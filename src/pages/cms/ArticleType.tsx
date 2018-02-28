import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import ErrorIcon from 'material-ui-icons/ErrorOutline';
import Add from 'material-ui-icons/Add';
import Cached from 'material-ui-icons/Cached';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import axios from 'axios';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
    },
};
type State = {
    modalName: string,
    modalId: string,
    open: boolean,
    openTip: boolean,
    nodeLength: number,
    treeData: Array<any>,
};

class ArticleType extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);

        this.state = {
            open: false,
            openTip: false,
            modalName: '产品中心',
            modalId: '',
            nodeLength: 0,
            treeData: [],
        };
    }
    componentDidMount() {
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getClassifys(getAllClassify: {
                        useFor: art,
                    }){
                        id,
                        classifyName,
                        classifyAlias,
                        chainUrl,
                        describe,
                        color,
                        groupId,
                        childrens{
                            id,
                            classifyName,
                            childrens{
                                id,
                                classifyName,
                                childrens{
                                    id,
                                    classifyName,
                                    childrens{
                                        id,
                                        classifyName,
                                        childrens{
                                            id,
                                            classifyName,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        }).then(response => {
            let arr = new Array();
            const structures = response.data.data.getClassifys[0].childrens;
            window.console.log(structures);
            arr = Object.keys(structures).map(index => {
                const item = structures[index];
                item.title = item.classifyName;
                item.id = item.id;
                const children = item.childrens;
                window.console.log(children);
                if (item.childrens !== null) {
                    item.children = Object.keys(children).map(i => {
                        const sub = children[i];
                        sub.title = sub.classifyName;
                        sub.id = sub.id;
                        const childs = sub.childrens;
                        if (sub.childrens !== null) {
                            sub.children = Object.keys(childs).map(s => {
                                const su = childs[s];
                                su.title = su.classifyName;
                                su.id = su.id;
                                const childs2 = su.childrens;
                                if (su.childrens !== null) {
                                    su.children = Object.keys(childs2).map(s2 => {
                                        const fours = childs2[s2];
                                        fours.title = fours.classifyName;
                                        fours.id = fours.id;
                                        if (fours.childrens !== null) {
                                            const childs3 = fours.childrens;
                                            fours.children = Object.keys(childs3).map(s3 => {
                                                const five = childs3[s3];
                                                five.title = five.classifyName;
                                                five.id = five.id;
                                                return five;
                                            });
                                        }
                                        return fours;
                                    });
                                }
                                return su;
                            });
                        }
                        return sub;
                    });
                }
                return item;
            });
            this.setState({ treeData: arr });
        });
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    handleCloseTip = () => {
        this.setState({ openTip: false });
    };
    handleSubmit = () => {
        if (this.state.nodeLength > 0) {
            this.setState({
                open: false,
                openTip: true,
            });
        } else {
            this.setState({ open: false });
        }
    };
    render() {
        const handleClickRemove = ( pro: any ) => {
            this.setState({
                open: true,
                modalName: pro.node.title,
                modalId: pro.node.id,
                nodeLength: pro.node.children.length,
            });
        };
        return (
            <div>
                <div className="top-action-module clearfix">
                    <div className="pull-left">
                        <p className="crumbs">
                            CMS <b>/</b> 文章管理
                        </p>
                        <h4 className="title">分类管理</h4>
                    </div>
                    <div className="btn-group pull-right">
                        <Link to={'/cms/article/type/edit/' + 'add'}>
                            <IconButton
                                className={this.props.classes.menuBtn}
                                title="新增"
                            >
                                <Add />
                            </IconButton>
                        </Link>
                        <IconButton
                            className={this.props.classes.menuBtn}
                            title="刷新"
                        >
                            <Cached />
                        </IconButton>
                    </div>
                </div>
                <Paper className={this.props.classes.root}>
                    <div className="menus-manager">
                        <SortableTree
                            treeData={this.state.treeData}
                            onChange={treeData => this.setState({ treeData })}
                            rowHeight={40}
                            generateNodeProps={(rowInfo) => ({
                                buttons: [
                                    <IconButton
                                        key={rowInfo.node.id}
                                        title="编辑"
                                    >
                                        <Link to={'/cms/article/type/edit/' + rowInfo.node.id}>
                                            <ModeEdit />
                                        </Link>
                                    </IconButton>,
                                    <IconButton
                                        key={rowInfo.node.id}
                                        onClick={() => handleClickRemove(rowInfo)}
                                        title="删除"
                                    >
                                        <DeleteIcon />
                                    </IconButton>,
                                ],
                            })}
                        />
                    </div>
                </Paper>
                <Dialog
                    open={this.state.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog-content-action"
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        className="dialog-title"
                    >
                        <IconButton
                            onClick={this.handleClose}
                        >
                            <ClearIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className="dialog-content">
                        <h4>确定要删除分类名称"{this.state.modalName}"吗?</h4>
                    </DialogContent>
                    <DialogActions className="dialog-actions">
                        <Button onClick={this.handleClose}>
                            取消
                        </Button>
                        <Button onClick={this.handleSubmit} autoFocus>
                            确认提交
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.openTip}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog-content-action dialog-tip"
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        className="dialog-title"
                    >
                        <IconButton
                            onClick={this.handleCloseTip}
                        >
                            <ClearIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className="dialog-content">
                        <h4>
                            <IconButton
                            >
                                <ErrorIcon />
                            </IconButton>
                            删除失败！
                        </h4>
                        <p>要删除此分类必须先删除子层级！</p>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
export default withStyles(styles)(ArticleType);