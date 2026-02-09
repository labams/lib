/**
 * Redis-ключи для Chat Service
 *
 * Паттерн: unread:{user_id}:{room_id} → Integer
 * Инкремент при new_message (если получатель ≠ sender)
 * Обнуление при read / read-all
 */

const CHAT_REDIS_PREFIX = 'chat';

export const ChatRedisKeys = {
    /** unread:{user_id}:{room_id} — счётчик непрочитанных */
    unread: (userId: string, roomId: string) =>
        `${CHAT_REDIS_PREFIX}:unread:${userId}:${roomId}`,

    /** chat:unread:{user_id}:* — паттерн для SCAN всех счётчиков пользователя */
    unreadPattern: (userId: string) =>
        `${CHAT_REDIS_PREFIX}:unread:${userId}:*`,

    /** chat:room:{room_id}:meta — кэш метаданных комнаты */
    roomMeta: (roomId: string) => `${CHAT_REDIS_PREFIX}:room:${roomId}:meta`,

    /** TTL для кэша метаданных комнаты (5 минут) */
    ROOM_META_TTL: 300,
} as const;
