import { CustomTransportStrategy, Server } from "@nestjs/microservices";
import { Observable, Observer } from "rxjs";
import { makeGrpcError } from "../errors";
import { GrpcServerConfig } from "../interfaces";

export class GrpcMicroservice extends Server implements CustomTransportStrategy {
    private readonly server: any;

    private readonly host: string;

    private readonly port: number;

    private readonly serviceName: string;

    constructor(server: any, config: GrpcServerConfig) {
        super();
        this.server = server;
        this.host = config.host;
        this.port = config.port;
        this.serviceName = config.serviceName;
    }

    listen(callback?: () => void) {
        this.init();
        this.server.start(`${this.host}:${this.port}`);
        callback && callback()
    }

    close() {
        this.server && this.server.forceShutdown()
    }

    private init(): void {
        const delegates: any = this.getGRPCDelegates()
            .map(d => {
                return {
                    ...d,
                    rpc: this.wrapRpc(d.rpc),
                }
            })
            .reduce((acc: { [index: string]: Function }, val: any) => {
                acc[val.name] = val.rpc;

                return acc;
            }, {});

        this.server[`add${this.serviceName}`](delegates)
    }

    private wrapRpc(delegate: (...args: Array<any>) => Promise<any>) {
        return (...args: Array<any>) => {
            const response$ = this.transformToObservable(
                delegate(...args)
            ) as Observable<any>;

            const workedAround = Observable.create((observer: Observer<any>) => {
                return response$.subscribe({
                    next(value: any) {
                        if (value && value.error && value instanceof Observable) {
                            return observer.error(makeGrpcError((value as any).error));
                        }
                        observer.next(value);
                    },
                    error(error) {
                        observer.error(makeGrpcError(error));
                    },
                    complete: observer.complete.bind(observer),
                });
            });
            return workedAround;
        }
    }

    /**
     * Returns any methods decorated with @MessagePattern({ rpc: "rpcMethod" })
     * or @rpc.
     */
    private getGRPCDelegates() {
        const handles = this.getHandlers();
        const ret: Array<{ rpc: any; name: string }> = [];

        Object.keys(handles).forEach(serializedPattern => {
            if (serializedPattern !== "undefined") {
                let pattern: { rpc?: string };

                try {
                    pattern = JSON.parse(serializedPattern);
                } catch (error) {
                    return;
                }

                if (pattern.rpc) {
                    ret.push({ rpc: handles[serializedPattern], name: pattern.rpc });
                }
            }
        });

        return ret;
    }
}
