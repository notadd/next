import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';
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
    rowsPerPage: number,
    currentPage: number,
    list: any,
};

class ModuleOpen extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            open: false,
            rowsPerPage: 2,
            currentPage: 0,
            list: [
                {
                    id: 11,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: true,
                    other: '/',
                    use: true,
                },
                {
                    id: 12,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
                {
                    id: 13,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
                {
                    id: 14,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
                {
                    id: 15,
                    name: 'notadd',
                    domain: '多域名功能未开启',
                    defaul: false,
                    other: '/',
                    use: false,
                },
            ],
        };
    }
    handleChange = (pro: any) => (event: any, check: boolean) => {
        pro.use = check;
        this.setState({
            [pro]: check,
        });
    };
    changeCheckBox = (pro: any) => (event: any) => {
        pro.defaul = event.target.checked;
        this.setState({
            [pro]: event.target.checked,
        });
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
                <h4 className="title">域名配置</h4>
                <Paper className="root-paper">
                    <div className="table-hidden">
                        <Table className={this.props.classes.table}>
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell className={this.props.classes.tableCell} numeric>模块名称</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>域名</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>默认</TableCell>
                                    <TableCell className={this.props.classes.tableCell} numeric>别名</TableCell>
                                    <TableCell numeric>使用域名</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="table-body">
                                {list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                                    .map((n: any, index: number) => {
                                        return (
                                            <TableRow
                                                hover
                                                className={index % 2 === 0 ? this.props.classes.evenRow : ''}
                                                key={n.id}
                                            >
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.name}</TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.domain}
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    <Checkbox
                                                        className="table-check-box"
                                                        checked={n.defaul}
                                                        onChange={this.changeCheckBox(n)}
                                                        value="n.defaul"
                                                    />
                                                </TableCell>
                                                <TableCell className={this.props.classes.tableCell} numeric>
                                                    {n.other}
                                                </TableCell>
                                                <TableCell numeric>
                                                    <Switch
                                                        checked={n.use}
                                                        onChange={this.handleChange(n)}
                                                        aria-label="n.use"
                                                    />
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
            </div>
        );
    }
}
export default withStyles(styles)(ModuleOpen);