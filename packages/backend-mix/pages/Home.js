import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import AreaChart from '../components/AreaChart';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    evenRow: {
        'background': '#f7f7f7',
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
const mySwiper = (obj) => (obj.map((item, index) => {
    return (React.createElement("div", { key: index, className: "team-item" },
        React.createElement("div", { className: "img" },
            React.createElement("img", { src: item.img })),
        React.createElement("div", { className: "intro" },
            React.createElement("h3", null, item.name),
            React.createElement("p", null,
                React.createElement("a", { href: item.link, target: "_blank" }, item.link)))));
}));
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event, value) => {
            this.setState({
                index: value,
            });
        };
        this.handleChangeIndex = (index) => {
            this.setState({
                index: index,
            });
        };
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
            chart: require('../assets/data/areaChart.json'),
        };
    }
    render() {
        const { index, chart } = this.state;
        return (React.createElement("div", { className: "home" },
            React.createElement(Grid, { container: true, spacing: 24 },
                React.createElement(AreaChart, { chart: chart }),
                React.createElement(AreaChart, { chart: chart }),
                React.createElement(AreaChart, { chart: chart }),
                React.createElement(AreaChart, { chart: chart })),
            React.createElement(Grid, { container: true, spacing: 24, className: "bottom-content" },
                React.createElement(Grid, { item: true, xs: 12, md: 8, sm: 12 },
                    React.createElement(Paper, { className: this.props.classes.leftPaper },
                        React.createElement("div", { className: "home-bg" },
                            React.createElement("div", null,
                                React.createElement("h4", null, "\u5F00\u53D1\u56E2\u961F"),
                                React.createElement(AutoPlaySwipeableViews, { index: index, onChangeIndex: this.handleChangeIndex }, mySwiper(this.state.list)))),
                        React.createElement(Grid, { className: "teamBox", container: true, spacing: 40 }, this.state.list.map((item, val) => {
                            return (React.createElement(Grid, { item: true, xs: 1, md: 1, sm: 1, key: val, className: val === index ? this.props.classes.spanActive : '', onClick: () => this.handleChange(event, val) }, item.name));
                        })),
                        React.createElement("div", { className: "thank-content" },
                            "\u611F\u8C22\uFF1A",
                            React.createElement("span", null,
                                React.createElement("a", { href: "https://github.com/ganlanshu0211", target: "_blank" }, "\u534A\u7F15\u9633\u5149\u3001")),
                            React.createElement("span", null,
                                React.createElement("a", { href: "https://github.com/mustangzhong", target: "_blank" }, "\u52A0\u83F2\u732B\u3001")),
                            React.createElement("span", null,
                                React.createElement("a", { href: "https://github.com/Seevil", target: "_blank" }, "Intern")),
                            React.createElement("span", { className: "line" }, "/"),
                            React.createElement("span", null,
                                React.createElement("a", { href: "https://blog.notadd.com/categories/\u6708\u62A5/", target: "_blank" }, "\u6350\u8D60\u540D\u5355"))))),
                React.createElement(Grid, { item: true, xs: 12, sm: 12, md: 4 },
                    React.createElement(Paper, { className: this.props.classes.rightPaper },
                        React.createElement("div", { className: "version-information", style: { paddingBottom: 25 } },
                            React.createElement("p", null,
                                React.createElement("span", null, "Notadd\u7248\u672C"),
                                React.createElement("span", { style: { color: '#3f51b5' } }, "1.16.30")),
                            React.createElement("div", null, this.state.version.map((item, val) => {
                                return (React.createElement("p", { key: val },
                                    React.createElement("span", null, item.name),
                                    React.createElement("span", null, item.intro)));
                            }))))))));
    }
}
export default withStyles(styles)(Home);
