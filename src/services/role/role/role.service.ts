import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private repo: Repository<Role>) {}

  createRole(role: Role) {

    try {
        const new__role = this.repo.create(role);
    return this.repo.save(new__role);
    } catch (error) {
        throw new Error(error);
    }
    
  }

  fetchAllRoles() {
    const roles = this.repo.find()
    return roles
  }
}
