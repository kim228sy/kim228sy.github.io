---
emoji: 📂
title: Next.js로 만드는 Portfolio 사이트
date: '2022-12-28 20:00:00'
author: Kimsy
tags: study web notion
categories: study
---

## 😏 포트폴리오 사이트를 만들어 보자!

Next.js를 공부하고자 알아보다가 포트폴리오 사이트를 만들고, 조금 변경도 해보았다.

> [완성한 포트폴리오 사이트](https://nextjs-portfolio-self-sy.vercel.app/)

## 기술 스택

- Next.js
- Lottie Animation
- Notion API integration
- TailwindCSS
- Vercel deploy

## 만드는 과정

CSR가 아닌, 검색엔진 최적화인 SSR을 지원하는 Next.js를 이용해서 만든다.

1.  [Next.js docs](https://nextjs.org/docs/getting-started)의 명령어를 터미널에 입력해 설치한다. (Typescript를 사용하려면 `--typescript`를 뒤에 추가하면 된다.)
2.  `npm run dev`명령어로 로컬에서 화면이 어떻게 그려지는지 확인한다.
3.  pages 폴더 > index 파일 내 `Head` 부분은 메타데이터 부분으로 브라우저상에 보이는 부분은 아니다.
4.  [tailwindcss docs](https://tailwindcss.com/docs/installation)의 명령어를 이용해 설치한다. 보다 쉽게 CSS를 적용하는 도구이다.
    > `npm install -D autoprefixer` 추가 설치 필요하다.
5.  [TAILBLOCKS](https://tailblocks.cc/)에서 레이아웃 및 디자인을 보고 선택해서 적용한다.
6.  [LottieFiles](https://lottiefiles.com/)에서 적당한 Lottie animation을 다운로드받는데, *Lottie JSON*파일로 받아 public 폴더에 넣는다.
7.  [React Lottie player](https://www.npmjs.com/package/react-lottie-player)에서 설치하고, 코드 복사하고 파일로 따로 만들어 저장한다.
8.  페이지 이동은 `태그가 아닌` 태그를 이용해서 처리한다.
9.  [next-themes](https://github.com/pacocoursey/next-themes)를 이용해서 사이트의 다크모드를 적용한다.
10. [Notion](https://www.notion.so/)의 데이터베이스를 포트폴리오 데이터를 넣는 용도로 만든다.
11. [Notion API](https://www.notion.so/my-integrations/)를 만들어서 위에서 만든 데이터베이스와 연결을 한다.

    > 데이터베이스 오른쪽 상단의 … 클릭  
    > 맨 아래 connections 클릭  
    > add connections에서 my-integrations에 본인 이름 찾은 후 추가 연결

12. 루트 위치에서 `.env` 파일을 만들고 그 안에 `NOTION_TOKEN=""`, `NOTION_DATABASE_ID=""`를 입력한다.

    > Notion DateBase ID는 만든 데이터베이스의 open as pull page(전체 페이지로 열기) 하면 _notion.so_ 이후, _?_ 전까지가 ID이다.  
    > Notion Token은 API 만들면서 발급받은 걸 사용한다.

13. [Retrieve a database](https://developers.notion.com/reference/retrieve-a-database)에서 SDK도 지원하나, fetch만 이용한다. API 호출만 이용하여 만들 예정. notion에서만 데이터를 만질 수 있게 된다.
14. [Postman](https://www.postman.com/)을 이용해서 API를 확인할 수 있다.
15. [Next.js Docs](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)를 보고 데이터를 가져올 페이지 파일에 설정한다.
16. [dotenv](https://www.npmjs.com/package/dotenv)로 환경 설정 파일 접근해 가져올 수 있게 한다.
17. [JSON Formatter](https://jsonformatter.curiousconcept.com/)를 이용해서 포스트맨의 Body Pretty 부분을 보기 쉽게 만든다.
18. 데이터를 가공 또는 정렬할 때 [Sort](https://developers.notion.com/reference/post-database-query-sort)를 보고 적용하면 된다. 테스트는 포스트맨에서 하거나 `console.log()`를 이용해서 확인하면 된다.
19. `.gitignore`파일에 환경변수 파일인 `.env`를 추가한다.
20. [Github](https://github.com/)에서 새로운 리포지토리 생성 후 터미널에서 프로젝트와 연동한다.
    > ```bash
    > git remote add origin [생성한 저장소 주소].git
    > ```
21. [Vercel](https://vercel.com/new)에서 Import Git Repository 한다.
    > Environment Variables에 NOTION_TOKEN과 NOTION_DATABASE_ID(Value엔 Key 값) 넣고 Deploy 하면 된다.

## ✨

대부분 docs를 보면서 작업했다 보니, docs를 읽고 정보를 찾는 능력이 조금 나아진 듯하다.

진행 중 겪은 어려움!

1. Next.js 버전에 따른 `<Link>` 사용.
   - `<Link> <a></a> </Link>` 사용 불가, `<Link></Link>`로 변경.
   - `import Image from "next/image"` 가 아닌 `import Image from "next/legacy/image"`로 바꾸면서 이미지에 대한 _%_ 단위의 스타일을 지정할 수 있다.
2. 데이터베이스의 활용으로 다른 페이지를 추가.
   - [Filter](https://developers.notion.com/reference/post-database-query-filter) 기능을 Docs에서 찾아 적용해, 프로젝트와 스터디로 분류하여 페이지를 만들었다.
3. Footer 자동 날짜 변경.
   - 메서드를 활용해서 자동으로 날짜가 변경되도록 만들었다.
     > ```bash
     > {new Date().getFullYear()}
     > ```

추가하고 싶은 기능 또한 있다.

- 노션을 이용한 데이터베이스이니 그 안의 내용도 페이지 내에서 볼 수 있게 하는 것을 구현할까 생각 중이다.

  <!-- > [참고 영상](https://ppak-coders.teachable.com/p/next-js-portfolio)
  > [완성 예시 소스 코드](https://github.com/TuenTuenna/next-portfolio-tutorial) -->

```toc

```
