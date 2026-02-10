import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, Min, Max, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';
import { MESSAGES_DEFAULT_LIMIT } from '../types/message.types';

export class GetMessagesQueryDto {
    @ApiPropertyOptional({
        description: 'Количество сообщений',
        default: MESSAGES_DEFAULT_LIMIT,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number = MESSAGES_DEFAULT_LIMIT;

    @ApiPropertyOptional({
        description: 'Загрузить сообщения до этой даты (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    })
    @IsOptional()
    @IsDateString()
    before?: string;

    @ApiPropertyOptional({
        description: 'Загрузить сообщения после этой даты (ISO 8601)',
        example: '2025-01-01T00:00:00.000Z',
    })
    @IsOptional()
    @IsDateString()
    after?: string;
}
