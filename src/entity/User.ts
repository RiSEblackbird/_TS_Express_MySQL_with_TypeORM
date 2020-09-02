import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  profile: string;

  constructor(userName: string, profile: string) {
    this.userName = userName;
    this.profile = profile;
  }
}