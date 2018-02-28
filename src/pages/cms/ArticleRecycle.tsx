import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import ReplyAll from 'material-ui-icons/ReplyAll';
import Cached from 'material-ui-icons/Cached';
import Snackbar from 'material-ui/Snackbar';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

const styles = {
    evenRow: {
        'background': '#f7f7f7',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
    },
    btnEdit: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    },
    btnDelete: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#fff',
        'color': '#808080',
        'margin-left': '10px',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    },
    root: {
        'padding': '40px 30px',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'left',
        'padding': '0',
    },
};
type State = {
    checkedAll: boolean,
    rowsPerPage: number,
    currentPage: number,
    totalItems: number,
    open: boolean,
    openMessageTip: boolean,
    message: string,
    modalId: string,
    modalName: string,
    modalType: number,
    modalNum: number,
    list: Array<any>,
};

class ArticleRecycle extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            checkedAll: false,
            rowsPerPage: 0,
            currentPage: 0,
            totalItems: 0,
            open: false,
            modalId: '',
            modalName: '',
            modalType: 0,
            modalNum: 0,
            openMessageTip: false,
            message: '',
            list: [],
        };
    }
    handleChangeAll = (name: any) => (event: any) => {
        const rowPage = this.state.rowsPerPage;
        const currentPage = this.state.currentPage + 1;
        if (event.target.checked) {
            for (let i = 0; i < this.state.list.length; i += 1) {
                if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                    this.state.list[i].check = true;
                }
            }
        } else {
            for (let i = 0; i < this.state.list.length; i += 1) {
                if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                    this.state.list[i].check = false;
                }
            }
        }
        this.setState({
            [name]: event.target.checked,
        });
    };
    handleClickEdit = (pro: any) => {
        window.console.log(pro);
    }
    handleChange = (pro: any) => (event: any) => {
        const rowPage = this.state.rowsPerPage;
        const currentPage = this.state.currentPage + 1;
        this.setState({
            checkedAll: true
        });
        pro.check = event.target.checked;
        for (let i = 0; i < this.state.list.length; i += 1) {
            if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                if (this.state.list[i].check === false) {
                    this.setState({
                        checkedAll: false
                    });
                }
            }
        }
        this.setState({
            [pro]: event.target.checked,
        });
    };
    handleClickRemove = (pro: any) => {
        this.setState({
            modalName: pro.name,
            modalId: pro.id,
            open: true,
            modalType: 0,
        });
    };
    handleBatchRemove = () => {
        const rowPage = this.state.rowsPerPage;
        const currentPage = this.state.currentPage + 1;
        const arr = new Array();
        for (let i = 0; i < this.state.list.length; i += 1) {
            if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                if (this.state.list[i].check) {
                    arr.push(this.state.list[i].check);
                    this.setState({
                        open: true,
                        modalType: 1,
                        modalNum: arr.length,
                    });
                } else {
                    this.setState({
                        openMessageTip: true,
                        message: '请选择要删除的文章',
                    });
                }
            }
        }
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        this.setState({ open: false });
    };
    handleCloseTip = () => {
        this.setState({ openMessageTip: false });
    };
    handlePageClick = (data: any) => {
        const rowPage = this.state.rowsPerPage;
        const currentPage = this.state.currentPage + 1;
        for (let i = 0; i < this.state.list.length; i += 1) {
            if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                if (this.state.list[i].check === true) {
                    this.state.list[i].check = false;
                }
            }
        }
        this.setState({
            currentPage: data.selected,
            checkedAll: false,
        });
    };

    render() {
        const { currentPage, rowsPerPage, list, modalType, openMessageTip, message } = this.state;
        return (
            <div className="cms">
                <div className="top-action-module clearfix">
                    <div className="left-title pull-left">
                        <p className="crumbs">
                            CMS / 文章管理
                        </p>
                        <h4 className="title">回收站</h4>
                    </div>
                    <div className="btn-group pull-right">
                        <IconButton
                            className={this.props.classes.menuBtn}
                            onClick={this.handleBatchRemove}
                            title="删除"
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            className={this.props.classes.menuBtn}
                            title="刷新"
                        >
                            <Cached />
                        </IconButton>
                    </div>
                </div>
                <Paper className="root-paper">
                    <div className="table-hidden">
                        <Table className={this.props.classes.table}>
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell className="table-cell-status">
                                        <Checkbox
                                            checked={this.state.checkedAll}
                                            onChange={this.handleChangeAll('checkedAll')}
                                            value="checkedAll"
                                        />
                                    </TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>文章名称</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>分类</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>发布时间</TableCell>
                                    <TableCell numeric/>
                                </TableRow>
                            </TableHead>
                            <TableBody className="table-body">
                                {list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                                    .map((n, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                className={index % 2 === 0 ? this.props.classes.evenRow : ''}
                                                key={n.id}
                                            >
                                                <TableCell
                                                    padding="checkbox"
                                                    className="table-cell-status"
                                                >
                                                    <Checkbox
                                                        checked={n.check}
                                                        onChange={this.handleChange(n)}
                                                        value="n.check"
                                                    />
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.name}
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.classify}
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.publishedTime}
                                                </TableCell>
                                                <TableCell className="table-action-btn" numeric>
                                                    <IconButton
                                                        className={this.props.classes.btnEdit}
                                                        onClick={() => this.handleClickEdit(n)}
                                                        title="还原"
                                                    >
                                                        <ReplyAll />
                                                    </IconButton>
                                                    <IconButton
                                                        className={this.props.classes.btnDelete}
                                                        onClick={() => this.handleClickRemove(n)}
                                                        title="删除"
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </div>
                    <Snackbar
                        className="message-snack-bar"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={openMessageTip}
                        onClose={this.handleCloseTip}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{message}</span>}
                    />
                    <div className="table-pagination">
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={<a href="javascript:;">...</a>}
                            breakClassName={'break-me'}
                            pageCount={list.length / rowsPerPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
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
                        {
                            modalType === 0 ? <h4>确定要删除文章名称"{this.state.modalName}"吗?</h4> :
                                <h4>确定要删除这"{this.state.modalNum}"个文章吗?</h4>}
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
            </div>
        );
    }
}
export default withStyles(styles)(ArticleRecycle);