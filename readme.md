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

#### 数据绑定

``` html
数量：<input type="text" ng-model="qty" required>
<b>总价：{{qty}}</b>
```

第一类是指令(directive)

第二类新标记是双大括号`{{ expression | filter }}`,其中expression是表达式语句，filter是过滤器语句。

Angular提供了动态(live)的绑定：当input元素的值变化的时候，表达式的值也会自动重新计算，并且DOM所呈现的内容也会随着这些值的变化而自动更新。这种模型(model)与视图(view)的联动就叫做"双向数据绑定"。

#### 添加UI逻辑：控制器

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../angular-1.5.8/angular.js"></script>
</head>
<body>
<div ng-app="invoice1" ng-controller="InvoiceController as invoice">
    <b>Invoice:</b>
    <div>
        Quantity: <input type="number" min="0" ng-model="invoice.qty" required>
    </div>
    <div>
        Costs: <input type="number" min="0" ng-model="invoice.cost" required>
        <select ng-model="invoice.inCurr">
            <option ng-repeat="c in invoice.currencies">{{c}}</option>
        </select>
    </div>
    <div>
        <b>Total:</b>
        /* 注意currency过滤器后面跟的是冒号： */
        <span ng-repeat="c in invoice.currencies">
            {{invoice.total(c) | currency:c}}
        </span><br>
        <button class="btn" ng-click="invoice.pay()">Pay</button>
    </div>
</div>
</body>
<script>
    angular.module('invoice1', [])
        .controller('InvoiceController', function InvoiceController() {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = 'CNY';
            this.currencies = ['USD', 'EUR', 'CNY'];
            this.usdToForeignRates = {
                USD: 1,
                EUR: 0.74,
                CNY: 6.09
            };

            this.total = function total(outCurr) {
                return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
            };
            this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
                return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
            };
            this.pay = function pay() {
                window.alert('Thanks!');
            };
        });
</script>
</html>
```

![](image/6.png)

在javascript标签中，在这里，定义了一个被称为“控制器(controller)”的函数。控制器的用途是导出一些变量和函数，供模板的表达式(expression)和指令(directive)使用。

在创建一个控制器的同时，我们还往HTML中添加了一个`ng-controller`指令。这个指令告诉Angular,我们创建的这个`InvoiceController`控制器将会负责管理这个带有ng-controller指令的div节点，及其各级子节点。`InvoiceController as invoice`这个语法告诉Angular:创建这个`InvoiceController`的实例，并且把这个实例赋值给当前作用域(Scope)中的`invoice`变量。

同时，我们修改了页面中所有用于读写Scope变量的表达式，给他们加上了一个`invoice.`前缀。

在这个script标签中，我们还创建了一个模块(module),并且在这个模块中注册了控制器(controller)。

下图表现的是我们生命了这个控制器(controller)之后，它们是如何协作的。

![](image/7.png)

#### 与视图(View)无关的业务逻辑：服务(Service)

现在，`InvoiceController`包含了我们这个例子中的所有逻辑。如果这个应用程序的规模继续成长，最好的方法是：把控制器中与视图无关的逻辑都移到“服务(service)”中。以便这个应用程序的其他部分也能复用这些逻辑。

重构例子，把币种兑换的逻辑移入到一个独立的服务(service)中。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../angular-1.5.8/angular.js"></script>
    <script src="../js/finance.js"></script>
    <script src="../js/invoice.js"></script>
</head>
<body>
<div ng-app="invoice" ng-controller="InvoiceController as invoice">
    <b>Invoice:</b>
    <div>
        Quantity: <input type="number" min="0" ng-model="invoice.qty" required>
    </div>
    <div>
        Costs: <input type="number" min="0" ng-model="invoice.cost" required>
        <select ng-model="invoice.inCurr">
            <option ng-repeat="c in invoice.currencies">{{c}}</option>
        </select>
    </div>
    <div>
        <b>Total:</b>
        <span ng-repeat="c in invoice.currencies">
            {{invoice.total(c) | currency:c}}
        </span><br>
        <button class="btn" ng-click="invoice.pay()">Pay</button>
    </div>
</div>
</body>
</html>
```

