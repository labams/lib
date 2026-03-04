import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface ProfileUserOrgChangedData {
    user_id: string;
    old_organization_id: string | null;
    new_organization_id: string;
}

export class ProfileUserOrgChangedEventContract implements IBaseEventContract<ProfileUserOrgChangedData> {
    static readonly pattern = 'profile.user_org_changed';
    readonly pattern = ProfileUserOrgChangedEventContract.pattern;
    readonly data: ProfileUserOrgChangedData;
}
