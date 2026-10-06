/* ============================================================================
   PORTFOLIO CONTENT
   ---------------------------------------------------------------------------
   All page copy, image paths and links live here. The layout and interaction
   code in app.js consume this object directly.
   ==========================================================================*/

window.PORTFOLIO = {
  brand: {
    name: "YAO LU",
    mark: "姚璐",
    wordmark: "YAO LU",
    wordmarkFooter: "YAO LU",
    year: "© 2026",
    version: "43 WORKS"
  },

  nav: [
    { label: "首页", index: "01", href: "#top" },
    { label: "AI 视频", index: "02", href: "#ai-video" },
    { label: "剪辑", index: "03", href: "#editing" },
    { label: "作品", index: "04", href: "#portfolio" },
    { label: "关于", index: "05", href: "#about" },
    { label: "联系", index: "06", href: "#contact" }
  ],

  badge: {
    image: "assets/img/work/posters/poster-03.jpg",
    title: "Student Portfolio",
    name: "姚璐 / YAO LU",
    role: "上海"
  },

  hero: {
    image: "assets/img/video/ai-portfolio.jpg",
    video: "assets/video/ai/ai-portfolio.mp4",
    leadLines: [
      "从 AI 影像与视频剪辑，",
      "到海报、插画与漫画，",
      "用画面完成完整表达。"
    ],
    cta: { label: "浏览作品", href: "#portfolio" },
    disciplines: ["01/ AI 视频", "剪辑 / Editing", "视觉设计 / Visual"]
  },

  aiVideos: {
    index: "01",
    label: "AI 视频",
    items: [
      {
        id: "01",
        title: "沙海行者",
        category: "首屏视频 · AI 影像",
        meta: "01:30 / 16:9",
        src: "assets/video/ai/ai-portfolio.mp4",
        poster: "assets/img/video/ai-portfolio.jpg",
        layout: "wide"
      },
      {
        id: "02",
        title: "月夜山河",
        category: "AI 视频 · 场景生成",
        meta: "00:58 / 16:9",
        src: "assets/video/ai/ai-1.mp4",
        poster: "assets/img/video/ai-01.jpg",
        layout: "landscape"
      },
      {
        id: "03",
        title: "云海日出",
        category: "AI 视频 · 镜头运动",
        meta: "02:06 / 16:9",
        src: "assets/video/ai/ai-2.mp4",
        poster: "assets/img/video/ai-02.jpg",
        layout: "landscape"
      }
    ]
  },

  about: {
    index: "03",
    label: "关于我",
    statement: [
      "A personal archive",
      "of posters, characters",
      "and visual storytelling."
    ],
    image: "assets/img/work/posters/poster-05.jpg",
    cta: { label: "查看精选", href: "#portfolio" },
    notes: [
      {
        tag: "(海报)",
        text: "用版式、色彩与主次关系，把主题压缩成一张可以直接被看见和记住的画面。"
      },
      {
        tag: "(插画)",
        text: "从人物神态到场景光影，保持造型、情绪与叙事之间的平衡。"
      },
      {
        tag: "(漫画)",
        text: "通过分镜、对白和节奏，把零散画面整理成完整的阅读体验。"
      }
    ]
  },

  clients: [
    "平面海报",
    "Bilibili 封面",
    "角色插画",
    "漫画分镜",
    "视觉叙事",
    "图像构成"
  ],

  portfolio: {
    index: "04",
    label: "精选作品",
    title: "SELECTED / 08",
    cta: { label: "查看全部", href: "#archive" },
    seeAll: { label: "漫画归档 (19)", href: "#archive" },
    seeAllImage: "assets/img/work/posters/poster-09.jpg",
    projects: [
      { id: "01", name: "萌宠", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-01.jpg", layout: "portrait" },
      { id: "02", name: "这场雨", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-02.jpg", layout: "portrait" },
      { id: "03", name: "全民运动", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-03.jpg", layout: "portrait" },
      { id: "04", name: "五星干员 阿米娅", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-04.jpg", layout: "portrait" },
      { id: "05", name: "我的宝藏家乡", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-05.jpg", layout: "portrait" },
      { id: "06", name: "人间自然", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-06.jpg", layout: "portrait" },
      { id: "07", name: "东方之美", category: "Poster", year: "© 2024", image: "assets/img/work/posters/poster-07.jpg", layout: "portrait" },
      { id: "08", name: "元气日常", category: "Poster", year: "© 2025", image: "assets/img/work/posters/poster-08.jpg", layout: "portrait" }
    ]
  },

  services: {
    index: "05",
    label: "创作方向",
    statement: [
      "Poster design, illustration",
      "and comics - one visual",
      "language across media."
    ],
    image: "assets/img/work/posters/poster-04.jpg",
    cta: { label: "查看频道封面", href: "#pricing" },
    items: [
      {
        id: "01",
        title: "平面视觉",
        subtitle: "Poster & Visual",
        text: "围绕主题建立清晰的视觉层级，用标题、图像和色彩完成有信息的画面。",
        image: "assets/img/work/covers/cover-01.jpg"
      },
      {
        id: "02",
        title: "角色插画",
        subtitle: "Character & Scene",
        text: "从人物状态到场景氛围，保留手绘感与情绪，同时让画面关系更完整。",
        image: "assets/img/work/posters/poster-04.jpg"
      },
      {
        id: "03",
        title: "漫画叙事",
        subtitle: "Panels & Story",
        text: "用镜头、留白和对白控制阅读节奏，把故事拆成连续而清楚的页面。",
        image: "assets/img/work/comics/comic-04.jpg"
      }
    ]
  },

  pricing: {
    index: "06",
    label: "Bilibili 封面",
    plans: [
      {
        name: "2025 中国 CLE 版权展",
        tagline: "展会活动封面 / 16:9",
        image: "assets/img/work/covers/cover-01.jpg",
        meta: "Cover 01",
        dark: false
      },
      {
        name: "再度觉醒？",
        tagline: "影视解说视频封面 / 16:9",
        image: "assets/img/work/covers/cover-02.jpg",
        meta: "Cover 02",
        dark: true
      },
      {
        name: "初音未来 × Dydo 联动",
        tagline: "品牌联动内容封面 / 16:9",
        image: "assets/img/work/covers/cover-03.jpg",
        meta: "Cover 03",
        dark: false
      },
      {
        name: "奥特曼 × 麦当劳联动",
        tagline: "热点内容封面 / 16:9",
        image: "assets/img/work/covers/cover-04.jpg",
        meta: "Cover 04",
        dark: false
      }
    ]
  },

  illustrations: {
    index: "07",
    label: "插画",
    items: [
      {
        title: "人物速写",
        meta: "Character Study / 2026",
        image: "assets/img/work/drawings/drawing-01.jpg"
      },
      {
        title: "篮球少年",
        meta: "Scene Illustration / 2026",
        image: "assets/img/work/drawings/drawing-02.jpg"
      },
      {
        title: "Glo Academy",
        meta: "Character Illustration / 2026",
        image: "assets/img/work/drawings/drawing-03.jpg"
      }
    ]
  },

  archive: {
    index: "08",
    label: "漫画 / Comics",
    note: "19 Pages · 点击任意页面全屏阅读",
    pages: [
      "assets/img/work/comics/comic-01.jpg",
      "assets/img/work/comics/comic-02.jpg",
      "assets/img/work/comics/comic-03.jpg",
      "assets/img/work/comics/comic-04.jpg",
      "assets/img/work/comics/comic-05.jpg",
      "assets/img/work/comics/comic-06.jpg",
      "assets/img/work/comics/comic-07.jpg",
      "assets/img/work/comics/comic-08.jpg",
      "assets/img/work/comics/comic-09.jpg",
      "assets/img/work/comics/comic-10.jpg",
      "assets/img/work/comics/comic-11.jpg",
      "assets/img/work/comics/comic-12.jpg",
      "assets/img/work/comics/comic-13.jpg",
      "assets/img/work/comics/comic-14.jpg",
      "assets/img/work/comics/comic-15.jpg",
      "assets/img/work/comics/comic-16.jpg",
      "assets/img/work/comics/comic-17.jpg",
      "assets/img/work/comics/comic-18.jpg",
      "assets/img/work/comics/comic-19.jpg"
    ]
  },

  editing: {
    index: "02",
    label: "视频剪辑",
    items: [
      {
        id: "01",
        title: "电影解说剪辑",
        category: "长视频 · 节奏与解说",
        meta: "14:21 / 16:9",
        src: "assets/video/edit/film-commentary.mp4",
        poster: "assets/img/video/edit-film-commentary.jpg",
        layout: "wide"
      },
      {
        id: "02",
        title: "口播剪辑 01",
        category: "口播 · 字幕与包装",
        meta: "00:14 / 9:16",
        src: "assets/video/edit/oral-1.mp4",
        poster: "assets/img/video/edit-oral-1.jpg",
        layout: "portrait"
      },
      {
        id: "03",
        title: "口播剪辑 02",
        category: "口播 · 产品信息",
        meta: "00:22 / 9:16",
        src: "assets/video/edit/oral-2.mp4",
        poster: "assets/img/video/edit-oral-2.jpg",
        layout: "portrait"
      },
      {
        id: "04",
        title: "口播剪辑 03",
        category: "口播 · 卖点提炼",
        meta: "00:24 / 3:4",
        src: "assets/video/edit/oral-3.mp4",
        poster: "assets/img/video/edit-oral-3.jpg",
        layout: "portrait"
      },
      {
        id: "05",
        title: "声音设计",
        category: "氛围 · 音画关系",
        meta: "00:38 / 16:9",
        src: "assets/video/edit/sound-design.mp4",
        poster: "assets/img/video/edit-sound-design.jpg",
        layout: "wide"
      }
    ]
  },

  stats: {
    index: "09",
    label: "创作数据",
    items: [
      { value: "9", suffix: " 幅", label: "平面海报", text: "从主题标题到图像组合，练习不同类型的完整海报画面。" },
      { value: "4", suffix: " 张", label: "频道封面", text: "适配 Bilibili 16:9 视频封面，强化标题与主视觉识别。" },
      { value: "3", suffix: " 幅", label: "角色插画", text: "围绕人物、场景与情绪完成个人绘画与插画练习。" },
      { value: "19", suffix: " 页", label: "漫画页面", text: "包含分镜、对白和连续画面，可在漫画归档中全屏阅读。" }
    ]
  },

  articles: {
    index: "10",
    label: "近期作品",
    items: [
      { id: "001", title: "卧云", category: "Poster", year: "© 2025", image: "assets/img/work/posters/poster-09.jpg", href: "assets/img/work/posters/poster-09.jpg" },
      { id: "002", title: "元气日常", category: "Poster", year: "© 2025", image: "assets/img/work/posters/poster-08.jpg", href: "assets/img/work/posters/poster-08.jpg" },
      { id: "003", title: "2025 中国 CLE", category: "Bilibili Cover", year: "© 2025", image: "assets/img/work/covers/cover-01.jpg", href: "assets/img/work/covers/cover-01.jpg" },
      { id: "004", title: "夜行片段", category: "Comic", year: "© 2026", image: "assets/img/work/comics/comic-15.jpg", href: "assets/img/work/comics/comic-15.jpg" }
    ]
  },

  faq: {
    index: "11",
    label: "作品说明",
    showreel: {
      image: "assets/img/work/covers/cover-03.jpg",
      label: "查看",
      caption: "频道封面组",
      href: "assets/img/work/covers/cover-03.jpg"
    },
    items: [
      { q: "网站收录了哪些作品？", a: "目前包含 9 幅平面海报、4 张 Bilibili 视频封面、3 幅个人绘画和 19 页漫画内容。" },
      { q: "漫画可以完整阅读吗？", a: "可以。点击“漫画归档”中的任意一行即可打开全屏阅读器，并使用左右按钮或方向键翻阅。" },
      { q: "作品图片能否放大查看？", a: "可以。作品卡片、频道封面和漫画缩略图都支持点击后全屏查看，电脑端可按 Esc 关闭。" },
      { q: "页面内容如何继续更新？", a: "所有文案和图片路径都集中在 content.js 中，新增图片放入 assets/img/work 对应目录后即可继续扩展。" }
    ]
  },

  contact: {
    heading: "和姚璐一起完成下一张画面",
    email: "15212214457@163.com",
    phone: "15212214457",
    cta: { label: "发送邮件", href: "mailto:15212214457@163.com" },
    nav: [
      { label: "首页", index: "01", href: "#top" },
      { label: "AI 视频", index: "02", href: "#ai-video" },
      { label: "剪辑", index: "03", href: "#editing" },
      { label: "作品", index: "04", href: "#portfolio" },
      { label: "关于", index: "05", href: "#about" },
      { label: "联系", index: "06", href: "#contact" }
    ]
  }
};
