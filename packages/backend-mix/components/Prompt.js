import * as React from 'react';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';
class Prompt extends React.Component {
    render() {
        const left = document.body.clientWidth - 150;
        const { open, message } = this.props;
        return (React.createElement(Popover, { open: open, anchorEl: "anchorPosition", anchorPosition: { top: 150, left: left }, anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'right',
            } },
            React.createElement(Typography, null, message)));
    }
}
export default Prompt;
