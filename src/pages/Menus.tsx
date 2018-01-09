import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import SortableTree from 'react-sortable-tree';

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
type State = {};

class Menus extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        treeData: [{}],
    };
    constructor(props: any) {
        super(props);

        this.state = {
            treeData: [
                {
                    title: '产品中心',
                    children: [],
                },
                {
                    title: '新闻资讯',
                    children: [
                        {
                            title: '媒体报道',
                            children: [],
                        },
                        {
                            title: '行业资讯',
                            children: [
                                {
                                    title: '资讯1-1',
                                    children: [],
                                },
                            ],
                        },
                        {
                            title: '企业公告',
                            children: [],
                        },
                    ],
                },
                {
                    title: '视频中心',
                    children: [
                        {
                            title: '新闻XXX',
                            children: [],
                        },
                    ],
                },
                {
                    title: '其他资讯',
                    children: [
                        {
                            title: '0109资讯1-1',
                            children: [],
                        },
                        {
                            title: '0109资讯1-2',
                            children: [],
                        },
                    ],
                },
            ],
        };
    }
    render() {
        return (
            <div className="configurations">
                <p className="crumbs">
                    全局 <b>/</b> 系统插件
                </p>
                <h4 className="title">菜单管理</h4>
                <Paper className={this.props.classes.root}>
                    <div style={{ height: 400 }} className="{menus-manager}">
                        <SortableTree
                            treeData={this.state.treeData}
                            onChange={treeData => this.setState({ treeData })}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Menus);