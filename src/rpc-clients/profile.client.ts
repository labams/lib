import { RpcBaseClient } from './base.client';
import { GetUserRpc } from '../profiles/contracts/rpc/get-user.rpc';
import { GetOrganizationRpc } from '../profiles/contracts/rpc/get-organization.rpc';
import { IsOrgMemberRpc } from '../profiles/contracts/rpc/is-org-member.rpc';

export class ProfileRpcClient extends RpcBaseClient {
    static readonly serviceName = 'PROFILE_RPC';
    readonly serviceName = ProfileRpcClient.serviceName;

    static readonly queue = 'profile_rpc_queue';
    readonly queue = ProfileRpcClient.queue;

    getUser(userId: string) {
        return this.send(GetUserRpc, { user_id: userId });
    }

    getOrganization(organizationId: string) {
        return this.send(GetOrganizationRpc, {
            organization_id: organizationId,
        });
    }

    isOrgMember(userId: string, organizationId: string) {
        return this.send(IsOrgMemberRpc, {
            user_id: userId,
            organization_id: organizationId,
        });
    }
}
