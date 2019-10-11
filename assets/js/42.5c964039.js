(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{224:function(a,e,t){"use strict";t.r(e);var s=t(0),v=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"关于-npm-registry-npm-注册表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-npm-registry-npm-注册表","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于 npm registry (npm 注册表)")]),a._v(" "),t("p",[a._v("相当于一个 JavaScript 包的数据库,每个包都有他的软件和元数据，开发人员可以在上面贡献包，并且下载使用到自己项目中。")]),a._v(" "),t("h3",{attrs:{id:"关于-packages-和-modules-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-packages-和-modules-区别","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于 packages 和 modules 区别")]),a._v(" "),t("p",[a._v("npm registry 包含包，其中很多也是 Node 模块，或者包含 Node 的模块")]),a._v(" "),t("h3",{attrs:{id:"关于-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-packages","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于 packages")]),a._v(" "),t("p",[a._v("是一个由一个 package.json 文件描述的文件或者目录，包必须包含一个 package.json 文件才能发布，包可以是 unscoped 或者 scoped,scoped 可以私有或者公共使用")]),a._v(" "),t("h3",{attrs:{id:"关于包的格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于包的格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于包的格式")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("a) 包含由 package.json 文件描述的程序的文件夹。")])]),a._v(" "),t("li",[t("p",[a._v("b) 包含一个 gzipped tarball 打包压缩的文件")])]),a._v(" "),t("li",[t("p",[a._v("c) 一个链接到 (b) 的解析地址")])]),a._v(" "),t("li",[t("p",[a._v("d) "),t("name",[a._v("@"),t("version",[a._v("与（c）一起在登记处公布的 A.")])],1)],1)]),a._v(" "),t("li",[t("p",[a._v("e) A "),t("name",[a._v("@"),t("tag",[a._v("指向（d）")])],1)],1)]),a._v(" "),t("li",[t("p",[a._v("f) "),t("name",[a._v("具有 latest 满足（e）的标签的 A.")])],1)]),a._v(" "),t("li",[t("p",[a._v("g) git 克隆时产生（a）的网址。")]),a._v(" "),t("p",[a._v("npm 包 git URL 格式")]),a._v(" "),t("ul",[t("li",[a._v("git://github.com/user/project.git#commit-ish")]),a._v(" "),t("li",[a._v("git+ssh://user@hostname:project.git#commit-ish")]),a._v(" "),t("li",[a._v("git+http://user@hostname/project/blah.git#commit-ish")]),a._v(" "),t("li",[a._v("git+https://user@hostname/project/blah.git#commit-ish")])])])]),a._v(" "),t("h3",{attrs:{id:"关于-modules-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-modules-模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于 modules 模块")]),a._v(" "),t("p",[a._v("modules 是 node_modules 目录中的任何模块和或目录,可以由 Node.js require()函数加载,则必须满足以下条件")]),a._v(" "),t("ul",[t("li",[a._v('package.json 包含一个 "main" 字段')]),a._v(" "),t("li",[a._v("包含 index.js")]),a._v(" "),t("li",[a._v("一个 javascript 文件")])]),a._v(" "),t("h3",{attrs:{id:"关于-scoped"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-scoped","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于 scoped")]),a._v(" "),t("blockquote",[t("p",[a._v("npm 版本必须大于>=2 以上才能使用 scoped,请运行 npm install npm@latest -g")])]),a._v(" "),t("p",[a._v("在注册账户和组织的时候可以用其名称作为相关包的命名空间")]),a._v(" "),t("ul",[t("li",[a._v("“npm” scope:\n"),t("code",[a._v("@npm/package-name")])]),a._v(" "),t("li",[a._v("“npmcorp” scope:\n"),t("code",[a._v("@npmcorp/package-name")])])]),a._v(" "),t("h3",{attrs:{id:"范围和包可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#范围和包可见性","aria-hidden":"true"}},[a._v("#")]),a._v(" 范围和包可见性")]),a._v(" "),t("ul",[t("li",[a._v("Unscoped packages 始终是可见的")]),a._v(" "),t("li",[a._v("Private packages 总是作用域的")]),a._v(" "),t("li",[a._v("Scoped packages 默是私有的,你可以发布的时候添加 flag (标记)使其变为公开")])]),a._v(" "),t("h3",{attrs:{id:"关于-scoped-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-scoped-package","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于 Scoped package")]),a._v(" "),t("p",[a._v("npm 用户或者组织成员，你可以创建和发布任何人都可以在自己的项目中下载和使用")]),a._v(" "),t("ul",[t("li",[a._v("公共包存在于全局公共注册表命名空间中，并且可以在 package.json 文件中引用，仅包名称：package-name。")]),a._v(" "),t("li",[a._v("范围公共包属于用户或组织，并且在包含为 package.json 文件中的依赖项时必须以用户或组织名称开头：\n"),t("ul",[t("li",[a._v("@username/package-name")]),a._v(" "),t("li",[a._v("@org-name/package-name")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);