/**
 * Сообщение в чате (domain model)
 */
export interface IMessage {
    id: string;
    room_id: string;
    sender_id: string;
    content: string;
    read_by: string[];
    created_at: string;
}

/**
 * Запрос на отправку сообщения
 */
export interface ISendMessagePayload {
    content: string;
}

/**
 * Параметры запроса истории сообщений
 */
export interface IGetMessagesQuery {
    limit?: number;
    before?: string;
    after?: string;
}

/**
 * Ответ со списком сообщений
 */
export interface IMessageListResponse {
    messages: IMessage[];
    has_more: boolean;
}

/** Максимальная длина сообщения */
export const MESSAGE_MAX_LENGTH = 4096;

/** Лимит сообщений по умолчанию */
export const MESSAGES_DEFAULT_LIMIT = 50;
