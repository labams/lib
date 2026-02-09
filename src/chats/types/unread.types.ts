/**
 * Непрочитанные сообщения по комнатам
 */
export interface IUnreadByRoom {
    [room_id: string]: number;
}

/**
 * Ответ на запрос непрочитанных
 */
export interface IUnreadCountResponse {
    total: number;
    by_room: IUnreadByRoom;
}
