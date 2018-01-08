import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { CircularProgress } from 'material-ui/Progress';
// import Prompt from '../components/Prompt';
import { History } from 'history';
// import Snackbar from 'material-ui/Snackbar';
// import Slide from 'material-ui/transitions/Slide';
import axios from 'axios';

const styles = {
    card: {
        minWidth: 275,
    },
    disabled: {
        background: 'none !important',
        border: '1px solid #e0e0e0',
    },
    formLabelFont: {
        fontSize: '16px',
    },
};

type State = {
    userName: string,
    password: string
    loading: boolean,
    transition: any,
    open: boolean,
};

interface Props extends WithStyles<keyof typeof styles> {
    history: History;
}

class Login extends React.Component<Props, State> {
    state = {
        userName: '',
        password: '',
        loading: false,
        transition: undefined,
        open: false,
    };
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState(
            {
                loading: true,
            },
        );
        axios.post('localhost:3000/auth/token', {
            username: this.state.userName,
            password: this.state.password,
        }).then(response => {
            if (response.status === 200) {
                const user = {
                    username: this.state.userName,
                    password: this.state.password
                };
                localStorage.setItem('notadd_user', JSON.stringify(user));
                localStorage.setItem('notadd_token', response.data.data.access_token);
                this.props.history.push('/index');
            }
        });
        const user = {
            username: this.state.userName,
            password: this.state.password
        };
        localStorage.setItem('notadd_user', JSON.stringify(user));
        // localStorage.setItem('notadd_token', response.data.data.access_token);
        this.props.history.push('/index');
    };
    render() {
        return (
            <div className="login">
                <div className="wrapBox">
                    <Card className="innerBox">
                        <CardContent style={{padding: 0}}>
                            <h3 className="boxTitle">登录</h3>
                            <Tooltip placement="bottom" title="Login" onClick={this.handleSubmit}>
                                <Button fab color="accent" className="absolute">
                                    <KeyboardArrowRight />
                                </Button>
                            </Tooltip>
                            <FormControl fullWidth style={{marginTop: 65}}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    className={this.props.classes.formLabelFont}
                                >
                                    用户名
                                </InputLabel>
                                <Input
                                    id="name-simple"
                                    className={this.props.classes.formLabelFont}
                                    onChange={this.handleChange('userName')}
                                    value={this.state.userName}
                                />
                            </FormControl>
                            <FormControl fullWidth style={{marginTop: 35}}>
                                <InputLabel
                                    className={this.props.classes.formLabelFont}
                                    htmlFor="name-simple"
                                >
                                    密码
                                </InputLabel>
                                <Input
                                    onKeyUp={
                                        (event) => {
                                            if (event.keyCode === 13) {
                                                this.handleSubmit(event);
                                            }
                                        }
                                    }
                                    className={this.props.classes.formLabelFont}
                                    id="name-simple"
                                    type="password"
                                    onChange={this.handleChange('password')}
                                    value={this.state.password}
                                />
                            </FormControl>
                        </CardContent>
                        <CardActions style={{marginTop: 30, padding: 0}}>
                            <Button
                                raised
                                disabled={
                                    this.state.userName === '' || this.state.password === '' || this.state.loading
                                }
                                color="primary"
                                style={{
                                    width: '100%',
                                    height: 48,
                                    fontSize: 14,
                                    borderRadius: 4,
                                    margin: 0
                                }}
                                className={
                                    this.state.userName === ''
                                    || this.state.password === '' ?
                                        this.props.classes.disabled : ''
                                }
                                onClick={this.handleSubmit}
                            >
                                {this.state.loading ?  <div><CircularProgress size={24}/></div> : <span> 登录</span>}
                            </Button>
                        </CardActions>
                        {/*<Snackbar*/}
                            {/*open={this.state.open}*/}
                            {/*onClose={this.handleClose}*/}
                            {/*transition={this.state.transition}*/}
                            {/*SnackbarContentProps={{*/}
                                {/*'aria-describedby': 'message-id',*/}
                            {/*}}*/}
                            {/*message={<span id="message-id">I love snacks</span>}*/}
                        {/*/>*/}
                    </Card>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(Login);