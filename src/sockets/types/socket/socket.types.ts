// Socket Types - типы для WebSocket соединений
import { JwtPayload } from '../../../types/jwt-payload.type';

// Данные для handshake
export interface HandshakeData {
  token?: string;
  query: {
    token?: string;
  };
}

// Контекст соединения
export interface SocketContext {
  user_id: string;
  role: string;
  session_id?: string;
}

// Расширенный контекст с JWT payload
export interface AuthenticatedSocketContext extends SocketContext {
  user: JwtPayload;
}
