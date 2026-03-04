import { IBaseRpcContract } from '../../../contracts/rpc/base.rpc';
import { IOrganization } from '../../types/organization.types';

export class GetOrganizationRpc extends IBaseRpcContract<
    { organization_id: string },
    IOrganization
> {
    static readonly cmd = 'profile.get_organization';
    readonly cmd = GetOrganizationRpc.cmd;
    readonly data: { organization_id: string };
    readonly response: IOrganization;
}
