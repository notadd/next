import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormLabel, FormControlLabel, FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import Radio, { RadioGroup } from 'material-ui/Radio';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    formLabel: {
        'color': '#808080',
        'flex-direction': 'row-reverse',
        'font-size': '16px !important',
        'margin': '0',
        'width': '100%',
    },
    FormControlLabel: {
        'font-size': '12px',
    },
    FormControlRoot: {
        'margin-left': '0',
        'margin-right': '40px',
    },
    radioDefault: {
        'margin-right': '5px',
        'width': 'auto',
    },
    radioRoot: {
        'flex-direction': 'row'
    },
};
type State = {
    sendingMode: string,
    encryptionMethod: string,
    serverAddress: string,
    serverPort: string,
    SMTPAccount: string,
    SMTPEmail: string,
    SMTPPassword: string
};

class Seo extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        sendingMode: '',
        encryptionMethod: '',
        serverAddress: '',
        serverPort: '',
        SMTPAccount: '',
        SMTPEmail: '',
        SMTPPassword: '',
    };
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    render() {
        return (
            <div className="configurations">
                <p className="crumbs">
                    全局 <b>/</b> 系统插件
                </p>
                <h4 className="title">邮件设置</h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={40}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <FormLabel className={this.props.classes.formLabel}>发送方式</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender1"
                                        classes={{
                                            root: this.props.classes.radioRoot,
                                        }}
                                        value={this.state.sendingMode}
                                        onChange={this.handleChange('sendingMode')}
                                    >
                                        <FormControlLabel
                                            classes={{
                                                root: this.props.classes.FormControlRoot,
                                                label: this.props.classes.FormControlLabel
                                            }}
                                            value="Send Mail 函数"
                                            control={
                                                <Radio
                                                    classes={{
                                                        default: this.props.classes.radioDefault,
                                                    }}
                                                />
                                            }
                                            label="Send Mail 函数"
                                        />
                                        <FormControlLabel
                                            classes={{
                                                root: this.props.classes.FormControlRoot,
                                                label: this.props.classes.FormControlLabel
                                            }}
                                            value="SMTP"
                                            control={<Radio
                                                classes={{
                                                    default: this.props.classes.radioDefault,
                                                }}
                                            />}
                                            label="SMTP"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <FormLabel className={this.props.classes.formLabel}>加密方式</FormLabel>
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender1"
                                        classes={{
                                            root: this.props.classes.radioRoot,
                                        }}
                                        value={this.state.encryptionMethod}
                                        onChange={this.handleChange('encryptionMethod')}
                                    >
                                        <FormControlLabel
                                            classes={{
                                                root: this.props.classes.FormControlRoot,
                                                label: this.props.classes.FormControlLabel
                                            }}
                                            value="不加密"
                                            control={<Radio
                                                classes={{
                                                    default: this.props.classes.radioDefault,
                                                }}
                                            />}
                                            label="不加密"
                                        />
                                        <FormControlLabel
                                            classes={{
                                                root: this.props.classes.FormControlRoot,
                                                label: this.props.classes.FormControlLabel
                                            }}
                                            value="SSL"
                                            control={<Radio
                                                classes={{
                                                    default: this.props.classes.radioDefault,
                                                }}
                                            />}
                                            label="SSL"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabel}
                                    >
                                        服务器地址
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabel}
                                        onChange={this.handleChange('serverAddress')}
                                        value={this.state.serverAddress}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabel}
                                    >
                                        服务器端口
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabel}
                                        onChange={this.handleChange('serverPort')}
                                        value={this.state.serverPort}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '10px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabel}
                                    >
                                        SMTP账号
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabel}
                                        onChange={this.handleChange('SMTPAccount')}
                                        value={this.state.SMTPAccount}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabel}
                                    >
                                        发信邮箱地址
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabel}
                                        onChange={this.handleChange('SMTPEmail')}
                                        value={this.state.SMTPEmail}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '10px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabel}
                                    >
                                        SMTP密码
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabel}
                                        onChange={this.handleChange('SMTPPassword')}
                                        value={this.state.SMTPPassword}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button raised color="primary" style={{marginTop: 34, fontSize: 12, borderRadius: 4}}>
                            确认提交
                        </Button>
                        <Button
                            raised
                            style={{
                                borderRadius: 4,
                                background: '#ededed',
                                fontSize: 12,
                                marginLeft: 6,
                                marginTop: 34
                            }}
                        >
                            发送测试邮件
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Seo);