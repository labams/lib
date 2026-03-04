import { IBaseEventContract } from '../../../contracts/events/base.event';
import { UserRole } from '../../../types/user-role.enum';

export interface UserRegisteredData {
    account_id: string;
    first_name: string;
    last_name: string;
    middle_name?: string;
    role: UserRole;
    email: string;
}

export class UserRegisteredEventContract implements IBaseEventContract<UserRegisteredData> {
    static readonly pattern = 'user.registered';
    readonly pattern = UserRegisteredEventContract.pattern;
    readonly data: UserRegisteredData;
}
