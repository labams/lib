import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../../../types/user-role.enum';

export class UserResponseDto {
    @ApiProperty({ description: 'UUID профиля (= account_id из auth)' })
    id: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiPropertyOptional()
    middleName: string | null;

    @ApiPropertyOptional()
    organizationId: string | null;

    @ApiProperty({ enum: UserRole })
    roleSlug: UserRole;

    @ApiPropertyOptional()
    photoId: string | null;

    @ApiProperty()
    isConfirmed: boolean;

    @ApiPropertyOptional()
    confirmedBy: string | null;

    @ApiPropertyOptional()
    confirmedAt: Date | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class UserListResponseDto {
    @ApiProperty({ type: () => [UserResponseDto] })
    users: UserResponseDto[];

    @ApiProperty({ example: 42 })
    total: number;
}
