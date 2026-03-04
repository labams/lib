import { IBaseRpcContract } from '../../../contracts/rpc/base.rpc';

export class IsOrgMemberRpc extends IBaseRpcContract<
    { user_id: string; organization_id: string },
    { is_member: boolean }
> {
    static readonly cmd = 'profile.is_org_member';
    readonly cmd = IsOrgMemberRpc.cmd;
    readonly data: { user_id: string; organization_id: string };
    readonly response: { is_member: boolean };
}