``` js
angular.module('invoice', ['finance'])
    .controller('InvoiceController', ['currencyConverter', function (currencyConverter) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;

        this.total = function (outCurr) {
            return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };

        this.pay = function () {
            window.alert('谢谢！！');
        }
    }]);
```

``` js
angular.module('finance', [])
    .factory('currencyConverter', function () {
       let currencies = ['USD', 'EUR', 'CNY'],
           usdToForeignRates = {
               USD: 1,
               EUR:0.74,
               CNY: 6.09
           };
       return {
           currencies: currencies,
           convert: convert
       };

       function convert(amount, inCurr, outCurr) {
           return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
       }
    });
```

我们把`convertCurrency``函数所支持的币种的定义独立到一个新文件：finance.js。

我们通过"依赖注入(Dependency Injection)"的方式找到这个独立的函数。依赖注入(DI)是一种设计模式(Design Pattern),它用于解决下列问题：我们创建了对象和函数，但是它们怎么得到自己所依赖的对象。

Angular中的每一样东西都是用依赖注入的方式来创建和使用的，比如指令、过滤器、控制器、服务。在Angular中，依赖注入的容器叫做"注入器"。

要进行依赖注入，必须先把这些需要协同工作的对象和函数注册(Register)到某个地方。在Angular中，这个地方叫模块。

前面一个例子中：模板包含了一个`ng-app="invoice"`指令。这告诉Angular使用invoice模块作为该应用程序的主模块。`angular.module('invoice', ['finance'])`表示：`invoice`模块依赖于`finance`模块。这样一来，Angular就能同时使用`InvoiceController`这个控制器和`currencyConverter`这个服务了。

`InvoiceController`该怎样获得这个`currencyConverter`函数的引用，在Angular中,这非常简单，只要在构造函数中定义一些具有特定名字的参数就可以了。这时，注入器就可以按照正确的依赖关系创建这些对象，并且根据名字把它们传入那些依赖它们的对象工厂中。在前面的代码中，`InvoiceController`有一个叫`currencyConverter`的参数。根据这个参数，Angular就知道`InvoiceController`依赖于`currencyConverter`,取得`currencyConverter`服务的俄实例，并且把它作为参数传给`InvoiceController`的构造函数。

最后一点是我们把一个数组作为参数传入到`module.controller`函数中，而不再是一个普通的函数。这个数组前面部分的元素包含这个控制器所依赖的一系列服务的名字，最后一个元素则是这个控制器的构造函数。这样做的用处是：避免js代码压缩器(Minifier)破坏这个“依赖注入”的过程。

#### 访问后端

通过Yahoo finance API来获取货币之间的当前汇率。

``` js
angular.module('finance', [])
    .factory('currencyConverter', ['$http', function($http) {
        var YAHOO_FINANCE_URL_PATTERN =
            'http://query.yahooapis.com/v1/public/yql?q=select * from '+
            'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
            'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK',
            currencies = ['USD', 'EUR', 'CNY'],
            usdToForeignRates = {};
        refresh();
        return {
            currencies: currencies,
            convert: convert,
            refresh: refresh
        };

        function convert(amount, inCurr, outCurr) {
            return amount * usdToForeignRates[outCurr] * 1 / usdToForeignRates[inCurr];
        }

        function refresh() {
            var url = YAHOO_FINANCE_URL_PATTERN.
            replace('PAIRS', 'USD' + currencies.join('","USD'));
            return $http.jsonp(url).success(function(data) {
                console.log(data);
                var newUsdToForeignRates = {};
                angular.forEach(data.query.results.rate, function(rate) {
                    var currency = rate.id.substring(3,6);
                    newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
                });
                usdToForeignRates = newUsdToForeignRates;
            });
        }
    }]);
```

这次我们的`finance`模块中的`currencyConverter`服务使用了`$http`服务--它是由Angular内建的用于访问后端的API服务。是对`XMLHttpRequest`以及JSONP的封装。详情参考$http的API文档-[$http](http://www.angularjs.net.cn/api/105.html)。
