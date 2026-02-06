// WebSocket Events Contract - События от сервера и клиенту
export interface ServerToClientEvents {
  connected: (data: ConnectedPayload) => void;
  subscribed: (data: SubscribedPayload) => void;
  unsubscribed: (data: UnsubscribedPayload) => void;
  new_message: (data: NewMessagePayload) => void;
  message_read: (data: MessageReadPayload) => void;
  user_online: (data: UserOnlinePayload) => void;
  user_offline: (data: UserOfflinePayload) => void;
  online_status: (data: OnlineStatusPayload) => void;
  room_update: (data: RoomUpdatePayload) => void;
  user_joined: (data: UserJoinedPayload) => void;
  user_left: (data: UserLeftPayload) => void;
  pong: () => void;
  error: (data: ErrorPayload) => void;
}

// Payloads для событий от сервера
export interface ConnectedPayload {
  user_id: string;
  socket_id: string;
}

export interface SubscribedPayload {
  room_id: string;
}

export interface UnsubscribedPayload {
  room_id: string;
}

export interface NewMessagePayload {
  room_id: string;
  message_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

export interface MessageReadPayload {
  room_id: string;
  message_id: string; // 'all' или конкретный message_id
  reader_id: string;
}

export interface UserOnlinePayload {
  user_id: string;
  online: true;
  last_seen: number;
}

export interface UserOfflinePayload {
  user_id: string;
  online: false;
  last_seen: number;
}

export interface OnlineStatusPayload {
  room_id: string;
  participants: ParticipantStatus[];
}

export interface ParticipantStatus {
  user_id: string;
  online: boolean;
  last_seen: number;
  role?: string;
}

export interface RoomUpdatePayload {
  room_id: string;
  action: 'created' | 'updated';
  type: 'order' | 'support';
}

export interface UserJoinedPayload {
  room_id: string;
  user_id: string;
}

export interface UserLeftPayload {
  room_id: string;
  user_id: string;
}

export interface ErrorPayload {
  code: string;
  message: string;
  details?: unknown;
}
