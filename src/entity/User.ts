import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  userName: string;

  @Column({ type: 'varchar', length: 255 })
  profile: string;

  constructor(userName: string, profile: string) {
    this.userName = userName;
    this.profile = profile;
  }
}