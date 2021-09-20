---
slug: "/blog/sql-pazzle-1"
date: "2021-09-20"
title: "SQLパズル 1 ~会計年度テーブル~"
image: "./index.jpg"
imageAlt: "SQLパズル"
description: "CREATE TABLEと検査制約" 
tags: ["Blog","SQL"]
---

1問目　会計年度テーブル

# 要件
- 正しい情報だけをもつ
- 時間関数とEXTRACT関数が使える

# 制約
- 単一制約
  - 会計年度・・・主キー制約(=非NULL+一意性)
  - 年度開始日・・・非NULL、月=10、日=1
  - 年度終了日・・・非NULL、月=9、日=30

- 複合制約
  - 年度開始日(年)=年度終了日(年) - 1
  - 会計年度=年度終了日(年)

# 回答
— テーブル
CREATE TABLE FiscalYearTable1 (fiscal_year INTEGER, start_date DATE, end_date DATE);

— 回答
ALTER TABLE FiscalYearTable1
ALTER COLUMN fiscal_year SET NOT NULL,
ALTER COLUMN start_date SET NOT NULL,
ALTER COLUMN end_date SET NOT NULL,
ADD CONSTRAINT fiscal_year UNIQUE (fiscal_year),
ADD CONSTRAINT check_start_date CHECK (EXTRACT(MONTH FROM start_date) = 10 AND EXTRACT(DAY FROM  start_date) = 1),
ADD CONSTRAINT check_end_date CHECK (EXTRACT(MONTH FROM end_date) = 9 AND EXTRACT(DAY FROM end_date) = 30),
ADD CONSTRAINT check_period CHECK (EXTRACT(YEAR FROM start_date) = EXTRACT(YEAR FROM end_date) - 1),
ADD CONSTRAINT check_fiscal_year_equal_to_end_date_year CHECK(fiscal_year = EXTRACT(YEAR FROM end_date));

— 確認
\d FiscalYearTable1;

INSERT INTO FiscalYearTable1 (fiscal_year, start_date, end_date) VALUES (2021, '2020-10-01', '2021-09-30');
(SELECT F1.fiscal_year FROM FiscalYearTable1 AS F1 WHERE '2021-03-03' BETWEEN F1.start_date AND F1.end_date);

# 答え合わせ
- 全列非NULL → **OK!**
- fiscal_yearに主キー → **OK!**
- start_date<end_date → 回答では存在しないので不要そう(実際CHECK関数で保証される)
- CHECK制約→OK!
- CHECK ((end_date - start_date) = INTERVAL ’359’ DAY) → **NG**

# 学んだこと
- 制約はDBでがっつり検査すること
- CHECK制約がNULLを通すので非NULL制約が必須ということ
- 名前を付けるとエラ〜メッセージが分かりやすくなること
- interval型　日付/時刻の間隔

# 感想
1問目から疲れた。
業務(Rails)ではDBでここまで厳密に制約を入れたことなかったけど、実際入れた方がいいかも？
と思ったら、そもそもRailsでは6.1までCHECK制約は未対応で、生SQL叩かないといけなかった模様！

[Rails 6.1: CHECK制約のサポートをマイグレーションに追加（翻訳）](https://techracho.bpsinc.jp/hachi8833/2021_01_15/102970)

今後のRails開発ではCHECK制約、積極的に使っていきたいわね！


でも「1つの会計年度がぴったり360日または52週間となるようにする」、これ初見でこれ考慮できた人いるのか？ 
