import { RpcBaseClient } from './base.client';

export class ChatRpcClient extends RpcBaseClient {
    static readonly serviceName = 'CHAT_RPC';
    readonly serviceName = ChatRpcClient.serviceName;

    static readonly queue = 'chat_rpc_queue';
    readonly queue = ChatRpcClient.queue;
}
