---
emoji: ๐ฎ
title: GitHub ์ด๋ฆ, ์ด๋ฉ์ผ ๋ณ๊ฒฝ
date: '2022-12-06 20:00:00'
author: kimsy
tags: github username change
categories: git/github
---

## ๐ค ๋ด Github ์ด๋ฆ์ด ์ ๋ง์์ ์ ๋๋๋ฐ?

๊ธํ๊ฒ github์ ์ฐ๋ํด์ ํ๋ค ๋ณด๋ ์ ์ฐ์ง ์๋ Gmail์ ์ฐ๊ฒฐํ๋ค. ์กฐ๊ธ ์ฌ์ ๊ฐ ์๊ฒผ์ผ๋ _๊ณ ์ณ๋ณผ๊น_ ํ๋ค.

> ๋ด๊ฐ ๋ณ๊ฒฝํ๊ณ ์ ํ๋ ๊ฒ
>
> 1. username
> 2. email

### Github ์ฌ์ฉ์ ์ด๋ฆ / ์ด๋ฉ์ผ ๋ณ๊ฒฝ

> [GitHub Docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) ์ฐธ๊ณ 

**1. ํ๋กํ ์ฌ์ง ํด๋ฆญ ํ Settings ํด๋ฆญ**

![1-userbar-account-settings.jpg](1-userbar-account-settings.jpg)

**2. Account ํด๋ฆญ ํ Change username ํด๋ฆญ**

![2-settings-change-username.jpg](2-settings-change-username.jpg)

**3. ์ฌ์ฉ์ ์ด๋ฆ ๋ณ๊ฒฝ์ ๋ํ ๊ฒฝ๊ณ  ํ์ธ ํ I understand, let's change my username ํด๋ฆญ**

![3-settings-change-username-warning-button.jpg](3-settings-change-username-warning-button.jpg)

**4. ์๋ก์ด ์ฌ์ฉ์ ์ด๋ฆ ์๋ ฅ ํ Change my username ํด๋ฆญ**

![4-settings-change-username-enter-new-username.jpg](4-settings-change-username-enter-new-username.jpg)

**5. Emails ํด๋ฆญ ํ Add email address ์๋ ฅ/Add ํด๋ฆญ, Primary email address ์ ํ/Save ํด๋ฆญ**

![5-settings-change-email.jpg](5-settings-change-email.jpg)

> ์ด๋ฌ๋ฉด github ์์์ username๊ณผ email์ ๋ณ๊ฒฝํ๊ฒ ๋๋ค.
> ๊ทธ๋ฐ๋ฐ ์ฐ๋ฆฌ๋ git ๋ ์ฌ์ฉ ์ค์ด๋ค. git์ username๊ณผ email์ ๋ณ๊ฒฝํ์!

### Git ์ฌ์ฉ์ ์ด๋ฆ / ์ด๋ฉ์ผ ๋ณ๊ฒฝ

git ๊ฐ์ ๊ฒฝ์ฐ, *์ปดํจํฐ(local)์ ๋ชจ๋  ๋ฆฌํฌ์งํ ๋ฆฌ์ ๋ํ ์ค์ *๊ณผ *๋จ์ผ ๋ฆฌํฌ์งํ ๋ฆฌ์ ๋ํ ์ค์ *์ด ์๋ค. ํ์์ ๋ฐ๋ผ ๊ณต์ ๋ฌธ์๋ฅผ ํ์ธํ๊ณ  ์ค์ ํ๋ฉด ๋๋ค.

> [GitHub Docs](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git) ์ฐธ๊ณ 

#### 1. ๋จ์ผ ๋ฆฌํฌ์งํ ๋ฆฌ์ ๋ํ ๋ณ๊ฒฝ

```bash
// ํฐ๋ฏธ๋์์ ๋ณ๊ฒฝํ๊ณ  ์ถ์ ๋ฆฌํฌ์งํ ๋ฆฌ์ ์์น๋ก ์ด๋

git config user.name [๋ณ๊ฒฝํ  ๊ณ์  ์ด๋ฆ]

git config user.email [๋ณ๊ฒฝํ  ๊ณ์  ์ด๋ฉ์ผ]
```

#### 2. ๋ชจ๋  ๋ฆฌํฌ์งํ ๋ฆฌ์ ๋ํ ๋ณ๊ฒฝ

```bash
// ํฐ๋ฏธ๋ ์คํ

git config user.name // ํ์ฌ ์ด๋ฆ ํ์ธ

git config user.email // ํ์ฌ ์ด๋ฉ์ผ ํ์ธ

git config --global user.name [๋ณ๊ฒฝํ  ๊ณ์  ์ด๋ฆ]

git config --global user.email [๋ณ๊ฒฝํ  ๊ณ์  ์ด๋ฉ์ผ]
```

## ๐ซข ๋๋ ๊ฒ ์๋๋ค! ๋ก์ปฌ์์ github ์ฃผ์ ๋ณ๊ฒฝ

github์์ username์ ๋ณ๊ฒฝํด์ ๋ฆฌํฌ์งํ ๋ฆฌ ์ฃผ์๋ค์ด ์ฃ๋ค ๋ฐ๋์ด์๋ค. ๋ก์ปฌ์์ ์๋์ผ๋ก ๋ณ๊ฒฝ๋์ง ์์ผ๋ ์ฐ๋ฆฌ๊ฐ ์ง์  ๋ฐ๊ฟ์ผ ํ๋ค.

### ๋ก์ปฌ ์ ์ฅ์์์ ์ฃผ์ ๋ณ๊ฒฝ

```bash
// ํ์ฌ ์ ์ฅ์ ์ฃผ์๋ฅผ ํ์ธ
git remote -v

// ์ ์ฅ์ ์ฃผ์ ๋ณ๊ฒฝ
git remote set-url origin [์ฐ๊ฒฐํ  ์ฃผ์]

// push๋ pull, fetch๋ฅผ ํ  ๊ฒฝ์ฐ username๊ณผ password๋ฅผ ๋ค์ ์๋ ฅํด์ผ ํ๋ค
```

> ๋ณ๊ฒฝ๋ ๋ฆฌํฌ์งํ ๋ฆฌ๋ฅผ ์๋ก `clone` ๋ฐ๋ ๋ฐฉ๋ฒ์ผ๋ก๋ ๋๋ค.

## โจ

์ ์์ ์ผ๋ก username๊ณผ email์ ๋ณ๊ฒฝํ๋ค๐คญ

```toc

```
