import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()

class Music {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    link!: string

    @Column()
    music_name!: string

    @Column()
    description!: string

    @Column()
    status!: number

}

export default { Music }