---
emoji: ๐
title: GitHub ๊พธ๋ฏธ๊ธฐ(2) ๋ด๊ฐ ๋ง๋  README + Github Actions ์ด์ฉํ๊ธฐ
date: '2022-12-17 20:00:00'
author: kimsy
tags: github readme custom overview
categories: git/github
---

## ๋ด ๋ฆฌ๋๋ฏธ ๊พธ๋ฏธ๊ธฐ ๊ณผ์ !

๋ด ๋ฆฌ๋๋ฏธ์ ์์ฑ๋ ๋ชจ์ต! ์ ๋ถ ๊ธฐ๋ก์ผ๋ก ๋จ๊ธฐ๋ ค ํ๋ค๐
![my-readme-00.gif](my-readme-00.gif)

> ๋งํฌ๋ค์ด์ผ๋ก ์์ฑ์ด ๊ฐ๋ฅํ์ง๋ง HTML ์์๋ฅผ ์ถ๊ฐํ๋ค ๋ณด๋ ์ ์ธ์์ด ์ ๋๊ธฐ๋ ํ๊ณ  ์ด๋ฏธ์ง์ ํฌ๊ธฐ ์กฐ์ ์ด ์ด๋ ค์์ ์ ๋ถ HTML๋ก ์์ฑํ๊ฒ ๋์๋ค. _ํน์ ๋ชจ๋ฅด๋ ๋งํฌ๋ค์ด ๋ฒ์ ๋ ๊ฐ์ด ๊ธฐ๋กํด์ผ๊ฒ ๋ค!_
>
> ```bash
> <div align="center">
> ...
> </div>
> ```
>
> `<div align="center">` ํ๊ทธ๋ก ๊ฐ์ธ์ ๊ฐ์ด๋ฐ ์ ๋ ฌ ์ ์ฉํ๋ค

<br />

### [capsule render](https://github.com/kyechan99/capsule-render) : ํค๋ ์ ์ฉ

![my-readme-01-header.gif](my-readme-01-header.gif)

```bash
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=%20Hello,%20World!%20&animation=twinkling&fontSize=40&fontAlignY=40" width="100%" alt="header" />

or

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=%20Hello,%20World!%20&animation=twinkling&fontSize=40&fontAlignY=40)
```

> 1. `width="100%"`๋ฅผ ์ฃผ๋ฉด์ ์ต๋ ํ๋ฉด ํฌ๊ธฐ์ ๋ฐ๋ฅธ ๊ธธ์ด๋ฅผ ์ ์งํ๋๋ก ํ๋ค.
> 2. `type=waving&color=gradient` ํ์์ ์จ์ด๋น์ผ๋ก ์ ํ, ์ปฌ๋ฌ๋ ๊ทธ๋ผ๋์ธํธ๋ฅผ ์ ํํด์ ์๋ก๊ณ ์นจ ์ ๋๋ค์ผ๋ก ๊ทธ๋ผ๋์ธํธ๊ฐ ๋๋๋ก ์ค์ ํ๋ค.
> 3. `animation=twinkling` ์ ๋๋ฉ์ด์์ ์ค์ ํด์ ํ์ดํ์ ์ฌ๋ฏธ๋ฅผ ์คฌ๋ค.

<br />

### [Metrics](https://github.com/lowlighter/metrics/blob/master/source/plugins/isocalendar/README.md) : ์์ด์๋ฉํธ๋ฆญ ์ปค๋ฐ ์บ๋ฆฐํฐ ์ ์ฉ

![my-readme-02-metrics-00.png](my-readme-02-metrics-00.png)

> ์ด ๋ฐฉ๋ฒ์ **github Actions**๋ฅผ ์ด์ฉํด์ผ ํด์ ์๊ฐ๋ณด๋ค ์ค๋ ๊ฑธ๋ ธ๋ค.

1. ์ธํ์์ ํ ํฐ์ ์์ฑํ๋ค.

   ![my-readme-02-metrics-01.png](my-readme-02-metrics-01.png)
   `๐ public access(default scope)`, `read:org`, `read:user`, `read:packages`, `repo` ๋ฅผ ์ ํํด์ ์์ฑํ๋ค.  
   ์ฌ๊ธฐ์ ์ฃผ์ํ  ์ ์ ์ฃผ์ด์ง๋ ํ ํฐ์ ๋จ ํ ๋ฒ ๋ณด์ฌ์ง๊ธฐ ๋๋ฌธ์ ๋ฐ๋ก ๋ณต์ฌํด์ ๋ณด๊ดํด์ผ ํ๋ค.

2. readme repo ์ Settings ํญ > Secrets > Actions ์์ **New repository secret** ์ ํด๋ฆญํ๋ค.

   ![my-readme-02-metrics-02.png](my-readme-02-metrics-02.png)

