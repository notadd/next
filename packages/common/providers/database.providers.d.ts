import { Connection } from 'typeorm';
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<Connection>;
}[];
