import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FileDownload from 'material-ui-icons/FileDownload';
import FileUpload from 'material-ui-icons/FileUpload';
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
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
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
    list: Array<any>,
};

class ModuleImport extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        checkedAll: false,
        rowsPerPage: 2,
        currentPage: 0,
        list: [
            {
                id: 11,
                check: false,
                name: 'notadd',
                description: '一些说明',
                version: '0.777',
            },
            {
                id: 12,
                check: false,
                name: 'notadd1',
                description: '一些说明',
                version: '0.456',
            },
            {
                id: 13,
                check: false,
                name: 'notadd2',
                description: '一些说明',
                version: '0.777',
            },
            {
                id: 14,
                check: false,
                name: 'notadd3',
                description: '一些说明',
                version: '0.777',
            },
            {
                id: 15,
                check: false,
                name: 'notadd4',
                description: '一些说明',
                version: '0.7777',
            },
        ],
    };
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
                    window.console.log(i);
                    this.state.list[i].check = false;
                }
            }
        }
        this.setState({
            [name]: event.target.checked,
        });
    };
    handleChange = (pro: any) => (event: any) => {
        const rowPage = this.state.rowsPerPage;
        const currentPage = this.state.currentPage + 1;
        this.state.checkedAll = true;
        pro.check = true;
        if (!event.target.checked) {
            pro.check = false;
        }
        for (let i = 0; i < this.state.list.length; i += 1) {
            if (i < currentPage * rowPage && i >= (currentPage - 1) * rowPage) {
                if (this.state.list[i].check === false) {
                    this.state.checkedAll = false;
                }
            }
        }
        this.setState({
            [pro]: event.target.checked,
        });
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
        const { currentPage, rowsPerPage, list } = this.state;
        return (
            <div className="top-action-module">
                <p className="crumbs">
                    全局 / 应用管理 / 模块配置
                </p>
                <h4 className="title">导入/导出</h4>
                <div className="btn-group">
                    <IconButton
                        className={this.props.classes.menuBtn}
                    >
                        <FileUpload />
                    </IconButton>
                    <IconButton
                        className={this.props.classes.menuBtn}
                    >
                        <FileDownload />
                    </IconButton>
                </div>
                <Paper className="root-paper">
                   <div className="table-hidden">
                       <Table className={this.props.classes.table}>
                           <TableHead className="table-head">
                               <TableRow>
                                   <TableCell className="table-cell-status" numeric>
                                       <Checkbox
                                           checked={this.state.checkedAll}
                                           onChange={this.handleChangeAll('checkedAll')}
                                           value="checkedAll"
                                       />
                                   </TableCell>
                                   <TableCell className={this.props.classes.tableCell} numeric>模块名称</TableCell>
                                   <TableCell className={this.props.classes.tableCell} numeric>描述</TableCell>
                                   <TableCell className={this.props.classes.tableCell} numeric>版本</TableCell>
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
                                               <TableCell padding="checkbox" className="table-cell-status" numeric>
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
                                                   {n.description}
                                               </TableCell>
                                               <TableCell className={this.props.classes.tableCell} numeric>
                                                   {n.version}
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
export default withStyles(styles)(ModuleImport);