import { IBaseEventContract } from '../../../contracts/events/base.event';
import type { IChatRoomParticipant, RoomStatus } from '../../types/room.types';

export interface ChatRoomUpdatedData {
    room_id: string;
    action: 'updated' | 'participant_added' | 'participant_removed';
    status?: RoomStatus;
    participants?: IChatRoomParticipant[];
}

export class ChatRoomUpdatedEventContract implements IBaseEventContract<ChatRoomUpdatedData> {
    static readonly pattern = 'chat.room_updated';
    readonly pattern = ChatRoomUpdatedEventContract.pattern;
    readonly data: ChatRoomUpdatedData;
}
