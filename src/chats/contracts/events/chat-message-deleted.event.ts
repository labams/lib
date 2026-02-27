import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface ChatMessageDeletedData {
    room_id: string;
    message_id: string;
    deleted_by: string;
    deleted_for_all: boolean;
}

export class ChatMessageDeletedEventContract implements IBaseEventContract<ChatMessageDeletedData> {
    static readonly pattern = 'chat.message_deleted';
    readonly pattern = ChatMessageDeletedEventContract.pattern;
    readonly data: ChatMessageDeletedData;
}
