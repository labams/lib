import { IBaseEventContract } from '../../../contracts/events/base.event';
import { OrganizationValidationStatus } from '../../types/organization.types';

export interface ProfileOrganizationValidatedData {
    organization_id: string;
    status: OrganizationValidationStatus;
    validated_by: string;
}

export class ProfileOrganizationValidatedEventContract implements IBaseEventContract<ProfileOrganizationValidatedData> {
    static readonly pattern = 'profile.organization_validated';
    readonly pattern = ProfileOrganizationValidatedEventContract.pattern;
    readonly data: ProfileOrganizationValidatedData;
}
