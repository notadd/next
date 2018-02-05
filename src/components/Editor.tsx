import * as React from 'react';

type State = {
    id: string;
    randomId: string;
    instance: any,
    height: string;
    input: any,
    ready: any,
};

declare global {
    interface Window { UE: any; }
}

interface Props {
    config?: object;
    path: string;
    value: string;
    // content: any;
}

class Editor extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        localStorage.setItem('editor_path', props.path);
        this.state = {
            randomId: `editor_${(Math.random() * 100000000000000000)}`,
            id: `editor_${(Math.random() * 100000000000000000)}`,
            instance: null,
            height: '300',
            input: '',
            ready: '',
        };
    }
    componentWillMount() {
        if (window.UE !== undefined) {
            // 如果全局对象存在，说明编辑器代码已经初始化完成，直接加载编辑器
            this.initEditor();
        } else {
            // 如果全局对象不存在，说明编辑器代码还没有加载完成，需要加载编辑器代码
            this.insertScriptTag();
        }
    }
    componentWillUnmount() {
        // 组件卸载后，清除放入库的id
        if (this.state.instance !== null && this.state.instance.destroy) {
            this.state.instance.destroy();
        }
    }
    insertScriptTag() {
        const loading = [];
        const self = this;
        let configScriptTag = document.getElementById('configScriptTag');
        let editorScriptTag = document.getElementById('editorScriptTag');
        // 如果这个tag不存在，则生成相关代码tag以加载代码
        if (configScriptTag === null) {
            loading.push(new Promise((resolve, reject) => {
                let configScriptTag: HTMLElement = document.createElement('script');
                configScriptTag['type'] = 'text/javascript';
                configScriptTag['src'] = `${self.props.path}neditor.config.js?v=${new Date().getTime()}`;
                configScriptTag['id'] = 'configScriptTag';
                if (configScriptTag['readyState']) {
                    configScriptTag['onreadystatechange'] = () => {
                        if (configScriptTag && (configScriptTag['readyState'] === 'loaded' ||
                            configScriptTag['readyState'] === 'complete')) {
                            configScriptTag['onreadystatechange'] = null;
                            resolve(configScriptTag);
                        }
                    };
                } else {
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
                let editorScriptTag: HTMLElement = document.createElement('script');
                editorScriptTag['type'] = 'text/javascript';
                editorScriptTag['src'] = `${self.props.path}neditor.all.min.js?v=${new Date().getTime()}`;
                editorScriptTag['id'] = 'editorScriptTag';
                if (editorScriptTag['readyState']) {
                    editorScriptTag['onreadystatechange'] = () => {
                        if (editorScriptTag && (editorScriptTag['readyState'] === 'loaded' ||
                            editorScriptTag['readyState'] === 'complete')) {
                            editorScriptTag['onreadystatechange'] = null;
                            resolve(editorScriptTag);
                        }
                    };
                } else {
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
            // 等待代码加载完成后初始化编辑器
            setTimeout(() => {
                self.initEditor();
            }, 300);
        });
    }
    initEditor() {
        window.console.log('initEditor');
        const self = this;
        if (self.state.instance === null) {
            self.setState({
                instance: window.UE.getEditor(self.state.randomId, self.props.config),
            });
            window.console.log(self.state.instance);
            // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
            // self.state.instance.addEventListener('contentChange', () => {
            //     self.setState({
            //         'input': self.state.instance.getContent(),
            //     });
            //     // self.$emit('input', self.state.instance.getContent());
            // });
            // self.state.instance.addEventListener('ready', () => {
            //     self.state.instance.setContent(self.props.value);
            //     self.setState({
            //         'ready': self.state.instance,
            //     });
            //     // self.$emit('ready', self.state.instance);
            // });
        }
    }
    render() {
        return (
            <div id={this.state.randomId} />
        );
    }
}
export default Editor;
