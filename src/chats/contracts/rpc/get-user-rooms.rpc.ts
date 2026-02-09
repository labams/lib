import { IBaseRpcContract } from '../../../contracts/rpc/base.rpc';
import type { IChatRoomSummary, RoomType } from '../../types/room.types';

type ReqType = {
    user_id: string;
    type?: RoomType;
    limit?: number;
    offset?: number;
};

type ResType = {
    rooms: IChatRoomSummary[];
    total: number;
};

export class GetUserRoomsRpcContract implements IBaseRpcContract<
    ReqType,
    ResType
> {
    static readonly cmd = 'chat.get_user_rooms';
    readonly cmd = GetUserRoomsRpcContract.cmd;
    readonly data: ReqType;
    readonly response: ResType;
}
