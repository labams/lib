import type { ChatNewMessageData } from './chat-new-message.event';
import type { ChatMessageReadData } from './chat-message-read.event';
import type { ChatMessageEditedData } from './chat-message-edited.event';
import type { ChatMessageDeletedData } from './chat-message-deleted.event';
import type { ChatRoomCreatedData } from './chat-room-created.event';
import type { ChatRoomUpdatedData } from './chat-room-updated.event';

/**
 * Routing keys для событий чата
 */
export enum ChatEventRoutingKey {
    NEW_MESSAGE = 'chat.new_message',
    MESSAGE_READ = 'chat.message_read',
    MESSAGE_EDITED = 'chat.message_edited',
    MESSAGE_DELETED = 'chat.message_deleted',
    ROOM_CREATED = 'chat.room_created',
    ROOM_UPDATED = 'chat.room_updated',
}

/**
 * Union type для всех событий чата
 */
export type ChatEventData =
    | ChatNewMessageData
    | ChatMessageReadData
    | ChatMessageEditedData
    | ChatMessageDeletedData
    | ChatRoomCreatedData
    | ChatRoomUpdatedData;
