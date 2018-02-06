import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Editor from '../../components/Editor';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';

const styles = {
    root: {
        'padding': '40px 30px',
        'margin-bottom': '60px',
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
        'margin-bottom': '32px',
    },
    underline: {
        '&:before': {
            background: '#dfdfdf',
        }
    },
    switchHeight: {
        'height': '20px',
    },
    switchDefault: {
        'height': 'inherit',
    },
};
type State = {
    name: string,
    otherName: string,
    type: string,
    types: Array<any>,
    pageType: string,
    isOpen: boolean,
    list: Array<any>,
    num: number,
    value: any,
};

class PageEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor (props: any) {
        super(props);
        let type = '';
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        }
        this.state = {
            types: [
                {
                    id: '12',
                    type: '新闻1',
                },
                {
                    id: '13',
                    type: '新闻2',
                },
                {
                    id: '14',
                    type: '新闻3',
                },
            ],
            name: 'NotAdd',
            otherName: '新闻资讯',
            type: '',
            isOpen: false,
            pageType: type,
            num: 0,
            value: '',
            list: [
                {
                    id: 0,
                    path: 'neditor/',
                },
            ],
        };
    }
    handleAddEditor = () => {
        this.state.list.push({
            path: 'neditor/',
            id: this.state.num + 1,
        });
        this.setState({
            list: this.state.list,
            num: this.state.num + 1,
        });
    };
    handleRemoveEditor = (index: number) => {
        const arr = Object.assign([], this.state.list);
        arr.splice(index, 1);
        this.setState({
            list: arr,
        });
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
                    CMS / 页面管理 / 全部页面
                </p>
                <h4 className="title">
                    {this.state.pageType === '1' ? '新增' : '编辑'}
                </h4>
                <Paper className={this.props.classes.root}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <Grid container spacing={24}>
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                style={{paddingRight: '40px'}}
                                className="grid-editor-module"
                            >
                                <FormControl
                                    fullWidth
                                    required
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        标题
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('name')}
                                        value={this.state.name}
                                    />
                                </FormControl>
                                {
                                    this.state.list.map((item, index) => {
                                        return (
                                            <div className="editor" key={index}>
                                                <Editor path={item.path} value={this.state.value}/>
                                                {
                                                    index === 0 ?
                                                        <span onClick={this.handleAddEditor}>添加</span> :
                                                        <span onClick={() => this.handleRemoveEditor(index)}>删除</span>}
                                            </div>
                                        );
                                    })
                                }
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl
                                    fullWidth
                                    required
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        别名
                                    </InputLabel>
                                    <Input
                                        id="name-simple"
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('otherName')}
                                        value={this.state.otherName}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        分类
                                    </InputLabel>
                                    <Select
                                        className={this.props.classes.formLabelFont}
                                        value={this.state.type}
                                        onChange={this.handleChange('type')}
                                        input={<Input name="type" id="type-simple" />}
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
                                <FormControlLabel
                                    label="开启"
                                    classes={{
                                        root: this.props.classes.formLabel,
                                        label: this.props.classes.formLabel
                                    }}
                                    className={this.props.classes.formControlMargin}
                                    control={
                                        <Switch
                                            classes={{
                                                root: this.props.classes.switchHeight,
                                                default: this.props.classes.switchDefault,
                                            }}
                                            onChange={(event, checked) => this.setState({ isOpen: checked })}
                                            checked={this.state.isOpen}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            raised
                            color="primary"
                            style={{marginTop: 34, fontSize: 12, borderRadius: 4}}
                        >
                            确认提交
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(PageEdit);