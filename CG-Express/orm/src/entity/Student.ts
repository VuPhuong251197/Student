import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Class} from "./Class"

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    nameStudent: string;
    @Column({type:"int"})
    age: number;
    @Column({type:"int"})
    score: number;
    @ManyToOne(() => Class, (class1) => class1.id)
    class1: Class
}