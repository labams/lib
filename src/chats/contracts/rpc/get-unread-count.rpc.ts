import { IBaseRpcContract } from '../../../contracts/rpc/base.rpc';
import type { IUnreadCountResponse } from '../../types/unread.types';

type ReqType = {
    user_id: string;
};

type ResType = IUnreadCountResponse;

export class GetUnreadCountRpcContract implements IBaseRpcContract<
    ReqType,
    ResType
> {
    static readonly cmd = 'chat.get_unread_count';
    readonly cmd = GetUnreadCountRpcContract.cmd;
    readonly data: ReqType;
    readonly response: ResType;
}
