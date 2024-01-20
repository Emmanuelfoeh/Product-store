import { SetMetadata } from "@nestjs/common";
import { Role } from "src/entities/role.entity";

export const ROLES_KEY = 'role';
export const UserRole = (role: Role) => SetMetadata(ROLES_KEY, role);
