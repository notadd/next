import * as React from "react";
import withStyles, { WithStyles } from "material-ui/styles/withStyles";
import Paper from "material-ui/Paper";
import { FormControl } from "material-ui/Form";
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
    formLabelFont: {
        "font-size": "16px",
        "color": "#808080",
    },
};
type State = {
    title: string,
    describe: string,
    keywords: string,
};

class Seo extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        title: "",
        describe: "",
        keywords: "",
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
                <h4 className="title">SEO配置</h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={40}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required>
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        标题
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("title")}
                                        value={this.state.title}
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
                                        描述
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("describe")}
                                        value={this.state.describe}
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
                                        关键字
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange("keywords")}
                                        value={this.state.keywords}
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
export default withStyles(styles)(Seo);
