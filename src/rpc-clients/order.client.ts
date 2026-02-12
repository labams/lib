import { RpcBaseClient } from './base.client';

export class OrderRpcClient extends RpcBaseClient {
    static readonly serviceName = 'ORDER_RPC';
    readonly serviceName = OrderRpcClient.serviceName;

    static readonly queue = 'order_rpc_queue';
    readonly queue = OrderRpcClient.queue;
}
