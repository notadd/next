import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ColorPicker from 'rc-color-picker';
import Tabs, { Tab } from 'material-ui/Tabs';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import 'rc-color-picker/assets/index.css';

const styles = {
    root: {
    },
    container: {
        'padding': '32px 30px 40px',
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
    tab: number,
    typeName: string,
    otherName: string,
    color: string,
    description: string,
    link: string,
    pageType: string,
    types: Array<any>,
    type: string,
};

class ArticleTypeEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor (props: any, state: any) {
        super(props, state);
        let type = '';
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        }
        this.state = {
            tab: 0,
            typeName: 'NotAdd',
            otherName: 'news',
            color: '',
            description: '',
            link: 'www.baidu.com',
            pageType: type,
            type: '',
            types: [
                {
                    id: '12',
                    type: '分类1',
                },
                {
                    id: '13',
                    type: '分类2',
                },
                {
                    id: '14',
                    type: '分类3',
                },
            ],
        };
    }
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleChangeTab = (event: any, value: number) => {
        this.setState({ tab: value });
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
    render() {
        return (
            <div className="configurations">
                <p className="crumbs">
                    CMS <b>/</b> 文章管理 / 分类管理
                </p>
                <h4 className="title">
                    {this.state.pageType === '1' ? '新增' : '编辑'}
                </h4>
                <Paper>
                    <Tabs
                        className="paper-tabs"
                        value={this.state.tab}
                        onChange={this.handleChangeTab}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab
                            label="基础信息"
                            className="paper-tab"
                        />
                        <Tab
                            label="扩展信息"
                            className="paper-tab"
                        />
                    </Tabs>
                    {
                        this.state.tab === 0 &&
                        <form className={this.props.classes.container} noValidate autoComplete="off">
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth required>
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
                                            onChange={this.handleChange('typeName')}
                                            value={this.state.typeName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth required>
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
                                            onChange={this.handleChange('otherName')}
                                            value={this.state.otherName}
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
                                            onChange={this.handleChange('link')}
                                            value={this.state.link}
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
                                            onChange={this.handleChange('description')}
                                            value={this.state.description}
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
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel
                                            htmlFor="name-simple"
                                            className={this.props.classes.formLabelFont}
                                        >
                                            上级分类
                                        </InputLabel>
                                        <Select
                                            className="form-select-underline"
                                            value={this.state.type}
                                            onChange={this.handleChange('type')}
                                            input={<Input name="type"/>}
                                        >
                                            {
                                                this.state.types.map((item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            className="input-drop-paper"
                                                            value={index}
                                                            key={index}
                                                        >
                                                            {item.type}
                                                        </MenuItem>
                                                    );
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Button raised color="primary" style={{marginTop: 34, fontSize: 12, borderRadius: 4}}>
                                确认提交
                            </Button>
                        </form>
                    }
                    {
                        this.state.tab === 1 &&
                        <div>111</div>
                    }
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(ArticleTypeEdit);
