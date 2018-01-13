# 如何安装

## 第一步

执行 NPM 包安装，并启动 Postgres 数据库

> yarn install

必须使用 yarn ！！！必须使用 yarn ！！！必须使用 yarn ！！！

## 第二步

修改数据库配置文件（`orncinfig.yml`）：

参考如下：

```yaml
default:
    type: "postgres"
    host: "192.168.109.120"
    port: 5432
    username: "postgres"
    password: "123qwe"
    database: "new"
    entities:
        - '**/*.entity.js'
    migrations:
        - '**/*.migration.js'
    logging: true
    migrationsRun: true
    subscribers:
        - '**/*.entity.subscriber.js'
    synchronize: false
```

> npm run dev
