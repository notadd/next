import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Input, { InputLabel } from 'material-ui/Input';

const styles = {
    root: {
        padding: '40px 30px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0',
    },
    labelClass: {
        color: '#b8b8b8',
    },
    menu: {
        width: '200px',
    },
    formLabel: {
        flexDirection: 'row-reverse',
        margin: '0',
    },
};

class Configurations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    state = {
        webName: 'NotAdd',
        siteOpen: true,
        domainName: '',
        multiDomainName: '',
        keepRecord: '',
        companyName: '',
        copyright: '',
        statisticalCode: '',
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div className='configurations'>
                <p className='crumbs'>
                    全局 <b>/</b> 全局设置
                </p>
                <h4 className='title'>参数设置</h4>
                <Paper className={ this.props.classes.root }>
                    <form className={ this.props.classes.container } noValidate autoComplete='off'>
                        <FormControl fullWidth required>
                            <InputLabel htmlFor='name-simple'>网站名称</InputLabel>
                            <Input id='name-simple' value={ this.state.webName } onChange={ this.handleChange('webName') }/>
                        </FormControl>
                        <FormControlLabel
                            label='站点开启'
                            classes={ {
                                root: this.props.classes.formLabel,
                            } }
                            control={
                                <Switch
                                    checked={ this.state.siteOpen }
                                    onChange={ (event, checked) => this.setState({ siteOpen: checked }) }
                                />
                            }
                        />
                        <FormControl fullWidth required>
                            <InputLabel htmlFor='name-simple'>站点名称</InputLabel>
                            <Input id='name-simple' value={ this.state.domainName }
                                onChange={ this.handleChange('domainName') }/>
                        </FormControl>
                        <FormControl fullWidth required>
                            <InputLabel htmlFor='name-simple'>多站点名称</InputLabel>
                            <Input id='name-simple' value={ this.state.multiDomainName }
                                onChange={ this.handleChange('multiDomainName') }/>
                        </FormControl>
                    </form>
                </Paper>
            </div>
        );
    }
}

Configurations.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Configurations);
