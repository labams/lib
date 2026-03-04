import { IBaseEventContract } from '../../../contracts/events/base.event';
import { OrganizationType } from '../../types/organization.types';

export interface ProfileOrganizationCreatedData {
    organization_id: string;
    owner_id: string;
    type: OrganizationType;
    name: string;
}

export class ProfileOrganizationCreatedEventContract implements IBaseEventContract<ProfileOrganizationCreatedData> {
    static readonly pattern = 'profile.organization_created';
    readonly pattern = ProfileOrganizationCreatedEventContract.pattern;
    readonly data: ProfileOrganizationCreatedData;
}
