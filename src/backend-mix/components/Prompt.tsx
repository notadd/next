import * as React from "react";
import Popover from "material-ui/Popover";
import Typography from "material-ui/Typography";

interface Props extends  React.Component{
    open?: boolean,
    message?: string
}

class Prompt extends React.Component<Props, {}> {
    render() {
        const left = document.body.clientWidth - 150;
        const { open, message } = this.props;
        return (
            <Popover
                open={open}
                anchorEl="anchorPosition"
                anchorPosition={{ top: 150, left: left }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Typography>{ message }</Typography>
            </Popover>
        );
    }
}
export default Prompt;
