import { IBaseEventContract } from '../../../contracts/events/base.event.';

export interface ChatMessageReadData {
    room_id: string;
    message_id: string | null;
    reader_id: string;
}

export class ChatMessageReadEventContract implements IBaseEventContract<ChatMessageReadData> {
    static readonly pattern = 'chat.message_read';
    readonly pattern = ChatMessageReadEventContract.pattern;
    readonly data: ChatMessageReadData;
}
