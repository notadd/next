import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import ExpandMore from 'material-ui-icons/ExpandMore';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Collapse from 'material-ui/transitions/Collapse';
import Table, {
    // TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';

const styles = {
    evenRow: {
        'background': '#f7f7f7',
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
    tableCellStatus: {
        'text-align': 'left',
        'padding-left': '0',
        'padding-right': '0',
        'width': '40px',
    },
    menuBtn: {},
};
type State = {
    checkedAll: boolean,
    rowsPerPage: number,
    currentPage: number,
    open: boolean,
    modalId: string,
    modalName: string,
};

class Message extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        checkedAll: false,
        rowsPerPage: 2,
        currentPage: 0,
        open: false,
        modalId: '',
        modalName: '',
        lists: [
            {
                id: 1,
                collapse: false,
                name: '王先生',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 2,
                collapse: false,
                name: '王先生',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 3,
                collapse: false,
                name: '王先生',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 4,
                collapse: false,
                name: '王先生',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 5,
                collapse: false,
                name: '王先生',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
        ],
    };
    handleClickRemove = (pro: any) => {
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
    handleClick = (pro: any) => {
        pro.collapse = !pro.collapse;
        this.setState({
            [pro]: pro.collapse,
        });
    };
    render() {
        const { currentPage, rowsPerPage, lists } = this.state;
        return (
            <div className="top-action-module cms-message">
                <p className="crumbs">
                    CMS / 信息管理
                </p>
                <h4 className="title">客户留言</h4>
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell className={this.props.classes.tableCellStatus} />
                                <TableCell className={this.props.classes.tableCell} numeric>姓名</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>电话</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>邮箱</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>时间</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                    <ul className="table-body">
                        {lists.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                            .map((n, index) => {
                                return (
                                    <li key={n.id}>
                                        <div
                                            className={index % 2 === 0 ? this.props.classes.evenRow : ''}
                                        >
                                            <div
                                                className={this.props.classes.tableCell}
                                                onClick={() => this.handleClick(n)}
                                            >
                                                {
                                                    n.collapse ?
                                                        <ExpandMore
                                                            style={{
                                                                color: '#808080',
                                                                width: 20,
                                                                height: 20}}
                                                        /> :
                                                        <KeyboardArrowRight
                                                            style={{
                                                                color: '#808080',
                                                                width: 20,
                                                                height: 20}}
                                                        />
                                                }
                                            </div>
                                            <div className={this.props.classes.tableCell}>
                                                {n.name}
                                            </div>
                                            <div className={this.props.classes.tableCell}>
                                                {n.phone}
                                            </div>
                                            <div className={this.props.classes.tableCell}>
                                                {n.email}
                                            </div>
                                            <div className={this.props.classes.tableCell}>
                                                {n.time}
                                            </div>
                                        </div>
                                        <Collapse
                                            in={n.collapse}
                                            timeout="auto"
                                            unmountOnExit
                                            className="collapse-msg"
                                        >
                                            留言：{n.msg}
                                        </Collapse>
                                    </li>
                                );
                            })}
                    </ul>
                    <div className="table-pagination">
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={<a href="javascript:;">...</a>}
                            breakClassName={'break-me'}
                            pageCount={lists.length / rowsPerPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Message);