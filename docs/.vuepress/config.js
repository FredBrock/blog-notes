module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/docs/.vuepress/'
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/active-header-links'
  ],
  base: '/blog-notes/',
  title: 'Fred-Brock 前端笔记',
  description: '分享一些关于前端的心得',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.png'
      }
    ]
  ],
  themeConfig: {
    algolia: {
      apiKey: '3c1ce93af8e207632777218a53a83678',
      indexName: 'prod_notes'
    },
    repo: 'https://github.com/FredBrock',
    repoLabel: 'Github',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    sidebar: true,
    // sidebar: [
    //   {
    //     title: '前端三剑客',
    //     collapsable: true,
    //     children: ['/CSS/', '/HTML/', '/JavaScript/']
    //   },
    //   {
    //     title: 'Vue.js',
    //     collapsable: false,
    //     children: ['/Vue/', '/Vue/Vuex.md', '/Vue/Vue-Router.md']
    //   }
    // ],
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '开发环境配置',
        items: [
          {
            text: '开发工具',
            items: [
              { text: 'VSCode', link: '/environment/vscode' },
              {
                text: 'Webstorm',
                link: '/environment/webstorm'
              },
              {
                text: 'PhpStorm',
                link: '/environment/phpstorm'
              }
            ]
          },
          {
            text: 'software-list',
            link: '/environment/software-list'
          }
        ]
      }
    ]
  }
}
