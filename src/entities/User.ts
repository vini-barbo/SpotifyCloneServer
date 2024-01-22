import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { UUID } from "crypto";


@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_name!: string

    @Column()
    password!: UUID

    @Column()
    birthdate!: Date

    @Column()
    status!: number

    @Column()
    created_at!: Date

    @Column()
    update_at!: Date

    @Column()
    deleted_at!: Date

}