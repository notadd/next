import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Editor from '../../components/Editor';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
// import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';
import Cascader from 'antd/lib/cascader';
import 'antd/lib/cascader/style/css.js';
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';
import { CircularProgress } from 'material-ui/Progress';

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
    editor: {},
};
type State = {
    name: string,
    img: string,
    classify: string,
    classifyId: number,
    topPlace: string,
    types: Array<any>,
    topTypes: Array<any>,
    abstract: string,
    publishedTime: any,
    sourceUrl: string,
    source: string,
    pageType: string,
    pageId: number,
    hidden: boolean,
    path: any,
    editor: any,
    loading: boolean,
    open: boolean,
    transition: any,
    errorMessage: string,
    error: boolean,
};

class ArticleEdit extends React.Component<WithStyles<keyof typeof styles>, State> {
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
            name: '',
            img: '',
            classify: '',
            classifyId: 0,
            topPlace: '',
            types: [],
            topTypes: [
                {
                    id: 'global',
                    type: '全局',
                },
                {
                    id: 'current',
                    type: '当前分类',
                },
                {
                    id: 'level1',
                    type: '一级分类',
                },
                {
                    id: 'level2',
                    type: '二级分类',
                },
                {
                    id: 'level3',
                    type: '三级分类',
                },
            ],
            abstract: '',
            publishedTime: '',
            sourceUrl: '',
            source: '',
            hidden: false,
            pageType: type,
            pageId: Number(proId),
            path: 'neditor/',
            editor: {
                id: 0,
                content: '',
            },
            loading: false,
            transition: undefined,
            open: false,
            errorMessage: '',
            error: false,
        };
    }
    componentDidMount() {
        if (this.state.pageType !== '1') {
            axios.post('http://192.168.1.121:3000/graphql?', {
                query: `
                query {
                    getArticlesNoLimit(getArticleById: {
                        id: ${this.state.pageId},
                    }){
                        id,
                        name,
                        classify,
                        classifyId,
                        url,
                        source,
                        sourceUrl,
                        topPlace,
                        hidden,
                        recycling,
                        publishedTime,
                        abstract,
                        content,
                        createAt,
                        updateAt,
                        check,
                    }
                }
            `,
            }).then(response => {
                const data = response.data.data.getArticlesNoLimit[0];
                window.console.log(data);
                this.setState({
                    name: data.name,
                    abstract: data.abstract,
                    classifyId: data.classifyId,
                    classify: data.classify,
                    publishedTime: data.publishedTime,
                    source: data.source,
                    sourceUrl: data.sourceUrl,
                    topPlace: data.topPlace,
                    editor: {
                        content: data.content,
                    },
                });
            });
        }
        axios.post('http://192.168.1.121:3000/graphql?', {
            query: `
                query {
                    getClassifys(getAllClassify: {
                        useFor: art,
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
    handleDateChange = (date: any) => {
        let currentTime = new Date(date).toLocaleDateString();
        window.console.log(currentTime);
        this.setState({ publishedTime: currentTime });
    };
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleEditorChange = (content: any, id: any) => {
        this.setState({
            editor: {
                content: content,
            }
        });
    };
    handleSubmit = () => {
        let pageId = 0;
        if (this.state.pageType !== '1') {
            pageId = this.state.pageId;
        } else {
            pageId = 0;
        }
        window.console.log(this.state.hidden);
        if (this.state.pageType === '1') {
            axios.post('http://192.168.1.121:3000/graphql?', {
                query: `
                    mutation {
                        ArticleCU(createArt: {
                            name: "${this.state.name}",
                            classify: "${this.state.classify}",
                            classifyId: ${this.state.classifyId},
                            abstract: "${this.state.abstract}",
                            content: "${this.state.editor.content}",
                            topPlace: ${this.state.topPlace},
                            hidden: ${this.state.hidden},
                            publishedTime: "${this.state.publishedTime}",
                            source: "${this.state.source}",
                            sourceUrl: "${this.state.sourceUrl}",
                        })
                    }
                `,
            }).then(response => {
                const data = JSON.parse(response.data.data.ArticleCU);
                if (!response.data.errors) {
                    if (data.Continue) {
                        this.setState(
                            {
                                error: false,
                                open: true,
                                loading: false,
                                errorMessage: '提交成功!',
                            },
                        );
                    } else if (!data.Continue) {
                        this.setState(
                            {
                                error: true,
                                open: true,
                                loading: false,
                                errorMessage: data.MessageCodeError,
                            },
                        );
                    }
                }
            });
        } else if (this.state.pageType !== '1') {
            axios.post('http://192.168.1.121:3000/graphql?', {
                query: `
                    mutation {
                         ArticleCU(updateArt: {
                            id: ${pageId},
                            name: "${this.state.name}",
                            content: "${this.state.editor.content}",
                            classify: "${this.state.classify}",
                            classifyId: ${this.state.classifyId},
                            abstract: "${this.state.abstract}",
                            topPlace: ${this.state.topPlace},
                            hidden: ${this.state.hidden},
                            publishedTime: "${this.state.publishedTime}",
                            source: "${this.state.source}",
                            sourceUrl: "${this.state.sourceUrl}",
                        })
                    }
                `,
            }).then(response => {
                const data = JSON.parse(response.data.data.PageCUD);
                if (!response.data.errors) {
                    if (data.Continue) {
                        this.setState(
                            {
                                error: false,
                                open: true,
                                loading: false,
                                errorMessage: '修改信息成功!',
                            },
                        );
                    } else if (!data.Continue) {
                        this.setState(
                            {
                                error: true,
                                open: true,
                                loading: false,
                                errorMessage: data.MessageCodeError,
                            },
                        );
                    }
                }
            });
        }
    };
    getImgURL = (event: any) => {
        this.setState({
            img: event.target.value.substr(12),
        });
    };
    handleChangeType = (value: any, select: any) => {
        this.setState({
            classify: select[select.length - 1].label,
            classifyId: value[value.length - 1],
        });
    };
    handleCloseTip = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div className="top-action-module cms">
                <p className="crumbs">
                    CMS / 文章管理 / 全部文章
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
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        文章标题
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('name')}
                                        value={this.state.name}
                                    />
                                </FormControl>
                                <div className="editor">
                                    <Editor
                                        path={this.state.path}
                                        editor={this.state.editor}
                                        handleEditorChange={this.handleEditorChange}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                    style={{ position: 'relative'}}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        缩略图
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        value={this.state.img}
                                    />
                                    <Input
                                        type="file"
                                        className="upload-image"
                                        onChange={this.getImgURL}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
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
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        摘要
                                    </InputLabel>
                                    <Input
                                        multiline={true}
                                        rowsMax="3"
                                        rows="3"
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        className={this.props.classes.formLabelFont}
                                        onChange={this.handleChange('abstract')}
                                        value={this.state.abstract}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        置顶
                                    </InputLabel>
                                    <Select
                                        className="form-select-underline"
                                        value={this.state.topPlace}
                                        onChange={this.handleChange('topPlace')}
                                        input={<Input name="type" id="type-simple" />}
                                    >
                                        {
                                            this.state.topTypes.map((item: any, index: number) => {
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
                                    </Select>
                                </FormControl>
                                <FormControlLabel
                                    label="隐藏"
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
                                            onChange={
                                                (event: any, checked: boolean) => {
                                                    this.setState({ hidden: checked});
                                                }}
                                            checked={this.state.hidden}
                                        />
                                    }
                                />
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                    style={{ position: 'relative'}}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        发布时间
                                    </InputLabel>
                                    <Input
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        className={this.props.classes.formLabelFont}
                                        value={this.state.publishedTime}
                                    />
                                    <DatePicker
                                        className="data-picker"
                                        style={{marginBottom: '32px'}}
                                        keyboard
                                        clearable
                                        onChange={this.handleDateChange}
                                        animateYearScrolling={false}
                                    />
                                </FormControl>
                                {/*<DatePicker
                                    className="data-picker"
                                    style={{marginBottom: '32px'}}
                                    keyboard
                                    clearable
                                    format="MMMM Do, YYYY"
                                    label="发布时间"
                                    value={this.state.publishedTime}
                                    onChange={this.handleDateChange}
                                    animateYearScrolling={false}
                                />*/}
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        来源
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('source')}
                                        value={this.state.source}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={this.props.classes.formControlMargin}
                                >
                                    <InputLabel
                                        className={this.props.classes.formLabelFont}
                                    >
                                        来源链接
                                    </InputLabel>
                                    <Input
                                        className={this.props.classes.formLabelFont}
                                        classes={{
                                            underline: this.props.classes.underline,
                                        }}
                                        onChange={this.handleChange('sourceUrl')}
                                        value={this.state.sourceUrl}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            variant="raised"
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
                            root: (this.state.error ? 'error-snack-bar' : 'message-snack-bar'),
                        }}
                        open={this.state.open}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        onClose={this.handleCloseTip}
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
export default withStyles(styles)(ArticleEdit);