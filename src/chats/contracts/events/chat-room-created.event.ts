import { IBaseEventContract } from '../../../contracts/events/base.event.';
import type { RoomType } from '../../types/room.types';
import type { IChatRoomParticipant } from '../../types/room.types';

export interface ChatRoomCreatedData {
    room_id: string;
    type: RoomType;
    order_id: string | null;
    participants: IChatRoomParticipant[];
}

export class ChatRoomCreatedEventContract implements IBaseEventContract<ChatRoomCreatedData> {
    static readonly pattern = 'chat.room_created';
    readonly pattern = ChatRoomCreatedEventContract.pattern;
    readonly data: ChatRoomCreatedData;
}
