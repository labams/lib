import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsOptional } from 'class-validator';

export class CreateOrderDto {
    @ApiProperty({ description: 'ID клиники' })
    @IsUUID()
    clinicId: string;

    @ApiProperty({ description: 'ID доктора' })
    @IsUUID()
    doctorId: string;

    @ApiProperty({ description: 'ID лаборатории' })
    @IsUUID()
    labId: string;

    @ApiPropertyOptional({ description: 'ID пациента' })
    @IsOptional()
    @IsUUID()
    patientId?: string;
}
