import { UserRole } from '../../types/user-role.enum';

/**
 * Тип комнаты чата
 * ORDER — чат по заказу (врач ↔ техник)
 * SUPPORT — обращение в техподдержку
 */
export enum RoomType {
    ORDER = 'ORDER',
    SUPPORT = 'SUPPORT',
}

/**
 * Статус комнаты
 */
export enum RoomStatus {
    ACTIVE = 'active',
    ARCHIVED = 'archived',
    CLOSED = 'closed',
}

/**
 * Участник комнаты чата
 */
export interface IChatRoomParticipant {
    user_id: string;
    role: UserRole;
}

/**
 * Комната чата (domain model)
 */
export interface IChatRoom {
    id: string;
    type: RoomType;
    order_id: string | null;
    participants: IChatRoomParticipant[];
    is_active: boolean;
    last_message_at: string | null;
    created_at: string;
    updated_at: string;
}

/**
 * Краткая информация о комнате (для списков)
 */
export interface IChatRoomSummary {
    id: string;
    type: RoomType;
    order_id: string | null;
    is_active: boolean;
    last_message_at: string | null;
    unread_count: number;
    last_message?: ILastMessage | null;
}

/**
 * Последнее сообщение в комнате (для превью)
 */
export interface ILastMessage {
    id: string;
    sender_id: string;
    content: string;
    created_at: string;
}

/**
 * Запрос на создание комнаты
 */
export interface ICreateRoomPayload {
    type: RoomType;
    order_id?: string;
    participant_ids?: string[];
}

/**
 * Параметры запроса списка комнат
 */
export interface IGetRoomsQuery {
    type?: RoomType;
    limit?: number;
    offset?: number;
}
