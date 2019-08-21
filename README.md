# taro_dva_typescript
Taro + dva + Typescript
 架构实例

# 环境配置：
- 安装node
- 安装taro-cli

~~~
npm install -g @tarojs/cli

- update
taro update self
taro update project
~~~

用于主模块基础文件生成
~~~
cd {proj}

pages模版快速生成


 用法：npm run tep `文件名`
~~~

# 项目编译和预览：
- clone项目
- 使用npm或者taro 编译
- 使用对应的开发工具(如：微信开发者工具)，选择编译后的dist文件夹进行预览；或者直接预览(如：H5)

## 微信小程序

~~~
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
~~~

## H5

~~~
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
~~~
  
## 支付宝小程序

~~~
# npm script
$ npm run dev:alipay
$ npm run build:alipay
# 仅限全局安装
$ taro build --type alipay --watch
$ taro build --type alipay
~~~

## React Native

~~~
# npm script
$ npm run dev:rn
# 仅限全局安装
$ taro build --type rn --watch
~~~

详细文档见：  
[Taro-docs](https://nervjs.github.io/taro/docs/README.html)  

[Taro-ui](https://github.com/NervJS/taro-ui)  
 
[f2-canvas](https://github.com/antvis/f2-canvas)

[f2 API文档](https://www.yuque.com/antv/f2/api-index)

***

>项目详细配置如下



微信小程序的开发目前是很热的一个领域，有很多的开发模式，找到一种属于自己的方法才会使得开发顺心顺利。

此架构是使用 Taro + dva + typescript 构建前端开发
- 京东凹凸实验室的React框架Taro很成熟，又是大厂在维护更新迭代，不用担心没人维护的问题，他有自己的UI还有物料社区，比起原生小程序方便很多，支持多端，一处代码，多处运行，微信小程序、H5、百度小程序、支付宝小程序、字节跳动小程序、QQ轻应用、快应用、ReactNative；
- 数据管理是Redux集成的dva框架，是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架；
- TypeScript就是所谓的JavaScript超集。它不是JavaScript的替代品，也不会为JavaScript代码添加任何新功能。相反，TypeScript允许程序员在其代码中使用面向对象的构造，然后将其转换为JavaScript。它还包括类型安全和编译时类型检查等便利功能。



<!--more-->

> 资料

[Taro官网地址：https://taro.aotu.io/](https://taro.aotu.io/)
[dva官网地址：https://dvajs.com/guide/](https://dvajs.com/guide/)


# mock数据

https://www.easy-mock.com/project/5d5aa417fc79a5287e5676cf

# 参考项目
Github地址：[https://github.com/Duanruilong/taro_dva_typescript](https://github.com/Duanruilong/taro_dva_typescript)




