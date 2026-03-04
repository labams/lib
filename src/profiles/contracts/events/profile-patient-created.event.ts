import { IBaseEventContract } from '../../../contracts/events/base.event';

export interface ProfilePatientCreatedData {
    patient_id: string;
    organization_id: string;
    created_by_id: string;
}

export class ProfilePatientCreatedEventContract implements IBaseEventContract<ProfilePatientCreatedData> {
    static readonly pattern = 'profile.patient_created';
    readonly pattern = ProfilePatientCreatedEventContract.pattern;
    readonly data: ProfilePatientCreatedData;
}
