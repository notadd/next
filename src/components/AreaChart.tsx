import * as React from 'react';
import { Chart, Geom } from 'bizcharts';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

interface Props {
    chart: any;
}

let chartWidth: number;

class AreaChart extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const {chart} = this.props;
        return (
            <Grid item xs={12} md={4}>
                <Paper
                    style={{
                        'padding': '28px 20px',
                        'textAlign': 'center',
                    }}
                >
                    <div
                        ref={(div) => {
                            if (div !== null) {
                                chartWidth = div.offsetWidth;
                            }
                        }}
                        className="table-head"
                        style={{'textAlign': 'left', 'lineHeight': '30px', 'marginBottom': 30}}
                    >
                        <p
                            style={{
                                'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between'
                            }}
                        >
                            <span style={{'display': 'flex', 'alignItems': 'center', 'color': '#37474f'}}>
                                <Icon>{chart.icon}</Icon>
                                {chart.name}
                            </span>
                            <span style={{'fontSize': 30, 'color': '#333'}}>{chart.num}</span>
                        </p>
                        <p style={{'display': 'flex', 'alignItems': 'center', 'color': '#808080'}}>
                            <Icon style={{'color': chart.trend === 'up' ? '#f44336' : '#4caf50'}}>
                                {chart.trend === 'up' ? 'arrow_upward' : 'arrow_downward'}
                            </Icon>
                            同比{chart.trend === 'up' ? '增长' : '下降'} {chart.percentage}
                        </p>
                    </div>
                    <Chart
                        width={chartWidth}
                        padding={0}
                        height={46}
                        data={chart.data}
                        scale={chart.scale}
                    >
                        <Geom
                            type="area"
                            position={chart.position}
                            color={chart.color}
                            opacity="1"
                            shape={'smooth'}
                        />
                    </Chart>
                </Paper>
            </Grid>
        );
    }
}

export default AreaChart;
