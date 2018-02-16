import { status as GrpcStatus } from 'grpc';

export function makeGrpcError(error: any): { code: number; message: string } {
    return {
        code: GrpcStatus.INTERNAL,
        message: 'Internal Server Error',
        ...error
    }
}
