import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";
import {StudyLog} from "./StudyLog"

@Entity()
export class Stamp {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(type => StudyLog, study_log => study_log.stamp)
  @JoinColumn()
  study_log: StudyLog;
}