import * as React from 'react';
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomId: `editor_${(Math.random() * 100000000000000000)}`,
            instance: null,
        };
        window.console.log(this.props);
    }
    componentDidMount() {
        if (window.UE !== undefined) {
            this.initEditor();
        }
        else {
            this.insertScriptTag();
        }
    }
    componentWillUnmount() {
        if (this.state.instance !== null && this.state.instance.destroy) {
            this.state.instance.destroy();
        }
    }
    insertScriptTag() {
        const loading = [];
        const self = this;
        let configScriptTag = document.getElementById('configScriptTag');
        let editorScriptTag = document.getElementById('editorScriptTag');
        if (configScriptTag === null) {
            loading.push(new Promise((resolve, reject) => {
                configScriptTag = document.createElement('script');
                configScriptTag.type = 'text/javascript';
                configScriptTag.src = `${self.props.path}neditor.config.js?v=${new Date().getTime()}`;
                configScriptTag.id = 'configScriptTag';
                if (configScriptTag.readyState) {
                    configScriptTag.onreadystatechange = () => {
                        if (configScriptTag && (configScriptTag.readyState === 'loaded' ||
                            configScriptTag.readyState === 'complete')) {
                            configScriptTag.onreadystatechange = null;
                            resolve(configScriptTag);
                        }
                    };
                }
                else {
                    configScriptTag.onload = () => {
                        if (configScriptTag !== null) {
                            resolve(configScriptTag);
                        }
                    };
                }
                configScriptTag.onerror = () => {
                    reject(Error('Configuration load error!'));
                };
                document.body.appendChild(configScriptTag);
            }));
        }
        if (editorScriptTag === null) {
            loading.push(new Promise((resolve, reject) => {
                editorScriptTag = document.createElement('script');
                editorScriptTag.type = 'text/javascript';
                editorScriptTag.src = `${self.props.path}neditor.all.min.js?v=${new Date().getTime()}`;
                editorScriptTag.id = 'editorScriptTag';
                if (editorScriptTag.readyState) {
                    editorScriptTag.onreadystatechange = () => {
                        if (editorScriptTag && (editorScriptTag.readyState === 'loaded' ||
                            editorScriptTag.readyState === 'complete')) {
                            editorScriptTag.onreadystatechange = null;
                            resolve(editorScriptTag);
                        }
                    };
                }
                else {
                    editorScriptTag.onload = () => {
                        if (editorScriptTag !== null) {
                            resolve(editorScriptTag);
                        }
                    };
                }
                editorScriptTag.onerror = () => {
                    reject(Error('Editor load error!'));
                };
                document.body.appendChild(editorScriptTag);
            }));
        }
        Promise.all(loading).then(() => {
            window.setTimeout(() => {
                self.initEditor();
            }, 300);
        });
    }
    initEditor() {
        const self = this;
        if (self.state.instance === null) {
            self.setState({
                instance: window.UE.getEditor(self.state.randomId),
            }, () => {
                self.state.instance.addListener('contentChange', () => {
                    self.props.handleEditorChange(self.state.instance.getContent(), self.props.editor.id);
                });
                self.state.instance.addListener('ready', () => {
                    self.state.instance.setContent(self.props.editor.content);
                });
            });
        }
    }
    render() {
        return (React.createElement("div", { id: this.state.randomId }));
    }
}
export default Editor;
