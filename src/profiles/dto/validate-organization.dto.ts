import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { OrganizationValidationStatus } from '../types/organization.types';

export class ValidateOrganizationDto {
    @ApiProperty({
        description: 'Статус валидации',
        enum: [
            OrganizationValidationStatus.APPROVED,
            OrganizationValidationStatus.REJECTED,
        ],
    })
    @IsEnum(OrganizationValidationStatus)
    status: OrganizationValidationStatus;
}
