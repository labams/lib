import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import {
    OrganizationType,
    OrganizationValidationStatus,
} from '../types/organization.types';

export class GetOrganizationsQueryDto {
    @ApiPropertyOptional({
        description: 'Тип организации',
        enum: OrganizationType,
    })
    @IsOptional()
    @IsEnum(OrganizationType)
    type?: OrganizationType;

    @ApiPropertyOptional({
        description: 'Статус валидации',
        enum: OrganizationValidationStatus,
    })
    @IsOptional()
    @IsEnum(OrganizationValidationStatus)
    validationStatus?: OrganizationValidationStatus;

    @ApiPropertyOptional({ default: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number;

    @ApiPropertyOptional({ default: 20 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number;
}
