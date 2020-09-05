import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import {Stamp} from "./Stamp"

@Entity()
export class Keyword {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  word: string;

  @Column({ type: 'varchar', length: 2000 })
  memo: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(type => Stamp, stamp => stamp.keyword)
  stamp: Stamp[];

}