import axios from 'axios';
import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import FileDownload from 'material-ui-icons/FileDownload';
import ClearIcon from 'material-ui-icons/Clear';
import { CircularProgress } from 'material-ui/Progress';
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
    downBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#3f51b5',
        'color': '#fff',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
        'font-size': '16px',
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
    modalIdentification: string,
    modalName: string,
    rowsPerPage: number,
    currentPage: number,
    list: any,
    loading: boolean,
    transition: any,
    messageOpen: boolean,
    errorMessage: string,
};

class ModuleInstall extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            open: false,
            modalIdentification: '',
            modalName: '',
            rowsPerPage: 2,
            currentPage: 0,
            list: [],
            loading: false,
            transition: undefined,
            messageOpen: false,
            errorMessage: '',
        };
    }
    handleClickOpen = (pro: any) => {
        this.setState({
            modalName: pro.name,
            modalIdentification: pro.identification,
            open: true,
        });
    };
    handleDownLoad = (name: string) => {
        this.setState(
            {
                loading: true,
            },
        );
        axios.post('http://localhost:3000/graphql?', {
            query: `
                mutation {
                    getModules(identification: "${name}") {
                    code,
                    message
                    },
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                this.setState(
                    {
                        messageOpen: true,
                        loading: false,
                        errorMessage: '安装成功！',
                    },
                );
                this.componentDidMount();
            } else {
                this.setState(
                    {
                        messageOpen: true,
                        loading: false,
                        errorMessage: response.data.errors[0].message,
                    },
                );
                this.componentDidMount();
            }
        });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handlePageClick = (data: any) => {
        this.setState({ currentPage: data.selected });
    };
    handleSure = () => {
        this.handleDelete(this.state.modalIdentification);
    };
    handleDelete = (name: any) => {
        this.setState(
            {
                loading: true,
            },
        );
        axios.post('http://localhost:3000/graphql?', {
            query: `
                mutation {
                    uninstallModules(identification: "${name}") {
                    code,
                    message
                    },
                }
            `,
        }).then(response => {
            window.console.log(response);
            if (!response.data.errors) {
                this.setState(
                    {
                        messageOpen: true,
                        loading: false,
                        errorMessage: '删除成功！',
                    },
                );
                this.componentDidMount();
            } else {
                this.setState(
                    {
                        messageOpen: true,
                        loading: false,
                        errorMessage: response.data.errors[0].message,
                    },
                );
                this.componentDidMount();
            }
        });
    };
    componentDidMount() {
        const self = this;
        axios.post('http://localhost:3000/graphql?', {
            query: `
                query {
                    getModules(filters: {}) {
                    authors {
                        username,
                        email
                    },
                    description,
                    enabled,
                    identification,
                    installed,
                    location,
                    name,
                    version
                    },
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                const results: object = response.data.data.getModules;
                self.setState({
                    list: results
                });
            }
        });
    }
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (
            <div>
                <p className="crumbs">
                    全局 / 应用管理 / 模块配置
                </p>
                <h4 className="title">本地安装</h4>
                <Paper className="root-paper">
                   <div className="table-hidden">
                       <Table className={this.props.classes.table}>
                           <TableHead className="table-head">
                               <TableRow>
                                   <TableCell className={this.props.classes.tableCell} numeric>模块名称</TableCell>
                                   <TableCell className={this.props.classes.tableCell} numeric>作者</TableCell>
                                   <TableCell className={this.props.classes.tableCell} numeric>描述</TableCell>
                                   <TableCell numeric/>
                               </TableRow>
                           </TableHead>
                           <TableBody className="table-body">
                               {list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                                   .map((n: any, index: number) => {
                                       return (
                                           <TableRow
                                               hover
                                               className={index % 2 === 0 ? this.props.classes.evenRow : ''}
                                               key={index}
                                           >
                                               <TableCell className={this.props.classes.tableCell} numeric>
                                                   {n.name}
                                               </TableCell>
                                               <TableCell className={this.props.classes.tableCell} numeric>
                                                   {
                                                       () => {
                                                           let authors: any = [];
                                                           const arr: any = [];
                                                           n.authors.forEach((item: any) => {
                                                               arr.push(`${item.username}${(item.hasOwnProperty('email')
                                                                   || item.email === null) ? '' : `<${item.email}>`}`);
                                                           });
                                                           authors = arr.join(',');
                                                           return authors;
                                                       }
                                                   }
                                               </TableCell>
                                               <TableCell className={this.props.classes.tableCell} numeric>
                                                   {n.description}
                                               </TableCell>
                                               <TableCell numeric>
                                                   {
                                                       n.status ? <IconButton
                                                           className={this.props.classes.menuBtn}
                                                           onClick={() => this.handleClickOpen(n)}
                                                           title="删除"
                                                       >
                                                               {
                                                                   this.state.loading ?
                                                                       <CircularProgress
                                                                           style={{
                                                                               color: '#fff'
                                                                           }}
                                                                           size={20}
                                                                       />
                                                                       :
                                                                       <DeleteIcon />
                                                               }
                                                       </IconButton>
                                                           :
                                                       <IconButton
                                                           onClick={() => this.handleDownLoad(n.identification)}
                                                           className={this.props.classes.downBtn}
                                                           title="下载"
                                                       >
                                                           {
                                                               this.state.loading ?
                                                                   <CircularProgress
                                                                       style={{
                                                                           color: '#fff'
                                                                       }}
                                                                       size={20}
                                                                   />
                                                                   :
                                                                   <FileDownload />
                                                           }
                                                       </IconButton>
                                                   }
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
                        <h4>确定要删除模块名称"{this.state.modalName}"吗?</h4>
                    </DialogContent>
                    <DialogActions className="dialog-actions">
                        <Button onClick={this.handleClose}>
                            取消
                        </Button>
                        <Button onClick={this.handleSure} autoFocus>
                            删除
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={this.state.messageOpen}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={this.handleClose}
                    transition={this.state.transition}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.errorMessage}</span>}
                />
            </div>
        );
    }
}
export default withStyles(styles)(ModuleInstall);
