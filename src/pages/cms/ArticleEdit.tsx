import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
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
    formControlMargin: {
        'margin-bottom': '34px',
    },
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
};
type State = {
};

class ArticleEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        webName: 'NotAdd',
        img: 'LOGO.png',
        type: '新闻资讯',
    };
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    render() {
        return (
            <div className="top-action-module cms">
                <p className="crumbs">
                    CMS / 文章管理 / 全部文章
                </p>
                <h4 className="title">编辑</h4>
                <Paper className={this.props.classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth
                                         className={this.props.classes.formControlMargin}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    className={this.props.classes.formLabelFont}
                                >
                                    文章标题
                                </InputLabel>
                                <Input
                                    id="name-simple"
                                    className={this.props.classes.formLabelFont}
                                    classes={{
                                        underline: this.props.classes.underline,
                                    }}
                                    onChange={this.handleChange('webName')}
                                    value={this.state.webName}
                                />
                            </FormControl>
                            <div className="editor">
                                编辑器插件
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth
                                         className={this.props.classes.formControlMargin}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    className={this.props.classes.formLabelFont}
                                >
                                    缩略图
                                </InputLabel>
                                <Input
                                    id="name-simple"
                                    className={this.props.classes.formLabelFont}
                                    classes={{
                                        underline: this.props.classes.underline,
                                    }}
                                    onChange={this.handleChange('img')}
                                    value={this.state.img}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel
                                    htmlFor="name-simple"
                                    className={this.props.classes.formLabelFont}
                                >
                                    分类
                                </InputLabel>
                                <Input
                                    id="name-simple"
                                    className={this.props.classes.formLabelFont}
                                    classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                    onChange={this.handleChange('type')}
                                    value={this.state.type}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(ArticleEdit);