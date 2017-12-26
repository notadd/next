import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';

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
        'padding': '0',
    },
    root: {
        'padding': '40px 30px',
    },
};
type State = {
};

class Home extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        value: 0,
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
                name: 'YUcap',
            },
        ],
    };
    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };
    render() {
        return (
            <div className="home">
                <Grid container spacing={24} className="top-statistics">
                    <Grid item xs={3}>
                        <Paper className={this.props.classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={this.props.classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={this.props.classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={this.props.classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24} className="bottom-content">
                    <Grid item xs={8}>
                        <Paper className={this.props.classes.leftPaper}>
                            <div className="home-bg">
                                <div>
                                    <h4>开发团队</h4>
                                    {this.state.list.map((item, index) => {
                                        return (
                                            this.state.value === index &&
                                            <div>
                                                <div className="img">
                                                    <img src={item.img} />
                                                </div>
                                                <div className="intro">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.link}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                scrollable
                                scrollButtons="auto"
                            >
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                                <Tab label="Item Four" />
                                <Tab label="Item Five" />
                                <Tab label="Item Six" />
                                <Tab label="Item Seven" />
                                <Tab label="Item 8" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={this.props.classes.rightPaper}>
                            xs=6
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(Home);