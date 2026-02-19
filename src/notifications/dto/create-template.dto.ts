import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsEnum,
    IsOptional,
    IsBoolean,
    IsArray,
} from 'class-validator';
import { Channel } from '../types/notification.types';

export class CreateNotificationTemplateDto {
    @ApiProperty({ example: 'ORDER_CREATED', description: 'Тип уведомления' })
    @IsString()
    type: string;

    @ApiProperty({
        enum: Channel,
        example: 'EMAIL',
        description: 'Канал отправки',
    })
    @IsEnum(Channel)
    channel: Channel;

    @ApiProperty({ example: 'Новый заказ #{{orderId}}', required: false })
    @IsOptional()
    @IsString()
    subject?: string;

    @ApiProperty({
        example: '<h1>Здравствуйте, {{userName}}!</h1>',
        description: 'Тело шаблона (Handlebars)',
    })
    @IsString()
    body: string;

    @ApiProperty({
        example: ['userName', 'orderId'],
        required: false,
        description: 'Список переменных',
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    variables?: string[];

    @ApiProperty({ example: true, required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
