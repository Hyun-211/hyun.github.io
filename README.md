# 研究者ホームページ — 公開手順（GitHub Pages）

英語のみのシンプルな静的サイトです。ビルド不要・完全無料で公開できます。

## ファイル構成

```
index.html          ホーム（自己紹介・News）
cv.html             CV（学歴・研究歴・受賞など）
publications.html   論文リスト（ナビ表示は "Papers"）
talks.html          講演・発表リスト
assets/style.css    デザイン
```

## 公開手順（約10分）

1. [github.com](https://github.com) でアカウント作成（無料）。
2. 右上の「+」→「New repository」。リポジトリ名を **`ユーザー名.github.io`** にする（例: `hyunjeong.github.io`）。Public のまま「Create repository」。
3. リポジトリページで Add file → Upload files をクリックし、このフォルダの中身（html ファイルと `assets` フォルダ）をすべてドラッグ&ドロップ →「Commit changes」。
4. 1〜3分（初回は最大10分程度）で `https://ユーザー名.github.io` に公開されます。Actions タブの「pages build and deployment」が緑になれば完了。

## 更新方法

GitHub のリポジトリページで該当ファイルを開き、鉛筆アイコンで直接編集 → Commit。論文追加は `publications.html` の `<li>` ブロックをコピーして書き換えるだけです。

## メモ

- 携帯番号と Referees は非公開情報のためサイトに含めていません。
- 所属は RESCEU（ビッグバン宇宙国際研究センター）としています。違っていれば `index.html` の affiliation 部分を修正してください。
- 独自ドメインも Settings → Pages から設定可能（ドメイン代のみ有料）。
