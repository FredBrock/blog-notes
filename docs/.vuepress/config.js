const sidebar = require('./sidebar.js')
const config = {
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
      indexName: 'notes'
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'FredBrock/blog-notes',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'FredBrock/blog-notes',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    sidebar,
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
      },
      {
        text: 'Github',
        link: 'https://github.com/FredBrock'
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.themeConfig.algolia = {
    apiKey: '25626fae796133dc1e734c6bcaaeac3c',
    indexName: 'docsearch'
  }
}

console.log(config)
module.exports = config
