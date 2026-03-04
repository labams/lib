import { UserRole } from '../../types/user-role.enum';

export { UserRole };

export interface IUser {
    /** Совпадает с account_id из auth-сервиса */
    id: string;
    firstName: string;
    lastName: string;
    middleName: string | null;
    organizationId: string | null;
    role: UserRole;
    photoId: string | null;
    isConfirmed: boolean;
    confirmedBy: string | null;
    confirmedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
