# cms

> My tiptop Nuxt.js project

## 環境変数のセットアップ

ビルド、実行、デプロイなどの前に環境変数のセットアップを行って下さい。
セットアップは以下の手順で行なえます。

- `.env` 管理用ツールのインストール ([参考](https://github.com/ichikaraInc/cfc#setup-common))
- `fanclub-ui` ディレクトリで `make env-apply` を実行する
  - テキストエディタで `.env.base` が起動するので KMS の `cfc-dotenv-sops` にアクセス可能な AWS アカウントの設定をする
  - テキストエディタは `EDITOR` 環境変数で指定されたコマンドが使用されます。 デフォルトは `vim` です。 VSCode を使う場合は `code --wait` を設定して下さい。
  - アカウントは基本的に LastPass > Shared-CFC > AWS_CFC_ALL_CREDENTIALS のキーを使う
  - 参考: https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-envvars.html
- `fanclub-ui` ディレクトリで `make env-show` を実行して環境変数が読み込めていることを確認する
  - 出力は `PAGER` 環境変数で指定されたコマンドが使用されます。デフォルトは `less` です。

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Caching

We use hard-source-webpack-plugin. This plugin create cache directory.

```
# Can remove build cache
$ npm run clean:cache
```

https://github.com/mzgoddard/hard-source-webpack-plugin

## Deploy to AWS lambda

AWS への Deploy には(serverless)[https://serverless.com/framework/docs/getting-started/]を使用する。
serverless をインストールした状態で、以下のコマンドを実行する。
Cloud Front を通してアクセスする場合と、API Gateway に直接アクセス（動作確認用）する場合で、コマンドが変わる。

```bash
# cloud frontを使用する場合
$ make deploy

# API Gatewayに直接アクセスする場合
$ make deploy:api-gw

# デフォルトのステージ(dev)以外にデプロイする場合
$ make deploy STAGE=my-temporary-stage
```

deploy したアプリケーションを削除する場合、以下のコマンドを入力する

```bash
# cloud formationごと削除する
$ make destroy
```

## アプリ内WebViewからfanclub-uiにアクセスする場合のシミュレーション方法

アプリ側が持っているJWTを埋め込む処理をシミュレーションするため `plugin` を使用して、強制的にJWTを埋め込む処理を再現する。

1. `.env` に `TEST_APP_JWT=true` を追加することで、プラグインを有効化する
1. `.env` に `TEST_APP_JWT_ACCESS_TOKEN`、`TEST_APP_JWT_REFRESH_TOKEN` 埋め込むJWTのアクセストークン、シークレットトークンをそれぞれ記載する
