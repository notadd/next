import axios from 'axios';
import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import { CircularProgress } from 'material-ui/Progress';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    formLabelFont: {
        'font-size': '16px',
    },
};
type State = {
    title: string,
    describe: string,
    keywords: string,
    loading: boolean,
    transition: any,
    open: boolean,
    errorMessage: string,
    error: boolean,
};

class Seo extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            title: '',
            describe: '',
            keywords: '',
            loading: false,
            transition: undefined,
            open: false,
            errorMessage: '',
            error: false,
        };
    }
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    componentDidMount() {
        axios.post('http://localhost:3000/graphql?', {
            query: `
                query {
                    title: getSettingByKey(key: "global.title") {
                    key,
                    value,
                    },
                    describe: getSettingByKey(key: "global.describe") {
                    key,
                    value,
                    },  
                    keywords: getSettingByKey(key: "global.keywords") {
                    key,
                    value,
                    },
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                const results: object = response.data.data;
                Object.keys(results).forEach((a: string) => {
                    if (results[a] !== null) {
                        const d = {};
                        d[a] = results[a].value;
                        this.setState(d);
                    }
                });
            }
        });
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        this.setState(
            {
                loading: true,

            },
        );
        if (this.state.title && this.state.describe && this.state.keywords) {
            axios.post('http://localhost:3000/graphql?', {
                query: `
                mutation {
                    webName: setSetting(key: "global.title", value: "${this.state.title}") {
                    key,
                    value,
                    },
                    domainName: setSetting(key: "global.describe", value: "${this.state.describe}") {
                    key,
                    value,
                    },  
                    siteOpen: setSetting(key: "global.keywords", value: "${this.state.keywords}") {
                    key,
                    value,
                    }, 
                }
            `,
            }).then(response => {
                if (!response.data.errors) {
                    this.setState(
                        {
                            error: false,
                            open: true,
                            loading: false,
                            errorMessage: '提交成功！!',
                        },
                    );
                } else {
                    this.setState(
                        {
                            error: true,
                            open: true,
                            loading: false,
                            errorMessage: response.data.errors[0].message,
                        },
                    );
                }
            });
        } else {
            let message = '';
            if (!this.state.title) {
                message = '请输入标题';
            } else if (!this.state.describe) {
                message = '请输入描述';
            } else if (!this.state.keywords) {
                message = '请输入关键字';
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
                    全局 <b>/</b> 全局设置
                </p>
                <h4 className="title">SEO配置</h4>
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
                                        className={this.props.classes.formLabelFont}
                                    >
                                        标题
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('title')}
                                        value={this.state.title}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.describe}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        描述
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('describe')}
                                        value={this.state.describe}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.keywords}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        关键字
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('keywords')}
                                        value={this.state.keywords}
                                    />
                                </FormControl>
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
                            onClick={this.handleSubmit}
                        >
                            {this.state.loading ?  <div><CircularProgress size={24}/></div> : '确认提交'}
                        </Button>
                    </form>
                    <Snackbar
                        classes={{
                            root: this.state.error ? 'error-prompt' : ''
                        }}
                        open={this.state.open}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        onClose={this.handleClose}
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
export default withStyles(styles)(Seo);