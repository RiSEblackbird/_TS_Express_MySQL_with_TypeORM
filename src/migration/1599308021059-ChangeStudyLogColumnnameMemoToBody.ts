import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeStudyLogColumnnameMemoToBody1599308021059
  implements MigrationInterface {
  name = "ChangeStudyLogColumnnameMemoToBody1599308021059";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `study_log` CHANGE `memo` `body` varchar(2000) NOT NULL"
    );
    await queryRunner.query("ALTER TABLE `stamp` ADD `keywordId` int NULL");
    await queryRunner.query("ALTER TABLE `study_log` DROP COLUMN `body`");
    await queryRunner.query(
      "ALTER TABLE `study_log` ADD `body` varchar(500) NOT NULL"
    );
    await queryRunner.query(
      "ALTER TABLE `stamp` ADD CONSTRAINT `FK_7254914ff5529d02464898aef75` FOREIGN KEY (`keywordId`) REFERENCES `keyword`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `stamp` DROP FOREIGN KEY `FK_7254914ff5529d02464898aef75`"
    );
    await queryRunner.query("ALTER TABLE `study_log` DROP COLUMN `body`");
    await queryRunner.query(
      "ALTER TABLE `study_log` ADD `body` varchar(2000) NOT NULL"
    );
    await queryRunner.query("ALTER TABLE `stamp` DROP COLUMN `keywordId`");
    await queryRunner.query(
      "ALTER TABLE `study_log` CHANGE `body` `memo` varchar(2000) NOT NULL"
    );
  }
}
