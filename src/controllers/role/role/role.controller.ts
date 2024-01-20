import { Body, Controller, Get, Post } from '@nestjs/common';
import { Role } from 'src/entities/role.entity';
import { RoleService } from 'src/services/role/role/role.service';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService){}

    @Post()
    createRole(@Body() role: Role) {
        try {
          const newRole = this.roleService.createRole(role)
          return newRole
        } catch (error) {
            throw new Error(error)
        }
        
    }

    @Get()
    fetchesRole() {
        return this.roleService.fetchAllRoles()
    }
}