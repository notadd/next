import * as React from 'react';

class AreaChart extends React.Component<State> {
    constructor(props: any) {
        super(props);
        this.state = {
            table: {
                name: '用户',
                icon: 'person',
                trend: 'down',
                percentage: '15%',
                num: 1253,
                data: [
                    { month: 'Jan', Tokyo: 7.0, London: 1.9 },
                    { month: 'Feb', Tokyo: 6.9, London: 2.2 },
                    { month: 'Mar', Tokyo: 9.5, London: 3.7 },
                    { month: 'Apr', Tokyo: 14.5, London: 4.5 },
                    { month: 'May', Tokyo: 18.4, London: 5.9 },
                    { month: 'Jun', Tokyo: 21.5, London: 4.2 },
                    { month: 'Jul', Tokyo: 25.2, London: 3.0 },
                    { month: 'Aug', Tokyo: 26.5, London: 4.6 },
                    { month: 'Sep', Tokyo: 23.3, London: 3.2 },
                    { month: 'Oct', Tokyo: 18.3, London: 5.3 },
                    { month: 'Nov', Tokyo: 13.9, London: 2.6 },
                    { month: 'Dec', Tokyo: 9.6, London: 1.8 }
                ]
            };
        };
    }
    render() {

    }

}