3. ์ฌ์ง๊ณผ ๊ฐ์ด Name๊ณผ Secret์ ์์ฑํ๋ค. (Secret์๋ ์๊น ์์ฑํ ํ ํฐ์ ์๋ ฅํ๋ค.)

   ![my-readme-02-metrics-03.png](my-readme-02-metrics-03.png)

4. readme repo ์ Actions ํญ > **set up a workflow yourself** ํด๋ฆญ

   ![my-readme-02-metrics-04.png](my-readme-02-metrics-04.png)

5. `metrics.yml` ์ด๋ ์ด๋ฆ์ผ๋ก ์ฝ๋๋ฅผ ์์ฑํ๋ค.

   ```bash
   name: Metrics
   on:
     schedule: [{cron: "0 * * * *"}]
     workflow_dispatch:
     push: {branches: "master" ๋๋ "main"}
   jobs:
     github-metrics:
       runs-on: ubuntu-latest
       permissions:
         contents: write
       steps:
         - uses: lowlighter/metrics@latest
           with:
             token: ${{ secrets.METRICS_TOKEN }}

             user: ์ ์ ๋ค์ ์๋ ฅ
             template: classic
             base: header
             config_timezone: Asia/Seoul
             plugin_isocalendar: yes
             plugin_isocalendar_duration: full-year
   ```

6. ๊ทธ๋ฌ๋ฉด ๋! ๊ทธ ์ดํ ๋งค๋ฒ ์์ฑ๋  _github-metrics.svg_ ํ์ผ์ ๋ฆฌ๋๋ฏธ์ ์๋ ฅํด์ฃผ๋ฉด ๋๋ค.

   ```bash
   <img align="right" src="/github-metrics.svg" width="400" alt="Metrics" />

   or

   ![Metrics](github-metrics.svg)
   ```

   <br />

### [Readme Typing SVG](https://github.com/denvercoder1/readme-typing-svg) : ์๋ธ ํ์ดํ ์ ์ฉ

![my-readme-03-Typing.gif](my-readme-03-Typing.gif)

> ์์ง์ด๋ ํ์คํธ๋ก ์ญ๋์ ์์ ๋ณด์ฌ์ฃผ๋ ํํธ, ์ง๋ฃจํ์ง ์๊ฒ ํด์ฃผ๋ ๊ฑฐ ๊ฐ๋ค.

```bash
<img src="https://readme-typing-svg.demolab.com?font=Gowun+Dodum&pause=1000&center=true&vCenter=true&width=300&lines=Welcome%F0%9F%98%8E;Kimsy's+Github%E2%9C%A8" alt="Typing SVG" />

or

![Typing SVG](https://readme-typing-svg.demolab.com?font=Gowun+Dodum&pause=1000&center=true&vCenter=true&width=300&lines=Welcome%F0%9F%98%8E;Kimsy's+Github%E2%9C%A8)
```

<br />

### [shields](https://shields.io/) : ๋ฐฐ์ง ์ ์ฉ

![my-readme-04-badge.png](my-readme-04-badge.png)

> ๋ฐฐ์ง๋ ๋ ๊ฐ์ง๊ฐ ์๋ค. ๋งํฌ๋ฅผ ์ฐ๊ฒฐํ๋ ๊ฒ๊ณผ ๊ทธ์  ๋ณด์ฌ์ฃผ๋ ๊ฒ์ด๋ค.

1. ๋งํฌ ์ฐ๊ฒฐ

   ```bash
   <a href="https://kim228sy.github.io"><img src="http://img.shields.io/badge/-Tech%20blog-black?style=flat&logo=github&link=https://kim228sy.github.io" /></a>

   or

   [![Tech blog](http://img.shields.io/badge/-Tech%20blog-black?style=flat&logo=github&link=https://kim228sy.github.io)](https://kim228sy.github.io)
   ```

2. ์ผ๋ฐ ๋ฐฐ์ง

   ```bash
   <img src="https://img.shields.io/badge/Html-E34F26?&style=for-the-badge&logo=HTML5&logoColor=white" />

   or

   ![HTML5](https://img.shields.io/badge/Html-E34F26?&style=for-the-badge&logo=HTML5&logoColor=white)
   ```

   <br />

## โจ

์ด๋ ๊ฒ ๋ด๊ฐ ํ์ฌ ์ฌ์ฉํ๊ณ  ์๋ ๋ฆฌ๋๋ฏธ๋ฅผ ์์ธํ๊ฒ ๋ค๋ค๋ค. ๋ค์ํ ๊พธ๋ฏธ๊ธฐ๊ฐ ์กด์ฌํ๋ ๊ฒ์์ ํตํด์ ์ถ๊ฐ๋ก ๊ฐ์ถฐ๋ ์ข์ ๋ฏํ๋ค๐

<br/>

```toc

```
