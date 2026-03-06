// Types & enums
export * from './types/organization.types';
export * from './types/user.types';
export * from './types/patient.types';

// DTOs
export * from './dto/index';

// Event contracts — auth → profiles
export * from './contracts/events/user-registered.event';

// Event contracts — profiles → *
export * from './contracts/events/profile-user-created.event';
export * from './contracts/events/profile-organization-created.event';
export * from './contracts/events/profile-organization-validated.event';
export * from './contracts/events/profile-user-org-changed.event';
export * from './contracts/events/profile-patient-created.event';
export * from './contracts/events/profile-event.types';

// RPC contracts
export * from './contracts/rpc/get-user.rpc';
export * from './contracts/rpc/get-organization.rpc';
export * from './contracts/rpc/is-org-member.rpc';
