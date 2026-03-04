import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    Max,
    Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserRole } from '../types/user.types';

export class GetUsersQueryDto {
    @ApiPropertyOptional({ description: 'ID организации' })
    @IsOptional()
    @IsString()
    organizationId?: string;

    @ApiPropertyOptional({ description: 'Роль пользователя', enum: UserRole })
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;

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
