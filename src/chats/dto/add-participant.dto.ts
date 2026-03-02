import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class AddParticipantDto {
    @ApiProperty({
        description: 'ID пользователя для добавления в чат',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @ApiPropertyOptional({
        description:
            'Роль пользователя (DOCTOR, DL_TECHNICIAN, DL_ADMIN, CLINIC_ADMIN, SUPPORT)',
        example: 'DL_TECHNICIAN',
    })
    @IsOptional()
    @IsString()
    role?: string;
}
