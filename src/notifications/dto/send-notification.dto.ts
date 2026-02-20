import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsOptional,
    IsEnum,
    IsArray,
    IsObject,
} from 'class-validator';
import { Channel, NotificationPriority } from '../types/notification.types';

export class SendNotificationDto {
    @ApiProperty({
        example: 'user-id-123',
        description: 'ID пользователя-получателя',
    })
    @IsString()
    userId: string;

    @ApiProperty({
        example: 'ORDER_CREATED',
        description: 'Тип уведомления',
    })
    @IsString()
    type: string;

    @ApiProperty({
        enum: NotificationPriority,
        example: NotificationPriority.NORMAL,
        required: false,
        description: 'Приоритет уведомления',
    })
    @IsOptional()
    @IsEnum(NotificationPriority)
    priority?: NotificationPriority;

    @ApiProperty({
        example: 'Новый заказ #12345',
        required: false,
        description: 'Тема сообщения (для EMAIL, SMS)',
    })
    @IsOptional()
    @IsArray()
    @IsEnum(Channel, { each: true })
    channels?: Channel[];

    @ApiProperty({
        example: 'Новый заказ #12345',
        required: false,
        description: 'Тема сообщения (для EMAIL, SMS)',
    })
    @IsOptional()
    @IsString()
    subject?: string;

    @ApiProperty({
        example: 'Ваш заказ #12345 успешно создан',
        required: false,
        description: 'Текст сообщения (для EMAIL, SMS)',
    })
    @IsOptional()
    @IsString()
    message?: string;

    @ApiProperty({
        example: { orderNumber: '12345', amount: 1000 },
        required: false,
        description: 'Переменные для шаблона уведомления',
    })
    @IsOptional()
    @IsObject()
    variables?: Record<string, unknown>;

    @ApiProperty({
        example: { orderId: '12345' },
        required: false,
        description: 'Дополнительные данные для уведомления',
    })
    @IsOptional()
    @IsObject()
    payload?: Record<string, unknown>;
}
