import { defineConfig } from 'vitepress';
// https://vitepress.dev/reference/site-configd
export default defineConfig({
  head: [["link", { rel: "icon", href: "/Vue.png" }]],
  title: "Vue.js",
  description: "A VitePress Site",
  base: "/Test/",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2,6],
    logo: '/Vue.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '文档', 
        activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
        items:[
        {text: '首页', link: '/'},
        {text: '深度指南', link: 'https://cn.vuejs.org/guide/introduction.html'},
        {text: '互动教程', link: 'https://cn.vuejs.org/tutorial/'},
        {text: '实例', link: 'https://cn.vuejs.org/examples/#hello-world'},        
        { text: '快速上手', link: 'https://cn.vuejs.org/guide/quick-start.html' },
        { text: '术语表', link: 'https://cn.vuejs.org/glossary/' },
        { text: '错误码参照表', link: 'https://cn.vuejs.org/error-reference/' },
        { text: 'Vue2文档', link: 'https://v2.cn.vuejs.org/' },
        { text: '从Vue2迁移', link: 'https://v3-migration.vuejs.org/' },
      ] },
      { text: 'API', link: 'https://cn.vuejs.org/api/' },
      { text: '演练场', link: 'https://play.vuejs.org/'},
      {text: '生态系统', items:[{
        text: '资源',
        items:[
          {text: '合作伙伴',link:'https://cn.vuejs.org/partners/'},
          {text: '主题',link:'https://cn.vuejs.org/ecosystem/themes.html'},
          {text: 'UI组件',link:'https://ui-libs.vercel.app/'},
          {text: '证书',link:'https://certificates.dev/vuejs/?ref=vuejs-nav'},
          {text: '找工作',link:'https://vuejobs.com/?ref=vuejs'},
          {text: 'T-Shirt商店',link:'https://vue.threadless.com/'},
        ]
      },
      {
        text:'官方库', 
        items:[
          {text:'Vue Router', link:'https://router.vuejs.org/zh/'},
          {text:'Pinia', link:'https://pinia.vuejs.org/zh/'},
          {text:'工具链指南', link:'https://cn.vuejs.org/guide/scaling-up/tooling.html'}
        ]
      },
      {
        text:'视频课程',
        items:[
          {text:'Vue Mastery', link:'https://www.vuemastery.com/courses/'},
          {text:'Vue School', link:'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'},
        ]
      },
      {
        text:'帮助',
        items:[
          {text: 'Discord聊天室',link:'https://discord.com/invite/HBherRA'},
          {text: 'GitHub论坛',link:'https://github.com/orgs/vuejs/discussions'},
          {text: 'DEV Community',link:'https://dev.to/t/vue'},
        ]
      },
      {
        text:'动态',
        items:[
          {text:'博客', link:'https://blog.vuejs.org/'},
          {text:'Twitter', link:'https://twitter.com/vuejs'},
          {text:'活动', link:'https://events.vuejs.org/'},
          {text:'新闻简报', link:'https://cn.vuejs.org/ecosystem/newsletters.html'},
        ]
      }
      ]},
      { text: '关于', items:[
        {text: '常见问题', link: 'https://cn.vuejs.org/about/faq.html'},
        {text: '团队', link: 'https://cn.vuejs.org/about/team.html'},
        {text: '版本发布', link: 'https://cn.vuejs.org/about/releases.html'},
        {text: '社区指南', link: 'https://cn.vuejs.org/about/community-guide.html'},
        {text: '行为规范', link: 'https://cn.vuejs.org/about/coc.html'},
        {text: '隐私政策', link: 'https://cn.vuejs.org/about/privacy.html'},
        {text: '纪录片', link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'}
      ]},
      {text: '赞助', link:'https://cn.vuejs.org/sponsor/'},
      {text: '合作伙伴', link:'https://cn.vuejs.org/partners/'}
    ],
    sidebar: [
      {
        text: '实例1',
        items: [
          { text: 'Markdown演示1', link: '/markdown-examples' },
          { text: '运行API演示1', link: '/api-examples' }
        ]
      },
      {
        text: '实例2',
        items: [
          { text: 'Markdown演示2', link: '/markdown-examples' },
          { text: '运行API演示2', link: '/api-examples' }
        ]
      }
    ],
    
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/vue' },
      { 
        icon: {
          svg: '<svg t="1728914882454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5054" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="5055"></path></svg>'
        },
        link: "https://gitee.com/", 
      }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            }
          }
        }
      }
    },
    localeLinks: [
      {
        link: 'https://cn.vuejs.org',
        text: '简体中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-cn'
      },
      {
        link: 'https://ja.vuejs.org',
        text: '日本語',
        repo: 'https://github.com/vuejs-translations/docs-ja'
      },
      {
        link: 'https://ua.vuejs.org',
        text: 'Українська',
        repo: 'https://github.com/vuejs-translations/docs-uk'
      },
      {
        link: 'https://fr.vuejs.org',
        text: 'Français',
        repo: 'https://github.com/vuejs-translations/docs-fr'
      },
      {
        link: 'https://ko.vuejs.org',
        text: '한국어',
        repo: 'https://github.com/vuejs-translations/docs-ko'
      },
      {
        link: 'https://pt.vuejs.org',
        text: 'Português',
        repo: 'https://github.com/vuejs-translations/docs-pt'
      },
      {
        link: 'https://bn.vuejs.org',
        text: 'বাংলা',
        repo: 'https://github.com/vuejs-translations/docs-bn'
      },
      {
        link: 'https://it.vuejs.org',
        text: 'Italiano',
        repo: 'https://github.com/vuejs-translations/docs-it'
      },
      {
        link: 'https://fa.vuejs.org',
        text: 'فارسی',
        repo: 'https://github.com/vuejs-translations/docs-fa'
      },
      {
        link: 'https://ru.vuejs.org',
        text: 'Русский',
        repo: 'https://github.com/translation-gang/docs-ru'
      },
      {
        link: 'https://cs.vuejs.org',
        text: 'Čeština',
        repo: 'https://github.com/vuejs-translations/docs-cs'
      },
      {
        link: 'https://zh-hk.vuejs.org',
        text: '繁體中文',
        repo: 'https://github.com/vuejs-translations/docs-zh-hk'
      },
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }
    ],
    footer: {
      copyright: '中国区铂金赞助',
    },
  },
});
