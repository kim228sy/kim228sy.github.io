---
emoji: ๐
title: GitHub ๊พธ๋ฏธ๊ธฐ(3) Pinned ํ์ฉ + Gist ์ค์ ํ๊ธฐ
date: '2022-12-19 20:00:00'
author: kimsy
tags: github readme custom overview
categories: git/github
---

## **Pinned** ๋ฐ **Gists** ํ์ฉํด์ Overview๋ฅผ ๊พธ๋ฏธ์!

github๊พธ๋ฏธ๊ธฐ ์๋ฆฌ์ฆ ๋ง์ง๋ง ํฌ์คํธ๋ค. ์ต์ข ๋์ github ๋ชจ์ต!

![my-github-00.gif](my-github-00.gif)

> ์ค๋ ์๊ฐํ๋ ค๋ ๊พธ๋ฏธ๊ธฐ๋ _Pinned_ ๊ณผ **gist** ๋ฅผ ์ด์ฉํ ๊พธ๋ฏธ๊ธฐ๋ค.
>
> ![pinned-00.png](pinned-00.png)

### [productive-box](https://github.com/maxam2017/productive-box) : ์ปค๋ฐ ํต๊ณ๋ฅผ ํตํ ๋์ ํ์์?

#### 1. fork ํ๊ธฐ

์ด [๋งํฌ](https://github.com/maxam2017/productive-box)๋ก ๋ค์ด๊ฐ์ fork ํ๋ค.

![pinned-gists-01.png](pinned-gists-01.png)

#### 2. gist ๋ง๋ค๊ธฐ

1. ์ฐ์ธก ์๋จ์ ๋ณธ์ธ ํ๋กํ > **Your gists** ํด๋ฆญ

   ![pinned-gists-02-00.png](pinned-gists-02-00.png)

2. **Create a gist** ํด๋ฆญ

   ![pinned-gists-02-01.png](pinned-gists-02-01.png)

3. **Create public gist** ํด๋ฆญ

   ๋ด์ฉ์ ์ ๋นํ ์๋ ฅ! ์ ์ฉ ํ ์๋์ผ๋ก ๋ณ๊ฒฝ๋๋ ์๊ด์๋ค.

   ![pinned-gists-02-02.png](pinned-gists-02-02.png)

4. gist.github.com/[์ ์ ๋ค์]/**[์ด ๋ถ๋ถ ๋ณต์ฌ]**

   ![pinned-gists-02-03.png](pinned-gists-02-03.png)

#### 3. token ๋ง๋ค๊ธฐ

1. ์ฐ์ธก ์๋จ์ ๋ณธ์ธ ํ๋กํ > **Settings** ํด๋ฆญ

   ![pinned-gists-03-00.png](pinned-gists-03-00.png)

2. **Developer settings** ํด๋ฆญ

   ![pinned-gists-03-01.png](pinned-gists-03-01.png)

3. Tokens (classic) > **Generate new token (classic)** ํด๋ฆญ

   ![pinned-gists-03-02.png](pinned-gists-03-02.png)

4. `repo`, `gist` ์ ํ ํ ์์ฑ > ์์ฑ๋ ํ ํฐ ๋ณต์ฌ! (๋ค์ ์์ฑ๋์ง ์์ผ๋ ๋ณด๊ด)

   ![pinned-gists-03-03.png](pinned-gists-03-03.png)

#### 4. Gist ๋ฐ Token ๋ฑ๋กํ๊ธฐ

1. fork ํ _productive-box ๋ฆฌํฌ์งํ ๋ฆฌ_ ์ Settings > Actions > New repository secret ์ ํ

   ![pinned-gists-04-00.png](pinned-gists-04-00.png)

2. Name - `GIST_ID`, Secret - `์๊น ๋ณต์ฌ ํด ๋ gist ์ฃผ์ ๋ท๋ถ๋ถ` ์๋ ฅ > **Add secret** ํด๋ฆญ

   ![pinned-gists-04-01.png](pinned-gists-04-01.png)

3. Name - `GH_TOKEN`, Secret - `์๊น ๋ณต์ฌํ๋ ํ ํฐ` ์๋ ฅ > **Add secret** ํด๋ฆญ

   ![pinned-gists-04-02.png](pinned-gists-04-02.png)

#### 5. Github Actions ์ด์ฉํ๊ธฐ

1. **understand my workflows, go ahead and enable them** ํด๋ฆญ

   ![pinned-gists-05-00.png](pinned-gists-05-00.png)

2. Update gist > Enable workflow ํด๋ฆญ

   ![pinned-gists-05-01.png](pinned-gists-05-01.png)

3. ์กฐ๊ธ ์ง๋๋ฉด ์์์ ์์ฑ๋๋๋ฐ, ์์ ํด์ผ ํ๋ ๋ถ๋ถ์ด ์๋ค.

   ```bash
   GIST_ID: 9842e074b8ee46aef76fd0d493bae0ed
   TIMEZONE: Asia/Taipei

   GIST_ID: ${{ secrets.GIST_ID }}
   TIMEZONE: Asia/Seoul
   ```

   ![pinned-gists-05-02.png](pinned-gists-05-02.png)

#### 6. Pinned๋ก ๋ณด์ฌ์ฃผ๊ธฐ

1. github์ Overview ํญ ๋ฆฌ๋๋ฏธ ๋ฐ, **Customize your pins** ํด๋ฆญ

   ![pinned-gists-06-00.png](pinned-gists-06-00.png)

2. ์ ํํด์ ๋ณด์ฌ์ค Repositories ๋ฐ Gists ์ ํ > Save pins

   ![pinned-gists-06-01.png](pinned-gists-06-01.png)

## โจ

์ด๋ ๊ฒ Github ๊พธ๋ฏธ๊ธฐ ์๋ฆฌ์ฆ ํฌ์คํธ๋ ๋์ด๋ค๐

๋ด๊ฐ ์ํ ๊ฒ์ ์น์์์ ํ ํ์ด์ง์ README ์ Pinned๋ฅผ ํตํ ๋๋ฅผ ๋ณด์ฌ ์ฃผ๊ธฐ์๋ค. ๋ด๊ฐ ๋ณดํต **์ด๋ค ์๊ฐ๋์ ์ปค๋ฐ**์ ํ๋ ์ด๋ค ํ์์ ์ฌ๋์ธ์ง, **์ด๋ค ์ธ์ด๋ฅผ ์ปค๋ฐ**ํ๋์ง ๋ณด์ฌ์ฃผ๋ ๊ฒ์ ๋ฑ๋กํ๋ค. ์์ผ๋ก ๋ ์ข์ ์คํ์์ค๊ฐ ์๋ค๋ฉด ๋ ๊พธ๋ฉฐ๋ ์ข๋ค๐

```toc

```
