import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUser } from '../interfaces/User'


@Entity()
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar", length: 200, unique: true })
    userName!: string

    @Column({ type: "varchar", length: 200 })
    firstName!: string

    @Column({ type: "varchar", length: 200 })
    lastName!: string

    @Column({ unique: true })
    email!: string

    @Column("uuid")
    password!: string

    @Column()
    birthdate!: Date

    @Column()
    status!: number

}