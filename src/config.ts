/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "我的网站",
    sites: [
      {
        title: "博客",
        url: "http://blog.tomsite.us.kg/",
        icon: "https://upload-bbs.miyoushe.com/upload/2024/02/01/108449504/faaa640defc3ed559e3e2437b08e0f9c_6821362145244284016.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg",
        color: "#0171CD",
      },
      {
        title: "音乐（PC）",
        description: "为大屏设备设计的音乐网站（音源来自网易云）",
        url: "https://music.tomsite.us.kg/",
        icon: "",
      },
      {
        title: "音乐（全平台）",
        description: "全平台适配的音乐网站（音源来自网易云）",
        url: "https://m.music.tomsite.us.kg/",
        icon: "",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Tom-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.tomsite.us.kg",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://drive.tomsite.us.kg/api/raw/?path=/img/logo.png",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/TomKe123",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "TomKe的网址导航",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
