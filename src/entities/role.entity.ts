import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    roleName: string;

    @OneToMany(type => User,user=>user.role)
    users: User[];
}