import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from "typeorm";
import {Stamp} from "./Stamp"

@Entity()
export class StudyLog {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 2000 })
  memo: string;

  @OneToOne(type => Stamp,  stamp => stamp.study_log)
  stamp: Stamp;

}