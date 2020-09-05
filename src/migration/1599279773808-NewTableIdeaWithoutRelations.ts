import {MigrationInterface, QueryRunner} from "typeorm";

export class NewTableIdeaWithoutRelations1599279773808 implements MigrationInterface {
    name = 'NewTableIdeaWithoutRelations1599279773808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `study_log` (`id` int NOT NULL AUTO_INCREMENT, `memo` varchar(2000) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `word_memo` (`id` int NOT NULL AUTO_INCREMENT, `memoText` varchar(2000) NOT NULL, `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `keyword` ADD `memo` varchar(2000) NOT NULL");
        await queryRunner.query("ALTER TABLE `keyword` DROP COLUMN `word`");
        await queryRunner.query("ALTER TABLE `keyword` ADD `word` varchar(50) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `keyword` DROP COLUMN `word`");
        await queryRunner.query("ALTER TABLE `keyword` ADD `word` varchar(2000) NOT NULL");
        await queryRunner.query("ALTER TABLE `keyword` DROP COLUMN `memo`");
        await queryRunner.query("DROP TABLE `word_memo`");
        await queryRunner.query("DROP TABLE `study_log`");
    }

}
