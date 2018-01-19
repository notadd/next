import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
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
    open: boolean,
    openTip: boolean,
    treeData: Array<any>,
};

class ArticleType extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: false,
            openTip: true,
            modalName: '产品中心',
            modalId: '',
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
    handleSubmit = () => {
        this.setState({ open: false });
    };
    handleClickEdit = (pro: any) => {
        window.console.log(pro);
    };
    render() {
        return (
            <div className="top-action-module">
                <p className="crumbs">
                    CMS <b>/</b> 文章管理
                </p>
                <h4 className="title">分类管理</h4>
                <div className="btn-group">
                    <IconButton
                        className={this.props.classes.menuBtn}
                    >
                        <Add />
                    </IconButton>
                    <IconButton
                        className={this.props.classes.menuBtn}
                    >
                        <Cached />
                    </IconButton>
                </div>
                <Paper className={this.props.classes.root}>
                    <div className="menus-manager">
                        <SortableTree
                            treeData={this.state.treeData}
                            onChange={treeData => this.setState({ treeData })}
                            rowHeight={40}
                            generateNodeProps={({ node, path }) => ({
                                buttons: [
                                    <IconButton
                                         onClick={() => this.handleClickEdit(node)}
                                    >
                                        <ModeEdit />
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
                    className="dialog-content"
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
                    className="dialog-content"
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
                        <h4>
                            <IconButton
                                onClick={this.handleClose}
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