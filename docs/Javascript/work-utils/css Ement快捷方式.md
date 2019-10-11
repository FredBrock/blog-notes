# 关于缩写

缩写是 Emmet 工具包的核心:在运行时解析这些特殊的表达式，并将其转换为结构化代码块，例如 HTML。缩写的语法看起来像 CSS 选择器. `# > + *`

```
#page>div.logo+ul#navigation>li*5>a{Item $}
```

...转换为以下结构

```
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

是不是很有意思。

# 句法(Syntax)

## Element

您可以使用元素的名称(如 div 或 p)来生成 HTML 标记。

## 嵌套操作（Nesting operators）

嵌套操作符用来定位元素是位于元素上下文的位置，比如是插入兄弟节点还是插入子节点

插入子节点：`>`

```
div>ul>li

```

...生成:

```
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

插入兄弟节点: `+`

```
div+p+bp

```

...生成

```
<div></div>
<p></p>
<blockquote></blockquote>
```

## 提升符: `^`

```
div+div>p>span+em^bq

```

```
<div></div>
<div>
    <p><span></span><em></em></p>
    <i></i>
</div>
```

`^`符号可以提升节点出现在包裹的上一层中. 并且可以使用多次.多少个`^` 就往上数多少层.

比如:

```
div+div>p>span+em^^^bq
```

```
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>

```

## 增值符:`*`

你可以使用增值符 `*` 用来输出元素生成的个数.

```
ul>li*5

```

...生成

```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

```

## 分组符:`()`

如果你需要在一个父容器下生成一个复杂的子元素结构,可以()括起来.

```
div>(header>ul>li*3)+footer>p

```

...生成结构

```
<div>
    <header>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>


```

分组符号是不是很像 DOM 里面的 createDocumentFragment 创建一个代码片段

```
div>dl>dt+dd*3+footer>p
(div>dl>(dt+dd)*3)+footer>p
```

解读下上面表达式

1. 有一个父容器 div,div 下面有一个 dl 的子节点,dl 有个 dt 子节点和三个 dd 子节点,还有个 footer 子节点,footer 下面又一个 p 子节点

```
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <footer>
            <p></p>
        </footer>
    </dl>
</div>

```

2. 有个 div 有个 dl,dl 里面有一组 dt 和 dd 的子节点,生成 3 组,有个同级 footer,footer 下面有个 p 子节点

```
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

## 属性运算符

用于输出元素的属性。例如，在 HTML 和 XML 中，您可以快速地向生成的元素添加比如 id,class 等属性。

### id 和 class 熟悉

```
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>

```

### 自定义属性

你可以使用[attr]将你的一个或者多个属性添加进去,多个属性用空格隔开,value=key 用等号连接.

```
div[title=12 a=23]

```

```
<div title="12" a="23"></div>

```

- 可以在方括号中放置任意多的属性。
- 你可以不必指定 value 值,比如: td[colspan title] 生成<td colspan="" title=""\>
  td[title=hello colspan=3]

### 项目编号:`$`

使用乘法运算符\*可以重复元素,你可以$ 给每个item添加编号,可以将$运算符放入元素名称,属性名称,或者属性值中,就会输出元素的数量.

```
ul>li.item$*5
```

...生成

```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>

```

你还可以使用 多个 \$ 符号，不足的位置补充 0

ul>li.item\$\$\*12

#### 改变数字 基础值和开始方向

使用@修饰符.您可以更改编号方向(升序或降序)和基数(例如起始值)。

改变方向

```
ul>li.item\$@-\*5

```

...生成

<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>

改变起始值

```
ul>li.item$@3*5

```

...生成

```
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>

```

## 插入文本: {}

{text} 是作为单独的元素使用，所以 a{click} and a>{click} 具有相同输出,但是 a{click}+b{here} and a>{click}+b{here} 不会

```
a{click me}
```

...生成

```
<a href="">click me</a>

```

```

<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>

```

第二个示例中 b 元素放在 a 元素内部，{text}写在后面不会改变父元素上下文，

### 关于缩写格式的注释

当您熟悉 Emmet 的缩写语法时，您可能希望使用一些格式来使您的缩写更具可读性。例如，在元素和运算符之间使用空格，如下所

```
(header > ul.nav > li*5) + footer
```

因为 空格是一个停止符号,Emmet 会停止解析。

<!--  -->

## 隐式标签

在许多情况下，您可以跳过键入标签名称，Emmet 将替换它。例如，div.content 您可以简单地将.content 其编写并扩展为<div class="content"></div>。

.wrap>.content
em>.info
ul>.item\*3

### “Lorem Ipsum” generator

[Lorem Ipsum](https://www.lipsum.com/) 虚拟文本随机文本，可以得到一串随机可读的文本。我们在构建页面初始结构的时候,需要一些文字数据来查看显示页面结构的合理性。

```
ul.generic-list>lorem10.item*4
```

...生成

```
<ul class="generic-list">
    <li class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</li>
    <li class="item">Laboriosam quaerat sapiente minima nam minus similique illum architecto et!</li>
    <li class="item">Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!</li>
    <li class="item">Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!</li>
</ul>
```
