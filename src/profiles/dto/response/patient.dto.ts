import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PatientAccessResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    patientId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    grantedById: string;

    @ApiProperty()
    createdAt: Date;
}

export class PatientCrmLinkResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    patientId: string;

    @ApiProperty()
    crmId: string;

    @ApiProperty()
    crmName: string;

    @ApiProperty()
    crmUserId: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class PatientResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    organizationId: string;

    @ApiProperty()
    createdById: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiPropertyOptional()
    middleName: string | null;

    @ApiPropertyOptional()
    birthDate: Date | null;

    @ApiPropertyOptional()
    contacts: Record<string, unknown> | null;

    @ApiPropertyOptional({ type: [Object] })
    allergies: unknown[] | null;

    @ApiPropertyOptional()
    medicalHistory: Record<string, unknown> | null;

    @ApiPropertyOptional()
    medicalRecords: Record<string, unknown> | null;

    @ApiPropertyOptional({ type: [Object] })
    documents: unknown[] | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class PatientListResponseDto {
    @ApiProperty({ type: () => [PatientResponseDto] })
    patients: PatientResponseDto[];

    @ApiProperty({ example: 42 })
    total: number;
}

export class PatientCrmLinkListResponseDto {
    @ApiProperty({ type: () => [PatientCrmLinkResponseDto] })
    items: PatientCrmLinkResponseDto[];

    @ApiProperty({ example: 42 })
    total: number;
}
