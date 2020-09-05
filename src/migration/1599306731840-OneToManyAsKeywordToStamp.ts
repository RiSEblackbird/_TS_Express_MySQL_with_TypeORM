import {MigrationInterface, QueryRunner} from "typeorm";

export class OneToManyAsKeywordToStamp1599306731840 implements MigrationInterface {
    name = 'OneToManyAsKeywordToStamp1599306731840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_2b92c7e5c68c851ed1bddb2a56` ON `stamp`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_2b92c7e5c68c851ed1bddb2a56` ON `stamp` (`studyLogId`)");
    }

}
