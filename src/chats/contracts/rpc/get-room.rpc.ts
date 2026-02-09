import { IBaseRpcContract } from '../../../contracts/rpc/base.rpc';
import type { IChatRoom } from '../../types/room.types';

type ReqType = {
    room_id: string;
};

type ResType = IChatRoom | null;

export class GetRoomRpcContract implements IBaseRpcContract<ReqType, ResType> {
    static readonly cmd = 'chat.get_room';
    readonly cmd = GetRoomRpcContract.cmd;
    readonly data: ReqType;
    readonly response: ResType;
}
