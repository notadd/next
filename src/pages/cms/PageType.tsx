import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import DeleteIcon from 'material-ui-icons/Delete';
import ErrorIcon from 'material-ui-icons/ErrorOutline';
import Add from 'material-ui-icons/Add';
import Cached from 'material-ui-icons/Cached';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

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
    nodeLength: number,
    open: boolean,
    openTip: boolean,
    treeData: Array<any>,
};

class PageType extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);

        this.state = {
            open: false,
            openTip: false,
            modalName: '产品中心',
            modalId: '',
            nodeLength: 0,
            treeData: [
                {
                    id: 1,
                    title: '产品中心',
                    children: [],
                },
                {
                    expanded: true,
                    id: 2,
                    title: '新闻资讯',
                    children: [
                        {
                            id: 21,
                            title: '媒体报道',
                            children: [],
                        },
                        {
                            id: 22,
                            title: '行业资讯',
                            children: [
                                {
                                    id: 221,
                                    title: '资讯1-1',
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 23,
                            title: '企业公告',
                            children: [],
                        },
                    ],
                },
                {
                    id: 3,
                    title: '视频中心',
                    children: [
                        {
                            id: 31,
                            title: '新闻XXX',
                            children: [],
                        },
                    ],
                },
                {
                    id: 4,
                    title: '其他资讯',
                    children: [
                        {
                            id: 41,
                            title: '0109资讯1-1',
                            children: [],
                        },
                        {
                            id: 42,
                            title: '0109资讯1-2',
                            children: [],
                        },
                    ],
                },
            ],
        };
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
                            CMS <b>/</b> 页面管理
                        </p>
                        <h4 className="title">分类管理</h4>
                    </div>
                    <div className="btn-group pull-right">
                        <div className="btn-group">
                            <Link to={'/cms/page/type/edit/' + 'add'}>
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
                                        <Link to={'/cms/page/type/edit/' + rowInfo.node.id}>
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
export default withStyles(styles)(PageType);