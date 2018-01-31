import * as React from 'react';
import { WithStyles } from 'material-ui/styles/withStyles';

const styles = {};

type State = {
    id: string;
    height: string;
};

declare global {
    interface Window { UE: any; }
}

class Editor extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: `editor_${(Math.random() * 100000000000000000)}`,
            height: '300',
        };
    }
    componentDidMount() {
        this.initEditor();
    }
    componentWillUnmount() {
        // 组件卸载后，清除放入库的id
        window.UE.delEditor(this.state.id);
    }
    initEditor() {
        const id = this.state.id;
        // const baseURL = '../../../static/neditor';
        const ueEditor = window.UE.getEditor(this.state.id, {
            lang: 'zh-cn',
            initialFrameHeight: this.state.height,
            initialFrameWidth: '100%',
        });
        const self = this;
        ueEditor.ready((ueditor: any) => {
            if (!ueditor) {
                window.UE.delEditor(id);
                self.initEditor();
            }
        });
    }
    render() {
        return (
            <div id={this.state.id} />
        );
    }
}
export default Editor;