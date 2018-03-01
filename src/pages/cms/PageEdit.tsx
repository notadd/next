import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Editor from '../../components/Editor';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { StyleRules } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import axios from 'axios';
import Cascader from 'antd/lib/cascader';
import 'antd/lib/cascader/style/css.js';

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
    title: string,
    alias: string,
    classify: string,
    classifyId: number,
    types: Array<any>,
    pageType: string,
    pageId: number,
    list: Array<any>,
    number: number,
    content: any,
    ready: any,
    loading: boolean,
};

const stylesType = {} as StyleRules;

interface Props extends WithStyles<keyof typeof stylesType> {
    num: number;
}

class PageEdit extends React.Component<Props, State> {
    constructor (props: any, state: any) {
        super(props, state);
        let type = '';
        let proId = '';
        const str = props.location.pathname;
        if (props.location.pathname.indexOf('/add') > 0) {
            type = '1';
        } else {
            proId = str.substring(str.lastIndexOf('\/') + 1, str.length);
        }
        this.state = {
            types: [],
            title: '',
            alias: '',
            classify: '',
            classifyId: 0,
            pageType: type,
            pageId: Number(proId),
            number: 0,
            content: '',
            ready: '',
            list: [
                {
                    num: 0,
                    content: '',
                    path: 'neditor/',
                },
            ],
            loading: false,
        };
    }
    componentDidMount() {
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getClassifys(getAllClassify: {
                        useFor: page,
                    }){
                        id,
                        title,
                        classifyAlias,
                        chainUrl,
                        describe,
                        color,
                        groupId,
                        children{
                            id,
                            title,
                            children{
                                id,
                                title,
                                children{
                                    id,
                                    title,
                                    children{
                                        id,
                                        title,
                                        children{
                                            id,
                                            title,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        }).then(response => {
            let arr = new Array();
            const structures = response.data.data.getClassifys[0].children;
            arr = Object.keys(structures).map(index => {
                const item = structures[index];
                item.label = item.title;
                item.value = item.id;
                const children = item.children;
                if (item.children !== null) {
                    item.children = Object.keys(children).map(i => {
                        const sub = children[i];
                        sub.label = sub.title;
                        sub.value = sub.id;
                        const childs = sub.children;
                        if (sub.children !== null) {
                            sub.children = Object.keys(childs).map(s => {
                                const su = childs[s];
                                su.label = su.title;
                                su.value = su.id;
                                const childs2 = su.children;
                                if (su.children !== null) {
                                    su.children = Object.keys(childs2).map(s2 => {
                                        const fours = childs2[s2];
                                        fours.label = fours.title;
                                        fours.value = fours.id;
                                        if (fours.children !== null) {
                                            const childs3 = fours.children;
                                            fours.children = Object.keys(childs3).map(s3 => {
                                                const five = childs3[s3];
                                                five.label = five.title;
                                                five.value = five.id;
                                                return five;
                                            });
                                        }
                                        return fours;
                                    });
                                }
                                return su;
                            });
                        }
                        return sub;
                    });
                }
                return item;
            });
            this.setState({ types: arr });
        });
    }
    handleEditorChange = (content: any, id: any) => {
        this.state.list[id].content = content;
        this.setState({
            list: this.state.list,
        });
    };
    handleAddEditor = () => {
        const arr = Object.assign([], this.state.list);
        arr.push({
            num: this.state.number + 1,
            content: '',
            path: 'neditor/',
        });
        this.setState({
            list: arr,
            number: this.state.number + 1,
        });
    };
    handelSubmit = () => {
        let newArr = JSON.stringify(this.state.list);
        window.console.log(newArr);
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                mutation {
                    PageCUD(createPages: {
                        title: ${this.state.title},
                        alias: ${this.state.alias},
                        content: ${newArr},
                        classify: ${this.state.classify},
                        classifyId: ${this.state.classifyId},
                        limitNum: 10,
                        pages: 1,
                    })
                }
            `,
        }).then(response => {
            if (!response.data.errors) {
                window.console.log(response);
            }
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
    handleChangeType = (value: any, select: any) => {
        this.setState({
            classify: select[select.length - 1].label,
            classifyId: value[value.length - 1],
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
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('title')}
                                        value={this.state.title}
                                    />
                                </FormControl>
                                {
                                    this.state.list.map((item, index) => {
                                        return (
                                            <div className="editor" key={index}>
                                                <Editor
                                                    path={item.path}
                                                    editor={item}
                                                    handleEditorChange={this.handleEditorChange}
                                                />
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
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('alias')}
                                        value={this.state.alias}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                    style={{ position: 'relative'}}
                                >
                                    <InputLabel
                                        htmlFor="name-simple"
                                        className={this.props.classes.formLabelFont}
                                    >
                                        分类
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        value={this.state.classify}
                                    />
                                    <Cascader
                                        className="cascader-picker"
                                        options={this.state.types}
                                        onChange={this.handleChangeType}
                                        notFoundContent="Not Found"
                                    />
                                    {/*<Select
                                        className={this.props.classes.formLabelFont}
                                        value={this.state.classify}
                                        onChange={this.handleChangeType}
                                        input={<Input name="classify" id="type-simple" />}
                                    >
                                        {
                                            this.state.types.map((item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        className="input-drop-paper"
                                                        value={item.id}
                                                        key={index}
                                                    >
                                                        {item.type}
                                                    </MenuItem>
                                                );
                                            })
                                        }
                                    </Select>*/}
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
                            onClick={this.handelSubmit}
                        >
                            {this.state.loading ?  <div><CircularProgress size={24}/></div> : '确认提交'}
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(PageEdit);