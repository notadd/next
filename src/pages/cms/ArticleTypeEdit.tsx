import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import ReactPaginate from 'react-paginate';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ModeEdit from 'material-ui-icons/ModeEdit';
import ClearIcon from 'material-ui-icons/Clear';
import ColorPicker from 'rc-color-picker';
import Tabs, { Tab } from 'material-ui/Tabs';
import Select from 'material-ui/Select';
import Switch from 'material-ui/Switch';
import { MenuItem } from 'material-ui/Menu';
import 'rc-color-picker/assets/index.css';
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
    root: {
    },
    container: {
        'padding': '32px 30px 40px',
        'margin': '0',
    },
    labelClass: {
        'color': '#b8b8b8',
    },
    menu: {
        'width': '200px',
    },
    formLabel: {
        'flex-direction': 'row-reverse',
        'margin': '0',
        'font-size': '16px !important',
        'color': '#333',
        'width': '100%',
    },
    formLabelFont: {
        'font-size': '16px',
    },
    subLabel: {
        'font-size': '12px',
        'color': '#808080',
    },
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
    switchHeight: {
        'height': '20px',
    },
    switchDefault: {
        'height': 'inherit',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'center',
        'padding': '0',
    },
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
    createBtn: {
        padding: 0,
        color: '#808080',
        'line-height': '24px',
        'border-radius': '2px',
        'background-color': '#e0e0e0',
        'font-size': '12px',
        'margin-bottom': '10px',
        'min-height': '24px',
        'min-width': '80px',
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
};

type State = {
    tab: number,
    typeName: string,
    otherName: string,
    color: string,
    description: string,
    link: string,
    pageType: string,
    types: Array<any>,
    type: string,
    isCurrentType: boolean,
    isChildType: boolean,
    isAllTop: boolean,
    isPreTop: boolean,

    open: boolean,
    modalId: string,
    modalName: string,
    rowsPerPage: number,
    currentPage: number,
    list: any,
};

class ArticleTypeEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor (props: any, state: any) {
        super(props, state);
        let type = '';
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        }
        this.state = {
            tab: 0,
            typeName: 'NotAdd',
            otherName: 'news',
            color: '',
            description: '',
            link: 'www.baidu.com',
            pageType: type,
            type: '',
            types: [
                {
                    id: '12',
                    type: '分类1',
                },
                {
                    id: '13',
                    type: '分类2',
                },
                {
                    id: '14',
                    type: '分类3',
                },
            ],
            isCurrentType: true,
            isChildType: false,
            isAllTop: true,
            isPreTop: false,

            list: [
                {
                    id: 11,
                    sort: 1,
                    name: '新闻资讯',
                    status: false,
                },
                {
                    id: 12,
                    sort: 2,
                    name: '新闻资讯',
                    status: false,
                },
                {
                    id: 13,
                    sort: 4,
                    name: '新闻资讯',
                    status: false,
                },
                {
                    id: 14,
                    sort: 5,
                    name: '新闻资讯',
                    status: false,
                },
            ],
            open: false,
            modalId: '',
            modalName: '',
            rowsPerPage: 3,
            currentPage: 0,
        };
    }
    handleChangeInput = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleChangeTab = (event: any, value: number) => {
        this.setState({ tab: value });
    };
    changeHandler = (pro: any) => {
        this.setState({
            color: pro.color,
        });
    };
    closeHandler = (pro: any) => {
        this.setState({
            color: pro.color,
        });
    };
    // table method
    handleChange = (pro: any) => (event: any, check: boolean) => {
        pro.status = check;
        this.setState({
            [pro]: check,
        });
    };
    handleClickOpen = (pro: any) => {
        this.setState({
            modalName: pro.name,
            modalId: pro.id,
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
            <div className="configurations">
                <p className="crumbs">
                    CMS <b>/</b> 文章管理 / 分类管理
                </p>
                <h4 className="title">
                    {this.state.pageType === '1' ? '新增' : '编辑'}
                </h4>
                <Paper>
                    <Tabs
                        className="paper-tabs"
                        value={this.state.tab}
                        onChange={this.handleChangeTab}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab
                            label="基础信息"
                            className="paper-tab"
                        />
                        <Tab
                            label="扩展信息"
                            className="paper-tab"
                        />
                    </Tabs>
                    {
                        this.state.tab === 0 &&
                        <form className={this.props.classes.container} noValidate autoComplete="off">
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth required>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                        >
                                            分类名称
                                        </InputLabel>
                                        <Input
                                            className={this.props.classes.formLabelFont}
                                            classes={{
                                                underline: this.props.classes.underline,
                                            }}
                                            onChange={this.handleChangeInput('typeName')}
                                            value={this.state.typeName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth required>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                        >
                                            别名
                                        </InputLabel>
                                        <Input
                                            className={this.props.classes.formLabelFont}
                                            classes={{
                                                underline: this.props.classes.underline,
                                            }}
                                            onChange={this.handleChangeInput('otherName')}
                                            value={this.state.otherName}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40} style={{marginTop: '12px'}}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                        >
                                            内链
                                        </InputLabel>
                                        <Input
                                            className={this.props.classes.formLabelFont}
                                            classes={{
                                                underline: this.props.classes.underline,
                                            }}
                                            onChange={this.handleChangeInput('link')}
                                            value={this.state.link}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                        >
                                            描述
                                        </InputLabel>
                                        <Input
                                            className={this.props.classes.formLabelFont}
                                            classes={{
                                                underline: this.props.classes.underline,
                                            }}
                                            onChange={this.handleChangeInput('description')}
                                            value={this.state.description}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40} style={{marginTop: '12px'}}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                            style={{position: 'relative'}}
                                        >
                                            颜色
                                        </InputLabel>
                                        <Input
                                            className={this.props.classes.formLabelFont}
                                            classes={{
                                                underline: this.props.classes.underline,
                                            }}
                                            value={this.state.color}
                                            style={{marginTop: '0'}}
                                        />
                                        <ColorPicker
                                            color={this.state.color}
                                            alpha={30}
                                            onChange={this.changeHandler}
                                            onClose={this.closeHandler}
                                            placement="bottomLeft"
                                            className="form-color-picker"
                                        >
                                            <span className="rc-color-picker-trigger" />
                                        </ColorPicker>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                        >
                                            上级分类
                                        </InputLabel>
                                        <Select
                                            className="form-select-underline"
                                            value={this.state.type}
                                            onChange={this.handleChangeInput('type')}
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
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40} style={{marginTop: '12px'}}>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        label="显示当前分类文章"
                                        classes={{
                                            root: this.props.classes.formLabel,
                                            label: this.props.classes.formLabel
                                        }}
                                        control={
                                            <Switch
                                                classes={{
                                                    root: this.props.classes.switchHeight,
                                                    default: this.props.classes.switchDefault,
                                                }}
                                                onChange={
                                                    (event: any, checked: boolean) => {
                                                        this.setState({ isCurrentType: checked});
                                                    }}
                                                checked={this.state.isCurrentType}
                                            />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        label="显示全局置顶文章"
                                        classes={{
                                            root: this.props.classes.formLabel,
                                            label: this.props.classes.formLabel
                                        }}
                                        control={
                                            <Switch
                                                classes={{
                                                    root: this.props.classes.switchHeight,
                                                    default: this.props.classes.switchDefault,
                                                }}
                                                onChange={
                                                    (event: any, checked: boolean) => {
                                                        this.setState({ isAllTop: checked});
                                                    }}
                                                checked={this.state.isAllTop}
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={40} style={{marginTop: '12px'}}>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        label="显示子级分类文章"
                                        classes={{
                                            root: this.props.classes.formLabel,
                                            label: this.props.classes.formLabel
                                        }}
                                        control={
                                            <Switch
                                                classes={{
                                                    root: this.props.classes.switchHeight,
                                                    default: this.props.classes.switchDefault,
                                                }}
                                                onChange={
                                                    (event: any, checked: boolean) => {
                                                        this.setState({ isChildType: checked});
                                                    }}
                                                checked={this.state.isChildType}
                                            />
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        label="显示上级置顶文章"
                                        classes={{
                                            root: this.props.classes.formLabel,
                                            label: this.props.classes.formLabel
                                        }}
                                        control={
                                            <Switch
                                                classes={{
                                                    root: this.props.classes.switchHeight,
                                                    default: this.props.classes.switchDefault,
                                                }}
                                                onChange={
                                                    (event: any, checked: boolean) => {
                                                        this.setState({ isPreTop: checked});
                                                    }}
                                                checked={this.state.isPreTop}
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Button raised color="primary" style={{marginTop: 34, fontSize: 12, borderRadius: 4}}>
                                确认提交
                            </Button>
                        </form>
                    }
                    {
                        this.state.tab === 1 &&
                        <div className={this.props.classes.container}>
                            <Button className={this.props.classes.createBtn}>
                                添加信息项
                            </Button>
                            <div className="table-hidden">
                                <Table className={this.props.classes.table}>
                                    <TableHead className="table-head">
                                        <TableRow>
                                            <TableCell className={this.props.classes.tableCell} numeric>排序</TableCell>
                                            <TableCell
                                                className={this.props.classes.tableCell}
                                                numeric
                                            >
                                                信息项名称
                                            </TableCell>
                                            <TableCell className={this.props.classes.tableCell} numeric>是否必填</TableCell>
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
                                                        key={n.id}
                                                    >
                                                        <TableCell className={this.props.classes.tableCell} numeric>
                                                            {index + 1}
                                                        </TableCell>
                                                        <TableCell className={this.props.classes.tableCell} numeric>
                                                            {n.name}
                                                        </TableCell>
                                                        <TableCell className={this.props.classes.tableCell} numeric>
                                                            <Switch
                                                                checked={n.status}
                                                                onChange={this.handleChange(n)}
                                                                aria-label="n.status"
                                                            />
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
                                                                onClick={() => this.handleClickOpen(n)}
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
                                    <h4>确定要删除信息项名称"{this.state.modalName}"吗?</h4>
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
                    }
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(ArticleTypeEdit);
