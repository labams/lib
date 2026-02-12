import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class RateOrderDto {
    @ApiProperty({ description: 'Оценка (1-5)', minimum: 1, maximum: 5 })
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;

    @ApiPropertyOptional({ description: 'Комментарий к оценке' })
    @IsOptional()
    @IsString()
    comment?: string;
}
