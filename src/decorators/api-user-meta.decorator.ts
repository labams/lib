import { applyDecorators } from '@nestjs/common';
import { ApiHeaders } from '@nestjs/swagger';
import { UserRole } from '../types/user-role.enum';

export const ApiUserMeta = () =>
    applyDecorators(
        ApiHeaders([
            {
                name: 'X-User-Id',
                description: 'ID пользователя',
                required: true,
                example: 'b2e4a3c9-8f21-4b7a-bc5f-1234567890ab',
            },
            {
                name: 'X-User-Role',
                description: 'Роль пользователя',
                required: true,
                enum: UserRole,
                example: UserRole.DOCTOR,
            },
            {
                name: 'X-Session-Id',
                description: 'ID сессии пользователя',
                required: false,
                example: 'session-1234567890',
            },
        ]),
    );
