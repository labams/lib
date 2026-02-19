import { RpcBaseClient } from './base.client';

export class NotificationRpcClient extends RpcBaseClient {
    static readonly serviceName = 'NOTIFICATION_RPC';
    readonly serviceName = NotificationRpcClient.serviceName;

    static readonly queue = 'notification_rpc_queue';
    readonly queue = NotificationRpcClient.queue;
}
