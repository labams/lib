export interface IPatientAccess {
    id: string;
    patientId: string;
    userId: string;
    grantedById: string;
    createdAt: Date;
}

export interface IPatientCrmLink {
    id: string;
    patientId: string;
    crmId: string;
    crmName: string;
    crmUserId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPatient {
    id: string;
    organizationId: string;
    createdById: string;
    firstName: string;
    lastName: string;
    middleName: string | null;
    birthDate: Date | null;
    contacts: Record<string, unknown> | null;
    allergies: unknown[] | null;
    medicalHistory: Record<string, unknown> | null;
    medicalRecords: Record<string, unknown> | null;
    documents: unknown[] | null;
    createdAt: Date;
    updatedAt: Date;
    accessGrants?: IPatientAccess[];
    crmLinks?: IPatientCrmLink[];
}
