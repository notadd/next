"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const errors_1 = require("../errors");
class GrpcMicroservice extends microservices_1.Server {
    constructor(server, config) {
        super();
        this.server = server;
        this.host = config.host;
        this.port = config.port;
        this.serviceName = config.serviceName;
    }
    listen(callback) {
        this.init();
        this.server.start(`${this.host}:${this.port}`);
        callback && callback();
    }
    close() {
        this.server && this.server.forceShutdown();
    }
    init() {
        const delegates = this.getGRPCDelegates()
            .map(d => {
            return Object.assign({}, d, { rpc: this.wrapRpc(d.rpc) });
        })
            .reduce((acc, val) => {
            acc[val.name] = val.rpc;
            return acc;
        }, {});
        this.server[`add${this.serviceName}`](delegates);
    }
    wrapRpc(delegate) {
        return (...args) => {
            const response$ = this.transformToObservable(delegate(...args));
            return rxjs_1.Observable.create((observer) => {
                return response$.subscribe({
                    next(value) {
                        if (value && value.error && value instanceof rxjs_1.Observable) {
                            return observer.error(errors_1.makeGrpcError(value.error));
                        }
                        observer.next(value);
                    },
                    error(error) {
                        observer.error(errors_1.makeGrpcError(error));
                    },
                    complete: observer.complete.bind(observer),
                });
            });
        };
    }
    getGRPCDelegates() {
        const handles = this.getHandlers();
        const ret = [];
        Object.keys(handles).forEach(serializedPattern => {
            if (serializedPattern !== "undefined") {
                let pattern;
                try {
                    pattern = JSON.parse(serializedPattern);
                }
                catch (error) {
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
exports.GrpcMicroservice = GrpcMicroservice;

//# sourceMappingURL=grpc.microservice.js.map
