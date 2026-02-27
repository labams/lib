import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface ChatMessageEditedData {
    room_id: string;
    message_id: string;
    sender_id: string;
    content: string;
    edited_at: string;
}

export class ChatMessageEditedEventContract implements IBaseEventContract<ChatMessageEditedData> {
    static readonly pattern = 'chat.message_edited';
    readonly pattern = ChatMessageEditedEventContract.pattern;
    readonly data: ChatMessageEditedData;
}
