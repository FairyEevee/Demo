import { defineConfig } from 'vitepress';
// https://vitepress.dev/reference/site-configd
export default defineConfig({
  head: [["link", { rel: "icon", href: "/美短.png" }]],
  title: "我的厉害文档",
  description: "A VitePress Site",
  base: "/Test/",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2,6],
    logo: '/美短.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '家', items:[
        {text: '首页', link: '/'},
        {text: 'markdown实例', link: '/markdown-examples'}
      ] },
      { text: '实例', link: '/markdown-examples' }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
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
    footer: {
      copyright: 'Copyright © 2024 网易',
    },
  },
});
