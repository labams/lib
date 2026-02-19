import {
    IsString,
    IsOptional,
    IsEnum,
    IsArray,
    IsObject,
} from 'class-validator';
import { Channel, NotificationPriority } from '../types/notification.types';

export class SendNotificationDto {
    @IsString()
    userId: string;

    @IsString()
    type: string;

    @IsOptional()
    @IsEnum(NotificationPriority)
    priority?: NotificationPriority;

    @IsOptional()
    @IsArray()
    @IsEnum(Channel, { each: true })
    channels?: Channel[];

    @IsOptional()
    @IsString()
    subject?: string;

    @IsOptional()
    @IsString()
    message?: string;

    @IsOptional()
    @IsObject()
    variables?: Record<string, unknown>;

    @IsOptional()
    @IsObject()
    payload?: Record<string, unknown>;
}
