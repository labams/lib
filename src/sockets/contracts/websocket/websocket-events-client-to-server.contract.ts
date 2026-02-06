// WebSocket Events Contract - События от клиента к серверу
export interface ClientToServerEvents {
    subscribe: (data: SubscribePayload) => void;
    unsubscribe: (data: UnsubscribePayload) => void;
    get_online: (data: GetOnlinePayload) => void;
    ping: () => void;
}

// Payloads для событий от клиента
export interface SubscribePayload {
    room_id: string;
}

export interface UnsubscribePayload {
    room_id: string;
}

export interface GetOnlinePayload {
    room_id: string;
}