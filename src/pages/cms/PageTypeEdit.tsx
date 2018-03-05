import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import axios from 'axios';
import { CircularProgress } from 'material-ui/Progress';
import Snackbar from 'material-ui/Snackbar';
import Cascader from 'antd/lib/cascader';
import 'antd/lib/cascader/style/css.js';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
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
};

type State = {
    classify: string,
    classifyId: number,
    title: string,
    classifyAlias: string,
    color: string,
    describe: string,
    chainUrl: string,
    pageType: string,
    pageId: number,
    loading: boolean,
    open: boolean,
    transition: any,
    errorMessage: string,
    error: boolean,
    types: Array<any>,
};

class PageTypeEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
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
            types: [],
            classify: '',
            classifyId: 1,
            title: '',
            classifyAlias: '',
            color: '',
            describe: '',
            chainUrl: '',
            pageType: type,
            pageId: Number(proId),
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
                    getClassifys(getClassifyById: {
                        id: ${this.state.pageId},
                        useFor: page,
                    }){
                        id,
                        title,
                        classifyAlias,
                        chainUrl,
                        describe,
                        color,
                        groupId,
                    }
                }
            `,
            }).then(response => {
                const data = response.data.data.getClassifys[0];
                this.setState({
                    title: data.title,
                    chainUrl: data.chainUrl,
                    classifyAlias: data.classifyAlias,
                    describe: data.describe,
                    color: data.color,
                });
            });
        }

        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getClassifys(getAllClassify: {
                        useFor: page,
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
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
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
    handleCloseTip = () => {
        this.setState({ open: false });
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
                            useFor: page,
                            id: 0,
                            createClass: {
                                useFor: page,
                                title: "${this.state.title}",
                                classifyAlias: "${this.state.classifyAlias}",
                                chainUrl: "${this.state.chainUrl}",
                                describe: "${this.state.describe}",
                                color: "${this.state.color}",
                                groupId: ${this.state.classifyId},
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
                                errorMessage: '提交成功!',
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
                            useFor: page,
                            id: ${pageId},
                            createClass: {
                                useFor: page,
                                title: "${this.state.title}",
                                classifyAlias: "${this.state.classifyAlias}",
                                chainUrl: "${this.state.chainUrl}",
                                describe: "${this.state.describe}",
                                color: "${this.state.color}",
                                groupId: ${this.state.classifyId},
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
    render() {
        return (
            <div className="configurations">
                <p className="crumbs">
                    CMS <b>/</b> 页面管理 / 分类管理
                </p>
                <h4 className="title">
                    {this.state.pageType === '1' ? '新增' : '编辑'}
                </h4>
                <Paper className={this.props.classes.root}>
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
                                        onChange={this.handleChange('title')}
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
                                        onChange={this.handleChange('classifyAlias')}
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
                                        onChange={this.handleChange('chainUrl')}
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
                                        onChange={this.handleChange('describe')}
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
                        <Button
                            raised
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
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(PageTypeEdit);
