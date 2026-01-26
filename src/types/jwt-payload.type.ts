import { UserRole } from './user-role.enum';

export interface JwtPayload {
    id: string;
    role: UserRole;
    sessionId?: string;
}
