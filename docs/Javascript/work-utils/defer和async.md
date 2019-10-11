在web站点中，往往javascript 的比重会比html更大，也就是说下载量，处理到渲染的时长会比较长。

当浏览器加载html遇到<script>...</script>标记时,将暂停下停止渲染DOM,先预执行一遍脚本，通过<script src="..."></script>也是如此，浏览器必须先下载，执行它，之后再处理之后的执行。

产生问题：

1. ​	就javascript无法读取下面的DOM元素
2.    如果前面有个很大的脚本下载，这回造成页面阻塞，页面无法快速的读取页面内容，只有等待前面请求的脚步下载执行完成之后才行





```html
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- 这段p标签的内容必须等待上面的脚本加载完成才能显示 -->
<p>...content after script...</p>
```

变通方法：

```html
<body>
  ...要显示的内容...

  <script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
</body>
```

这样就不会页面的内容显示，这也并非完美的解决方案，应为上面必须等待html处理完成才会开始下载javascript,这也是有延迟的。

script标签有两个属性可以解决我们的问题：defer和async

derfer(延迟)

表示应该继续保持页面正常工作，

```html
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

-  script带有defer不会阻塞页面渲染
- script带有defer总是在DOM ready之后,