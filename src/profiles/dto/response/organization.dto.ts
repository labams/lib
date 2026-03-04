import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    OrganizationType,
    OrganizationValidationStatus,
    SubscriptionPlan,
} from '../../types/organization.types';

export class LabProfileResponseDto {
    @ApiProperty()
    id: string;

    @ApiPropertyOptional()
    priceList: Record<string, unknown> | null;

    @ApiProperty({ type: [String] })
    specializations: string[];

    @ApiProperty({ type: [String] })
    directions: string[];
}

export class OrganizationResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiPropertyOptional()
    description: string | null;

    @ApiProperty({ enum: OrganizationType })
    type: OrganizationType;

    @ApiProperty()
    ownerId: string;

    @ApiPropertyOptional()
    address: string | null;

    @ApiPropertyOptional()
    photoId: string | null;

    @ApiPropertyOptional({ example: '4.50' })
    rating: string | null;

    @ApiProperty({ enum: SubscriptionPlan })
    subscription: SubscriptionPlan;

    @ApiPropertyOptional()
    subscriptionExpiresAt: Date | null;

    @ApiProperty({ enum: OrganizationValidationStatus })
    validationStatus: OrganizationValidationStatus;

    @ApiPropertyOptional()
    validatedBy: string | null;

    @ApiPropertyOptional()
    validatedAt: Date | null;

    @ApiPropertyOptional()
    crmSettings: Record<string, unknown> | null;

    @ApiProperty()
    isDemo: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiPropertyOptional({ type: () => LabProfileResponseDto })
    labProfile?: LabProfileResponseDto | null;
}

export class OrganizationListResponseDto {
    @ApiProperty({ type: () => [OrganizationResponseDto] })
    organizations: OrganizationResponseDto[];

    @ApiProperty({ example: 42 })
    total: number;
}
