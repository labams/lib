/**
 * Базовый справочник (материал, цвет, челюсть)
 */
export interface IReference {
    id: string;
    slug: string;
    name: string;
}

/**
 * Тип конструкции (расширенный справочник)
 */
export interface IConstructionType extends IReference {
    number: number;
    area_id: string;
    requires_material: boolean;
    requires_color: boolean;
    requires_jaw: boolean;
    requires_teeth: boolean;
    allows_multiple_units: boolean;
}

/**
 * Область (с вложенными типами конструкций)
 */
export interface IArea extends IReference {
    construction_types?: IConstructionType[];
}
