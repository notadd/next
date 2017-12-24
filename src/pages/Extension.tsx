import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
};
type State = {
};

class Seo extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
    };
    render() {
        return (
            <div>
                <p className="crumbs">
                    全局 / 应用管理 / 拓展配置
                </p>
                <h4 className="title">本地安装</h4>
                <Paper className={this.props.classes.root}>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Seo);