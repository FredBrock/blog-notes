# 使用SSH连接到GitHub

您可以使用SSH连接到GitHub。

### [关于SSH](https://help.github.com/en/articles/about-ssh)

使用SSH协议，您可以连接和验证远程服务器和服务。使用SSH密钥，您可以在每次访问时无需提供用户名或密码即可连接到GitHub。

### [检查现有的SSH密钥](https://help.github.com/en/articles/checking-for-existing-ssh-keys)

在生成SSH密钥之前，您可以检查是否有任何现有的SSH密钥。

### [生成新的SSH密钥并将其添加到ssh-agent](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

检查现有SSH密钥后，可以生成用于身份验证的新SSH密钥，然后将其添加到ssh-agent。

### [将新SSH密钥添加到您的GitHub帐户](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)

要将GitHub帐户配置为使用新的（或现有的）SSH密钥，您还需要将其添加到GitHub帐户。

### [测试SSH连接](https://help.github.com/en/articles/testing-your-ssh-connection)

在设置SSH密钥并将其添加到GitHub帐户后，您可以测试您的连接。

### [使用SSH密钥密码](https://help.github.com/en/articles/working-with-ssh-key-passphrases)

您可以保护SSH密钥并配置身份验证代理，这样您就不必在每次使用SSH密钥时重新输入密码。







## ssh-keygen 

我们可以使用 `ssh-keygen` 命令生成密钥对

**ssh-keygen命令**用于为“ssh”生成、管理和转换认证密钥，它支持RSA和DSA两种认证密钥。

```
-b：指定密钥长度；
-e：读取openssh的私钥或者公钥文件；
-C：添加注释；
-f：指定用来保存密钥的文件名；
-i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥；
-l：显示公钥文件的指纹数据；
-N：提供一个新密语；
-P：提供（旧）密语；
-q：静默模式；
-t：指定要创建的密钥类型。
```

关于SSH

设置SSH时，您将[生成SSH密钥并将其添加到ssh-agent](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)，然后[将密钥添加到您的GitHub帐户](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)。将SSH密钥添加到ssh-agent可确保您的SSH密钥通过使用密码短语具有额外的安全层。有关更多信息，请参阅“ [使用SSH密钥密码”](https://help.github.com/en/articles/working-with-ssh-key-passphrases)。

要将SSH密钥与使用SAML单点登录的组织拥有的存储库一起使用，您需要先对其进行授权。有关详细信息，请参阅“ [授权SSH密钥以与SAML单一登录组织一起使用”](https://help.github.com/en/articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization)。

我们建议您定期[查看SSH密钥列表，](https://help.github.com/en/articles/reviewing-your-ssh-keys)并撤消任何无效或已[被盗用的密钥](https://help.github.com/en/articles/reviewing-your-ssh-keys)。

如果您未使用SSH密钥一年，那么GitHub将自动删除您的非活动SSH密钥作为安全预防措施。有关更多信息，请参阅“ [已删除或缺少SSH密钥”](https://help.github.com/en/articles/deleted-or-missing-ssh-keys)。

### 检查SSH密钥

1. 打开Git Bash。

2. ls -al ~/.ssh 

3. 检查目录列表以查看您是否已拥有公共SSH密钥。

   默认情况下，公钥的文件名是以下之一：

   - *id_dsa.pub*
   - *id_ecdsa.pub*
   - *id_ed25519.pub*
   - *id_rsa.pub*

- 如果您没有现有的公钥和私钥对，或者不希望使用任何可用的连接到GitHub，则[生成新的SSH密钥](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。
- 如果您看到要用于连接到GitHub 的现有公钥和私钥对（例如*id_rsa.pub*和*id_rsa*），则可以[将SSH密钥添加到ssh-agent](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent)。

### 生成新的SSH密钥

如果您不想在每次使用SSH密钥时都重新输入密码，那么可以将您的密钥添加到SSH代理，SSH agent将管理您的SSH密钥并记住您的密码。

1. Open Git Bash.

2. Paste the text below, substituting in your GitHub email address(添加邮箱).

   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   这将使用提供的电子邮件作为标签创建一个新的ssh密钥。

   ```shell
   > Generating public/private rsa key pair.
   ```

3. 当提示您“输入要保存密钥的文件”时，请按Enter。这接受默认的文件位置。

   ```shell
   > Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
   ```

4. At the prompt, type a secure passphrase. For more information, see ["Working with SSH key passphrases"](https://help.github.com/en/articles/working-with-ssh-key-passphrases)(输入安全密码,回车可省略).

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

ssh-keygen(选项) 语法：

> -b：指定密钥长度；
> -e：读取openssh的私钥或者公钥文件；
> -C：添加注释；
> -f：指定用来保存密钥的文件名；
> -i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥；
> -l：显示公钥文件的指纹数据；
> -N：提供一个新密语；
> -P：提供（旧）密语；
> -q：静默模式；

### 把SSH并将其添加到ssh-agent

1. 确保ssh-agent正在运行：

   - 如果您使用的是与GitHub Desktop一起安装的Git Shell，则应该运行ssh-agent。

   - 如果您正在使用其他终端提示，例如Git for Windows，则可以使用“ [使用SSH密钥密码](https://help.github.com/en/articles/working-with-ssh-key-passphrases)”中的“自动启动ssh-agent”说明，或手动启动它：

     ```shell
     # start the ssh-agent in the background
     $ eval $(ssh-agent -s)
     > Agent pid 59566
     ```

2. 将SSH私钥添加到ssh-agent。如果使用其他名称创建密钥，或者要添加具有不同名称的现有密钥，请将命令中的*id_rsa*替换为私钥文件的名称。

   ```shell
   $ ssh-add ~/.ssh/id_rsa
   ```

3. [将SSH密钥添加到您的GitHub帐户](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)。

#### 测试SSH连接

1. 打开Git Bash。

2. 输入以下内容：

   ```shell
   $ ssh -T git@hostname
   # Attempts to ssh to GitHub Enterprise
   ```

   您可能会看到如下警告：

   ```shell
   > The authenticity of host 'hostname (IP ADDRESS)' can't be established.
     > RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
     > Are you sure you want to continue connecting (yes/no)?
   ```

   或者是这样的：

   ```shell
   > The authenticity of host 'hostname (IP ADDRESS)' can't be established.
     > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
     > Are you sure you want to continue connecting (yes/no)?
   ```

3. 验证您看到的消息中的指纹是否与步骤2中的某条消息匹配，然后键入`yes`：

   ```shell
   > Hi username! You've successfully authenticated, but GitHub does not
   > provide shell access.
   ```

4. 验证生成的消息是否包含您的用户名。如果收到“权限被拒绝”消息，请参阅[“错误：权限被拒绝（公钥）”](https://help.github.com/en/enterprise/2.15/user/articles/error-permission-denied-publickey)。