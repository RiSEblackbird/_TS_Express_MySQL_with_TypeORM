import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  profile: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  constructor(userName: string, profile: string) {
    this.username = userName;
    this.profile = profile;
  }
}