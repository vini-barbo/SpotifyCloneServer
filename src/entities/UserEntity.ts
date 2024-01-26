import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
@Entity('user')
export class UserEntity extends BaseEntity {
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

    @CreateDateColumn()
    created_at = Date

    @UpdateDateColumn()
    update_at = Date

    @DeleteDateColumn()
    deleted_at = Date
}