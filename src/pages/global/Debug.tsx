import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';

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
        'color': '#333',
        'flex-direction': 'row-reverse',
        'font-size': '16px !important',
        'margin': '0',
        'width': '100%',
    },
    smallBtn: {
        'border-radius': '4px',
        'font-size': '12px',
        'height': '24px',
        'min-height': '24px',
        'min-width': '48px',
        'padding': '0',
        'width': '48px',
    }
};
type State = {
    debug: boolean,
    test: boolean,
};

class Seo extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any, state: any) {
        super(props, state);
        this.state = {
            debug: false,
            test: false,
        };
    }
    render() {
        return (
            <div className="configurations">
                <p className="crumbs">
                    全局 <b>/</b> 系统插件
                </p>
                <h4 className="title">调试工具</h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={40}>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    label="缓存清除"
                                    classes={ {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    } }
                                    control={
                                        <Button
                                            color="primary"
                                            className={this.props.classes.smallBtn}
                                            variant="raised"
                                            size="small"
                                        >
                                            清除
                                        </Button>}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '-10px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    label="Debug模式"
                                    classes={ {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    } }
                                    control={
                                        <Switch
                                            onChange={(event, checked) => this.setState({ debug: checked })}
                                            checked={this.state.debug}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={40} style={{marginTop: '-10px'}}>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                    label="测试模式"
                                    classes={ {
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    } }
                                    control={
                                        <Switch
                                            onChange={(event, checked) => this.setState({ test: checked })}
                                            checked={this.state.test}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button variant="raised" color="primary" style={{marginTop: 34, fontSize: 12, borderRadius: 4}}>
                            确认提交
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Seo);