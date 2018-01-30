import * as React from 'react';
import {WithStyles} from 'material-ui/styles/withStyles';

const styles = {};

type State = {
    id: string;
};

class Editor extends React.Component<WithStyles<keyof typeof styles>, State> {
    constructor(props: any){
        super(props);
        window.console.log(props);
        this.state = {
            id: `editor_${(Math.random() * 100000000000000000)}`,
        };
    }
    compontDidMount() {
        this.initEditor();
    }
    componentWillUnmount() {
        // 组件卸载后，清除放入库的id
        window.UE.delEditor(this.state.id);
    }
    initEditor() {
        const id = this.state.id;
        const ueEditor = UE.getEditor(this.state.id, {/*这里是配置*/ });
        const self = this;
        ueEditor.ready((ueditor: any) => {
            if (!ueditor) {
                UE.delEditor(id);
                self.initEditor();
            }
        })
    }
    render(){
        return (
            <div id={this.state.id}></div>
        )
    }
}
export default Editor;