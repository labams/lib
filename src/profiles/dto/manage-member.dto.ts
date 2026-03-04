import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class AddMemberDto {
    @ApiProperty({ description: 'ID пользователя' })
    @IsUUID()
    userId: string;
}

export class TransferOwnershipDto {
    @ApiProperty({ description: 'ID нового владельца' })
    @IsUUID()
    newOwnerId: string;
}
