# blogs

[![CodeQL](https://github.com/tomo1227/blogs/actions/workflows/code_ql.yml/badge.svg)](https://github.com/tomo1227/blogs/actions/workflows/code_ql.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## Branchの切り方

* 機能修正など記事以外の場合はfeature
* 記事関連の場合はpost
