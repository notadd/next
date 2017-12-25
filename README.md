# 如何安装

## 第一步

执行 NPM 包安装，并启动 Postgres 数据库

> npm install

## 第二步

修改数据库配置文件：

```
src/common/providers/database.providers.ts
```

参考如下：

```typescript
import { createConnection, Connection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => createConnection({
            type: 'postgres',
            host: '192.168.109.120',                                      // 数据库连接
            port: 5432,                                                   // 数据库端口
            username: 'postgres',                                         // 数据库用户名
            password: '123qwe',                                           // 数据库密码
            database: 'new',                                              // 数据库名称
            entities: [
                process.cwd() + '/**/*.entity.js',
            ],
            migrations: [
                process.cwd() + '/**/*.migration.js',
            ],
            logging: true,
            migrationsRun: true,
            synchronize: true,
        }),
    },
];

```

> npm run dev
