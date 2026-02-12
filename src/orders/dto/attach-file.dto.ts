import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsOptional } from 'class-validator';
import { FileType } from '../types/order.types';

export class AttachFileDto {
    @ApiProperty({ description: 'ID файла из File Storage Service' })
    @IsUUID()
    fileId: string;

    @ApiProperty({ description: 'Тип файла', enum: FileType })
    @IsEnum(FileType)
    type: FileType;

    @ApiPropertyOptional({ description: 'ID позиции заказа' })
    @IsOptional()
    @IsUUID()
    orderItemId?: string;
}
