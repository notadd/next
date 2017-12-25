import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Switch from 'material-ui/Switch';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';

const styles = {
    root: {
        'padding': '40px 30px',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableHead: {
        'font-size': '12px',
        'color': '#808080',
    },
    tableBody: {
        'font-size': '12px',
        'color': '#808080',
    },
    tableCell: {
        'text-align': 'left',
    },
    tableCellStatus: {
        'text-align': 'left',
        'padding-left': '34px',
    },
    menuBtn: {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
        'background-color': '#ffffff',
        'box-shadow': '0px 2px 4px 0 rgba(0, 0, 0, 0.3)',
    },
};
type State = {
};

let id = 0;
function createData(name: any, author: any, descri: any, status: boolean,) {
    id += 1;
    return { id, name, author, descri, status };
}

const list = [
    createData('用户中心', 'Mark', '142513233', true),
    createData('商城', 'eref', '142513233', false),
    createData('商家', 'eref', '142513233', false),
    createData('CMS', 'eref', '142513233', false),
    createData('Notadd2', 'eref', '142513233', false),
];

class Extension extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
    };
    handleChange = (pro: any) => (event: any, checked: any,) => {
        if (checked) {
            pro.status = true;
        } else {
            pro.status = false;
        }
        this.setState({
            [pro]: checked,
        });
    };
    render() {
        return (
            <div>
                <p className="crumbs">
                    全局 / 应用管理 / 拓展配置
                </p>
                <h4 className="title">开启拓展</h4>
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead className={this.props.classes.tableHead}>
                            <TableRow>
                                <TableCell>拓展名称</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>作者</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>描述</TableCell>
                                <TableCell className={this.props.classes.tableCellStatus} numeric>状态</TableCell>
                                <TableCell numeric></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={this.props.classes.tableBody}>
                            {list.map(n => {
                                return (
                                    <TableRow
                                        hover
                                        key={n.id}
                                    >
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell className={this.props.classes.tableCell} numeric>
                                            {n.author}
                                            </TableCell>
                                        <TableCell className={this.props.classes.tableCell} numeric>
                                            {n.descri}
                                            </TableCell>
                                        <TableCell className={this.props.classes.tableCell} numeric>
                                            <Switch
                                                checked={n.status}
                                                onChange={this.handleChange(n)}
                                                aria-label="n.status"
                                            />
                                        </TableCell>
                                        <TableCell numeric>
                                            <IconButton className={this.props.classes.menuBtn}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Extension);