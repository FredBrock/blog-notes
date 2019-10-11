Node.js 模块是一种可以发布到 npm 的包。

1. 创建一个 package.json 文件
2. 创建在另一个应用程序需要模块时将加载的文件
3. 测试你的模块

### 创建一个 package.json 文件§

1.  要 package.json 在命令行上创建文件，请在 Node.js 模块的根目录中运行 npm init：

    - 对于范围模块，请运行 npm init --scope=@scope-name
    - 对于未范围的模块，请运行 npm init

1.  提供必填字段（name 和 version）以及字段的响应 main：

    - name：模块的名称。
    - version：初始模块版本。我们建议遵循语义版本控制准则并从中开始 1.0.0。
    - main：当另一个应用程序需要您的模块时将加载的文件的名称。默认名称是 index.js。
