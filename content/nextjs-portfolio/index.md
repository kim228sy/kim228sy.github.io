---
emoji: ๐
title: Next.js๋ก ๋ง๋๋ Portfolio ์ฌ์ดํธ
date: '2022-12-28 20:00:00'
author: Kimsy
tags: study web notion
categories: project study
---

## ๐ ํฌํธํด๋ฆฌ์ค ์ฌ์ดํธ๋ฅผ ๋ง๋ค์ด ๋ณด์!

Next.js๋ฅผ ๊ณต๋ถํ๊ณ ์ ์์๋ณด๋ค๊ฐ ํฌํธํด๋ฆฌ์ค ์ฌ์ดํธ๋ฅผ ๋ง๋ค๊ณ , ์กฐ๊ธ ๋ณ๊ฒฝ๋ ํด๋ณด์๋ค.

> [์์ฑํ ํฌํธํด๋ฆฌ์ค ์ฌ์ดํธ](https://nextjs-portfolio-self-sy.vercel.app/)

## ๊ธฐ์  ์คํ

- Next.js
- Lottie Animation
- Notion API integration
- TailwindCSS
- Vercel deploy

## ๋ง๋๋ ๊ณผ์ 

CSR๊ฐ ์๋, ๊ฒ์์์ง ์ต์ ํ์ธ SSR์ ์ง์ํ๋ Next.js๋ฅผ ์ด์ฉํด์ ๋ง๋ ๋ค.

1.  [Next.js docs](https://nextjs.org/docs/getting-started)์ ๋ช๋ น์ด๋ฅผ ํฐ๋ฏธ๋์ ์๋ ฅํด ์ค์นํ๋ค. (Typescript๋ฅผ ์ฌ์ฉํ๋ ค๋ฉด `--typescript`๋ฅผ ๋ค์ ์ถ๊ฐํ๋ฉด ๋๋ค.)
2.  `npm run dev`๋ช๋ น์ด๋ก ๋ก์ปฌ์์ ํ๋ฉด์ด ์ด๋ป๊ฒ ๊ทธ๋ ค์ง๋์ง ํ์ธํ๋ค.
3.  pages ํด๋ > index ํ์ผ ๋ด `Head` ๋ถ๋ถ์ ๋ฉํ๋ฐ์ดํฐ ๋ถ๋ถ์ผ๋ก ๋ธ๋ผ์ฐ์ ์์ ๋ณด์ด๋ ๋ถ๋ถ์ ์๋๋ค.
4.  [tailwindcss docs](https://tailwindcss.com/docs/installation)์ ๋ช๋ น์ด๋ฅผ ์ด์ฉํด ์ค์นํ๋ค. ๋ณด๋ค ์ฝ๊ฒ CSS๋ฅผ ์ ์ฉํ๋ ๋๊ตฌ์ด๋ค.
    > `npm install -D autoprefixer` ์ถ๊ฐ ์ค์น ํ์ํ๋ค.
5.  [TAILBLOCKS](https://tailblocks.cc/)์์ ๋ ์ด์์ ๋ฐ ๋์์ธ์ ๋ณด๊ณ  ์ ํํด์ ์ ์ฉํ๋ค.
6.  [LottieFiles](https://lottiefiles.com/)์์ ์ ๋นํ Lottie animation์ ๋ค์ด๋ก๋๋ฐ๋๋ฐ, *Lottie JSON*ํ์ผ๋ก ๋ฐ์ public ํด๋์ ๋ฃ๋๋ค.
7.  [React Lottie player](https://www.npmjs.com/package/react-lottie-player)์์ ์ค์นํ๊ณ , ์ฝ๋ ๋ณต์ฌํ๊ณ  ํ์ผ๋ก ๋ฐ๋ก ๋ง๋ค์ด ์ ์ฅํ๋ค.
8.  ํ์ด์ง ์ด๋์ `ํ๊ทธ๊ฐ ์๋` ํ๊ทธ๋ฅผ ์ด์ฉํด์ ์ฒ๋ฆฌํ๋ค.
9.  [next-themes](https://github.com/pacocoursey/next-themes)๋ฅผ ์ด์ฉํด์ ์ฌ์ดํธ์ ๋คํฌ๋ชจ๋๋ฅผ ์ ์ฉํ๋ค.
10. [Notion](https://www.notion.so/)์ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ํฌํธํด๋ฆฌ์ค ๋ฐ์ดํฐ๋ฅผ ๋ฃ๋ ์ฉ๋๋ก ๋ง๋ ๋ค.
11. [Notion API](https://www.notion.so/my-integrations/)๋ฅผ ๋ง๋ค์ด์ ์์์ ๋ง๋  ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ฐ๊ฒฐ์ ํ๋ค.

    > ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ค๋ฅธ์ชฝ ์๋จ์ โฆ ํด๋ฆญ  
    > ๋งจ ์๋ connections ํด๋ฆญ  
    > add connections์์ my-integrations์ ๋ณธ์ธ ์ด๋ฆ ์ฐพ์ ํ ์ถ๊ฐ ์ฐ๊ฒฐ

12. ๋ฃจํธ ์์น์์ `.env` ํ์ผ์ ๋ง๋ค๊ณ  ๊ทธ ์์ `NOTION_TOKEN=""`, `NOTION_DATABASE_ID=""`๋ฅผ ์๋ ฅํ๋ค.

    > Notion DateBase ID๋ ๋ง๋  ๋ฐ์ดํฐ๋ฒ ์ด์ค์ open as pull page(์ ์ฒด ํ์ด์ง๋ก ์ด๊ธฐ) ํ๋ฉด _notion.so_ ์ดํ, _?_ ์ ๊น์ง๊ฐ ID์ด๋ค.  
    > Notion Token์ API ๋ง๋ค๋ฉด์ ๋ฐ๊ธ๋ฐ์ ๊ฑธ ์ฌ์ฉํ๋ค.

13. [Retrieve a database](https://developers.notion.com/reference/retrieve-a-database)์์ SDK๋ ์ง์ํ๋, fetch๋ง ์ด์ฉํ๋ค. API ํธ์ถ๋ง ์ด์ฉํ์ฌ ๋ง๋ค ์์ . notion์์๋ง ๋ฐ์ดํฐ๋ฅผ ๋ง์ง ์ ์๊ฒ ๋๋ค.
14. [Postman](https://www.postman.com/)์ ์ด์ฉํด์ API๋ฅผ ํ์ธํ  ์ ์๋ค.
15. [Next.js Docs](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)๋ฅผ ๋ณด๊ณ  ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ํ์ด์ง ํ์ผ์ ์ค์ ํ๋ค.
16. [dotenv](https://www.npmjs.com/package/dotenv)๋ก ํ๊ฒฝ ์ค์  ํ์ผ ์ ๊ทผํด ๊ฐ์ ธ์ฌ ์ ์๊ฒ ํ๋ค.
17. [JSON Formatter](https://jsonformatter.curiousconcept.com/)๋ฅผ ์ด์ฉํด์ ํฌ์คํธ๋งจ์ Body Pretty ๋ถ๋ถ์ ๋ณด๊ธฐ ์ฝ๊ฒ ๋ง๋ ๋ค.
18. ๋ฐ์ดํฐ๋ฅผ ๊ฐ๊ณต ๋๋ ์ ๋ ฌํ  ๋ [Sort](https://developers.notion.com/reference/post-database-query-sort)๋ฅผ ๋ณด๊ณ  ์ ์ฉํ๋ฉด ๋๋ค. ํ์คํธ๋ ํฌ์คํธ๋งจ์์ ํ๊ฑฐ๋ `console.log()`๋ฅผ ์ด์ฉํด์ ํ์ธํ๋ฉด ๋๋ค.
19. `.gitignore`ํ์ผ์ ํ๊ฒฝ๋ณ์ ํ์ผ์ธ `.env`๋ฅผ ์ถ๊ฐํ๋ค.
20. [Github](https://github.com/)์์ ์๋ก์ด ๋ฆฌํฌ์งํ ๋ฆฌ ์์ฑ ํ ํฐ๋ฏธ๋์์ ํ๋ก์ ํธ์ ์ฐ๋ํ๋ค.
    > ```bash
    > git remote add origin [์์ฑํ ์ ์ฅ์ ์ฃผ์].git
    > ```
21. [Vercel](https://vercel.com/new)์์ Import Git Repository ํ๋ค.
    > Environment Variables์ NOTION_TOKEN๊ณผ NOTION_DATABASE_ID(Value์ Key ๊ฐ) ๋ฃ๊ณ  Deploy ํ๋ฉด ๋๋ค.

## โจ

๋๋ถ๋ถ docs๋ฅผ ๋ณด๋ฉด์ ์์ํ๋ค ๋ณด๋, docs๋ฅผ ์ฝ๊ณ  ์ ๋ณด๋ฅผ ์ฐพ๋ ๋ฅ๋ ฅ์ด ์กฐ๊ธ ๋์์ง ๋ฏํ๋ค.

์งํ ์ค ๊ฒช์ ์ด๋ ค์!

1. Next.js ๋ฒ์ ์ ๋ฐ๋ฅธ `<Link>` ์ฌ์ฉ.
   - `<Link> <a></a> </Link>` ์ฌ์ฉ ๋ถ๊ฐ, `<Link></Link>`๋ก ๋ณ๊ฒฝ.
   - `import Image from "next/image"` ๊ฐ ์๋ `import Image from "next/legacy/image"`๋ก ๋ฐ๊พธ๋ฉด์ ์ด๋ฏธ์ง์ ๋ํ _%_ ๋จ์์ ์คํ์ผ์ ์ง์ ํ  ์ ์๋ค.
2. ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ํ์ฉ์ผ๋ก ๋ค๋ฅธ ํ์ด์ง๋ฅผ ์ถ๊ฐ.
   - [Filter](https://developers.notion.com/reference/post-database-query-filter) ๊ธฐ๋ฅ์ Docs์์ ์ฐพ์ ์ ์ฉํด, ํ๋ก์ ํธ์ ์คํฐ๋๋ก ๋ถ๋ฅํ์ฌ ํ์ด์ง๋ฅผ ๋ง๋ค์๋ค.
3. Footer ์๋ ๋ ์ง ๋ณ๊ฒฝ.
   - ๋ฉ์๋๋ฅผ ํ์ฉํด์ ์๋์ผ๋ก ๋ ์ง๊ฐ ๋ณ๊ฒฝ๋๋๋ก ๋ง๋ค์๋ค.
     > ```bash
     > {new Date().getFullYear()}
     > ```

์ถ๊ฐํ๊ณ  ์ถ์ ๊ธฐ๋ฅ ๋ํ ์๋ค.

- ๋ธ์์ ์ด์ฉํ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ด๋ ๊ทธ ์์ ๋ด์ฉ๋ ํ์ด์ง ๋ด์์ ๋ณผ ์ ์๊ฒ ํ๋ ๊ฒ์ ๊ตฌํํ ๊น ์๊ฐ ์ค์ด๋ค.

  <!-- > [์ฐธ๊ณ  ์์](https://ppak-coders.teachable.com/p/next-js-portfolio)
  > [์์ฑ ์์ ์์ค ์ฝ๋](https://github.com/TuenTuenna/next-portfolio-tutorial) -->

```toc

```
