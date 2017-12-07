export const messages = {
    resources: {
        posts: {
            name: 'Post |||| Posts',
            fields: {
                allow_comments: '允许评论?',
                average_note: '平均注',
                body: '内容',
                comments: '评论',
                commentable: '可评论',
                commentable_short: 'Com.',
                created_at: '创建于',
                notifications: 'Notifications recipients',
                nb_view: 'Nb views',
                password: '密码 (保护内容)',
                pictures: '相关照片',
                published_at: '发布于',
                teaser: 'Teaser',
                tags: '标签',
                title: '标题',
                views: '查看',
            },
        },
        comments: {
            name: '评论 |||| 评论',
            fields: {
                body: '内容',
                created_at: '创建于',
                post_id: '提交',
                author: {
                    name: '作者',
                },
            },
        },
        users: {
            name: '用户 |||| 用户',
            fields: {
                name: '名称',
                role: '角色',
            },
        },
    },
    post: {
        list: {
            search: '搜索',
        },
        form: {
            summary: '摘要',
            body: '内容',
            miscellaneous: '杂项',
            comments: '评论',
        },
        edit: {
            title: '编辑： "%{title}"',
        },
        action: {
            save_and_add: '保存并添加',
            save_and_show: '保存并浏览',
        },
    },
    comment: {
        list: {
            about: '关于',
        },
    },
    user: {
        list: {
            search: '搜索',
        },
        form: {
            summary: '摘要',
            security: '安全',
        },
        edit: {
            title: '编辑用户: "%{title}"',
        },
        action: {
            save_and_add: '保存并添加',
            save_and_show: '保存并浏览',
        },
    },
};

export default messages;
