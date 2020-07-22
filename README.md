 vuejs 配置开发环境

1、安装node.js（https://nodejs.org/en/）  
Node.js 是运行在服务端的 JavaScript。
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
Node.js 是一个事件驱动、非阻塞式 I/O 的模型,使其轻量又高效。
npm是nodejs内置的软件包管理器，相当于“前端maven”
npm由三个独立的部分组成：网站、注册表(registry)、命令行工具(CLI）。
查找软件包：https://www.npmjs.com/
NPM 的思路大概是这样的：
1. 买个服务器作为代码仓库（registry），在里面放所有需要被共享的代码
2. 通知 jQuery、Bootstrap、Underscore 作者使用 npm publish 把代码提交到 registry 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）
3. 其他人使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码
4. 下载完的代码出现在 node_modules 目录里，可以随意使用了。
查看版本:
node -v
npm -v
卸载npm uninsatll  -g <package-name> 
 
2、在nodejs安装路径下，新建node_global和node_cache两个文件夹
设置缓存文件夹
npm config set cache "D:\DevelopmenteTools\Nodejs\node_cache"
设置全局模块存放路径
npm config set prefix "D:\DevelopmenteTools\Nodejs\node_global"

npm install XXX -g 安装以后模块就在D:\DevelopmenteTools\Nodejs\node_global里

3、安装cnpm（淘宝镜像）   cnpm -v
由于许多npm包都是在国外，我们这里用到淘宝的镜像服务器，来对我们依赖的module进行安装，因此首先安装“中国的npm”——cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
查看版本:cnpm -v

4、设置环境变量，使得任意目录下都可以使用cnpm、vue等命令，而不需要输入全路径
我的电脑-属性-高级系统设置-环境变量
修改系统变量PATH，新增D:\DevelopmenteTools\Nodejs\node_global
新增系统变量NODE_PATH，D:\DevelopmenteTools\Nodejs\node_global\node_modules

5、安装vue
cnpm install vue -g
查看版本:vue -V 
官方推荐模版:vue list

6、安装vue命令行工具，即vue-cli
cnpm install vue-cli -g

7、安装全局webpack
cnpm install webpack -g
cnpm install webpack-cli -g
查看版本webpack -v

8、创建新项目
vue init webpack vue-demo

9、安装项目依赖
cd my-project　
cnpm install
项目目录下多出一个node_modules文件夹，当前项目的依赖包。

10、运行项目
cnpm run dev
如果浏览器打开之后，没有加载出页面，有可能是本地的 8080 端口被占用，需要修改一下配置文件 config/index.js

11、把Vue项目发布到Tomcat上
cnpm run dev  开发环境自测


先修改配置文件/config/index.js 中build的assetsPublicPath，从 "/" 改为"./"或者"/项目名"
cnpm run build ，生成的网页都在工程的dist文件夹下，拷贝./dist文件夹到tomcat目录webapps下，并改名项目名。
启动startup.bat，访问地址http://localhost:8080/vuedemo/index.html。


12 关于项目里的package.json：
dependencies列出的包用于生产环境.
devDependencies用于开发环境和测试环境.
在安装包时, 我们可以根据环境决定包的安装效果. 假设我们要安装xxx插件

npm install xxx: 安装项目到项目目录下，不会将模块依赖写入devDependencies或dependencies。
npm install -g xxx: -g的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm cinfig prefix的位置

表示我想在生产环境中使用xxx插件==》npm install --save xxx: -save的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
表示我想在开发和测试环境中使用xxx插件==》 npm install --save-dev xxx: -save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

--save可以简写为-S, --save-dev可以简写为-D.
cnpm install --save-dev jest @vue/test-utils
cnpm install --save-dev vue-jest
cnpm install --save-dev babel-jest

