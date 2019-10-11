### 创建 package.json 文件

您可以将 package.json 文件添加到包中，以便其他人管理和安装。发布到注册表的包必须包含 package.json 文件。

- 列出项目所依赖的包
- 指定项目可以使用语义版本控制规则使用的包的版本
- 使您的构建可重现，因此更容易与其他开发人员共享
  > 为了发布在 npm 上更容易在 npm 网站找到,建议 description 包含在文件中

### 必须包含字段

一个 package.json 文件必须包含"name"和"version"领域。
name: 该"name"字段包含您的包的名称，并且必须是小写和一个单词，并且可能包含连字符和下划线。
version: 该"version"字段必须采用格式 x.x.x 并遵循语义版本控制准则。

### Author field

`Your Name <email@example.com> (http://example.com)`

###

```
{
    "name": "my-awesome-package",
    "version": "1.0.0"
}

```

- name：当前目录名称
- version：永远 1.0.0
- description：来自 README 的信息，或空字符串 ""
- main：永远 index.js
- scripts：默认情况下会创建一个空 test 脚本
- keywords：空的
- author：空的
- license： ISC
- bugs：当前目录中的信息（如果存在）
- homepage：当前目录中的信息（如果存在）

设置 init 命令配置选项

`npm set init.author.email "example-user@example.com"`
