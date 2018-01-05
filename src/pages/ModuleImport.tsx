import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FileDownload from 'material-ui-icons/FileDownload';
import FileUpload from 'material-ui-icons/FileUpload';
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
        'background-color': '#3f51b5',
        'color': '#fff',
        'margin-left': '10px',
    },
    root: {
        'padding': '40px 30px',
    },
    table: {
        'border-top': '1px solid rgba(235, 235, 235, 1)',
        'border-collapse': 'inherit',
    },
    tableCell: {
        'text-align': 'center',
        'padding': '0',
    },
};
type State = {
};

let id = 0;
function createData(check: boolean, name: any, description: any, version: any) {
    id += 1;
    return { id, check, name, description, version };
}

const list = [
    createData(false, 'notadd', '一些说明', '0.777'),
    createData(false, 'notadd2', '一些说明', '0.456'),
    createData(false, 'notadd3', '一些说明', '0.7777'),
    createData(false, 'notadd4', '一些说明', '0.77477'),
    createData(false, 'notadd5', '一些说明', '0.24325'),
];

class ModuleImport extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        checkedAll: false,
    };
    handleChangeAll = (name: any) => (event: any) => {
        if (event.target.checked) {
            list.map(item => {
                item.check = true;
            });
        } else {
            list.map(item => {
                item.check = false;
            });
        }
        this.setState({
            [name]: event.target.checked,
        });
    };
    handleChange = (pro: any) => (event: any) => {
        this.state.checkedAll = true;
        pro.check = true;
        if (!event.target.checked) {
            pro.check = false;
        }
        list.map(item => {
            if (item.check === false) {
                this.state.checkedAll = false;
            }
        });
        this.setState({
            [pro]: event.target.checked,
        });
    };

    render() {
        return (
            <div className="top-action-module">
                <p className="crumbs">
                    全局 / 应用管理 / 模块配置
                </p>
                <h4 className="title">导入/导出</h4>
                <div className="btn-group">
                    <IconButton
                        className={this.props.classes.menuBtn}
                    >
                        <FileUpload />
                    </IconButton>
                    <IconButton
                        className={this.props.classes.menuBtn}
                    >
                        <FileDownload />
                    </IconButton>
                </div>
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell className={this.props.classes.tableCell} numeric>
                                    <Checkbox
                                        checked={this.state.checkedAll}
                                        onChange={this.handleChangeAll('checkedAll')}
                                        value="checkedAll"
                                    />
                                </TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>模块名称</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>描述</TableCell>
                                <TableCell className={this.props.classes.tableCell} numeric>版本</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {list.map((n, index) => {
                                return (
                                    <TableRow
                                        hover
                                        className={index % 2 === 0 ? this.props.classes.evenRow : ''}
                                        key={n.id}
                                    >
                                        <TableCell padding="checkbox" className={this.props.classes.tableCell} numeric>
                                            <Checkbox
                                                checked={n.check}
                                                onChange={this.handleChange(n)}
                                                value="n.check"
                                            />
                                        </TableCell>
                                        <TableCell className={this.props.classes.tableCell} numeric>
                                            {n.name}
                                        </TableCell>
                                        <TableCell className={this.props.classes.tableCell} numeric>
                                            {n.description}
                                        </TableCell>
                                        <TableCell className={this.props.classes.tableCell} numeric>
                                            {n.version}
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
export default withStyles(styles)(ModuleImport);