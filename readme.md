# 项目描述

这是一个用webpack5搭建油猴开发脚本的开发框架，为了实现油猴脚本开发工程化和模块化，解决以往只能将所有代码写在一个文件里，以及不方便使用静态资源，使用了webpack就可以将所有的模块打包成单个文件来使用，主要使用的vue技术栈。

使用vue的原因是为了写界面， 以往的方式写界面很麻烦，使用vue框架可以更加方便，以及使用vue相关组件库进行快速开发。

## 使用技术

- webpack5
- vue3 
    - element-plus
    - pinia
        - pinia-plugin-persist
- typescript
- axios

## 项目结构

由于油猴脚本的头部元信息是使用注释的形式在代码里面的，这个项目直接写ts代码，然后直接执行ts文件才生成头部元信息文件，所以在项目结构表示分为两部分。

生成头部元信息的相关代码存放于`header`目录，脚本主要代码存放于`src`目录。

### 目录说明

- dist 打包输出目录
    - app_header.js 生成油猴脚本头部元信息文件
- header 生成油猴脚本头部元信息文件相关代码
    - build.ts 提取 index.ts 生成元信息文件脚本
    - index.ts 用户编写元信息文件
    - UserScript.ts 元信息选项文件
- node_modules 依赖目录
- src 油猴脚本主体代码相关组织文件
    - api 请求api
    - constants 存放常量
    - featrue 功能模块
    - layout 操作页面布局
        - setupBtn.vue 设置按钮，用于打开设置面板
        - setupPanel.vue 设置面板
    - static 静态资源
    - store 全局状态管理
    - utils 工具函数
        - https 封装axios
            - interceptors 拦截器
            - request 基础请求封装
        - tmHttps 封装油猴请求api
  - App.vue 应用文件
  - main.ts 入口文件
  - shims-vue.d.ts vue的类型声明文件
  - tampermonkey.d.ts 油猴全局变量的声明文件
- .gitignore git忽略文件
- auto-imports.d.ts 打包element-plus组件自动生成的
- components.d.ts 打包element-plus组件自动生成的
- package.json 依赖文件
- postcss.config.js postcss配置文件
- readme.md 项目说明文档
- tsconfig.json typescript配置文件
- webpack.config.js webpack配置文件
- yarn.lock 依赖安装详细文件


## 运行说明

```
yarn build:header
```

生成油猴脚本头部元信息代码文件，用于组合成一个完成的油猴脚本文件。

```
yarn dev 
```
进行脚本开发，会自动监听文件修改并且自动生成脚本文件。


```
yarn build
```
打包脚本文件，会进行代码压缩。

注意：无论是进行开发还是打包，都必须先生成头部元信息代码文件！！！。


## 历史

这个项目是在前人的基础上进行开发的，项目前身是一个开源的项目，现在已经找不到了，不知道作者为什么删掉了。

原项目使用webpack4，而且只能打包typescript，不能打包其他的资源，也不能使用vue。

这个项目使用了前项目的一些ts文件，没办法，太好用了。


## 结语

这个文档终于写完了，这个项目遗留在打包上的一点问题也花时间解决了，不要慌，冷静思考。