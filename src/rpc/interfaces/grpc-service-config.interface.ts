export interface GrpcServerConfig {
    host: string
    port: number
    /**
     * The name of your RPC system defined in your .proto file.
     */
    serviceName: string
}