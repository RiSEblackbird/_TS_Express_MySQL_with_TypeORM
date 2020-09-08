import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Stamp } from "./Stamp";

@Entity()
export class StudyLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 500 })
  body: string;

  @OneToOne((type) => Stamp, (stamp) => stamp.study_log)
  stamp: Stamp;
}
