import type { ProfileUserCreatedData } from './profile-user-created.event';
import type { ProfileOrganizationCreatedData } from './profile-organization-created.event';
import type { ProfileOrganizationValidatedData } from './profile-organization-validated.event';
import type { ProfileUserOrgChangedData } from './profile-user-org-changed.event';
import type { ProfilePatientCreatedData } from './profile-patient-created.event';

/**
 * Routing keys для событий профилей
 */
export enum ProfileEventRoutingKey {
    USER_CREATED = 'profile.user_created',
    ORGANIZATION_CREATED = 'profile.organization_created',
    ORGANIZATION_VALIDATED = 'profile.organization_validated',
    USER_ORG_CHANGED = 'profile.user_org_changed',
    PATIENT_CREATED = 'profile.patient_created',
}

/**
 * Union type для всех событий профилей
 */
export type ProfileEventData =
    | ProfileUserCreatedData
    | ProfileOrganizationCreatedData
    | ProfileOrganizationValidatedData
    | ProfileUserOrgChangedData
    | ProfilePatientCreatedData;
