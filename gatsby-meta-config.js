module.exports = {
  title: `Kimsy's Record✨`,
  description: `별의 기록✨`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://kim228sy.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `kim228sy/kim228sy.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Kimsy`,
    bio: {
      role: `개발자`,
      description: ['어제보다 나은', '사람에 가치를 두는', '이롭게 만들고 싶은'],
      thumbnail: 'seedling.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/kim228sy`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `kim228sy@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.07 ~',
        activity: '개발 공부 시작',
      },
      {
        date: '2022.09 ~ 2022.10',
        activity: 'CAMO(커뮤니티 웹) 작업',
        links: {
          post: '/project-CaMo',
        },
      },
      {
        date: '2022.12 ~',
        activity: 'Github 블로그 운영',
        links: {
          post: '/blog-starter-zoomkoding',
          github: 'https://github.com/kim228sy/kim228sy.github.io',
          demo: 'https://kim228sy.github.io/',
        },
      },
      {
        date: '2022.12',
        activity: 'HI We(후원 및 커뮤니티 웹) 작업',
        links: {
          post: '/project-HiWe',
        },
      },
      {
        date: '2022.12',
        activity: '웹 포트폴리오 작업',
        links: {
          post: '/project-NextjsPortfolio',
          demo: 'https://nextjs-portfolio-self-sy.vercel.app/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'CAMO(Cafe Moment)',
        description:
          '카모(CAMO, Cafe Moment)는 카페에서의 특별한 순간을 공유하기 위한 커뮤니티를 생각하고 만들었습니다.',
        techStack: ['React', 'Next.js', 'Typescript', 'Emotion'],
        thumbnailUrl: 'camo-logo.webp',
        links: {
          post: '/project-CaMo',
          // github: '',
          // demo: '',
        },
      },
      {
        title: 'HI We',
        description:
          '하이 위(HI We)는 후원이 필요한 동물 및 단체와 후원자를 연결하는 웹 사이트입니다. 후원 페이지에서 후원받을 친구에 대한 정보를 작성하면, 포인트를 충전 및 결제하는 시스템으로 후원할 수 있습니다. 또한, 익명으로 교류하는 커뮤니티 페이지도 존재합니다. 댓글의 형식으로 후원페이지에서는 질문을, 커뮤니티페이지에서는 댓글로 소통할 수 있습니다.',
        techStack: ['React', 'Next.js', 'Typescript', 'Emotion'],
        thumbnailUrl: 'hi-we-main.webp',
        links: {
          post: '/project-HiWe',
          // github: '',
          // demo: '',
        },
      },
    ],
  },
};
