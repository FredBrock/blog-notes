# 拉取远程仓库代码

1. git clone
   
   > git clone https://github.com/Juliancn/blog.git myblog

### 现在可以进行本地开发了，我们尝试添加一个“test.txt”文件并添加到远程

> touch test.txt
> `touch test.txt`

1. git add test.txt
2. git commit -a -m "添加一个"test.txt"



会得到一段提醒，意思是说没有添加用户名和邮箱，无法确认提交信息，我们添加下

`git config user.name juliancn;git config user.email jualian_cn@outlook.com`
接下来一切完美了。
可以使用：`git commit -a -m "添加一个"test.` 了。

### push 远程仓库

1. `git push origin master`

但是每次这样指定仓库，然后指定 master 分支 push 感觉好麻烦啊。我们现在设置下跟踪远程分支，这样更新，提交代码只需要 git pull 或者 git push 就行了。

#### 在远程仓库创建分支

1. 首先在本地创建分支，然后提交远程
   - `git checkout -b dev`
   - `git push origin dev`

#### 本地分支跟踪远程仓库

1. 有的时候你的小伙伴在远程创建一个分支,这时候你的本地并没有这个分支,你需要拉取并跟踪，这时候改怎么办呢.

   - `git fetch origin`
   - `git checkout -b common origin/common`

   当然还有更便捷的方式，

   - `git checkout --track origin/common2`
     
     > 这个就是把当前分支跟踪指定远程分支。

2. `-u 或者 --set-upstream-to`
   当你本地存在一个分支的时候，你想直接把这个分支绑定一个远程分支，可以使用 `git branch (-u | --set-upstream-to)`

#### 删除远程分支

`git push origin --delete [branch]`

#### 文件储存 git stash

有的时候你开发的好好的，突然在另外一个分支有个紧急 bug 需要处理而你这是不想提交你还没开发完的任务，可以使用 `git stash`.
