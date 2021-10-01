---
slug: "/blog/sql-pazzle-1"
date: "2021-09-29"
title: "プログラミングの基礎"
image: "./index.jpg"
imageAlt: "プログラミングの基礎"
description: "OCamlで学ぶプログラミングの「デザインレシピ」" 
tags: ["Blog","Ocaml"]
---

## preface

## 
OCamlのいいところ
1. if式


## memo
7章　組
組ってタプルのことか（最後に気づいた。。。）
タプルでパターンマッチ出来るのか、パターンマッチってJSの分割代入に似てるなあ
→「分割代入=変数宣言時にパターンマッチして代入すること」ということらしい、なるほどなるほど。

8章　レコード
要はハッシュや連想配列だが、キーと値を保持したいケースがあるということから組と比較することで、初心者にも丁寧に解説しているのが良い。
パターンマッチが「受け取った値が指定した（組・レコードの）形式に一致した場合のみパターン変数に代入する」というのはわかったけど、
通常の関数との利便性の面での良さが未だ実感できていないのが課題。
ツイで検索すると「タプルやパターンマッチはいいもの」のようである。

## Reference
デザインレシピを提案した本

M. Felleisen, R. Bruce, M. Flatt, and S. Krishnamurthi

How to Design Programs, Cambridge: MIT Press.

http://www.htdp.org/

プログラミング言語 Standard ML 入門
アルゴリズムとデータ構造

