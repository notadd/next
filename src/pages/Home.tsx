import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import { DataSet } from '@antv/data-set';
import AreaChart from '../components/AreaChart';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    evenRow: {
        'background': '#f7f7f7',
    },
    paper: {
        'padding': '28px 20px',
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
    index: number,
    list: any,
    version: any,
};

const mySwiper = (obj: any) =>
    (
        obj.map((item: any, index: number) => {
            return (
                <div key={index} className="team-item">
                    <div className="img">
                        <img src={item.img}/>
                    </div>
                    <div className="intro">
                        <h3>{item.name}</h3>
                        <p>
                            <a href={item.link} target="_blank">{item.link}</a>
                        </p>
                    </div>
                </div>
            );
        })
    );
const chart = {
    name: '用户',
    icon: 'person',
    trend: 'down',
    percentage: '15%',
    num: 1253,
    data: [
        { month: 'Jan', London: 1.9 },
        { month: 'Feb', London: 2.2 },
        { month: 'Mar', London: 3.7 },
        { month: 'Apr', London: 4.5 },
        { month: 'May', London: 5.9 },
        { month: 'Jun', London: 4.2 },
        { month: 'Jul', London: 3.0 },
        { month: 'Aug', London: 4.6 },
        { month: 'Sep', London: 3.2 },
        { month: 'Oct', London: 5.3 },
        { month: 'Nov', London: 2.6 },
        { month: 'Dec', London: 1.8 }
    ],
    color: 'rgba(121, 135, 204, 1)',
    opacity: '1',
    position: 'month*London', // X轴和Y轴
    scale: {
        month: {
            range: [ 0, 1 ]
        }
    }
};
class Home extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
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
    }
    handleChange = (event: any, value: any) => {
        this.setState({
            index: value,
        });
    };
    handleChangeIndex = (index: number) => {
        this.setState({
            index: index,
        });
    };
    render() {
        const { index } = this.state;
        return (
            <div className="home">
                <Grid container spacing={24}>
                    <AreaChart chart={chart}/>
                </Grid>
                <Grid container spacing={24} className="bottom-content">
                    <Grid item xs={12} md={8} sm={12}>
                        <Paper className={this.props.classes.leftPaper}>
                            <div className="home-bg">
                                <div>
                                    <h4>开发团队</h4>
                                    <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                                        {mySwiper(this.state.list)}
                                    </AutoPlaySwipeableViews>
                                </div>
                            </div>
                            <Grid className="teamBox" container spacing={40}>
                                {this.state.list.map((item: any, val: number) => {
                                    return (
                                        <Grid
                                            item
                                            xs={1}
                                            md={1}
                                            sm={1}
                                            key={val}
                                            className={
                                                val === index ? this.props.classes.spanActive : ''
                                            }
                                            onClick={() => this.handleChange(event, val)}
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
                                    {this.state.version.map((item: any, val: number) => {
                                        return (
                                            <p key={val}>
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
