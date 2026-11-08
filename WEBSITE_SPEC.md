# アプリ紹介サイト構成仕様書

更新日：2026-11-08

## 目的

Mix Refineの既存サイトを活かし、Media Scouterなど複数アプリから選べる入口を設ける。

## ページ構成

| ファイル | 役割 |
| --- | --- |
| index.html | アプリ一覧。Mix RefineとMedia Scouterのカード |
| mix-refine.html | 旧index.htmlの製品紹介を継承 |
| media-scouter.html | macOS向けアプリの製品紹介 |
| media-scouter-support.html | Media Scouterのサポート |
| media-scouter-privacy.html | Media Scouterのプライバシーポリシー |
| guide.html | Mix Refineの使い方。既存URL・本文を維持 |
| support.html | Mix Refineのサポート。既存URL・本文を維持 |
| privacy.html | Mix Refineのプライバシー。既存URL・本文を維持 |

## デザイン

サイト名はIkki Morimoto / Apps。暗色基調。デスクトップは2列、680px以下は1列。Mix Refineは既存アイコン、Media Scouterは正式アイコンと黒背景ロゴ、赤アクセントを使用。日本語・英語切替、スキップリンク、キーボードフォーカス表示を備える。

## 既存コンテンツと互換性

Mix Refineの本文・スクリーンショット・日英翻訳を継承する。guide/support/privacyのURLと本文を保持する。assets/site.jsで既存製品ページのindex.htmlリンクをmix-refine.htmlへ補正し、ヘッダーにアプリ一覧リンクを追加する。JavaScript無効時には既存ホームリンクからアプリ一覧へ移動できる。旧トップの#features/#updatesはMix Refine個別ページの同じアンカーへ移動する。

## Media Scouterの扱い

Video Review & Inspection、macOSを表示。リリース後の製品紹介として、開発中・公開予告の表記を掲載しない。説明・サポート・プライバシーへの導線を維持する。公開日・価格・OS最低要件・未検証の提供機能・ダウンロードURLは掲載しない。正式ロゴと1.10.5の実画面（動画・音声・ショートカット）を掲載。波形、ロケート、2画角比較、VU／LUFS MATCH、静止画・区間保存、使い始めの3ステップと対応範囲を日英で説明する。画像の選択で原寸表示できる。素材は既存のアプリ開発フォルダの提出資料から取得。

## 運用

静的HTMLでGitHub Pagesを継続利用。既存リポジトリ名と公開ベースURLを変更しない。将来のアプリ追加では個別HTMLを追加し、index.htmlへカードを追加する。外部の解析やフォームサービスは追加しない。変更はapps-portalでまとめ、mainへ統合して公開する。

## 検証

公開トップ、両アプリ詳細、使い方・サポート・プライバシー、言語切替、画像、製品内ホームと一覧への導線をChromeで確認する。未確認の項目は完了と記録しない。
