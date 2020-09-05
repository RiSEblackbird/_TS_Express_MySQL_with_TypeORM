import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import {Keyword} from "./Keyword"
import {StudyLog} from "./StudyLog"

@Entity()
export class Stamp {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @ManyToOne(type => Keyword, Keyword => Keyword.stamp)
  keyword: Keyword;

  @OneToOne(type => StudyLog, study_log => study_log.stamp)
  @JoinColumn()
  study_log: StudyLog;
  
}