// Room Types - типы для работы с комнатами чатов
import { UserRole } from '../../../types/user-role.enum';
import type { RoomType } from '../../../chats/types/room.types';
import { UserStatus } from '../user-status.enum';

// Участник комнаты
export interface RoomParticipant {
    user_id: string;
    role: UserRole;
    joined_at: number;
}

// Участник с онлайн-статусом
export interface RoomParticipantWithStatus extends RoomParticipant {
    status: UserStatus;
    last_seen: number;
    socket_ids: string[];
}

// Информация о комнате
export interface RoomInfo {
    room_id: string;
    type: RoomType;
    participants: RoomParticipant[];
    created_at: number;
}

// Статистика комнаты
export interface RoomStats {
    room_id: string;
    total_participants: number;
    online_participants: number;
    total_connections: number;
}
