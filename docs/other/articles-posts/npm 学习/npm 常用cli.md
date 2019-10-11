### npm update

- npm outdated -g --depth=0 (确定哪些包需要更新)
- npm update (更新包全部)
- npm update -g \<package-name\> (更新指定全局安装单个包)
- npm update -g (更新全部安装包)

### npm install

- npm install <package_name>
- npm install @scope/package-name
- npm install @scope/private-package-name (因为私有包有访问权限和下载限制，所以始终包含 Scope Package 作用域)
- ls node_modules (linux) \&\& dir node_modules

### dist-tags

npm install 使用这个指令的时候默认带上 last 标签的，表示安装最新的安装包，相当于使用了 npm install <package-name>@last

npm install <package_name>@\<tag\> tag 包含 stable，beta，dev，canary。

### 其他

关于 Scoped Packages: [https://nitayneeman.com/posts/understanding-scoped-packages-in-npm/](https://nitayneeman.com/posts/understanding-scoped-packages-in-npm/)
