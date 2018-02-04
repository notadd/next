import axios from 'axios';
import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormLabel, FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
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
        'font-size': '12px',
    },
    subLabel: {
        'font-size': '12px',
        'color': '#808080',
    },
    switchHeight: {
        'height': '20px',
    },
    switchDefault: {
        'height': 'inherit'
    }
};
type State = {
    GDisOPen: boolean,
    appendageSize: number,
    imgSize: number,
    videoSize: number,
    extensionNames: string,
    fileNames: string,
    videoNames: string,
    managementDocumentsNames: string,
    managementImagesNames: string,
    loading: boolean,
    transition: any,
    open: boolean,
    errorMessage: string,
    error: boolean
};

class Upload extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        GDisOPen: false,
        appendageSize: 1024,
        imgSize: 1024,
        videoSize: 1024,
        extensionNames: 'jpg,jpeg,png',
        fileNames: 'txt',
        videoNames: '.flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.\n' +
        'webm,.mp3,.wav,.mid,.html,.php',
        managementDocumentsNames: '',
        managementImagesNames: '',
        loading: false,
        transition: undefined,
        open: false,
        errorMessage: '',
        error: false,
    };
    componentDidMount() {
        axios.post('http://localhost:3000/graphql?', {
            query: `
                query {
                    GDisOPen: getSettingByKey(key: "global.GDisOPen") {
                    key,
                    value,
                    },
                    appendageSize: getSettingByKey(key: "global.appendageSize") {
                    key,
                    value,
                    },
                    imgSize: getSettingByKey(key: "global.imgSize") {
                    key,
                    value,
                    },  
                    videoSize: getSettingByKey(key: "global.videoSize") {
                    key,
                    value,
                    },
                    extensionNames: getSettingByKey(key: "global.extensionNames") {
                    key,
                    value,
                    },
                    fileNames: getSettingByKey(key: "global.fileNames") {
                    key,
                    value,
                    },
                    videoNames: getSettingByKey(key: "global.videoNames") {
                    key,
                    value,
                    },
                    managementDocumentsNames: getSettingByKey(key: "global.managementDocumentsNames") {
                    key,
                    value,
                    },
                    managementImagesNames: getSettingByKey(key: "global.managementImagesNames") {
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
                        if (results[a].key === 'global.GDisOPen') {
                            Number(results[a].value) === 1 ? d[a] = true : d[a] = false;
                        }
                        this.setState(d);
                    }
                });
            }
        });
    }
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleChangeChecked = (name: any) => (event: any, checked: boolean) => {
        this.setState({ [name]: checked });
    };
    handleSubmit = () => {
        const obj = Object.assign({}, this.state);
        delete obj.loading;
        delete obj.transition;
        delete obj.open;
        delete obj.errorMessage;
        delete obj.error;
        delete obj.GDisOPen;
        let pass = true;
        let message = '';
        Object.keys(obj).forEach(key => {
            if (!obj[key]) {
                pass = false;
                switch (key) {
                    case 'appendageSize': message = '附件大小'; break;
                    case 'imgSize': message = '图片大小'; break;
                    case 'videoSize': message = '视频大小'; break;
                    case 'extensionNames': message = '允许图片的扩展名'; break;
                    case 'fileNames': message = '允许上传文件的扩展名'; break;
                    case 'videoNames': message = '允许上传视频的扩展名'; break;
                    case 'managementDocumentsNames': message = '允许管理文件的扩展名'; break;
                    case 'managementImagesNames': message = '允许管理图片的扩展名'; break;
                    default: message = '';
                }
            }
        });
        if (pass) {
            this.setState(
                {
                    error: false,
                    loading: true,
                },
            );
            axios.post('http://localhost:3000/graphql?', {
                query: `
                mutation {
                    GDisOPen: setSetting(key: "global.GDisOPen", value: "${this.state.GDisOPen ? 1 : 0}") {
                    key,
                    value,
                    },
                    appendageSize: setSetting(key: "global.appendageSize", value: "${this.state.appendageSize}") {
                    key,
                    value,
                    },
                    imgSize: setSetting(key: "global.imgSize", value: "${this.state.imgSize}") {
                    key,
                    value,
                    },  
                    videoSize: setSetting(key: "global.videoSize", value: "${this.state.videoSize}") {
                    key,
                    value,
                    },
                    extensionNames: setSetting(key: "global.extensionNames", value: "${this.state.extensionNames}") {
                    key,
                    value,
                    },
                    fileNames: setSetting(key: "global.fileNames", value: "${this.state.fileNames}") {
                    key,
                    value,
                    },
                    videoNames: setSetting(key: "global.videoNames", value: "${this.state.videoNames}") {
                    key,
                    value,
                    },
                    managementDocumentsNames: setSetting(key: "global.managementDocumentsNames", 
                    value: "${this.state.managementDocumentsNames}") {
                    key,
                    value,
                    },
                    managementImagesNames: setSetting(key: "global.managementImagesNames",
                     value: "${this.state.managementImagesNames}") {
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
            this.setState(
                {
                    error: true,
                    open: true,
                    loading: false,
                    errorMessage: `请输入${message}!`,
                },
            );
        }
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div className="configurations">
                <p className="crumbs">
                    全局 <b>/</b> 附件设置
                </p>
                <h4 className="title">上传设置</h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={40}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <FormLabel>图片处理引擎</FormLabel>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="GDisOPen"
                                                onChange={this.handleChangeChecked('GDisOPen')}
                                                checked={this.state.GDisOPen}
                                            />
                                        }
                                        label="GD库"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.appendageSize}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        附件大小
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('appendageSize')}
                                        value={this.state.appendageSize}
                                        endAdornment={<InputAdornment position="end">KB</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.imgSize}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        图片大小
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('imgSize')}
                                        value={this.state.imgSize}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.videoSize}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        视频大小
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('videoSize')}
                                        value={this.state.videoSize}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.extensionNames}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许图片的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('extensionNames')}
                                        value={this.state.extensionNames}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.fileNames}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许上传文件的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('fileNames')}
                                        value={this.state.fileNames}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.videoNames}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许上传视频的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('videoNames')}
                                        value={this.state.videoNames}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.managementDocumentsNames}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许管理文件的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('managementDocumentsNames')}
                                        value={this.state.managementDocumentsNames}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '0px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    fullWidth
                                    required
                                    error={!this.state.managementImagesNames}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许管理图片的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('managementImagesNames')}
                                        value={this.state.managementImagesNames}
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
export default withStyles(styles)(Upload);