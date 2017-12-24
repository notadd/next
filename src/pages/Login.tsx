import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const styles = {
    card: {
        minWidth: 275,
    },
};
type State = {
    userName: string,
    password: string
};

class Login extends React.Component<WithStyles<keyof typeof styles>, State> {
    state = {
        userName: '',
        password: ''
    };
    handleChange = (name: any) => (event: any) => {
        let val = event.target.value;
        this.setState({
            [name]: val,
        });
    };
    render() {
        return (
            <div className="login">
                <div className="wrapBox">
                    <Card className="innerBox">
                        <CardContent style={{padding: 0}}>
                            <h3 className="boxTitle">登录</h3>
                            <Tooltip placement="bottom" title="Position absolute">
                                <Button fab color="accent" className="absolute">
                                    <KeyboardArrowRight />
                                </Button>
                            </Tooltip>
                            <FormControl fullWidth style={{marginTop: 65}}>
                                <InputLabel
                                    htmlFor="name-simple"
                                >
                                    用户名
                                </InputLabel>
                                <Input
                                    id="name-simple"
                                    onChange={this.handleChange('userName')}
                                    value={this.state.userName}
                                />
                            </FormControl>
                            <FormControl fullWidth style={{marginTop: 35}}>
                                <InputLabel
                                    htmlFor="name-simple"
                                >
                                    密码
                                </InputLabel>
                                <Input
                                    id="name-simple"
                                    onChange={this.handleChange('password')}
                                    value={this.state.password}
                                />
                            </FormControl>
                        </CardContent>
                        <CardActions style={{marginTop: 30, padding: 0}}>
                            <Button raised color="primary"
                                    style={{
                                        width: '100%',
                                        height: 48,
                                        fontSize: 14,
                                        borderRadius: 4,
                                        margin: 0
                                    }}
                            >
                                登录
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(Login);