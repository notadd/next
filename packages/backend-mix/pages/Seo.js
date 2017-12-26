import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Paper from 'material-ui/Paper';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
const styles = {
    root: {
        'padding': '40px 30px',
    },
    container: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'margin': '0',
    },
    formLabelFont: {
        'font-size': '16px',
        'color': '#808080',
    },
};
class Seo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
            describe: '',
            keywords: '',
        };
        this.handleChange = (name) => (event) => {
            let val = event.target.value;
            this.setState({
                [name]: val,
            });
        };
    }
    render() {
        return (React.createElement("div", { className: "configurations" },
            React.createElement("p", { className: "crumbs" },
                "\u5168\u5C40 ",
                React.createElement("b", null, "/"),
                " \u5168\u5C40\u8BBE\u7F6E"),
            React.createElement("h4", { className: "title" }, "SEO\u914D\u7F6E"),
            React.createElement(Paper, { className: this.props.classes.root },
                React.createElement("form", { className: this.props.classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(Grid, { container: true, spacing: 40 },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u6807\u9898"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('title'), value: this.state.title })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u63CF\u8FF0"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('describe'), value: this.state.describe })))),
                    React.createElement(Grid, { container: true, spacing: 40, style: { marginTop: '0px' } },
                        React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                            React.createElement(FormControl, { fullWidth: true, required: true },
                                React.createElement(InputLabel, { htmlFor: "name-simple", className: this.props.classes.formLabelFont }, "\u5173\u952E\u5B57"),
                                React.createElement(Input, { id: "name-simple", className: this.props.classes.formLabelFont, onChange: this.handleChange('keywords'), value: this.state.keywords })))),
                    React.createElement(Button, { raised: true, color: "primary", style: { marginTop: 34, fontSize: 12, borderRadius: 4 } }, "\u786E\u8BA4\u63D0\u4EA4")))));
    }
}
export default withStyles(styles)(Seo);
