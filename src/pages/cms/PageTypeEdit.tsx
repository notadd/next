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
                    getPageById(findPageById: {
                        id: ${this.state.pageId},
                    }){
                        id,
                        title,
                        alias,
                        open,
                        classify,
                        classifyId,
                        createAt,
                        updateAt,
                        contents{
                            id,
                            content,
                        }
                        check,
                    }
                }
            `,
            }).then(response => {
                const data = response.data.data.getPageById;
                window.console.log(data);
            });
        }
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
                                groupId: 0,
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
                            useFor: art,
                            id: ${pageId},
                            createClass: {
                                useFor: art,
                                title: "${this.state.title}",
                                classifyAlias: "${this.state.classifyAlias}",
                                chainUrl: "${this.state.chainUrl}",
                                describe: "${this.state.describe}",
                                color: "${this.state.color}",
                                groupId: 0,
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
