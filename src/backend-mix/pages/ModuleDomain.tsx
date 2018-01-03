import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';

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
    root: {
        'padding': '40px 30px',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'left',
        'padding-top': '1px',
        'padding-bottom': '0',
    },
    tableCellStatus: {
        'text-align': 'left',
        'padding-left': '34px',
    },
};
type State = {};

let id = 0;

function createData(name: any, domain: any, defaul: boolean, other: any, use: boolean) {
    id += 1;
    return { id, name, domain, defaul, other, use };
}

const list = [
    createData('notadd', '多域名功能未开启', true, '/', true),
    createData('商城', '多域名功能未开启', false, '无', false),
    createData('商家', '多域名功能未开启', false, '无', false),
    createData('CMS', '多域名功能未开启', false, '无', false),
    createData('Notadd2', '多域名功能未开启', false, '无', false),
];

class ModuleOpen extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        open: false,
    };

    handleChange = (pro: any) => (event: any, checked: any) => {
        if (checked) {
            pro.use = true;
        } else {
            pro.use = false;
        }
        this.setState({
            [pro]: checked,
        });
    };

    changeCheckBox = (pro: any) => (event: any) => {
        if (event.target.checked) {
            pro.defaul = true;
        } else {
            pro.defaul = false;
        }
        this.setState({
            [name]: event.target.checked,
        });
    };

    render() {
        return (
            <div>
                <p className="crumbs">
                    全局 / 应用管理 / 模块配置
                </p>
                <h4 className="title">域名配置</h4>
                <Paper className={ this.props.classes.root }>
                    <Table className={ this.props.classes.table }>
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell>模块名称</TableCell>
                                <TableCell className={ this.props.classes.tableCell } numeric>域名</TableCell>
                                <TableCell className={ this.props.classes.tableCell } numeric>默认</TableCell>
                                <TableCell className={ this.props.classes.tableCell } numeric>别名</TableCell>
                                <TableCell numeric>使用域名</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            { list.map((n, index) => {
                                return (
                                    <TableRow
                                        hover
                                        className={ index % 2 === 0 ? this.props.classes.evenRow : '' }
                                        key={ n.id }
                                    >
                                        <TableCell>{ n.name }</TableCell>
                                        <TableCell className={ this.props.classes.tableCell } numeric>
                                            { n.domain }
                                        </TableCell>
                                        <TableCell className={ this.props.classes.tableCell } numeric>
                                            <Checkbox
                                                className="table-check-box"
                                                checked={ n.defaul }
                                                onChange={ this.changeCheckBox(n) }
                                                value="n.defaul"
                                            />
                                        </TableCell>
                                        <TableCell className={ this.props.classes.tableCell } numeric>
                                            { n.other }
                                        </TableCell>
                                        <TableCell numeric>
                                            <Switch
                                                checked={ n.use }
                                                onChange={ this.handleChange(n) }
                                                aria-label="n.use"
                                            />
                                        </TableCell>
                                    </TableRow>
                                );
                            }) }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ModuleOpen);