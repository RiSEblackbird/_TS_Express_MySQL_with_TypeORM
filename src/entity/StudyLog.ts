import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class StudyLog {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 2000 })
  memo: string;

}