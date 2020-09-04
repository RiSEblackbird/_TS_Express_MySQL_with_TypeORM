import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeUserStampKeywordWithoutRelations1599185572852 implements MigrationInterface {
    name = 'ChangeUserStampKeywordWithoutRelations1599185572852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `keyword` (`id` int NOT NULL AUTO_INCREMENT, `word` varchar(2000) NOT NULL, `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `stamp` (`id` int NOT NULL AUTO_INCREMENT, `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `userName`");
        await queryRunner.query("ALTER TABLE `user` ADD `username` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` ADD `updatedDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updatedDate`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `createdDate`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `username`");
        await queryRunner.query("ALTER TABLE `user` ADD `userName` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `stamp`");
        await queryRunner.query("DROP TABLE `keyword`");
    }

}
