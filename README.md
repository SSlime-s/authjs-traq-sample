[https://wiki.trap.jp/document/r/最速 traQ OAuth セットアップ (with Next.js & Auth.js)](https://wiki.trap.jp/document/r/%E6%9C%80%E9%80%9F%20traQ%20OAuth%20%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%20(with%20Next.js%20&%20Auth.js))

のサンプルリポジトリです

NeoShowcase を用いて https://authjs-traq-sample.trap.show にデプロイされています

## ディレクトリ説明
```
src
├── app
│   ├── api/auth/[...nextauth]/route.ts
│   |     Auth.js で使用する API ルート
|   |
│   ├── page.tsx
│   |     色々つめこんだサンプル
|   |
|   ├── latestMessage/page.tsx
|   │     最新のメッセージを表示するだけのページ
|   |     アクセストークンの取得及び利用のサンプル
|   |
|   ├── signIn/page.tsx
|   |     サインインのサンプル
|   |
|   └── whoami/page.tsx
|         サインインしているユーザーの情報を表示するページ
|         ユーザー情報の取得のサンプル
|
├── features/auth
|   | Auth.js の設定関連をまとめたディレクトリ
|   |
|   ├── index.ts
|   |     基本的にここで export したものを他のファイルから import して使う
|   |
|   ├── traqProvider.ts
|   |     traQ 用の provider を定義
|   |
|   └── options.ts
|         NextAuth に渡す設定を定義
|
└── types/auth.d.ts
      accessToken を追加した User 型を定義
```

## ページ説明
- `/` (https://authjs-traq-sample.trap.show)
  できることを詰め込んだサンプルページ
- `/latestMessage` (https://authjs-traq-sample.trap.show/latestMessage)
  最新のメッセージを表示するだけのページ
  認証していない場合は traQ の OAuth に飛びます
- `/signIn` (https://authjs-traq-sample.trap.show/signIn)
  サインインページ
  ログインしていてもボタンは表示されます
- `/whoami` (https://authjs-traq-sample.trap.show/whoami)
  サインインしているユーザーの情報を表示するページ
  ログインしていない場合はログインしてない旨が表示されます

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
