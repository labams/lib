export enum OrganizationType {
    CLINIC = 'CLINIC',
    DENTAL_LAB = 'DENTAL_LAB',
}

export enum OrganizationValidationStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export enum SubscriptionPlan {
    FREE = 'FREE',
    BASIC = 'BASIC',
    PROFESSIONAL = 'PROFESSIONAL',
    ENTERPRISE = 'ENTERPRISE',
}

export interface ILabProfile {
    id: string;
    organizationId: string;
    priceList: Record<string, unknown> | null;
    specializations: string[];
    directions: string[];
}

export interface IOrganization {
    id: string;
    name: string;
    description: string | null;
    type: OrganizationType;
    ownerId: string;
    address: string | null;
    photoId: string | null;
    rating: string | null;
    subscription: SubscriptionPlan;
    subscriptionExpiresAt: Date | null;
    validationStatus: OrganizationValidationStatus;
    validatedBy: string | null;
    validatedAt: Date | null;
    crmSettings: Record<string, unknown> | null;
    isDemo: boolean;
    createdAt: Date;
    updatedAt: Date;
    labProfile?: ILabProfile | null;
}
