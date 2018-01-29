import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = {
    evenRow: {
        'background': '#f7f7f7',
    },
    paper: {
        'padding': '16px',
        'text-align': 'center',
    },
    leftPaper: {
        'padding': '0',
    },
    rightPaper: {
        'padding': '0 30px',
    },
    root: {
        'padding': '40px 30px',
    },
    spanActive: {
        'color': '#3f51b5 !important',
    },
};
type State = {
};

class Home extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        value: 0,
        list: [
            {
                img: 'https://ww4.sinaimg.cn/large/0060lm7Tly1flat9vypmpj302o02odg7.jpg',
                link: 'https://github.com/twilroad',
                name: '寻风',
            },
            {
                img: 'https://ww3.sinaimg.cn/large/0060lm7Tly1flata92g2gj302o02ojrd.jpg',
                link: 'https://www.zuohuadong.cn/',
                name: '依剑听雨',
            },
            {
                img: 'https://ww1.sinaimg.cn/large/0060lm7Tly1flatb5rn6qj302o02ot8r.jpg',
                link: 'https://github.com/LitoMore',
                name: 'LitoMore',
            },
            {
                img: 'https://ww2.sinaimg.cn/large/0060lm7Tly1flatblzh3bj302o02oglz.jpg',
                link: 'https://github.com/medz',
                name: 'Seven Du',
            },
            {
                img: 'https://ww4.sinaimg.cn/large/0060lm7Tly1flatbzk288j302o02oq34.jpg',
                link: 'http://momod.zcool.com.cn',
                name: '小莫',
            },
            {
                img: 'https://ww4.sinaimg.cn/large/0060lm7Tly1flatc5auurj302o02oq34.jpg',
                link: 'https://github.com/tianjignxihe',
                name: '凡溪',
            },
            {
                img: 'https://ww1.sinaimg.cn/large/0060lm7Tly1flatcehb6qj302o02oq34.jpg',
                link: 'https://github.com/zhanghuan1203',
                name: '浅殇',
            },
            {
                img: 'https://ww3.sinaimg.cn/large/0060lm7Tly1flatchc1l3j302o02o0t1.jpg',
                link: 'https://gitee.com/ywcap',
                name: 'Ywcap',
            },
            {
                img: 'https://ww2.sinaimg.cn/large/0060lm7Tly1flatca3g8oj302o02o3yj.jpg',
                link: 'https://github.com/Hollydan',
                name: 'Holly',
            },
        ],
        version: [
            {
                name: 'Node版本',
                intro: '2.0.1',
            },
            {
                name: '系统版本',
                intro: 'hdai nkwja hjwi',
            },
            {
                name: 'CPU',
                intro: 'x86_64',
            },
            {
                name: '服务器架构',
                intro: 'Caddy/（nwaknhfkaf）nnk',
            },
            {
                name: '内存大小',
                intro: '2654657654 Bytes',
            },
            {
                name: '数据库版本',
                intro: 'whauifhi 10.0',
            },
            {
                name: 'Redis 版本',
                intro: '3.0',
            },
            {
                name: '当前时区',
                intro: 'PRC',
            },
        ],
    };
    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };
    handleClickOpen = (value: any) => {
        this.setState({ value });
    };
    render() {
        return (
            <div className="home">
                <Grid container spacing={24} className="bottom-content">
                    <Grid item xs={12} md={8} sm={12}>
                        <Paper className={this.props.classes.leftPaper}>
                            <div className="home-bg">
                                <div>
                                    <h4>开发团队</h4>
                                    {this.state.list.map((item, index) => {
                                        return (
                                            this.state.value === index &&
                                            <div key={index}>
                                                <div className="img">
                                                    <img src={item.img} />
                                                </div>
                                                <div className="intro">
                                                    <h3>{item.name}</h3>
                                                    <p>
                                                        <a href={item.link} target="_blank">{item.link}</a>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <Grid className="teamBox" container spacing={40}>
                                {this.state.list.map((item, index) => {
                                    return (
                                        <Grid
                                            item
                                            xs={1}
                                            md={1}
                                            sm={1}
                                            key={index}
                                            className={
                                                index === this.state.value ? this.props.classes.spanActive : ''
                                            }
                                            onClick={() => this.handleClickOpen(index)}
                                        >
                                            {item.name}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                            <div className="thank-content">
                                感谢：
                                <span>
                                    <a href="https://github.com/ganlanshu0211" target="_blank">半缕阳光、</a>
                                </span>
                                <span>
                                    <a href="https://github.com/mustangzhong" target="_blank">加菲猫、</a>
                                </span>
                                <span>
                                    <a href="https://github.com/Seevil" target="_blank">Intern</a>
                                </span>
                                <span className="line">/</span>
                                <span>
                                    <a href="https://blog.notadd.com/categories/月报/" target="_blank">捐赠名单</a>
                                </span>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper className={this.props.classes.rightPaper}>
                            <div className="version-information" style={{paddingBottom: 25}}>
                                <p>
                                    <span>Notadd版本</span>
                                    <span style={{color: '#3f51b5'}}>1.16.30</span>
                                </p>
                                <div>
                                    {this.state.version.map((item, index) => {
                                        return (
                                            <p key={index}>
                                                <span>{item.name}</span>
                                                <span>{item.intro}</span>
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(Home);