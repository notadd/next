import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';

const styles = {
    evenRow: {
        'background': '#f7f7f7',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#ffffff',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
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
        value: 1,
        list: [
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: '寻风',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: '依剑听雨',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: 'LitoMore',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: 'Seven Du',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: '小莫',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: '凡溪',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: '浅殇',
            },
            {
                img: require('../assets/images/user.jpg'),
                link: 'https://www.zuohuadong.cn/',
                name: 'Ycap',
            },
        ],
        version: [
            {
                name: 'PHP版本',
                intro: '3.0.1',
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
                                    <Button fab color="accent" className="absolute">
                                        <Add />
                                    </Button>
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
                                    <a href="" target="_blank">半缕阳光、</a>
                                </span>
                                <span>
                                    <a href="" target="_blank">加菲猫</a>
                                </span>
                                <span className="line">/</span>
                                <span>
                                    <a href="" target="_blank">捐赠名单</a>
                                </span>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper className={this.props.classes.rightPaper}>
                            <div className="version-information" style={{paddingBottom: 25}}>
                                <p>
                                    <span>Notadd版本</span>
                                    <span>1.16.30</span>
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