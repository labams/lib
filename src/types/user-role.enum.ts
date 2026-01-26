/**
 * Роли пользователей в системе
 * @property {string} DOCTOR - Врач
 * @property {string} DL_TECHNICIAN - Техник ЗТЛ
 * @property {string} DL_ADMIN - Администратор ЗТЛ
 * @property {string} CLINIC_ADMIN - Администратор клиники
 * @property {string} SUPPORT - Техподдержка
 */
export enum UserRole {
    DOCTOR = 'DOCTOR',
    DL_TECHNICIAN = 'DL_TECHNICIAN',
    DL_ADMIN = 'DL_ADMIN',
    CLINIC_ADMIN = 'CLINIC_ADMIN',
    SUPPORT = 'SUPPORT',
}
