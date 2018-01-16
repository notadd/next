import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Table, {
    TableBody,
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
};
type State = {
    checkedAll: boolean,
    rowsPerPage: number,
    currentPage: number,
    open: boolean,
    modalId: string,
    modalName: string,
};

let id = 0;
function createData(check: boolean, name: any, author: any) {
    id += 1;
    return { id, check, name, author };
}

const list = [
    createData(false, '标题名称测试标题名称测试标题名称测试标题名称测试', '新闻资讯'),
    createData(false, '标题名称测试标题名称测试标题名称测试标题名称测试', '新闻资讯'),
    createData(false, '标题名称测试标题名称测试标题名称测试标题名称测试', '新闻资讯'),
    createData(false, '标题名称测试标题名称测试标题名称测试标题名称测试', '新闻资讯'),
    createData(false, '标题名称测试标题名称测试标题名称测试标题名称测试', '新闻资讯'),
];

class Message extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        checkedAll: false,
        rowsPerPage: 2,
        currentPage: 0,
        open: false,
        modalId: '',
        modalName: '',
    };
    handleChangeAll = (name: any) => (event: any) => {
        if (event.target.checked) {
            list.map(item => {
                item.check = true;
            });
        } else {
            list.map(item => {
                item.check = false;
            });
        }
        this.setState({
            [name]: event.target.checked,
        });
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

    render() {
        const { currentPage, rowsPerPage } = this.state;
        return (
            <div className="top-action-module cms">
                <p className="crumbs">
                    CMS / 页面管理
                </p>
                <h4 className="title">全部页面</h4>
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell className={this.props.classes.tableCellStatus}>

                                </TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>页面名称</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>作者</TableCell>
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
                                                className={this.props.classes.tableCellStatus}
                                            >

                                            </TableCell>
                                            <TableCell className={this.props.classes.tableCell} numeric>
                                                {n.name}
                                            </TableCell>
                                            <TableCell className={this.props.classes.tableCell} numeric>
                                                {n.author}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
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
            </div>
        );
    }
}
export default withStyles(styles)(Message);