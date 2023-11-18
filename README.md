## 参考
https://zenn.dev/msy/articles/8d991c79b739aa

## プロジェクト作成
```shell
npx create-next-app --typescript
```

## vercelCLIの導入

## vercelでpostgledb作成

## コネクションしてプロジェクトにリンク
```shell
Vercel link
```

## 環境変数の取得
```shell
vercel env pull .env
```

## prismaの導入
https://gini.co.jp/blog/build-supabase-prisma-environment/

```shell
npm install prisma --save-dev
```

```shell
npm install @prisma/client
```

```shell
npx prisma init
```

## schema.prismaの設定

## マイグレーション
```shell
npx prisma migrate dev --name init
```

## package.jsonの修正
```json
    "build": "prisma generate && prisma db push && next build",
```

## CORSの対応 next.config.jsの修正
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // 全ての API routes にマッチ
    async headers() {
      return [
        {
          // 対象APIのパスパターン
          // 今回は src/app/api/ 配下にAPIを作っているので下記のようにする
          source: "/api/:path*",
          headers: [
            {
              // CORSを許可するオリジン
              key: "Access-Control-Allow-Origin",
              // すべてのオリジンを許可するなら * (アスタリスク)
              // ただセキュリティ的にはよろしくないので注意
              value: "https://sample-prisma-next-app.vercel.app",
            },
            {
              // 許可するメソッド
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,POST",
            },
            {
              // 許可するリクエストヘッダ
              key: "Access-Control-Allow-Headers",
              value: "Content-Type",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
```

## prismaようにlib/prisma.ts作成

## api/user/route.ts作成

## app/user/各種.tsx作成

## APIに投げるURLは直書きする

## APIのURLとvercelのURLは同じにする(settingsのdomainに合わせたほうがいい)

## auth.jsの導入
https://zenn.dev/tfutada/articles/5557b780050574
```shell
npm i next-auth
```

```shell
npm i @next-auth/prisma-adapter
```

### ランダムな文字列
```shell
openssl rand -base64 32
```
- 出てきたものを.envに登録
- 