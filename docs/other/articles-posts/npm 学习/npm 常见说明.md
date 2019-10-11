### 关于 npm registry (npm 注册表)

相当于一个 JavaScript 包的数据库,每个包都有他的软件和元数据，开发人员可以在上面贡献包，并且下载使用到自己项目中。

### 关于 packages 和 modules 区别

npm registry 包含包，其中很多也是 Node 模块，或者包含 Node 的模块

### 关于 packages

是一个由一个 package.json 文件描述的文件或者目录，包必须包含一个 package.json 文件才能发布，包可以是 unscoped 或者 scoped,scoped 可以私有或者公共使用

### 关于包的格式

- a) 包含由 package.json 文件描述的程序的文件夹。
- b) 包含一个 gzipped tarball 打包压缩的文件
- c) 一个链接到 (b) 的解析地址
- d) <name>@<version>与（c）一起在登记处公布的 A.
- e) A <name>@<tag>指向（d）
- f) <name>具有 latest 满足（e）的标签的 A.
- g) git 克隆时产生（a）的网址。

  npm 包 git URL 格式

  - git://github.com/user/project.git#commit-ish
  - git+ssh://user@hostname:project.git#commit-ish
  - git+http://user@hostname/project/blah.git#commit-ish
  - git+https://user@hostname/project/blah.git#commit-ish

### 关于 modules 模块

modules 是 node_modules 目录中的任何模块和或目录,可以由 Node.js require()函数加载,则必须满足以下条件

- package.json 包含一个 "main" 字段
- 包含 index.js
- 一个 javascript 文件

### 关于 scoped

> npm 版本必须大于>=2 以上才能使用 scoped,请运行 npm install npm@latest -g

在注册账户和组织的时候可以用其名称作为相关包的命名空间

- “npm” scope:
  `@npm/package-name`
- “npmcorp” scope:
  `@npmcorp/package-name`

### 范围和包可见性

- Unscoped packages 始终是可见的
- Private packages 总是作用域的
- Scoped packages 默是私有的,你可以发布的时候添加 flag (标记)使其变为公开

### 关于 Scoped package

npm 用户或者组织成员，你可以创建和发布任何人都可以在自己的项目中下载和使用

- 公共包存在于全局公共注册表命名空间中，并且可以在 package.json 文件中引用，仅包名称：package-name。
- 范围公共包属于用户或组织，并且在包含为 package.json 文件中的依赖项时必须以用户或组织名称开头：
  - @username/package-name
  - @org-name/package-name
