# blogs

HPに投稿する記事を管理するリポジトリ

## ディレクトリ構成

```txt
blogs
├── .devcontainer
├── .github
├── archives // 何らかの理由で公開していない記事
├── media // 画像など
└── posts // 投稿済み記事
```

## Rule

記事を投稿する際は以下をチェックしておくこと。(例外は認める)

* 青色の波線がスペルミス
* オレンジの波線がlinterの警告
マージするときは基本的に `squash merge`する。

## Branchの切り方

* 機能修正など記事以外の場合はfeature
* 記事関連の場合はpost
