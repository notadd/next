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
import Switch from 'material-ui/Switch';
import 'rc-color-picker/assets/index.css';
import { CircularProgress } from 'material-ui/Progress';
import Cascader from 'antd/lib/cascader';
import Snackbar from 'material-ui/Snackbar';
import 'antd/lib/cascader/style/css.js';
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
import axios from 'axios';

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
    classify: string,
    classifyId: number,
    tab: number,
    title: string,
    classifyAlias: string,
    color: string,
    describe: string,
    chainUrl: string,
    pageType: string,
    types: Array<any>,
    type: string,
    isCurrentType: boolean,
    isChildType: boolean,
    isAllTop: boolean,
    isPreTop: boolean,

    modalOpen: boolean,
    modalId: string,
    modalName: string,
    rowsPerPage: number,
    currentPage: number,
    list: any,

    pageId: number,
    loading: boolean,
    open: boolean,
    transition: any,
    errorMessage: string,
    error: boolean,
};

class ArticleTypeEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor (props: any, state: any) {
        super(props, state);
        let type = '';
        let proId = '';
        const str = props.location.pathname;
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        } else {
            proId = str.substring(str.lastIndexOf('\/') + 1, str.length);
        }
        this.state = {
            classify: '',
            classifyId: 1,
            tab: 0,
            title: '',
            classifyAlias: '',
            color: '',
            describe: '',
            chainUrl: '',
            pageType: type,
            pageId: Number(proId),
            type: '',
            types: [],
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
            modalOpen: false,
            modalId: '',
            modalName: '',
            rowsPerPage: 3,
            currentPage: 0,

            loading: false,
            transition: undefined,
            open: false,
            errorMessage: '',
            error: false,
        };
    }
    componentDidMount() {
        if (this.state.pageType !== '1') {
            axios.post('http://192.168.1.121:3000/graphql?', {
                query: `
                query {
                    getClassifyById(getClassifyById: {
                        id: ${this.state.pageId},
                        useFor: art,
                    }) {
                        classifyEntity {
                            id,
                            title,
                            classifyAlias,
                            chainUrl,
                            describe,
                            color,
                            groupId,
                            isCurrentType,
                            isChildType,
                            isAllTop,
                            isPreTop,
                        },
                        MessageCodeError
                    }
                }
            `,
            }).then(response => {
                const type = response.data.data.getClassifyById.classifyEntity[0];
                const data = response.data.data.getClassifyById.classifyEntity[1];
                this.setState({
                    title: data.title,
                    chainUrl: data.chainUrl,
                    classifyAlias: data.classifyAlias,
                    describe: data.describe,
                    color: data.color,
                    classifyId: data.groupId,
                    isCurrentType: data.isCurrentType,
                    isChildType: data.isChildType,
                    isAllTop: data.isAllTop,
                    isPreTop: data.isPreTop,
                    classify: type.title,
                });
            });
        }

        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getClassifys(getAllClassify: {
                        useFor: art,
                    }){
                        id,
                        title,
                        classifyAlias,
                        chainUrl,
                        describe,
                        color,
                        groupId,
                        children{
                            id,
                            title,
                            children{
                                id,
                                title,
                                children{
                                    id,
                                    title,
                                    children{
                                        id,
                                        title,
                                        children{
                                            id,
                                            title,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        }).then(response => {
            let arr = new Array();
            const structures = response.data.data.getClassifys[0].children;
            arr = Object.keys(structures).map(index => {
                const item = structures[index];
                item.label = item.title;
                item.value = item.id;
                const children = item.children;
                if (item.children !== null) {
                    item.children = Object.keys(children).map(i => {
                        const sub = children[i];
                        sub.label = sub.title;
                        sub.value = sub.id;
                        const childs = sub.children;
                        if (sub.children !== null) {
                            sub.children = Object.keys(childs).map(s => {
                                const su = childs[s];
                                su.label = su.title;
                                su.value = su.id;
                                const childs2 = su.children;
                                if (su.children !== null) {
                                    su.children = Object.keys(childs2).map(s2 => {
                                        const fours = childs2[s2];
                                        fours.label = fours.title;
                                        fours.value = fours.id;
                                        if (fours.children !== null) {
                                            const childs3 = fours.children;
                                            fours.children = Object.keys(childs3).map(s3 => {
                                                const five = childs3[s3];
                                                five.label = five.title;
                                                five.value = five.id;
                                                return five;
                                            });
                                        }
                                        return fours;
                                    });
                                }
                                return su;
                            });
                        }
                        return sub;
                    });
                }
                return item;
            });
            this.setState({ types: arr });
        });
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
            modalOpen: true,
        });
    };
    handleClose = () => {
        this.setState({ modalOpen: false });
    };
    handleCloseTip = () => {
        this.setState({ open: false });
    };
    handleSubmitDialog = () => {
        this.setState({ modalOpen: false });
    };
    handleChangeType = (value: any, select: any) => {
        this.setState({
            classify: select[select.length - 1].label,
            classifyId: value[value.length - 1],
        });
    };
    handelSubmit = () => {
        this.setState(
            {
                loading: true,
            },
        );
        let pageId = 0;
        if (this.state.pageType !== '1') {
            pageId = this.state.pageId;
        } else {
            pageId = 0;
        }
        if (this.state.title && this.state.classifyAlias && this.state.pageType === '1') {
            axios.post('http://192.168.1.121:3000/graphql?', {
                query: `
                    mutation {
                        ClassifyCU(createClass: {
                            useFor: art,
                            id: 0,
                            createClass: {
                                useFor: art,
                                title: "${this.state.title}",
                                classifyAlias: "${this.state.classifyAlias}",
                                chainUrl: "${this.state.chainUrl}",
                                describe: "${this.state.describe}",
                                color: "${this.state.color}",
                                groupId: ${this.state.classifyId},
                                isCurrentType: ${this.state.isCurrentType},
                                isChildType: ${this.state.isChildType},
                                isAllTop: ${this.state.isAllTop},
                                isPreTop: ${this.state.isPreTop},
                            }
                        })
                    }
                `,
            }).then(response => {
                const data = JSON.parse(response.data.data.ClassifyCU);
                if (!response.data.errors) {
                    if (data.Continue) {
                        this.setState(
                            {
                                error: false,
                                open: true,
                                loading: false,
                                errorMessage: '提交信息成功!',
                            },
                        );
                    } else if (!data.Continue) {
                        this.setState(
                            {
                                error: true,
                                open: true,
                                loading: false,
                                errorMessage: data.MessageCodeError,
                            },
                        );
                    }
                }
            });
        } else if (this.state.title && this.state.classifyAlias && this.state.pageType !== '1') {
            axios.post('http://192.168.1.121:3000/graphql?', {
                query: `
                    mutation {
                        ClassifyCU(updateClass: {
                            useFor: art,
                            id: ${pageId},
                            updateClass: {
                                id: ${pageId},
                                title: "${this.state.title}",
                                classifyAlias: "${this.state.classifyAlias}",
                                chainUrl: "${this.state.chainUrl}",
                                describe: "${this.state.describe}",
                                color: "${this.state.color}",
                                groupId: ${this.state.classifyId},
                                isCurrentType: ${this.state.isCurrentType},
                                isChildType: ${this.state.isChildType},
                                isAllTop: ${this.state.isAllTop},
                                isPreTop: ${this.state.isPreTop},
                            }
                        })
                    }
                `,
            }).then(response => {
                const data = JSON.parse(response.data.data.ClassifyCU);
                if (!response.data.errors) {
                    if (data.Continue) {
                        this.setState(
                            {
                                error: false,
                                open: true,
                                loading: false,
                                errorMessage: '修改信息成功!',
                            },
                        );
                    } else if (!data.Continue) {
                        this.setState(
                            {
                                error: true,
                                open: true,
                                loading: false,
                                errorMessage: data.MessageCodeError,
                            },
                        );
                    }
                }
            });
        } else {
            let message = '';
            if (!this.state.title) {
                message = '请输入分类名称';
            } else if (!this.state.classifyAlias) {
                message = '请输入别名';
            }
            this.setState(
                {
                    error: true,
                    open: true,
                    loading: false,
                    errorMessage: message,
                },
            );
        }
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
                                    <FormControl
                                        fullWidth
                                        required
                                        error={!this.state.title}
                                    >
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
                                            onChange={this.handleChangeInput('title')}
                                            value={this.state.title}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl
                                        fullWidth
                                        required
                                        error={!this.state.classifyAlias}
                                    >
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
                                            onChange={this.handleChangeInput('classifyAlias')}
                                            value={this.state.classifyAlias}
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
                                            onChange={this.handleChangeInput('chainUrl')}
                                            value={this.state.chainUrl}
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
                                            onChange={this.handleChangeInput('describe')}
                                            value={this.state.describe}
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
                                        <Input
                                            className={this.props.classes.formLabelFont}
                                            classes={{
                                                underline: this.props.classes.underline,
                                            }}
                                            value={this.state.classify}
                                        />
                                        <Cascader
                                            className="cascader-picker"
                                            options={this.state.types}
                                            onChange={this.handleChangeType}
                                            notFoundContent="Not Found"
                                        />
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
                            <Button
                                variant="raised"
                                color="primary"
                                style={{
                                    marginTop: 34,
                                    fontSize: 12,
                                    borderRadius: 4
                                }}
                                disabled={
                                    this.state.loading
                                }
                                className={
                                    this.state.loading ?
                                        'disabled-btn' : ''
                                }
                                onClick={this.handelSubmit}
                            >
                                {this.state.loading ?  <div><CircularProgress size={24}/></div> : '确认提交'}
                            </Button>
                        </form>
                    }
                    {
                        this.state.tab === 1 &&
                        <div className={this.props.classes.container}>
                            <Button className={this.props.classes.createBtn}>
                                <Link
                                    to={'/cms/article/type/message/add'}
                                    style={{color: '#808080'}}
                                >
                                    添加信息项
                                </Link>
                            </Button>
                            <div className="root-paper" style={{ padding: 0 }}>
                                <div className="table-hidden">
                                    <Table className={this.props.classes.table}>
                                        <TableHead className="table-head">
                                            <TableRow>
                                                <TableCell
                                                    className={this.props.classes.tableCell}
                                                    numeric
                                                >
                                                    排序
                                                </TableCell>
                                                <TableCell
                                                    className={this.props.classes.tableCell}
                                                    numeric
                                                >
                                                    信息项名称
                                                </TableCell>
                                                <TableCell
                                                    className={this.props.classes.tableCell}
                                                    numeric
                                                >
                                                    是否必填
                                                </TableCell>
                                                <TableCell numeric/>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody className="table-body">
                                            {list.
                                            slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                                                .map((n: any, index: number) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            className={
                                                                index % 2 === 0 ? this.props.classes.evenRow : ''
                                                            }
                                                            key={n.id}
                                                        >
                                                            <TableCell className={this.props.classes.tableCell} numeric>
                                                                {n.sort}
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
                                                                <Link to={'/cms/article/type/message/edit'}>
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
                                open={this.state.modalOpen}
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
                                    <Button onClick={this.handleSubmitDialog} autoFocus>
                                        确认提交
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    }
                </Paper>
                <Snackbar
                    classes={{
                        root: (this.state.error ? 'error-snack-bar' : 'message-snack-bar'),
                    }}
                    open={this.state.open}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={this.handleCloseTip}
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
export default withStyles(styles)(ArticleTypeEdit);
