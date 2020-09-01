# _TS_Express_MySQL_with_TypeORM

## リポジトリの目的

- 表題技術の基礎学習
- 自分用のリファレンス集の作成

下記のチュートリアルを参照させていただきました。

- ***[Example using TypeORM with Express - typeorm](https://orkhan.gitbook.io/typeorm/docs/example-with-express)***

## 重要なリファレンス

### [TypeORM](https://github.com/typeorm/typeorm)

- 公式サイト : https://typeorm.io/#/
- GitHub : https://github.com/typeorm/typeorm

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

#### 監視モードでコンパイラを実行

- ``concurrently``と``nodemon``のインストール
  - ``$ yarn add concurrently nodemon --dev``
    - **concurrently** : https://github.com/kimmobrunfeldt/concurrently#concurrently
      - Watchモードの各コマンドを``concurrently``コマンドとして統合
    - **nodemon** : https://github.com/remy/nodemon#nodemon
      - コードの変更を監視して、変更に応じてサーバーを再起動させる

- ``package.json``に監視モード実行のスクリプトを追加

  ~~~json
  "scripts": {
    "build": "tsc",
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
  - ``$ yarn add @types/express --dev``
- ``src/app.ts``にCRUDの処理を記述

#### [Adding TypeORM to the application](https://orkhan.gitbook.io/typeorm/docs/example-with-express#adding-typeorm-to-the-application)

- ``typeorm``, ``mysql``, ``reflect-metadata``のインストール
  - ``$ yarn add typeorm mysql reflect-metadata --dev``
  - ※ ``reflect-metadata``やデコレータの概念は現時点で難解なため後日に回す

####


###


####


####


## 階層


###


###