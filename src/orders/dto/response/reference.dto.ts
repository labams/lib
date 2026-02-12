import { ApiProperty } from '@nestjs/swagger';

export class ReferenceDto {
    @ApiProperty({ example: 'uuid' })
    id: string;

    @ApiProperty({ example: 'UPPER', description: 'Английский ключ (slug)' })
    slug: string;

    @ApiProperty({ example: 'Верхняя', description: 'Название на русском' })
    name: string;
}

export class ConstructionTypeDto {
    @ApiProperty({ example: 'ortho-1' })
    id: string;

    @ApiProperty({ example: 'ortho_1' })
    slug: string;

    @ApiProperty({ example: 'Коронка' })
    name: string;

    @ApiProperty({ example: 1 })
    number: number;

    @ApiProperty({ example: 'uuid' })
    areaId: string;

    @ApiProperty()
    requiresMaterial: boolean;

    @ApiProperty()
    requiresColor: boolean;

    @ApiProperty()
    requiresJaw: boolean;

    @ApiProperty()
    requiresTeeth: boolean;

    @ApiProperty()
    allowsMultipleUnits: boolean;

    @ApiProperty({ type: () => ReferenceDto })
    area?: ReferenceDto;
}
