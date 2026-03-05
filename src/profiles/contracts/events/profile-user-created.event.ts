import { IBaseEventContract } from '../../../contracts/events/base.event';
import { UserRole } from '../../../types/user-role.enum';

export interface ProfileUserCreatedData {
    user_id: string;
    role_slug: UserRole;
    organization_id: string | null;
    email: string;
    phone: string;
}

export class ProfileUserCreatedEventContract implements IBaseEventContract<ProfileUserCreatedData> {
    static readonly pattern = 'profile.user_created';
    readonly pattern = ProfileUserCreatedEventContract.pattern;
    readonly data: ProfileUserCreatedData;
}
