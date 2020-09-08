import {MigrationInterface, QueryRunner} from "typeorm";

export class OneToOneStampWithStudyLog1599299245153 implements MigrationInterface {
    name = 'OneToOneStampWithStudyLog1599299245153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `stamp` ADD `studyLogId` int NULL");
        await queryRunner.query("ALTER TABLE `stamp` ADD UNIQUE INDEX `IDX_2b92c7e5c68c851ed1bddb2a56` (`studyLogId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_2b92c7e5c68c851ed1bddb2a56` ON `stamp` (`studyLogId`)");
        await queryRunner.query("ALTER TABLE `stamp` ADD CONSTRAINT `FK_2b92c7e5c68c851ed1bddb2a56b` FOREIGN KEY (`studyLogId`) REFERENCES `study_log`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `stamp` DROP FOREIGN KEY `FK_2b92c7e5c68c851ed1bddb2a56b`");
        await queryRunner.query("DROP INDEX `REL_2b92c7e5c68c851ed1bddb2a56` ON `stamp`");
        await queryRunner.query("ALTER TABLE `stamp` DROP INDEX `IDX_2b92c7e5c68c851ed1bddb2a56`");
        await queryRunner.query("ALTER TABLE `stamp` DROP COLUMN `studyLogId`");
    }

}
