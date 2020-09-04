import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Keyword {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2000 })
  word: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}