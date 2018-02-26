import * as React from 'react';
import { Chart, Geom } from 'bizcharts';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
let chartWidth;
class AreaChart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { chart } = this.props;
        return (React.createElement(Grid, { item: true, xs: 12, md: 4 },
            React.createElement(Paper, { style: {
                    'padding': '28px 20px',
                    'textAlign': 'center',
                } },
                React.createElement("div", { ref: (div) => {
                        if (div !== null) {
                            chartWidth = div.offsetWidth;
                        }
                    }, className: "table-head", style: { 'textAlign': 'left', 'lineHeight': '30px', 'marginBottom': 30 } },
                    React.createElement("p", { style: {
                            'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between'
                        } },
                        React.createElement("span", { style: { 'display': 'flex', 'alignItems': 'center', 'color': '#37474f' } },
                            React.createElement(Icon, null, chart.icon),
                            chart.name),
                        React.createElement("span", { style: { 'fontSize': 30, 'color': '#333' } }, chart.num)),
                    React.createElement("p", { style: { 'display': 'flex', 'alignItems': 'center', 'color': '#808080' } },
                        React.createElement(Icon, { style: { 'color': chart.trend === 'up' ? '#f44336' : '#4caf50' } }, chart.trend === 'up' ? 'arrow_upward' : 'arrow_downward'),
                        "\u540C\u6BD4",
                        chart.trend === 'up' ? '增长' : '下降',
                        " ",
                        chart.percentage)),
                React.createElement(Chart, { width: chartWidth, padding: 0, height: 46, data: chart.data, scale: chart.scale },
                    React.createElement(Geom, { type: "area", position: chart.position, color: chart.color, opacity: "1", shape: 'smooth' })))));
    }
}
export default AreaChart;
