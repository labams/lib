// Chat Events Contract - события чата для RabbitMQ

// Routing keys для событий чата
export enum ChatEventRoutingKey {
  NEW_MESSAGE = 'chat.new_message',
  MESSAGE_READ = 'chat.message_read',
  ROOM_CREATED = 'chat.room_created',
  ROOM_UPDATED = 'chat.room_updated',
}

// События от Chat Service
export interface ChatNewMessageEvent {
  room_id: string;
  message_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

export interface ChatMessageReadEvent {
  room_id: string;
  message_id: string; // 'all' или конкретный message_id
  reader_id: string;
}

export interface ChatRoomCreatedEvent {
  room_id: string;
  type: 'order' | 'support';
  participants: string[];
}

export interface ChatRoomUpdatedEvent {
  room_id: string;
  action: 'updated';
  participants?: string[];
}

// Union type для всех событий чата
export type ChatEvent =
  | ChatNewMessageEvent
  | ChatMessageReadEvent
  | ChatRoomCreatedEvent
  | ChatRoomUpdatedEvent;
