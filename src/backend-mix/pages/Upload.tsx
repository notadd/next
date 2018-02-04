import * as React from "react";
import withStyles, { WithStyles } from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormLabel, FormControlLabel, FormControl } from "material-ui/Form";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Radio from "material-ui/Radio";

const styles = {
    root: {
        "padding": "40px 30px",
    },
    container: {
        display: "flex",
        "flex-wrap": "wrap",
        "margin": "0",
    },
    labelClass: {
        "color": "#b8b8b8",
    },
    menu: {
        "width": "200px",
    },
    formLabel: {
        "flex-direction": "row-reverse",
        "margin": "0",
        "font-size": "16px !important",
        "color": "#333",
        "width": "100%",
    },
    formLabelFont: {
        "font-size": "12px",
    },
    subLabel: {
        "font-size": "12px",
        "color": "#808080",
    },
    switchHeight: {
        "height": "20px",
    },
    switchDefault: {
        "height": "inherit"
    }
};
type State = {
    appendageSize: number,
    imgSize: number,
    videoSize: number,
    extensionNames: string,
    fileNames: string,
    videoNames: string,
    managementDocumentsNames: string,
    managementImagesNames: string,
};

class Upload extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        appendageSize: 1024,
        imgSize: 1024,
        videoSize: 1024,
        extensionNames: "jpg,jpeg,png",
        fileNames: "txt",
        videoNames: ".flv,.swf,.mkv,.avi,.rm,.rmvb,.mpeg,.mpg,.ogg,.ogv,.mov,.wmv,.mp4,.\n" +
        "webm,.mp3,.wav,.mid,.html,.php",
        managementDocumentsNames: "",
        managementImagesNames: "",
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
                    全局 <b>/</b> 附件设置
                </p>
                <h4 className="title">上传设置</h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={40}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <FormLabel>图片处理引擎</FormLabel>
                                    <FormControlLabel value="GD" control={<Radio />} label="GD库" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        附件大小
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("appendageSize")}
                                        value={this.state.appendageSize}
                                        endAdornment={<InputAdornment position="end">KB</InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "0px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        图片大小
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("imgSize")}
                                        value={this.state.imgSize}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        视频大小
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("videoSize")}
                                        value={this.state.videoSize}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "0px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许图片的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("extensionNames")}
                                        value={this.state.extensionNames}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许上传文件的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("fileNames")}
                                        value={this.state.fileNames}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "0px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许上传视频的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("videoNames")}
                                        value={this.state.videoNames}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许管理文件的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("managementDocumentsNames")}
                                        value={this.state.managementDocumentsNames}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "0px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        允许管理图片的扩展名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("managementImagesNames")}
                                        value={this.state.managementImagesNames}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button raised color="primary" style={{marginTop: 34, fontSize: 12, borderRadius: 4}}>
                            确认提交
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Upload);
