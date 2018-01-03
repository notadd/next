import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import Switch from 'material-ui/Switch';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

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

function createData(name: any, author: any, descri: any, status: boolean) {
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
        open: false,
        modalId: '',
        modalName: '',
    };

    handleChange = (pro: any) => (event: any, checked: any) => {
        if (checked) {
            pro.status = true;
        } else {
            pro.status = false;
        }
        this.setState({
            [pro]: checked,
        });
    };

    handleClickOpen = (pro: any) => {
        this.state.modalName = pro.name;
        this.state.modalId = pro.id;
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <p className="crumbs">
                    全局 / 应用管理 / 拓展配置
                </p>
                <h4 className="title">开启拓展</h4>
                <Paper className={ this.props.classes.root }>
                    <Table className={ this.props.classes.table }>
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell>拓展名称</TableCell>
                                <TableCell className={ this.props.classes.tableCell } numeric>作者</TableCell>
                                <TableCell className={ this.props.classes.tableCell } numeric>描述</TableCell>
                                <TableCell className={ this.props.classes.tableCellStatus } numeric>状态</TableCell>
                                <TableCell numeric></TableCell>
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
                                            { n.author }
                                        </TableCell>
                                        <TableCell className={ this.props.classes.tableCell } numeric>
                                            { n.descri }
                                        </TableCell>
                                        <TableCell className={ this.props.classes.tableCell } numeric>
                                            <Switch
                                                checked={ n.status }
                                                onChange={ this.handleChange(n) }
                                                aria-label="n.status"
                                            />
                                        </TableCell>
                                        <TableCell numeric>
                                            <IconButton
                                                className={ this.props.classes.menuBtn }
                                                onClick={ () => this.handleClickOpen(n) }
                                            >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            }) }
                        </TableBody>
                    </Table>
                </Paper>
                <Dialog
                    open={ this.state.open }
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog-content"
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        className="dialog-title"
                    >
                        <IconButton
                            onClick={ this.handleClose }
                        >
                            <ClearIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className="dialog-content">
                        <h4>确定要删除拓展名称"{ this.state.modalName }"吗?</h4>
                    </DialogContent>
                    <DialogActions className="dialog-actions">
                        <Button onClick={ this.handleClose }>
                            取消
                        </Button>
                        <Button onClick={ this.handleClose } autoFocus>
                            确认提交
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(Extension);