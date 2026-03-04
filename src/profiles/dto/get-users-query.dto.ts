import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsInt,
    IsOptional,
    IsString,
    Max,
    Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class GetUsersQueryDto {
    @ApiPropertyOptional({ description: 'ID организации' })
    @IsOptional()
    @IsString()
    organizationId?: string;

    @ApiPropertyOptional({ description: 'Slug роли' })
    @IsOptional()
    @IsString()
    roleSlug?: string;

    @ApiPropertyOptional({ description: 'Подтверждён ли' })
    @IsOptional()
    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    isConfirmed?: boolean;

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
