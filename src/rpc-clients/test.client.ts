import { RpcBaseClient } from './base.client';

export class TestRpcClient extends RpcBaseClient {
    static readonly serviceName = 'TEST_RPC';
    readonly serviceName = TestRpcClient.serviceName;

    static readonly queue = 'test_queue';
    readonly queue = TestRpcClient.queue;
}
