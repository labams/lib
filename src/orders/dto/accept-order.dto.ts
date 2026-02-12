import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class AcceptOrderDto {
    @ApiPropertyOptional({ description: 'ID техника' })
    @IsOptional()
    @IsUUID()
    technicianId?: string;
}
