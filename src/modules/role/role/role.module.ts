import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from 'src/controllers/role/role/role.controller';
import { Role } from 'src/entities/role.entity';
import { RoleService } from 'src/services/role/role/role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  exports: [TypeOrmModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
