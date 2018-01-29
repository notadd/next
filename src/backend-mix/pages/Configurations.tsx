import * as React from "react";
import withStyles, { WithStyles } from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormControlLabel, FormControl, FormHelperText } from "material-ui/Form";
import Switch from "material-ui/Switch";
import Input, { InputLabel } from "material-ui/Input";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";

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
        "font-size": "16px",
    },
    subLabel: {
        "font-size": "12px",
        "color": "#808080",
    },
    switchHeight: {
        "height": "20px",
    },
    switchDefault: {
        "height": "inherit",
    },
    helpText: {
        color: "#808080",
        fontSize: "12px",
        marginTop: 0,
    },
    underline: {
        "&:before": {
            background: "#dfdfdf",
        }
    },
};

type State = {
    webName: string,
    siteOpen: boolean,
    domainName: string,
    multiDomainOpen: boolean,
    keepRecord: string,
    companyName: string,
    copyright: string,
    statisticalCode: string,
};

class Configurations extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        webName: "NotAdd",
        domainName: "",
        siteOpen: true,
        multiDomainOpen: false,
        keepRecord: "",
        companyName: "",
        copyright: "",
        statisticalCode: "",
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
                    全局 <b>/</b> 全局设置
                </p>
                <h4 className="title">参数设置</h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={40}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        网站名称
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange("webName")}
                                        value={this.state.webName}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        网站域名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange("domainName")}
                                        value={this.state.domainName}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "16px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    label="站点开启"
                                    classes={ {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    } }
                                    control={
                                        <Switch
                                            classes={{
                                                root: this.props.classes.switchHeight,
                                                default: this.props.classes.switchDefault,
                                            }}
                                            onChange={(event, checked) => this.setState({ siteOpen: checked })}
                                            checked={this.state.siteOpen}
                                        />
                                    }
                                />
                                <FormHelperText classes={{root: this.props.classes.helpText}}>
                                    关闭后网站将不能访问
                                </FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    label="开启多域名"
                                    classes={ {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    } }
                                    control={
                                        <Switch
                                            classes={{
                                                root: this.props.classes.switchHeight,
                                                default: this.props.classes.switchDefault,
                                            }}
                                            onChange={(event, checked) => this.setState({ multiDomainOpen: checked })}
                                            checked={this.state.multiDomainOpen}
                                        />
                                    }
                                />
                                <FormHelperText classes={{root: this.props.classes.helpText}}>
                                    由于前后端分离机制，官方不对多域名做特殊支持，可能导致其他未知问题
                                </FormHelperText>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "0px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        备案信息
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange("keepRecord")}
                                        value={this.state.keepRecord}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        公司名称
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange("companyName")}
                                        value={this.state.companyName}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: "10px"}}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        统计代码
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        multiline={true}
                                        rowsMax="3"
                                        rows="3"
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("statisticalCode")}
                                        value={this.state.statisticalCode}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        版权信息
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange("copyright")}
                                        value={this.state.copyright}
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
export default withStyles(styles)(Configurations);
