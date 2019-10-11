### 作为 npm 用户，您可以创建未编译的包以在您自己的项目中使用，并将它们发布到 npm 公共注册表，供其他人在他们的项目中使用。无范围的包始终是公共的，仅由包名称引用

`package-name`

### 创建一个没有范围的包

在命令行上，为包创建一个目录：
mkdir my-test-package

导航到包的根目录：
cd my-test-package
如果您使用 git 来管理包代码，请在包根目录中运行以下命令，替换 git-remote-url 为包的 git 远程 URL：
git init
git remote add origin git://git-remote-url
在程序包根目录中，运行该 npm init 命令。

响应提示生成 package.json 文件。有关命名程序包的帮助，请参阅“ 程序包名称指南 ”。

创建一个 README 文件，说明您的包代码是什么以及如何使用它。
在首选的文本编辑器中，编写包的代码。
