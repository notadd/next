import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import ReactPaginate from 'react-paginate';
import Paper from 'material-ui/Paper';
import ExpandMore from 'material-ui-icons/ExpandMore';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Collapse from 'material-ui/transitions/Collapse';

const styles = {
    evenRow: {
        'background': '#f7f7f7',
    },
    root: {
        'padding': '40px 30px',
    },
    menuBtn: {},
};
type State = {
    checkedAll: boolean,
    rowsPerPage: number,
    currentPage: number,
    open: boolean,
    modalId: string,
    modalName: string,
};

class Message extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        checkedAll: false,
        rowsPerPage: 4,
        currentPage: 0,
        open: false,
        modalId: '',
        modalName: '',
        list: [
            {
                id: 1,
                collapse: false,
                name: '王先生1',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 2,
                collapse: false,
                name: '王先生2',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 3,
                collapse: false,
                name: '王先生3',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 4,
                collapse: false,
                name: '王先生4',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
            {
                id: 5,
                collapse: false,
                name: '王先生5',
                phone: '13999554621',
                email: 'ibenchu@qq.com',
                time: '2017-12-01 13:34:35',
                msg: '你好，我对贵公司的产品很有兴趣',
            },
        ],
    };
    handlePageClick = (data: any) => {
        this.setState({ currentPage: data.selected });
    };
    handleClick = (pro: any) => {
        pro.collapse = !pro.collapse;
        this.setState({
            [pro]: pro.collapse,
        });
    };
    render() {
        const { currentPage, rowsPerPage, list } = this.state;
        return (
            <div className="top-action-module cms-message">
                <p className="crumbs">
                    CMS / 信息管理
                </p>
                <h4 className="title">客户留言</h4>
                <Paper className={this.props.classes.root}>
                    <ul className="table-head">
                        <li />
                        <li>姓名</li>
                        <li>电话</li>
                        <li>邮箱</li>
                        <li>时间</li>
                    </ul>
                    <ul className="table-body">
                        {list.slice(currentPage * rowsPerPage, rowsPerPage * currentPage + rowsPerPage)
                            .map((n, index) => {
                                return (
                                    <li key={n.id}>
                                        <div className={index % 2 === 0 ? this.props.classes.evenRow : ''}>
                                            <div onClick={() => this.handleClick(n)}>
                                                {
                                                    n.collapse ?
                                                        <ExpandMore
                                                            style={{
                                                                color: '#808080',
                                                                width: 20,
                                                                height: 20}}
                                                        /> :
                                                        <KeyboardArrowRight
                                                            style={{
                                                                color: '#808080',
                                                                width: 20,
                                                                height: 20}}
                                                        />
                                                }
                                            </div>
                                            <div>{n.name}</div>
                                            <div>{n.phone}</div>
                                            <div>{n.email}</div>
                                            <div>{n.time}</div>
                                        </div>
                                        <Collapse
                                            in={n.collapse}
                                            timeout="auto"
                                            unmountOnExit
                                            className="collapse-msg"
                                        >
                                            留言：{n.msg}
                                        </Collapse>
                                    </li>
                                );
                            })}
                    </ul>
                    <div className="table-pagination">
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={<a href="javascript:;">...</a>}
                            breakClassName={'break-me'}
                            pageCount={list.length / rowsPerPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(Message);