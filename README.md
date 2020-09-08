# _TS_Express_MySQL_with_TypeORM_API

(This repository is my own self-study document
)

## リポジトリの目的

- 表題技術の基礎学習
- 自分用のリファレンス集の作成

下記のチュートリアルを参照させていただきました。

- ***[Example using TypeORM with Express - typeorm](https://orkhan.gitbook.io/typeorm/docs/example-with-express)***

## 重要なリファレンス

### [TypeORM](https://github.com/typeorm/typeorm)

- GitHub : https://github.com/typeorm/typeorm
- 公式サイト : https://typeorm.io/#/
  - マイグレーション : https://typeorm.io/#/migrations
  - リレーション : https://typeorm.io/#/relations

#### 記事

- [TypeORMを使用して、TypeScriptでMySQLのマイグレーション、接続を管理する - Qiita](https://qiita.com/hedrall/items/4297ae0a92ce577b835f)
- [TypeORMでエンティティを定義する際のガイドライン - bitbank tech blog](https://tech.bitbank.cc/typeorm-entity-guideline/)

## [チュートリアル](https://orkhan.gitbook.io/typeorm/docs/example-with-express)の工程(適宜補完, 変更)

- ここではあくまで私自身向けにまとめています。
- (``npm``コマンドの部分は``yarn``コマンドに置き換える 参考：[npmとyarnのコマンド早見表 - Qiita](https://qiita.com/rubytomato@github/items/1696530bb9fd59aa28d8))

### 準備

#### [Initial setup](https://orkhan.gitbook.io/typeorm/docs/example-with-express#initial-setup)

- ``package.json``の初期準備
  - ``$ yarn init -y`` (-y : 全て'yes'回答のオプション)
    - [yarn init | Yarn](https://classic.yarnpkg.com/ja/docs/cli/init)
- ``TypeScript``のインストール
  - ``$ yarn add typescript --dev``
    - [yarn add | Yarn](https://classic.yarnpkg.com/ja/docs/cli/add)
- ``TypeScript``の設定
  - ``$ touch tsconfig.json``
    - 記事内の設定を適用
- メインアプリケーションのエンドポイントを作成
  - ``$ mkdir src``
  - ``$ touch src/app.ts``

#### Linter(ESLint)とFomatter(Prettier)の導入

- **TypeScript ESLint** : https://github.com/typescript-eslint/typescript-eslint#getting-started--installation
  - 導入ガイド
    - [typescript-eslint/README.md at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#getting-started---linting-your-typescript-codebase)
- ``$ yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev``
  - **eslint** : https://github.com/eslint/eslint
    - ECMAScript/JavaScript のコードで見つかったパターンを識別してレポートするためのツール
  - **@typescript-eslint/parser** : https://www.npmjs.com/package/@typescript-eslint/parser
    - ESlintにTypeScriptの構文を理解させる
  - **@typescript-eslint/eslint-plugin** : https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    - TypeScriptのLintルールを提供する

- [Linterの設定](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration)
  - 設定用ファイル``.eslintrc.js``の作成

- [静的解析の除外対象を設定](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#ignoring-unnecessary-files)
  - 解析の除外設定ファイル``.eslintignore``の作成

- ``Prettier``のインストール
  - ``$ yarn add prettier prettier/@typescript-eslint --dev``
    - **Prettier** : https://github.com/prettier/prettier

- ESLintの設定にPrettierを追記
  - ``.eslintrc.js``の``extends:``に``prettier``と``prettier/@typescript-eslint``を追記

- 整形の除外設定ファイル``.prettierignore``の作成

#### 監視モードでコンパイラを実行

- ``concurrently``, ``nodemon``, ``rimraf``, ``npm-run-all``インストール
  - ``$ yarn add concurrently nodemon rimraf, npm-run-all --dev``
    - **concurrently** : https://github.com/kimmobrunfeldt/concurrently
      - Watchモードの各コマンドを``concurrently``コマンドとして統合
    - **nodemon** : https://github.com/remy/nodemon
      - コードの変更を監視して、変更に応じてサーバーを再起動させる
    - **rimraf** : https://github.com/isaacs/rimraf
      - OSに依存せずnodeで``rm -rf``を実行する
    - **npm-run-all** : https://github.com/mysticatea/npm-run-all
      - 複数のnpmスクリプトを並列または順次実行するCLIツール

- ``package.json``に監視モード実行のスクリプトを追加

  ~~~json
  "scripts": {
    "clean": "rimraf dist/*",
    "tsc": "tsc",
    "build": "npm-run-all clean tsc",
    "start": "concurrently \"tsc -w\" \"nodemon dist/js/app.js\""
  },
  ~~~

- コンパイルの出力フォルダを``src/dist/js``に設定
  - ``taconfig.json``に出力先DirとルートDirの設定を追記

    ~~~json
    "outDir": "dist/js",
    "rootDir": "src",
    ~~~

    さらに下記も追記して、コンパイルに含めるものと除外するものを設定

    ~~~json
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
    ~~~

    監視が成功している際のログ

    ~~~log
    1:43:28 - Starting compilation in watch mode...
    [0] 
    [1] [nodemon] 2.0.4
    [1] [nodemon] to restart at any time, enter `rs`
    [1] [nodemon] watching path(s): *.*
    [1] [nodemon] watching extensions: js,mjs,json
    [1] [nodemon] starting `node dist/js/app.js`
    [1] [nodemon] clean exit - waiting for changes before restart
    [0] 
    [0] 1:43:30 - Found 0 errors. Watching for file changes.
    [1] [nodemon] restarting due to changes...
    [1] [nodemon] starting `node dist/js/app.js`
    [1] Application is up and running
    [1] [nodemon] clean exit - waiting for changes before restart
    ~~~

#### [Adding Express to the application](https://orkhan.gitbook.io/typeorm/docs/example-with-express#adding-express-to-the-application)

- ``Express``のインストール
  - ``Express``本体のインストール
    - ``$ yarn add express``
  - ``@types/express``のインストール
    - ``$ yarn add @types/express --dev``
- ``src/app.ts``にCRUDの処理を記述

#### [Adding TypeORM to the application](https://orkhan.gitbook.io/typeorm/docs/example-with-express#adding-typeorm-to-the-application)

- ``typeorm``, ``mysql``, ``reflect-metadata``のインストール
  - ``$ yarn add typeorm mysql reflect-metadata --dev``
  - ※ ``reflect-metadata``やデコレータの概念は現時点で難解なため後日に回す
- ``Userモデル``の作成
  - ``$ mkdir src/entity``
  - ``$ touch src/entity/User.ts``
  - 記述を編集


#### マイグレーション
- 参考資料
  - 公式 : https://typeorm.io/#/migrations
  - [TypeORMを使用して、TypeScriptでMySQLのマイグレーション、接続を管理する - Qiita](https://qiita.com/hedrall/items/4297ae0a92ce577b835f)
  - [TypeORMでエンティティを定義する際のガイドライン - bitbank tech blog](https://tech.bitbank.cc/typeorm-entity-guideline/)

- 空のマイグレーションファイルを作成
  - ``$ typeorm migration:generate -n CreateUser``
  - ``$ typeorm migration:generate -n(名前の意) {付けたいファイル名}``
  - [ 注意 ] : ``migration:create``だとSQL文の無い空のマイグレーションファイルが生成される
- 未実行の全てのマイグレーションファイルをDBへ反映させる
  - ``$ typeorm migration:run``

    ~~~txt
    ## 実行後のDB
    mysql> show tables;
    +-----------------------+
    | Tables_in_typeormtest |
    +-----------------------+
    | migrations            |
    | user                  |
    +-----------------------+
    2 rows in set (0.00 sec)

    mysql> describe user;
    +----------+--------------+------+-----+---------+----------------+
    | Field    | Type         | Null | Key | Default | Extra          |
    +----------+--------------+------+-----+---------+----------------+
    | id       | int          | NO   | PRI | NULL    | auto_increment |
    | userName | varchar(255) | NO   |     | NULL    |                |
    | profile  | varchar(255) | NO   |     | NULL    |                |
    +----------+--------------+------+-----+---------+----------------+
    3 rows in set (0.01 sec)
    ~~~

#### リレーションの作成(1対1, 1対多)
- 参考資料
  - 公式 : https://typeorm.io/#/relations
  - 日付カラムの扱いについて : [公式リポジトリのエンティティサンプル](https://github.com/typeorm/typeorm/blob/master/sample/sample11-all-types-entity/entity/EverythingEntity.ts)

- 最低限のアプリの想定
  - リレーションの実装を演習するために、最低限のCRUDアプリケーションの作成場面を想定する。
  - 調べたりや勉強したキーワードについて、着手歴を可視化、復習タイミングの管理をサポートするサービス。

- エンティティ構成
  ![for_TS_Express_bigenner_projects-withoutUser(result)](https://user-images.githubusercontent.com/43542677/92310333-48bcb800-efe8-11ea-8ae7-c037b1e888c1.png)
  - 概要
    - ``keyword`` : 調べごとの単語や用語
      - ``word`` : 単語や用語を登録する
      - ``memo`` : 単語/用語の説明や参考URL
    - ``stamp`` : ``keyword``について勉強や調査をしたタイムスタンプ
    - ``study_log`` : ``stamp``に備考を記入する
      - ``body`` : 本文テキスト
  - エンティティ同士の関係性
    - ``keyword`` : 1対(0 or 多) : ``stamp``
    - ``stamp``   : 1対(0 or 1) : ``study_log``

- 作成日や更新日を扱えるようにする
  - 各エンティティファイル内で、モジュール : ``CreateDateColumn``,``UpdateDateColumn`` をインポート

- 1対1
  - One-to-one relations : https://typeorm.io/#/one-to-one-relations
- 1対多(多対1)
  - Many-to-one / one-to-many relations : https://typeorm.io/#/many-to-one-one-to-many-relations

- DBの最終形

  ~~~txt
  mysql> show tables;
  +-----------------------+
  | Tables_in_typeormtest |
  +-----------------------+
  | keyword               |
  | migrations            |
  | stamp                 |
  | study_log             |
  +-----------------------+
  4 rows in set (0.02 sec)

  mysql> describe keyword;
  +-------------+---------------+------+-----+----------------------+-------------------+
  | Field       | Type          | Null | Key | Default              | Extra             |
  +-------------+---------------+------+-----+----------------------+-------------------+
  | id          | int           | NO   | PRI | NULL                 | auto_increment    |
  | createdDate | datetime(6)   | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
  | updatedDate | datetime(6)   | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
  | memo        | varchar(2000) | NO   |     | NULL                 |                   |
  | word        | varchar(50)   | NO   |     | NULL                 |                   |
  +-------------+---------------+------+-----+----------------------+-------------------+
  5 rows in set (0.03 sec)

  mysql> describe stamp;
  +-------------+-------------+------+-----+----------------------+-------------------+
  | Field       | Type        | Null | Key | Default              | Extra             |
  +-------------+-------------+------+-----+----------------------+-------------------+
  | id          | int         | NO   | PRI | NULL                 | auto_increment    |
  | createdDate | datetime(6) | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
  | updatedDate | datetime(6) | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
  | studyLogId  | int         | YES  | UNI | NULL                 |                   |
  | keywordId   | int         | YES  | MUL | NULL                 |                   |
  +-------------+-------------+------+-----+----------------------+-------------------+
  5 rows in set (0.00 sec)

  mysql> describe study_log;
  +-------+--------------+------+-----+---------+----------------+
  | Field | Type         | Null | Key | Default | Extra          |
  +-------+--------------+------+-----+---------+----------------+
  | id    | int          | NO   | PRI | NULL    | auto_increment |
  | body  | varchar(500) | NO   |     | NULL    |                |
  +-------+--------------+------+-----+---------+----------------+
  ~~~

#### CRUD APIの作成

- コントローラーの作成
  - ライブラリ``routing-controllers``を使用する
    - リクエストを処理するアクションとしてメソッドを持つコントローラクラスを作成できる。
    - 導入手順は[Installation](https://github.com/typestack/routing-controllers#installation)から

  - ``$ yarn add routing-controllers --dev``
  - ``$ yarn add class-transformer class-validator --dev``
    - **class-transformer** : https://github.com/typestack/class-transformer#class-transformer
      - プレーンなオブジェクトをクラスのインスタンスに変換することができる
    - **class-validator** : https://github.com/typestack/class-validator#class-validator
      - デコレータと非デコレータベースのバリデーションを行う

  - コントローラーファイル(``src/controllers/**.ts``)の作成

- ルーティングの設定
  - ``src/app.ts``を編集
    - ``createExpressServer``内で各コントローラーを呼び出してポート3000をリッスン

- サーバーを起動して``+ /keyword``などURLを指定すると対応する文字列が出力される

#### ***<< 工程完 >>***

- フロントエンドとの接続など、追加の要件はリポジトリを別途作成して取り組む
- 本READMEの編集は以降も適宜行う

## 階層

- 下記リンクの構成図を変更したもの
  - https://github.com/typeorm/typeorm#quick-start

~~~txt
_TS_Express_MySQL_with_TypeORM
├── dist ── js                       // place of your compiled JavaScript code
│           ├── controllers          // place where your controllers are stored
│           ├── entity               // place where your entities (database models) are stored
│           ├── migration            // place where your migrations are stored
│           └── app.js               // start point of your application
│
├── src                                  // place of your TypeScript code
│   ├── controllers                      // place where your controllers are stored
│   │   ├── KeywordController.ts  
│   │   ├── StampController.ts
│   │   └── StudyLogController.ts
│   ├── entity                           // place where your entities (database models) are stored
│   │   ├── Keyword.ts  
│   │   ├── Stamp.ts
│   │   └── StudyLog.ts
│   ├── migration                        // place where your migrations are stored
│   └── app.ts                           // start point of your application
├── .gitignore               // standard gitignore file
├── ormconfig.json           // ORM and database connection configuration
├── package.json             // node module dependencies
├── README.md                // simple readme file
├── tsconfig.json            // TypeScript compiler options
└── yarn.lock
~~~

## Error

- `` Error: Cannot find module 'express' ``

  ~~~error
  [1] Require stack:
  [1] - /Users/Taishi/Documents/TypeScript/_TS_Express_MySQL_with_TypeORM/dist/js/app.js
  ~~~

  - ``[nodemon] app crashed - waiting for file changes before starting...``
  - 要因&対処
    - ``$ yarn add express``の実行抜け -> **OK**

- ``UnhandledPromiseRejectionWarning: Error: connect ECONNREFUSED 127.0.0.1:3306``
  - まずMySQLサーバーが起動されていなかった
    - sockファイルやらpidファイルの小さなエラーがあったが対処して起動
    - ``$ yarn start``でのエラーが変わった(おそらく接続はOK)

- ``UnhandledPromiseRejectionWarning: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client``
  - MySQL8.0系に特有のエラーらしい
    - [MySQL 8.0 — Client does not support authentication protocol requested by server; consider upgrading MySQL client | by TungShien.com | CodeSpace69 | Medium](https://medium.com/codespace69/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server-consider-8afadc2385e2)
    - [ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client Code Example](https://www.codegrepper.com/code-examples/sql/ER_NOT_SUPPORTED_AUTH_MODE%3A+Client+does+not+support+authentication+protocol+requested+by+server%3B+consider+upgrading+MySQL+client)
  - 手順に沿って対処後、エラーが変化

- ``UnhandledPromiseRejectionWarning: Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'test'@'localhost' (using password: YES)``
  - [mysql - Access denied for user 'test'@'localhost' (using password: YES) except root user - Stack Overflow](https://stackoverflow.com/questions/20353402/access-denied-for-user-testlocalhost-using-password-yes-except-root-user)
  - 今回用のMySQLユーザーにrootユーザーからDBの操作権限を付与して当該DBを作成 -> **OK** (``$ yarn start``にて正常な接続を確認した)