---
emoji: ๐
title: Gatsby๋ฅผ ์ด์ฉํ github ๋ธ๋ก๊ทธ template
date: '2022-12-03 23:00:00'
author: kimsy
tags: github theme ๋ธ๋ก๊ทธ template
categories: git/github
---

## ๐ ์๋, github ๋ธ๋ก๊ทธ

๋ธ๋ก๊ทธ๋ฅผ ์ด๊ณณ์ ๊ณณ ์ด์ฉํด ๋ณด์์ง๋ง ๋ง์กฑ์ค๋ฝ์ง ๋ชปํ๋ค๐ฅฒ ๋ฌด์๋ณด๋ค ์๋ ์ฌ๊ธฐ์ ์ค์์ฑ์ ์๊ณ  ๋์ github๋ฅผ ์ด์ฉํ blog๋ฅผ ์ฐพ์ ํค๋งธ๋ค๊ฐ [zoomkoding-Gatsby-blog](https://www.zoomkoding.com/Gatsby-github-blog/)๋ฅผ ๋ฐ๊ฒฌํ๋ค!

**๋ด ๊ฐ๋ฐ ๋ธ๋ก๊ทธ, ๋๋ก ์ ํ๋ค!**

## ๐ ๋ง๋ค๊ธฐ ์์!

ํ๋ง๋ฅผ ์ด์ฉํ๊ธฐ์ ์์ด์ GitHub Page๋ก ๋ฐฐํฌํ๊ธฐ๋ฅผ ์ ํํ๋ค.
[Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/zoomkoding/zoomkoding-gatsby-blog)๋ก ๋ง๋ค ์ ์๋ ๋ฐฉ๋ฒ๋ ์๋ค.

### 1. Repository ์์ฑํ๊ธฐ

GitHub Blog๋ฅผ ๋ง๋ค๋ ค๋ฉด Github์ Repository๋ฅผ ์์ฑํด์ผ ํ๋๋ฐ ํ์ ๋ง๋ค๋ ๋ฐฉ๋ฒ๊ณผ ๋ค๋ฅด๋ค.
_Import a repository_ ๋ฅผ ์ ํํด์ Repo๋ฅผ ๋ง๋ ๋ค.

![github-blog-1.png](github-blog-1.png)

๊ทธ ์ดํ ๋ ๊ฐ์ง ์ ๋ณด๋ฅผ ๋ฃ์ด์ฃผ๋๋ฐ, Your old repository's clone URL์๋ [https://github.com/zoomKoding/zoomkoding.com](https://github.com/zoomKoding/zoomkoding.com) ๋ฅผ ์๋ ฅํ๋ค.

> ์ฌ์ฉํ๊ณ ์ ํ๋ Gatsby ํ๋ง๊ฐ ์๋ repository์ ์ฃผ์๋ฅผ ๋ฃ์ผ๋ฉด ๋๋ค.
> ๋๋ *zoomkoding*๋์ ํ๋ง๋ฅผ ์ ํํ๋ค.

๊ทธ๋ค์, Repository Name์ ์๋ ฅํ๋ค. ์ด๋ ์ฃผ์ํ  ์ ์ **Repository ๋ช์ ๊ผญ [GitHubID].github.io๋ก ์ค์ **ํด์ผ ํ๋ค.

![github-blog-2.png](github-blog-2.png)

### 2. Repository ๊ฐ์ ธ์ค๊ธฐ

๋ด ์ปดํจํฐ(local)์ Repository ๊ฐ์ ธ์ ๋ณด์!

![github-blog-3.png](github-blog-3.png)

์ด๋ฏธ์ง์ฒ๋ผ ํ ํ์ ์๋ ๋ช๋ น์ด๋ฅผ ํฐ๋ฏธ๋์์ ์คํํด์ผ ํ๋ค.

```bash
cd [Repository๋ฅผ ์ ์ฅํ  ํด๋]
git clone [๋ณต์ฌํ ์ฃผ์]
```

### 3. Blog ์ค์นํ๊ธฐ

์ด์  ๋ธ๋ก๊ทธ๋ฅผ ๋์์ํฌ ์ ์๋๋ก ํจํค์ง๋ค์ ๋ค์ด๋ก๋ ํด์ผ ํ๋๋ฐ, ๋ค์ ๋ช๋ น์ด๋ฅผ ์คํํ๋ฉด ๋๋ค.

```bash
cd [Repository ์ฃผ์]
npm install
```

> **_npm install_ ํ๋๋ ์๋ฌ๊ฐ?** ![github-blog-err-1.png](github-blog-err-1.png)
> ์ ํ์ธํ๋ฉด ํด๊ฒฐ ๋ฐฉ๋ฒ๋ ๊ฐ์ด ์ ์ํ๊ณ  ์๋ค.
> `npm install --force` ๋๋ `npm install --legacy-peer-deps` ๋ก ๋ค์ ์คํํ๋ฉด ๋๋ค

### 4. Blog ๋ฐฐํฌ ์ค๋นํ๊ธฐ

๊ทธ๋ฆฌ๊ณ  ์ด์  Gatsby ํ๋ง๋ฅผ GitHub ํ์ด์ง์ ์ฌ๋ฆฌ๊ธฐ ์ํด gh-pages๋ผ๋ ํจํค์ง๋ฅผ ์ค์นํด์ผ ํ๋ค.

```bash
npm install gh-pages --save-dev
```

๊ทธ๋ฆฌ๊ณ  ๋์ packageยทJSON์ ๋ค์์ ์ถ๊ฐํ๋ค.

```json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public" // ์ถ๊ฐ
  }
}
```

### 5. Blog ๋ฐฐํฌํ๊ธฐ

๋๋์ด ๋ฐฐํฌ ์ค๋น๋ ๋ค ๋! ๋ค์ ๋ช๋ น์ ์คํํ๋ฉด์ github page์ ๋ฐฐํฌํ๋ฉด ๋๋ค.

```bash
npm run deploy
```

์กฐ๊ธ ๊ธฐ๋ค๋ฆฐ ํ์ `Published`๋ผ๋ ๋ฉ์์ง๋ฅผ ๋ฐ์ผ๋ฉด ๋ฐฐํฌ๋ ๋!

### 6. Repository Source Branch ๋ณ๊ฒฝํ๊ธฐ

GitHub ํ์ด์ง๊ฐ ์๋ํ๋ ค๋ฉด GitHub์ Repository ์ค์ ์์ ๋ฐฐํฌํ  Branch๋ฅผ ์ ํํด์ผ ํ๋ค.

1. Repository์ ์๋ Settings๋ฅผ ํด๋ฆญ -> ์ข์ธก ๋ฉ๋ด์์ Pages๋ฅผ ํด๋ฆญ -> Github Pages ์ค์  ํ์ด์ง๋ก ์ด๋
2. Branch๋ฅผ master(main)์์ gh-pages๋ก ๋ณ๊ฒฝ -> Save

![github-blog-4.png](github-blog-4.png)

### 7. ๋ฐฐํฌ๋ ํ์ด์ง ํ์ธํ๊ธฐ

์ด์  ์ค์ ๋ก ์ ๋ฐฐํฌ๊ฐ ๋์๋์ง ํ์ธํด๋ณด์! [GitHubID].github.io์ ์ ๊ทผํ์ ๋ ๋ธ๋ก๊ทธ๊ฐ ์ ๋์จ๋ค!

> ๊ฐ๋ README.md์ ๋ด์ฉ์ด ๋์ค๊ธฐ๋ ํ๋๋ฐ, ๋ฐ๋ก ์ ์ฉ์ด ์ ๋์ด์ ๊ทธ๋ ๋ค. ๋ณดํต์ ์ข ๋ ๊ธฐ๋ค๋ ธ๋ค๊ฐ ๋ค์ ์ ๊ทผํ๋ฉด ์ ์์ ์ผ๋ก ๋์จ๋ค

### 8. ์์ ํ๊ณ  ๋ฐฐํฌํ๊ธฐ

๋ณ๋์ฌํญ์ commit ํ์ ์๋ ๋ช๋ น์ด๋ฅผ ์คํํ๋ฉด ๋ณ๋์ฌํญ์ด ๋ธ๋ก๊ทธ์ ๋ฐฐํฌ๋๋ค!

```bash
npm run deploy
```

๋ฐฐํฌ ์ , ๋ก์ปฌ์์ ํ์ธํ๊ณ  ์ถ๋ค๋ฉด!

```bash
npm start
```

---

> - Gatsby ํ๋ง ์ ์ฉ ํ ํ๋ง ์ต์  ๋ฒ์ ์ผ๋ก ์๋ฐ์ดํธํ๋ ค๋ฉด,  
>   Gatsby Theme์ ์ ๊ณตํ๋ ์ ์ฅ์๋ฅผ ๊ฐ๋ฆฌํค๋ upstream์ด๋ผ๋ ์ ์๊ฒฉ ์ ์ฅ์๋ฅผ ์ถ๊ฐ ํด์ผ ํ๋ค.
>
> ```bash
> git remote add upstream [Gatsby Theme์ ์ ๊ณตํ๋ ์ ์ฅ์ ์ฃผ์].git
> ```
>
> > - ํ์ฌ ํ๋ง๋ฅผ ์ด์ฉํ๋ค๋ฉด,
> >
> > ```bash
> > git remote add upstream https://github.com/zoomkoding/zoomkoding-gatsby-blog.git
> > ```
>
> ๊ทธ ํ ๋ช๋ น์ด๋ฅผ ํตํด ๋ณ๋์ฌํญ์ ๊ฐ์ ธ์จ๋ค.
>
> ```bash
> git pull upstream master
> ```

## โจ

๋ฉ์ง github ๋ธ๋ก๊ทธ๊ฐ ์๊ฒผ๋ค! ์์ผ๋ก ๊ณต๋ถํ๋ฉด์ ์ป๋ ์ง์, ์๋ฌธ ๋ฑ ๋จ๊ธธ ์์ ์ด๋ค๐คญ

```toc

```
