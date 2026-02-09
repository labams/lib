import { IBaseEventContract } from '../../../contracts/events/base.event.';

export interface ChatNewMessageData {
    room_id: string;
    message_id: string;
    sender_id: string;
    content: string;
    created_at: string;
}

export class ChatNewMessageEventContract implements IBaseEventContract<ChatNewMessageData> {
    static readonly pattern = 'chat.new_message';
    readonly pattern = ChatNewMessageEventContract.pattern;
    readonly data: ChatNewMessageData;
}
