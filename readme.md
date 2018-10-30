# AngularJS教程
AngularJS诞生于2009年，它有着诸多特性，最为核心的是：MVVM、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。

#### 快速过一遍
如果想迅速熟悉AngularJS的工作流程，可以先参考官方给出的开发示例。

[学习PhoneCat](http://www.angularjs.net.cn/phonecat/)

#### 查看AngularJS Api
AngularJS提供了很多功能丰富的组件，处理核心的ng组件外，还扩展了很多常用的功能组件，如`ngRoute(路由)`,`ngAnimate(动画)`,`ngTouch(移动端操作)`等。
- ng
- ngRoute
- ngAnimate
- ngAria
- ngResource
- ngCookies
- ngTouch
- ngSanitize
- ngMock

### AngularJS简介(Introduction)

AngularJS是一个开发动态web应用的框架。它可以使用HTML作为模板语法并且可以通过扩展的html语法来使应用组件更加清晰和简洁。Angular使html具备了构建动态web应用的能力。

通常，我们通过以下手段来解决动态应用和静态文档之间不匹配的问题：
- **类库：** 一些在开发WEB应用时非常有用的函数集合。如：`jQuery`等。
- **框架：** 一种WEB应用的特殊实现，如：`knockout`,`ember`等。

Angular另辟蹊径，它通过指令(directive)扩展HTML的语法。如：
- 通过`{{}}`进行数据绑定。
- 使用DOM控制结构来进行迭代或隐藏DOM片段。
- 支持表单和表单验证。
- 将逻辑代码关联到DOM元素上。
- 将一组HTML做成可重用的组件。

Angular适用于构建CRUD(增、删、改、查)应用。

Angular的一些出众之处：
- 构建一个CRUD应用时可能用到的所有技术：数据绑定、基本模板指令、表单验证、路由、深度链接、组件重用、以来注入。
- 可测试性：单元测试、端到端测试、模拟对象(mocks)、测试工具。
- 拥有一定目录结构和测试脚本的种子应用。种子。。。。。

#### Angular之道

Angular是建立在这样的信念之上的：即声明式的代码用在构建用户界面和组装软件时更好，而命令式的代码更擅长展现业务逻辑。
- 将应用逻辑与DOM操作解偶，会大大提高代码的可测试性。
- 平等看待应用的测试和开发，测试的难度很大程度上取决于代码的结构。
- 将前端与服务器端解偶，这样使得前端的开发和服务器端的开发可以齐头并进，实现两边代码的重用。(表示无法理解)
- 框架在整个应用的开发流程中知道开发者：从用户界面设计到实现业务逻辑，再到测试。
- 化繁为简，化整为零总是好的。

Angular将我们从下面的苦海中解脱出来：(???)
- **使用回调：** 回调会降低代码的可读性，使代码变得零散。移除像回调之类的常见代码是件好事，大幅移除因为JavaScript者们语言的不足而使得我们不得不写的代码，从而让应用显得清晰。
- **以编程的方式操作HTML DOM：** 操作HTML DOM是AJAX应用中很基础的一部分，但它不灵活而且容易出错。通过声明式的语句，描诉UI该怎样随着状态的改变而变化，能让你从低级的DOM操作中解脱出来。绝大多数Angular的应用开发中，开发者都不需要自己去写低级的操作DOM的代码，如果非要这样做，也是可以的。
- **在用户界面中读写数据：** AJAX应用中的绝大多数操作都是CRUD操作。一个典型的流程是从服务器端读取到数据组装成内部对象，然后讲述据重新组装成内部对象，在发给服务器。在这个流程中有很多重复的代码要写，而Angular消除了这个流程中几乎所有的重复代码，使得代码看起来只是在描诉所有的执行流程，而不是所有的实现细节。
- **在开始前大量的初始化代码：** 一般需要些很多的基础性的代码才能完成一个基本的AJAX的Hello World应用。在Angular的应用中，可以通过一些服务来初始化应用，这些服务都是类似与Guice的方式进行以来注入的。这回让我们很快进入功能开发。另外，还能完全控制自动化测试的初始化过程。

### AngularJS引导程序(Bootstrap)

这一章讲述Angular初始化过程以及必要的时候用户如何能够手动将Angular初始化。

#### Angular `<script>` 标签

就跟其他的导入javascript脚本方式一样。

如果想要应用自动启动Angular的话，就要把 `ng-app` 放在应用的根节点

``` html
<html ng-app>
```

如果应用需要支持IE7，那么就要加上`id="ng-app"`

``` html
<html ng-app id="ng-app">
```

#### 自动初始化

Abgular在以下两种情况下自动初始化，一个是在`DOMContentLoaded`事件触发时，或者在`angular.js`脚本被执行的同时如果`document.readyState`被置为`'complete'`的话。

![](image/5.png)

初始化时，Angular回去找`ng-app`这个指明应用开始所在的指令。如果`ng-app`指令被找到的话，Angular会做以下几件事：
- 加载`ng-app`指令所指定的模块
- 创建应用所需的`injector`
- 以`ng-app`所在的节点为根节点，开始遍历并编译DOM树(`ng-app`指出了应用的哪一部分开始时Angular去编译的)。

#### 手动初始化

如果想要在初始化阶段拥有更多的控制权，可以使用手动方法启动应用。

下面是一个手动初始化Angular的例子：

``` js
angular.element(document).ready(function () {
  angular.module('myApp', []);
  angular.bootstrap(document, ['myApp']);
});
```

在上面例子中，我们提供了我们应用要加载的模块名作为`api/angular.bootstrap`函数的第二个参数。需要注意的是`angular.bootstrap`不会凭空创建模块，在我们将模块作为参数注入之前，必须创建任一自定义的模块。

Angular代码运行时遵循的顺序：
1. 在HTML页面以及所有代码加载完毕后，Angular回去找到应用的根元素(通常是文档的根节点).
2. 调用`api/angular.bootstrap`去编译各元素成为一个可执行的且双向绑定的应用。

#### 延迟启动

这个特色可以让像Batarang一样的测试工具横插一杠进入Angular的引导进程。

当`api/angular.bootstrap`被调用时，如果`window.name`包含`NG_DEFER_BOOTSTRAP!`前缀，引导进程会被暂停直到`angular.resumeBootstrap()`被调用。
`angular.resumeBootstrap()`以一个可选的数组作为参数，这个数组是包含了应用启动时需要被注入的模块。

### AngularJS概念概述(Conceptual OverView)

| 概念                           | 说明                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| 模板(templateUrl)              | 带有Angular扩展标记的HTML                                                                |
| 指令(Directives)               | 用于通过自定义属性和元素扩展HTML的行为                                                   |
| 模型(model)                    | 用于显示给用户并且与用户互动的数据                                                       |
| 作用域(scope)                  | 用来存储模型(Model)的语境(context)。模型放在这个语境中才能被控制器、指令和表达式等访问到 |
| 表达式(Expression)             | 模板中可以通过它来访问作用于(Scope)中的变量和函数                                        |
| 编译器(Compiler)               | 用来编译模板(Template),并且对其中包含的指令(Directive)和表达式(Expression)进行实例化     |
| 过滤器(filter)                 | 负责格式化表达式(Expression)的值，以便呈现给用户                                         |
| 视图(View)                     | 用户看到的内容(就是DOM)                                                                  |
| 数据绑定(Data Binding)         | 自动同步模型(Model)中的数据和视图(View)表现                                              |
| 控制器(Controller)             | 视图(View)背后的业务逻辑                                                                 |
| 依赖注入(Dependency Injection) | 负责创建和自动装载对象或函数                                                             |
| 注入器(injector)               | 用来实现依赖注入(Injection)的容器                                                        |
| 模块(Module)                   | 用来配置注入器                                                                           |
| 服务(Service)                  | 独立于视图(View)的、可复用的业务逻辑                                                     |
