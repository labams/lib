import { ApiProperty } from '@nestjs/swagger';
import { ReferenceDto, ConstructionTypeDto } from './reference.dto';

export class AreasResponseDto {
    @ApiProperty({ type: [ReferenceDto] })
    areas: ReferenceDto[];
}

export class ConstructionTypesResponseDto {
    @ApiProperty({ type: [ConstructionTypeDto] })
    types: ConstructionTypeDto[];
}

export class MaterialsResponseDto {
    @ApiProperty({ type: [ReferenceDto] })
    materials: ReferenceDto[];
}

export class ColorsResponseDto {
    @ApiProperty({ type: [ReferenceDto] })
    colors: ReferenceDto[];
}

export class JawsResponseDto {
    @ApiProperty({ type: [ReferenceDto] })
    jaws: ReferenceDto[];
}
