# 注释的用途？

在web 开发中，很多人很容易忽视的一部分就是代码注释，特别是对于创业公司那种独挡一面的大师级前端开发者（😄。），代码可能会惨不忍睹 ，那么如何让 web一家三口（style,html, javascript）整整齐齐的呢。

- 功能或者小部件注释 (Widgets,Posts)

- 区域注释（Global，Index , About）

- HTML 布局结构注释 (Header,Body,Fonter,Slide,模板用例)

- 组件(组件使用穿参，依赖)

- css主题信息（Version，Description，Name， Date）

- 版权信息

  

# 注释常规写法

######  一.  css 写注释*(Comments)

```css
/*
	这是一个多行注释
*/

.hello{
    color:#000;
    font-size:28px;
    text-align:center;
}


/* 这是一个单行注释 */
p{
    border: double;
}

div{
   	font-weight: bold;
	margin: 3em 0;
	_margin: 1em; /* IE6 hack */
	color: red;
}

/* === 对于某一整块区域组织css,比如：Global css === */
html,body,ul,li{
    padding:0;
    margin:0;
}
```

###### 

###### 二. 针对特定语言 编辑器注释插件（本文主要针对JavaScript）

###### 	VScode插件

1. [Auto Comment Blocks](https://marketplace.visualstudio.com/items?itemName=kevinkyang.auto-comment-blocks)

这个插件主要对C，C ++，C＃，CSS，Go，Groovy，Java，Less，Objective C / C ++，PHP，Sass，Rust，Swift 这些提供单行或者多行注释



​	单行注释

```javascript
// 在js后缀 文件中 输入双斜杠，按Shift+Enter可向下插入新的一行单行注释

```

​	多行注释

```javascript
/** 键入回车自动创建闭合注释，每次键入回车键都会插入一个*号自动对齐注释
```



2. [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors) 

   这个插件主要给代码或者工作区添加锚点注释，安装插件后左侧活动栏会有一个Comment Anchors 的活动栏展示整个工作区的锚点，点击可以跳转锚点连接的代码区域

   - ANCHOR - 代码某一个位置
   - TODO - 待完成任务列表
   - FIXME -  需要修复bug区域
   - STUB - 用于生成的默认代码段
   - NOTE - 特定代码部分的重要说明,比如提示用户
   - 审核 - 需要进一步审核的项目
   - SECTION - 一般用于代码区域分层注释

    

# 高级用法

​	注释生成文档

​	[jsdoc](https://devdocs.io/jsdoc/)

​	[sassdoc](http://sassdoc.com/)

​	

以上两个都可以通过代码中的注释规则生成文档信息页面 ，方便查看,提升团队协作效率



# 其他

###### 组件生成注释文档

说到生成文档，对于现在前端框架横行的时代，运营而生的组件ui库也是很多（Element），那么团队之间 自定义的组件是否也能像这些ui库提供调用，传参类型，demo实例，方便复用Compennts 呢？

[Storybook](https://storybook.js.org/) 



以上就是所有全部的内容，如果有更多奇思妙想，欢迎提供。



# 总结

说实话深入的了解注释带来帮助以及相关的知识比我想象的要复杂的多抓住每一个细节，提升代码的效率和严谨性，好的产品需要从内到外细腻的雕琢。