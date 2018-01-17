import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import Switch from 'material-ui/Switch';
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
        'background-color': '#ffffff',
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
        'text-align': 'center',
        'padding': '0',
    },
};
type State = {
    open: boolean,
    modalId: string,
    modalName: string,
    rowsPerPage: number,
    currentPage: number,
};

class ModuleOpen extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        list: [
            {
                id: 11,
                name: '用户中心',
                author: 'Mark',
                descri: '一键分析项目源码，直观了解项目代码质量，提供代码安全扫描功能',
                status: true,
            },
            {
                id: 12,
                name: '商城',
                author: 'Mark',
                descri: 'fefreg',
                status: true,
            },
            {
                id: 13,
                name: '商家',
                author: 'Mark',
                descri: 'fefreg',
                status: false,
            },
            {
                id: 14,
                name: 'CMS',
                author: 'Mark',
                descri: 'fefreg',
                status: false,
            },
            {
                id: 15,
                name: 'Notadd2',
                author: 'Mark',
                descri: 'fefreg',
                status: true,
            },
        ],
        open: false,
        modalId: '',
        modalName: '',
        rowsPerPage: 3,
        currentPage: 0,
    };
    handleChange = (pro: any) => (event: any, checked: any) => {
        if (checked) {
            pro.status = true;
        } else {
            pro.status = false;
        }
        this.setState({
            [pro]: checked,
        });
    };
    handleClickOpen = (pro: any) => {
        this.state.modalName = pro.name;
        this.state.modalId = pro.id;
        this.setState({
            open: true,
        });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        this.setState({ open: false });
    };
    handlePageClick = (data: any) => {
        this.setState({ currentPage: data.selected });
    };
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (
            <div>
                <p className="crumbs">
                    全局 / 应用管理 / 模块配置
                </p>
                <h4 className="title">开启模块</h4>
                <Paper className="root-paper">
                    <div className="table-hidden">
                        <Table className={this.props.classes.table}>
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell className={this.props.classes.tableCell} numeric>模块名称</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>作者</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>描述</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>状态</TableCell>
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
                                                <TableCell className={this.props.classes.tableCell} numeric>{n.name}</TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.author}
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.descri}
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    <Switch
                                                        checked={n.status}
                                                        onChange={this.handleChange(n)}
                                                        aria-label="n.status"
                                                    />
                                                </TableCell>
                                                <TableCell numeric>
                                                    <IconButton
                                                        className={this.props.classes.menuBtn}
                                                        onClick={() => this.handleClickOpen(n)}
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
                        <h4>确定要删除模块名称"{this.state.modalName}"吗?</h4>
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
export default withStyles(styles)(ModuleOpen);