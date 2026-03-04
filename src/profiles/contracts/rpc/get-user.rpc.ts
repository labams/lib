import { IBaseRpcContract } from '../../../contracts/rpc/base.rpc';
import { IUser } from '../../types/user.types';

export class GetUserRpc extends IBaseRpcContract<{ user_id: string }, IUser> {
    static readonly cmd = 'profile.get_user';
    readonly cmd = GetUserRpc.cmd;
    readonly data: { user_id: string };
    readonly response: IUser;
}
