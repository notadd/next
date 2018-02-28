import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
// import Cascader from 'react-web-cascader';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Search from 'material-ui-icons/Search';
import Add from 'material-ui-icons/Add';
import Cached from 'material-ui-icons/Cached';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
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
import * as classNames from 'classnames';
import axios from 'axios';

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
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    formLabelFont: {
        'font-size': '16px',
    },
    formControlMargin: {
        'margin-bottom': '34px',
    },
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
};
type State = {
    right: boolean,
    checkedAll: boolean,
    rowsPerPage: number,
    currentPage: number,
    totalItems: number,
    open: boolean,
    openMessageTip: boolean,
    modalId: string,
    modalName: string,
    modalType: number,
    modalNum: number,
    message: string,
    selection: Array<any>,
    list: Array<any>,
    type: string,
    keyword: string,
    types: Array<any>,
    isTop: string,
    childType: string,
    isTops: Array<any>,
    options: any,
    current: number,
};

class Article extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            right: false,
            checkedAll: false,
            rowsPerPage: 0,
            currentPage: 0,
            totalItems: 0,
            open: false,
            modalId: '',
            modalName: '',
            modalType: 0,
            modalNum: 0,
            selection: [],
            openMessageTip: false,
            list: [],
            message: '',
            type: '',
            isTop: '',
            childType: '',
            types: [
                {
                    id: '12',
                    type: '新闻1',
                    children: [
                        {
                            id: '121',
                            type: '新闻1-1',
                        },
                        {
                            id: '122',
                            type: '新闻1-2',
                        },
                    ],
                },
                {
                    id: '13',
                    type: '新闻2',
                    children: [],
                },
                {
                    id: '14',
                    type: '新闻3',
                    children: [],
                },
            ],
            isTops: [
                {
                    id: '12',
                    type: '无',
                },
                {
                    id: '13',
                    type: '是',
                },
                {
                    id: '14',
                    type: '否',
                },
            ],
            keyword: '',
            options: [
                {
                    value: '110000',
                    label: '北京',
                    children: [
                        {
                            value: '110000',
                            label: '北京市',
                            children: [
                                {
                                    value: '110101',
                                    label: '东城区'
                                },
                                {
                                    value: '110102',
                                    label: '西城区'
                                },
                            ],
                        },
                    ],
                },
                {
                    value: '130000',
                    label: '河北省',
                    children: [
                        {
                            value: '130100',
                            label: '石家庄市',
                            children: [
                                {
                                    value: '130102',
                                    label: '长安区'
                                },
                                {
                                    value: '130104',
                                    label: '桥西区'
                                },
                            ],
                        },
                        {
                            value: '130200',
                            label: '唐山市',
                            children: [
                                {
                                    value: '130202',
                                    label: '路南区',
                                },
                            ],
                        },
                    ],
                },
            ],
            current: 1,
        };
    }
    componentDidMount() {
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getArticlesLimit(getArticleAll: {
                        limitNum: 10,
                        pages: 1,
                    }){
                        pagination{
                            totalItems,
                            currentPage,
                            pageSize,
                            totalPages,
                            startPage,
                            endPage,
                            startIndex,
                            endIndex,
                            pages,
                        },
                        articles{
                            id,
                            check,
                            name,
                            classify,
                            publishedTime,
                        }
                    }
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                const data = response.data.data.getArticlesLimit;
                this.setState({
                    list: data.articles,
                    totalItems: data.pagination.totalItems,
                    rowsPerPage: data.pagination.pageSize,
                    currentPage: data.pagination.currentPage - 1,
                });
            }
        });
    }
    refreshPage = () => {
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getArticlesLimit(getArticleAll: {
                        limitNum: 10,
                        pages: ${this.state.currentPage + 1},
                    }){
                        pagination{
                            totalItems,
                            currentPage,
                            pageSize,
                            totalPages,
                            startPage,
                            endPage,
                            startIndex,
                            endIndex,
                            pages,
                        },
                        articles{
                            id,
                            check,
                            name,
                            classify,
                            publishedTime,
                        }
                    }
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                const data = response.data.data.getArticlesLimit;
                this.setState({
                    list: data.articles,
                    totalItems: data.pagination.totalItems,
                    rowsPerPage: data.pagination.pageSize,
                    currentPage: data.pagination.currentPage - 1,
                    openMessageTip: true,
                    message: '刷新数据完成',
                });
            }
        });
    }
    handleChangeAll = (name: any) => (event: any) => {
        if (event.target.checked) {
            for (let i = 0; i < this.state.list.length; i += 1) {
                this.state.list[i].check = true;
            }
        } else {
            for (let i = 0; i < this.state.list.length; i += 1) {
                this.state.list[i].check = false;
            }
        }
        this.setState({
            [name]: event.target.checked,
        });
    };
    handleChange = (pro: any) => (event: any) => {
        this.setState({
            checkedAll: true
        });
        pro.check = event.target.checked;
        for (let i = 0; i < this.state.list.length; i += 1) {
            if (this.state.list[i].check === false) {
                this.setState({
                    checkedAll: false
                });
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
        const arr = new Array();
        const ids = new Array();
        for (let i = 0; i < this.state.list.length; i += 1) {
            if (this.state.list[i].check) {
                arr.push(this.state.list[i].check);
                ids.push(this.state.list[i].id);
                this.setState({
                    open: true,
                    modalType: 1,
                    modalNum: arr.length,
                    selection: ids,
                });
            } else {
                if (ids.length === 0) {
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
        let ids = new Array();
        if (this.state.modalType === 0) {
            ids.push(this.state.modalId);
        } else {
            ids = this.state.selection;
        }
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                mutation {
                    ArticleCU(deleteById:{
                        id: [${ids}],
                        pages: ${this.state.currentPage + 1},
                        limitNum: 10,
                    })
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                this.setState({
                    openMessageTip: true,
                    open: false,
                    message: '删除数据成功',
                });
                window.setTimeout(
                    () => {
                        this.refreshPage();
                    },
                    1000,
                );
            }
        });
    };
    handleCloseTip = () => {
        this.setState({ openMessageTip: false });
    };
    toggleDrawer = () => {
        this.setState({
            right: !this.state.right,
        });
    };
    handleChangeSearch = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
            current: val,
        });
    };
    handleChangeIsTop = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleChangeChild = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleSubmitSearch = () => {
        this.setState({
            right: !this.state.right,
        });
    };
    handlePageClick = (data: any) => {
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getArticlesLimit(getArticleAll: {
                        limitNum: 10,
                        pages: ${data.selected + 1},
                    }){
                        pagination{
                            totalItems,
                            currentPage,
                            pageSize,
                            totalPages,
                            startPage,
                            endPage,
                            startIndex,
                            endIndex,
                            pages,
                        },
                        articles{
                            id,
                            check,
                            name,
                            classify,
                            publishedTime,
                        }
                    }
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                const res = response.data.data.getArticlesLimit;
                this.setState({
                    list: res.articles,
                    totalItems: res.pagination.totalItems,
                    rowsPerPage: res.pagination.pageSize,
                    currentPage: res.pagination.currentPage - 1,
                    checkedAll: false,
                });
            }
        });
    };
    // displayRender = (labels: any) => {
    //     window.console.log(labels);
    //     return labels.join('/');
    // };
    // onChangeCascader = (option: any) => {
    //     window.console.log(option);
    // };
    render() {
        const { rowsPerPage, totalItems, list, modalType, openMessageTip, message } = this.state;
        return (
            <div
                className={
                     classNames('cms', this.state.right && 'move-cms')
                }
            >
                <div className="top-action-module clearfix">
                    <div className="pull-left">
                        <p className="crumbs">
                            CMS / 文章管理
                        </p>
                        <h4 className="title">全部文章</h4>
                    </div>
                    <div className="btn-group pull-right">
                        <IconButton
                            className={this.props.classes.menuBtn}
                            onClick={this.toggleDrawer}
                            title="搜索"
                        >
                            {
                                this.state.right ? <Search /> : <Search />
                            }
                        </IconButton>
                        <IconButton
                            className={this.props.classes.menuBtn}
                            onClick={this.handleBatchRemove}
                            title="删除"
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Link to={'/cms/article/edit/' + 'add'}>
                            <IconButton
                                className={this.props.classes.menuBtn}
                                title="新增"
                            >
                                <Add />
                            </IconButton>
                        </Link>
                        <IconButton
                            className={this.props.classes.menuBtn}
                            onClick={this.refreshPage}
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
                                {list.map((n, index) => {
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
                                                    <Link to={'/cms/article/edit/' + n.id}>
                                                        <IconButton
                                                            className={this.props.classes.btnEdit}
                                                            title="编辑"
                                                        >
                                                            <ModeEdit />
                                                        </IconButton>
                                                    </Link>
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
                            pageCount={totalItems / rowsPerPage}
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
                            modalType === 0 ? <h4>确定要删除文章"{this.state.modalName}"吗?</h4> :
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
                <Drawer
                    className="search-side"
                    anchor="right"
                    open={this.state.right}
                >
                    <div
                        className="search-side-content"
                        tabIndex={0}
                        role="button"
                    >
                        <Paper className={this.props.classes.root}>
                            <form className={this.props.classes.container} noValidate autoComplete="off">
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        文章分类
                                    </InputLabel>
                                    <Select
                                        className={this.props.classes.formLabelFont}
                                        value={this.state.type}
                                        onChange={this.handleChangeSearch('type')}
                                        input={<Input name="type"/>}
                                    >
                                        {
                                            this.state.types.map((item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        className="input-drop-paper"
                                                        value={index}
                                                        key={index}
                                                    >
                                                        {item.type}
                                                    </MenuItem>
                                                );
                                            })
                                        }
                                    </Select>
                                    {
                                        this.state.types[this.state.current].children.length > 0 ?
                                            <FormControl
                                                fullWidth
                                                style={{ marginTop: '4px' }}
                                            >
                                                <Select
                                                    className={this.props.classes.formLabelFont}
                                                    value={this.state.childType}
                                                    onChange={this.handleChangeChild('childType')}
                                                    input={<Input name="type"/>}
                                                >
                                                    {
                                                        this.state.types[this.state.current]
                                                            .children.map((sub: any, i: number) => {
                                                            return (
                                                                <MenuItem
                                                                    className="input-drop-paper"
                                                                    value={i}
                                                                    key={i}
                                                                >
                                                                    {sub.type}
                                                                </MenuItem>
                                                            );
                                                        })
                                                    }
                                                </Select>
                                            </FormControl> : <div/>
                                    }
                                </FormControl>
                                {/* <div>
                                       <Cascader
                                           options={this.state.options}
                                           defaultValue={['130000', '130200', '130202']}
                                           displayRender={(labels: string) => this.displayRender(labels)}
                                           allowClear={true}
                                           placeholder="请选择"
                                           onChange={(option: any) => {
                                               this.onChangeCascader(option);
                                           }}
                                       />
                                </div>*/}
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        是否置顶
                                    </InputLabel>
                                    <Select
                                        className={this.props.classes.formLabelFont}
                                        value={this.state.isTop}
                                        onChange={this.handleChangeIsTop('isTop')}
                                        input={<Input name="type"/>}
                                    >
                                        {
                                            this.state.isTops.map((item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        className="input-drop-paper"
                                                        value={index}
                                                        key={index}
                                                    >
                                                        {item.type}
                                                    </MenuItem>
                                                );
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        关键字
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChangeSearch('keyword')}
                                        value={this.state.keyword}
                                    />
                                </FormControl>
                                <Button
                                    raised
                                    color="primary"
                                    style={{marginTop: 2, fontSize: 12, borderRadius: 4}}
                                    onClick={this.handleSubmitSearch}
                                >
                                    搜索
                                </Button>
                            </form>
                        </Paper>
                    </div>
                </Drawer>
            </div>
        );
    }
}
export default withStyles(styles)(Article);