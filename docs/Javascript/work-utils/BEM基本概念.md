### block

逻辑和行为独立的页面组件，相当于 web 组件的 Components 。块主要封装行为，模板，样式，和其他技术，独立的块允许他们重复使用。s

### 任意位置

块可以在页面上移动，在页面或者项目之间移动，块作为独立的实体使得他们在页面上任意移动亦可以保持正常运行和外观。

### Element

块的的组件不能在外部使用。
例如，menu 的 item 项不能在上下文之外使用，因此它是一个元素。

### BEM 实体

block,Element,modifier 都称为实体。
它既可以用作单个 BEM 实体，也可以用作块，元素，修饰符的通用术语。

### Mix

- 结合多个实体的行为和风格，避免代码重复
- 在现有的 BEM 实体的基础创建语义上的新接口组件。
- 假设现在 menu 的 item,复制 link 的块的行为和样式，这将导致代码重复。
- 或者混合使用 link 块和 link 的 menu

### BEM 树

根据块，元素，修饰符表示页面结构，它是树的抽象，描述 BEM 实体的名称。
例子：

```
<header class="header">
    <img class="logo" alt="">
    <form class="search-form">
        <input type="text" class="input">
        <button class="button"></button>
    </form>
    <ul class="lang-switcher>
        <li class="lang-switcher__item>
            <a href="href" class="lang-switcher">en</a>
        </li>
        <li class="lang-switcher__item>
            <a href="href" class="lang-switcher">ru</a>
        </li>
    </ul>
</header>

```

相应的 BEM 树如下：
标题
logo
表单
input
button
lang-switcher
lang-switcher**item
lang-switcher**link
lang-switcher**item
lang-switcher**link

### 实现技术

behavior(行为)-- Javascript,CoffeeScript,TypeScript
appearance(样式)-- Sass,Stylus,Css
templates(模板)-- BEMHTML,BH,Pug,Handlebars,XSL
documentation(文档)-- Markdown,Wiki,XML

如果定义样式那么就是 css 木块

### 命名规则

- 名称以小写字母书写
- 单词用连字符（-）分隔
- 块名称定义其元素和修饰符的名称空间
- 元素名称通过双下划线（\_\_）和块隔开
- 修饰符名称通过单个下划线（\_）与元素和块隔开
- 修饰符值通过单个下划线（\_） 与修饰符隔开
- 对于布尔值，该值不包含在名称中
  > BEM 方法中不存在"elem-name\_\_elem-name"命名

### 元素名称 menu

同一个 Block 中，相同的元素具有相同的名称，例如菜单中所以菜单 menu\_\_item

### 块修饰符名称

menu_hidden
menu_theme_islands

HTML

```
<div class="menu menu_hidden"></div>
<div class="menu menu_theme_islands"></div>
```

CSS

```
.menu_hidden { display：none; }
.menu_theme_islands { color：green; }
```

### 元素修饰符名称

menu**item_visible
menu**item_type_radio

HTML

```
<div class="menu">
    <span class="menu__item menu__item_visible menu__item_type_raido></span>
</div>
```

CSS

```
.menu__item_visible {}
 .menu__item_type_radio { color：blue; }
```

### 连个破折号风格

block-name\_\_elem-item--mod-name--mod-val

- 名称以小写拉丁字母书写。
- BEM 实体名称中的单词用连字符（-）分隔。
- 元素名称通过双下划线（\_\_）与块名称分隔。
- 布尔修饰符通过双连字符（--）与块或元素的名称分隔开。
- 修饰符的值通过双连字符（--）与其名称分隔。

### CamelCase 风格

blockName-elemName_modName_modVal

- 块，元素和修饰符名称的分隔符与标准方案中的相同。

### React style

BlockName-ElemName_modName_modVal

- 姓名以拉丁字母书写。
- 块和元素以大写开头修饰符以小写开头
- 元素名称通过单个（-） 与块元素隔开
- 名称和修饰符与标准方案中的分隔符相同

没有命名空间样式

_ 姓名以拉丁字母书写。
_ 块或元素的名称不包括在修饰符之前。
