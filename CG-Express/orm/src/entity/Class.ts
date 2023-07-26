import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Student } from "./Student";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    nameTeacher: string;
    @Column({type:"int"})
    quantity: number;
    @OneToMany(() => Student, (student) => student.class1)
    student: Student[]
}
