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

我们把`convertCurrency`函数所支持的币种的定义独立到一个新文件：finance.js。

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

这次我们的`finance`模块中的`currencyConverter`服务使用了`$http`服务--它是由Angular内建的用于访问后端的API服务。是对`XMLHttpRequest`以及JSONP的封装。详情参考\$http的API文档-[\$http](http://www.angularjs.net.cn/api/105.html)。

### AngularJS Html编译(HTML Compiler)

Angular的`HTML compiler`让开发者可以教浏览器一些新的语法技能。编译器允许我们往现有的HTML元素或属性添加更多的操作逻辑，甚至我们可以自己创建新的带有自定义行为操作的HTML元素或属性。Angular把这些操作扩展称之为`指令`。

Angular预先绑定了一些常见的对构建应用极其有用的指令。同时我们也可以创建一些与我们应用直接相关的指令。这些扩展构成了与特定领域相关的语言来构建你得应用，没有任何服务器端的预编译的介入。

#### 编译器

编译器是Angular提供的一项服务，用来遍历DOM节点，查找特定的属性。编译过程分为两个阶段：
1. **编译：** 遍历DOM节点，手机所有的指令，返回一个连接函数(link func)
2. **连接：** 将上一步收集到的每个指令与其所在作用域(scope)连接生成一个实时视图。任何作用域中的模型改变都会实时在视图中反应出来，同时任何用户与视图的交互则会映射到作用域的模型中。**作用域中的数据模型就成了惟一的数据源**。

如`ng-repeat`这样的指令，会为集合中的每个项目克隆一次DOM元素。由于克隆的模板只需要被编译一次，然后为每个克隆实例做一次连接，这样将编译分为编译和连接两个阶段就有效地提升了性能(不需要对每个克隆的实例都编译一次，只需要对模板进行统一的一次编译，然后在连接阶段单独为每个实例进行到scope的连接即可)。***没懂***

#### 指令

在编译过程中，遇到特定的HTML结构(也就是指令)时，指令所生命的行为操作会被触发。指令可以被放在元素名，属性，类名，甚至注释中。下面是一些等价的调用`ng-bind`指令的例子：

``` html
<span ng-bind="exp"></span>
<span class="ng-bind: exp;"></span>
<ng-bind></ng-bind>
```

指令就是在编译起遍历DOM时碰到就需要执行的函数。

#### 理解视图

绝大多数模板引擎系统采用的是把字符串模板和数据拼接，然后输出一个新的字符串，在前端这个新的字符串作为元素的`innerHTML`属性的值。

![](image/8.png)

这就意味着数据中的任何改变都需要重新和模板合并，然后再赋值给DOM元素的`innerHTML`属性。这里我们可以看到这种策略的一些问题：
1. 读取用户输入及将其与数据合并
2. 重写用户输入
3. 管理整个更新流程
4. 缺少行为表现

Angular则不同。它的编译器直接使用DOM作为模板而不是用字符串模板。编译阶段的返回结果是一个连接函数(link func)，在连接阶段会和特定的作用域中的数据模型连接生成一个实时的视图。视图和作用域数据模型的绑定是透明的。开发者不需要做任何特别的调用去更新视图。而且，Angular指令不仅可以包含文本绑定，同时也支持行为操作的绑定。

![](image/9.png)

Angular的这种策略生成的是最稳定的DOM模板。DOM元素实例和数据模型实例的绑定在绑定期间是不会发生变化的。这就意味着在我们的代码中可以去获取这些DOM模板元素并且注册相应的事件处理函数，而不用担心这个对DOM元素的引用会因为数据合并而产生变化。

#### 编译指令

一般的是对字符串的拼接，然后再`innerHTML`，Angular的编译是在DOM节点上进行的。通常，我们不会注意到这个约束，因为当一个页面加载时，浏览器自动将HTML解析为DOM树了。

然而，如果我们自己手动调用`$compile`的时候，就需要注意上面的注意点了。因为如果你传给它一个字符串，显然是要报错的。所以在传值给`$compile`之前，用`angular.element`将字符串转化为DOM。

HTML编译可以细分为三个阶段：
1. `$compile`遍历DOM节点，匹配指令。如果编译器范县某个元素匹配一个指令，那么这个指令就被添加到指令列表中(该列表与DOM元素对应)。一个元素可能匹配到多个指令(也就是一个元素里面有多个指令)。
2. 当所有指令都匹配到相应的元素时，编译器按照指令的`priority`属性来排列指令的编译顺序。然后依次执行每个指令的`compile`函数。每个`compile`函数都有意此个更改该指令所对应的DOM模板的机会，然后，每个`compile`函数返回一个`link`函数。这些函数构成一个“合并的”连接函数，它会调用每个指令返回的`link`函数。
3. 之后，`$compile`调用第二部返回的连接函数，将模板和对应的作用域连接。而这又会依次调用连接函数中包含的每个指令对应的`linnk`函数，进而在各个DOM元素上注册监听器以及在相应的`scope`中设置对应的`$watch S`。

经历这三个阶段之后，结果是我们得到了一个作用域和DOM绑定的实时视图。所以在这之后，任一发生在已经经过编译的作用域上的数据模型的变化都会反映在DOM之中。

使用`$compile`服务的相关代码。

``` js
let $compile = .....; // injected into your code;
let scope = .....;
let parent = ...; // DOM element where the compiled template can be appended

let html = '<div ng-bind="exp"></div>';

// Step 1: parse HTML into DOM element
let template = angular.element(html);

// Step 2: compile the template
let linkFn = $compile(template);

// Step 3: link the compiled template with the scope
let element = linkFn(scope);

// Step 4: Append to DOM(optional)
parent.appendChild(element);
```

**compile和link的区别**

任何时候任一数据模型的改变引起的DOM结构的改变都需要这种两阶段编译的支持。

指令有compile function是不多见的，因为大部分指令通常只关心如何操作特定的DOM元素实例，而不是去改变它的整体结构。

指令通常有link function。连接函数让指令能够往特定的DOM元素实例的克隆对象上注册监听器，同时可以将作用域中的内容复制到DOM中去。

> **最佳实践**： 任何能够在实例中共享的操作，为了性能考虑，最好是都移到指令的compile function中去。

**编译阶段**收集所有的指令并按照优先级排序，之后在**连接阶段**将特定的作用域实例与特定的<li>实例连接。

> **注意**： *连接*意味着在DOM上设置监听器以及在相关的作用域中设置`$watch`以保证二者(DOM和作用域)的同步。

**作用域与Transcluded指令是如何工作的**

无法理解！

### AngularJS数据绑定(Data Binding)

在Angular网页应用中，数据绑定是数据模型(model)与视图(view)组件的自动同步。Angular的实现方式允许我们把应用中的模型看成单一数据源。而视图始终是数据模型的一种展现形式。当模型改变时，视图就能反映这种改变，反之亦然。

### AngularJS控制器(Controllers)

在Angular中，控制器就像是JavaScript中的**构造函数**一样，是用来增强Angular作用域(scope)的。

当一个控制器通过`ng-controller`指令被添加到DOM中时，ng会调用该控制器的**构造函数**来生成一个控制器对象，这样，就创建了一个新的**子级 作用域(scope)**。在这个构造函数中，作用域(scope)会作为`$scope`参数注入其中，并允许用户代码访问它。

一般情况下，我们使用控制器做两件事：
- 初始化`$scope`对象
- 为`$scope`对象添加行为(方法)

#### 初始化`$scope`对象

当我们创建应用程序时，我们通常需要为Angular的`$scope`对象设置初始状态，这是通过在`$scope`对象上添加属性实现的。这些属性就是供在视图展示用的**视图模型**(view model)，它们在与此控制器相关的模板中均可访问到。

下面这个例子定义了一个非常简单的控制器构造函数：`GreetingCtrl`，我们在该控制器所创建的scope中添加一个`greeting`属性：

``` js
function GreetingCtrl ($scope) {
  $scope.greeting = 'Hola';
}
```

如上所示，我们有了一个控制器，它初始化了一个`$scope`对象，并且有一个`greeting`属性。当我们把该控制器关联到DOM节点上，模板就可以通过数据绑定来读取它。

``` html
<div ng-controller="GreetingCtrl">
  {{greeting}}
</div>
```

**注意**： 虽然Angular允许我们在全局作用域下(window)定义控制器函数，但是**建议不要**用这种方式。在一个实际应用程序中，推荐在Angular模块下通过`.controller`为应用创建控制器。

``` js
let myApp = angular.module('myApp', []);

myApp.controller('GreetingCtrl', ['$scope', function($scope){
  $scope.greeting = 'Hola';
}]);
```

#### 为`$scope`对象添加行为

为了对事件做出响应，或是在视图中执行计算，我们需要为scope提供相关的操作的逻辑。

举个例子：

``` js
let myApp = angular.module('myApp', []);

myApp.controller('DoubleCtrl', function ($scope) {
  $scope.double = function (value) {
    return value * 2;
  }
});
```

当上述控制器被添加到DOM之后，`double`方法即可被调用，如在模板中的一个Angular表达式中：

``` html
<div ng-controller="DoubleCtrl">
  <input ng-model="num">翻倍之后等于
</div>
```

#### 正确使用控制器

通常情况下，控制器不应该被赋予太多的责任和义务，它只需要负责一个单一视图所需的业务逻辑。

最常见的保持控制器“纯度”的方法是将那些不属于控制器的逻辑都封装到服务(service)中，然后在控制器中通过依赖注入调用相关服务。详见“依赖注入 服务”这两部分。

注意，下面的场合**千万不要用控制器**：
- 任何形式的DOM操作： 控制器值应该包含业务逻辑。DOM操作则属于应用程序的表现层逻辑操作，向来以测试难度之高闻名于业界。把任何表现层的逻辑放在控制器中将会大大增加业务逻辑的测试难度。ng提供数据绑定(数据绑定)来实现自动化的DOM操作。如果需要手动进行DOM操作，那么最好将表现层的逻辑封装在指令中。
- 格式化输入： 使用**angular表单控件**代替
- 过滤输出： 使用**angular过滤器**代替
- 在控制器间复用有状态或无状态的代码： 使用**angular服务**代替
- 管理其他部件的生命周期(如手动创建service实例)

#### 将控制器与scope对象关联

通过两种方法可以实现控制器和scope对象的关联：
- `ngController`指令这个指令就会创建一个新的scope
- $route路由服务

**简单的控制器范例**

我们用以下几个部件来构建一个小型应用：
- 一个由两个按钮和一条简单反馈构成的模板
- 一个名为`spice`的数据模型对象，是一个字符串
- 一个拥有两个方法的控制器，可以设置`spice`的值

``` html
<div ng-app="spicyApp1" ng-controller="SpicyCtrl">
 <button ng-click="chiliSpicy()">Chili</button>
 <button ng-click="jalapenoSpicy()">Jalapeño</button>
 <p>The food is {{spice}} spicy!</p>
</div>
```

``` js
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);
```

上面的例子中有几个值得注意的地方：
  - `ng-controller`指令用来为我们的模板创建一个scope，而且它受到`SpicyCtrl`控制器的管理
  - `SpicyCtrl`就是一个普通的Javascript函数，只是命名上以首字母大写，以"Ctrl"或"Controller"结尾
  - 把一个属性指定给`$scope`这样会创建或更新一个数据模型
  - 控制器的方法可以通过在scope中添加函数来创建，如`chiliSpicy`方法
  - 控制器的方法和属性在模板/视图中都是可以获得的，在上例中的`<div>`元素及其子节点

#### 控制器范例扩展--带参数

控制器方法可以带参数

``` html
<div ng-app="spicyApp2" ng-controller="SpicyCtrl">
  <input ng-model="customSpice">
  <button ng-click="spicy('chili')">Chili</button>
  <button ng-click="spicy(customSpice)">Custom spice</button>
  <p>The food is  spicy!</p>
</div>
```

``` js
var myApp = angular.module('spicyApp2', []);

myApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';

    $scope.spicy = function(spice){
        $scope.spice = spice;
    };
}]);
```

#### Scope继承范例

我们常常会在不同层级的DOM结构中添加控制器。由于`ng-controller`指令会创建新的子级scope，这样我们就会获得一个与DOM层级结构相对应的基于继承关系的scope层级结构。底层（内层）控制器的`$scope`能够访问高层控制器的scope中定义的属性和方法。

下面是一个拥有三层div结构，demo中的蓝色边框很清晰的展现了scope的层级和DOM层级的对应关系。他还展示了"scope"是由`ng-controller`指令创建并由其对应的控制器所管理这个概念。

``` html
<div class="spicy">
  <div ng-controller="MainController">
    <p>Good {{timeOfDay}}, {{name}}!</p>

    <div ng-controller="ChildController">
      <p>Good {{timeOfDay}}, {{name}}!</p>

      <div ng-controller="GrandChildController">
        <p>Good {{timeOfDay}}, {{name}}!</p>
      </div>
    </div>
  </div>
</div>
```

``` js
var myApp = angular.module('scopeInheritance', []);
myApp.controller('MainController', ['$scope', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Nikki';
}]);
myApp.controller('ChildController', ['$scope', function($scope) {
  $scope.name = 'Mattie';
}]);
myApp.controller('GrandChildController', ['$scope', function($scope) {
  $scope.timeOfDay = 'evening';
  $scope.name = 'Gingerbread Baby';
}]);
```

上面例子中我们在HTML模板中嵌套了三个`ng-controller`指令，这导致我们的视图中有4个scope:
- root scope，所有作用域的“根”
- `MainCtrl`控制器管理的scope，拥有`timeOfDay`和`name`两个属性
- `ChildCtrl`控制器管理的scope，继承了`MainCtrl` scope中的`timeOfDay`属性，但重写了它的`name`属性
- `GrandChildCtrl`控制器管理的scope，重写了`MainCtrl` scope中的`timeOfDay`属性和`ChildCtrl` scope中的`name`属性

#### 控制器的单元测试

虽然我们有很多方法可以对控制器进行测试，但是在这里，我们仅展示最常见的一种，包括注入`$rootScope`以及`$controller`：
**控制器定义：**

``` js
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
  $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
                   {"name":"jalapeno", "spiceiness":"hot hot hot!"},
                   {"name":"habanero", "spiceness":"LAVA HOT!!"}];
  $scope.spice = "habanero";
});
```

**控制器测试：**

``` js
describe('myController function', function () {
  describe('myController', function () {
    var $scope;
    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope, $controller){
      $scope = $rootScope.$new();
      $controller('MyController', {$scope: $scope});
    }));
    it('should create "spices" model with 3 spice', function () {
      expect($scope.spices.length).toBe(3);
    });
    it('should set the default value of spice', function () {
      expect($scope.spice).toBe('habanero');
    });
  });
});
```

如果需要测试嵌套关系的控制器，那么在测试代码中，我们也得创建对应于scope层级结构的测试代码：

``` js
describe('state', function () {
  var mainScope, childScope, grandChildScope;
  beforeEach(module('myApp'));
  beforeEach(inject(function($rootScope, $controller) {
    mainScope = $rootScope.$new();
    $controller('MainCtrl', {$scope: mainScope});
    childScope = mainScope.$new();
    $controller('ChildCtrl', {$scope: childScope});
    grandChildScope = childScope.$new();
    $controller('GrandChildCtrl', {$scope: grandChildScope});
  }));
  it('should have over an selected', function() {
    expect(mainScope.timeOfDay).toBe('moring');
    expect(mainScope.name).toBe('Nikki');
    expect(childScope.timeOfDay).toBe(morning);
    expect(childScope.name).toBe('Mattie');
    expect(grandChildScope.timeOfDay).toBe('evening');
    expect(grandChildScope.name).toBe('Gingerbread Baby')
  });
});
```

### AngularJS服务(Services)

依赖注入

### AngularJS作用域(Scope)

`作用域(scope)`
- 是一个存储应用数据模型的对象
- 为*表达式*提供了一个执行上下文
- 作用域的层级结构对应于DOM树结构
- 作用域可以监听*表达式*的变化并传播事件

#### 作用域有什么

- 作用域提供了(`$watch`)方法监听数据模型的变化
- 作用域提供了(`$apply`)方法把不是由Angular触发的数据模型的变化引入Angular的控制范围内(如控制器，服务，以及Angular事件处理器等)
- 作用域提供了基于原型链继承其父作用域属性的机制，就算是嵌套于独立的应用组件中的作用域也可以访问共享的数据模型
- 作用域提供了*表达式*的执行环境，比如像`{{username}}`这个表达式，必须是在一个拥有这个属性的作用域中执行才会有意义，也就是说，作用域中可能会像这样`scope.username`或者是`$scope.username`.

#### 作用域作为数据模型使用

作用域是Web应用的控制器和视图之间的粘接剂。在Angular中，最直观的表现是：在自定义指令中，处在模板的链接(linking)阶段时，`指令(directive)`会设置一个`$watch`函数监听作用域中各表达式。这个`$watch`允许指令在作用域中的属性变化时收到通知，进而让指令能够根据这个改变来对DOM进行重新渲染，一边更新已改变的属性值(**属性值就是scope对象中的属性，也就是数据模型**)。

其实，不知上面所说的指令拥有只想作用域的引用,控制器中也有(**可以理解为控制器与指令均能引用到与它们对应的DOM结构所处的作用域**)。但是控制器与指令时相互分离的，而且它们与视图之间也是分离的，这样的分离，或者说耦合度低，可以大大提高对用进行测试的工作效率。

可以很简单的理解为有以下两个链条关系：
- 控制器 --> 作用域 --> 视图(DOM)
- 指令 --> 作用域 --> 视图(DOM)

``` html
<div ng-controller="MyController">
  Your name:
    <input type="text" ng-model="username">
    <button ng-click='sayHello()'>greet</button>
    <hr>
  {{greet}}
</div>
```

``` js
angular.module('scopeExample', [])
.controller('MyController', ['$scope', function ($scope) {
  $scope.username = 'World';
  $scope.sayHello = function () {
    $scope.greeting = 'Hello' + $scope.username + '!';
  };
}]);
```

在上面这个例子中，我们有：
- 控制器： `MyController`，它引用了`$scope`并在其上注册了两个属性和方法
- $scope对象：持有上面例子所需的数据模型，包括`username`属性、`greeting`属性(在`sayHello()`方法被调用的时候注册的)和`ssayHello()`方法。
- 视图：拥有一个输入框、一个按钮以及一个利用双向绑定来显示数据的内容块

具体整个示例有这样两个流程，**从控制器发起的角度**来看就是：
1. 控制器往作用域中写属性：
   - 给作用域中的`username`赋值，然后作用域通知视图中的`input`数据变化了，`input`因为通过`ng-model`实现了双向绑定可以知道`uername`的变化，进而在视图中渲染出改变的值。
2. 控制器往作用域中写方法
   - 给作用域的`sayHello()`方法赋值，该方法被视图中的`button`调用，因为`button`通过`ng-click`绑定了该方法，当用户点击按钮时，`sayHello()`被调用，这个方法读取作用域中的`username`属性，加上前缀字符串`Hello`，然后赋值给在作用域中新创建的`greeting`属性

整个示例的过程如果从**视图的角度看**，那主要是以下三个部分：
1. `input`中的渲染逻辑：展示了通过`ng-model`进行的作用域和视图中某表单元素的双向绑定
   - 根据`ng-model`中的`username`去作用域中取，如果已经有值，那么用这个默认值填充当前的输入框
   - 接受用户输入，并且将用户输入的字符串传给`username`，这时候作用域中的该属性值实时更新为用户输入的值
2. `button`中的逻辑
   - 接受用户点击，调用作用域中的`sayHello()`方法
3. `{{greeting}}`的渲染逻辑
   - 在用户为单击按钮时，不显示内容
   - *取值阶段*：在用户单击后，这个表达式会去scope中取`greeting`属性，而这个作用域和控制器是同一个的，这时候，该作用域下`greeting`属性已经有了，这时候这个属性就被取回来了
   - *计算阶段*：在当前作用域下去计算`greeting`表达式，然后渲染视图，显示`Hello World`

我们可以知道：**作用域(scope)对象以及其属性是视图渲染的唯一来源。

从测试的角度来看，视图与控制器分离的需求在于它允许测试人员可以单独对应用的操作逻辑进行测试，而不必考虑页面的渲染细节。

``` js
it('should say hello', function () {
  var scopeMock = {};
  var cntl = new MyController(scopeMock);

  // 确保username被预先填充为World
  except(scopeMock.username).toEqual('World');

  // 确保我们输入了新的username后得到了正确的greeting值
  scopeMock.username = 'angular';
  scopeMock.sayHello();
  expect(scopeMock.greeting).toEqual('Hello angular!');
});
```

#### 作用域分层结构

如上所说，作用域的结构对应于DOM结构，那么最顶层，和DOM树有根节点一样，每个Angular应有且仅有一个`root scope`，当然，子级作用域就和DOM树的子节点一样，可以有多个的。应用可以拥有多个作用域，比如[指令]()会创建子级作用域。一般情况下，当新的作用域被创建时，它是以嵌入父级作用域的子级的形式被创建的，这样就形成了与其所关联的DOM树所对应的一个作用域的树结构。作用域的分层的一个简单例子就是，假设现在HTML视图中有一个表达式{{name}}，Angular需要经历取值和计算两个阶段才能最终再视图渲染结果。那么这个取值的阶段，其实就是根据作用域的这个层级结构（或树状结构）来进行的。
- 首先，Angular在该表达式当前所在的DOM节点所对应的作用域中去找有没有`name`这个属性
- 如果有，Angular返回取值，计算渲染；如果再当前作用域中没有找到，那么Angular继续往上一层的父级作用域中去找`name`属性，直到找到为止，最后实在没有，那就到达`$rootScope`

#### 从DOM中抓取作用域

作用域对象是与指令或控制器等Angular元素所在的DOM节点相关联的，也就是说，其实DOM节点上是可以抓取到作用域这个对象的。而对于`$rootScope`在哪里抓，它藏在`ng-app`指令所在的那个DOM节点之中。

如何在调试的时候抓取作用域：
1. F12调出debugger
2. 此时，调试器(debugger)允许我们使用变量`$0`来获取选择的元素
3. 在console中执行`angular.element($0).scope()`或直接输入$scope即可看到想要查询的当前DOM元素节点绑定的作用域了

-------------

#### 基于作用域的事件传播

作用域可以像DOM节点一样，进行事件的传播。主要是有两个方法：
- `broadcasted`：从父级作用域广播至子级scope
- `emitted`：从子级作用域往上发射到父级作用域

例子：

``` html
<div data-ng-controller="EventController">
    Root作用域<tt>MyEvent</tt>count:{{count}}
    <ul>
        <li data-ng-repeat="i in [1]" data-ng-controller="EventController">
            <button data-ng-click="$emit('MyEvent')">$emit('MyEvent')</button>
            <button data-ng-click="$broadcast('MyEvent')">$broadcast('MyEvent')</button>
            <br>
            Middle作用域<tt>MyEvent</tt>count:{{count}}
            <ul>
                <li data-ng-repeat="item in [1, 2]" data-ng-controller="EventController">
                    Leaf作用域<tt>MyEvent</tt>count:{{count}}
                </li>
            </ul>
        </li>
    </ul>
</div>
```

``` js
angular.module('eventExample', [])
.controller('EventController', ['$scope', function ($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function () {
        $scope.count++;
    })
}]);
```

前面的例子中有几个值得注意的点：
- `$emit`和`$broadcast`是直接被写在html模板中的，而不是写在控制器的JavaScript代码中，因为这两个方法是直接在$scope中就有的。
- 同一个控制器`EventController`被用在了三个不同的DOM节点中
- 上面的事件无非就是点击两个按钮，分别触发广播/冒泡事件，然后在各节点设置监听，这里只要用`$scope.$on()`方法，就可以监听。

#### 作用域的生命周期

**scope生命周期拆解**

1. **创建期**
    `root scope`是在应用程序启动时由`$injector`创建的。另外，在指令的模板链接阶段(template linking)，指令会创建一些新的子级scope.
2. **注册$watch**
    在模板链接阶段(template linking)，指令会往作用域中注册`监听器(watch)`，而且不止一个。这些`$watch`用来监听数据模型的更新并将更新值传给DOM。
3. **数据模型变化**
    要想让数据模型的变化能够很好的被Angular监测，需要让他们在`scope.$apply()`里发生。这些Angular已经隐式的为我们做了这一点。
4. **数据模型变化监测**
    在把数据变化`$apply`进来之后，Angular开始进入`$digest`轮循(就是调用`$digest()`方法)，首先是rootscope进入`$digest`，然后由其把各个监听表达式或是函数的任务传播分配给所有的子级作用域，那样各个作用域就各司其职了，如果监听到子级负责的数据模型有变化，马上就调用`$watch`。
5. **销毁作用域**
    当子级作用域不再需要的时候，这时候创建它们的就会负责把它们回收或是销毁（**在指令中，创建是隐式的，销毁不但可以是隐式的，也可以是显式的，如`$scope.$destroy()`。销毁是通过`scope.$destroy()`这个方法。销毁之后，`$digest()`方法就不会继续往子级作用域传播了，这样也就可以让垃圾回收系统把这个作用域上用来存放数据模型的内存给回收利用了。

**用域的执行上下文**

浏览器接收一个事件的标准的工作流程应该是：

> 接收事件 --> 触发回调 --> 回调执行结束返回 --> 浏览器重绘DOM --> 浏览器返回等待下一个事件

上面的过程中，如果一切都发生在Angular的执行上下文的话，那就相安无事，Angular能够知道数据模型发生改变；但是如果当浏览器的控制权跑到原生的Javascript中去时（如通过jQuery监听事件之类的非Angular的回调等），那么应用执行的上下文就会发生在Angular的上下文之外了，这样就导致Angular无法知晓数据模型的任何改变。想要让Angular重新掌权并知晓正在发生的数据模型的变化的话，那就需要通过使用`$apply`方法让上下文执行环境重新进入到Angular的上下文中(`$scope.$apply()`)。只有执行上下文重新回到Angular中，那样数据模型的改变才能被Angular所识别并作出相应的操作。

比如`ng-click`这个指令，监听DOM事件时，表达式的计算就必须放在`$apply()`中。

在计算完表达式之后，`$apply()`方法执行Angular的`$digest`阶段。在`$digest`阶段，scope检查所有通过`$watch`监测的表达式（或别的数据）并将其与它们之前的值进行比较。这就是所谓的`脏值检查(dirty checking)`。另外，需要注意的是，`$watch`的监测是异步执行的。这就意味着当前给一个作用域中的`digest()`阶段跑完($digest阶段可以认为是缓冲阶段，而且是必要的阶段)。通过`$disgest()`给我们提供的这个延迟是很有必要的，也是应用程序常常想要的，因为有这个延迟，我们可以等待几个或多个数据模型的改变/更新攒到一起，合并起来放到一个`$watch()`中去监测，而且这样也能从一定程度上保证在一个`$watch()`在监测期间没有别的`$watch()`在执行。这样，当前的`$watch()`可以返回给应用最准确的更新通知，进而刷新视图或者是进入一个新的`$digest()`阶段。

**作用域和指令**

在编译（或者说解析）阶段，编译器在HTML解析器解析页面遇到非传统的或是自己不能识别的标签或别的表达式时，Angular编译器就将这些HTML解析器不懂得东西（其实就是指令）在当前DOM环境下解析出来。通常指令分为两种，一种时我们常说的指令，另外一种就是我们通常叫它Angular表达式的双大括号形式，具体如下：
- 监测型指令，像双大括号表达式`{{expression}}`。这种类型的指令需要在`$watch()`方法中注册一个监听处理器来监听控制器或是别的操作引起的表达式值改变，进而来更新视图。
- 监听型指令，像`ng-click`，这种是在HTML标签属性中直接写好当`ng-click`发生时调用什么处理器，当DOM监听到`ng-click`被触发时，这个指令就会通过`$apply()`方法执行相关的表达式操作或是别的操作进而更新视图。

综上，无论是哪种类型的指令，当外部事件（可能是用户输入，定时器，ajax等）发生时，相关的表达式必须要通过`$apply()`作用于相应的作用域，这样所有的监听器才能被正确更新，然后进行后续的相关操作。

**可以创建作用域的指令**

大多数情况下，指令和作用域相互作用，但并不创建作用域的新实例。但是，有一些特殊的指令，如`ng-controller`和`ng-repeat`等，则会创建新的上下级作用域，并且把这个新创建的作用域和相应的DOM元素相关`angular.element(aDomElement).scope()`方法。

**作用域与控制器**

作用域和控制器的交互大概有以下几种情况：
- 控制器通过作用域对模板暴露一些方法供其调用，详见`ng-controller`
- 控制器中定义的一些方法（行为或逻辑）可以改变注册在作用域下的数据模型（也就是作用域的属性）
- 控制器在某些场合可能需要设置监听器来监听作用域中的数据模型。这些监听器在控制器的相关方法被调用时立即执行。

**作用域`$watch`性能**

因为在Angular中对作用域进行脏值检查(`$watch`)实时跟踪数据模型的变化时一个非常繁琐的操作，所以，进行脏值检查的这个函数必须是高效的。一定要注意的是，**用`$watch`进行脏值检查时，一定不要做任何的DOM操作**，因为DOM操作拖慢甚至时拖垮整体性能的能力比在javascript对象上做属性操作高好几个数量级。

**Scope `$watch` Depths**

Dirty checking can be done with three strategies:By reference,by conllection contents,and by value.The strategies differ in the kinds of changes they detect,and in their performance characteristics.

![](image\10.png)

#### 与浏览器事件轮循整合

![](image\11.png)

上图与示例描述了Angular如何与浏览器事件轮循进行交互。
1. 浏览器的事件轮循等待事件到来，事件可以是用户交互，定时器事件，或是网络事件（如ajax返回）
2. 事件发生，其回调被执行，回调的执行就使得应用程序的执行上下文进入到了JavaScript的上下文。然后在JavaScript的上下文中执行，并修改相关的DOM结构
3. 一旦回调执行完毕，浏览器就离开JavaScript的上下文回到浏览器上下文并基于DOM结构的改变重新渲染视图

Angular是插进了JavaScript的上下文中，通过提供Angular自己的事件处理轮循来改变正常的JavaScript工作流。它其实是把JavaScript上下文分成了两块:一个是传统的JavaScript执行上下文（图中浅蓝色区域），一个是Angular的执行上下文（图中的淡黄色区域）。只有在Angular上下文执行的操作才会受益于Angular的数据绑定，异常处理，属性检测，等等。当然，如果不在Angular的上下文中，也可以使用`$apply()`来进入Angular的执行上下文。需要注意的是，`$apply()`在Angular本身的很多地方（如控制器，服务等）都已经被隐式的调用了处理事件轮循。显式的使用`$apply()`只有在JavaScript上下文或是从第三方类库的回调中想要进入Angular时才需要。具体流程如下：
1. 进入Angular执行上下文的方法，调用`scope.$apply(stimulusFn)`。上面`$apply()`中的参数`stimulusFn`是你想要让它进入Angular上下文的代码
2. 进入`$apply()`之后，Angular执行`stimulusFn()`，而这个函数通常会改变应用程序的状态（可能是数据，或是方法调用）
3. 之后，Angular进入`$digest`轮循。这个沦胥是由两个较小的轮循构成，一个是处理`$evalAsync`队列（异步计算的队列），另一个是处理`$watch`列表。`$digest`轮循不断迭代变更（在`$eval`和`$watch`之间变更）直到数据模型稳定，这个状态其实就是`evalAsync`队列为空且`$watch`列表不再监测到变化为止。（**其实这里就是所有外来的异步操作堆起来成为一个队列，由`$eval`一个一个计算，然后`$watch`看一下这个异步操作对应的数据模型是否还有改变，有改变，就继续`$eval`这个异步操作，如果没改变，那就拿异步操作队列里的下一个异步操作重复上面的步骤，直到异步操作队列为空以及`$watch`不再监测到任何数据模型变化为止**）
4. `$evalAsync`队列是用来安排那些待进入Angular`$digest`的异步操作，这些操作往往是在浏览器的视图渲染之前，且常常是通过`setTimeout(0)`触发。但是用`setTimeout(0)`这个方法就不得不承受缓慢迟钝的响应以及可能引起的闪屏
5. `$watch`列表则是存放了一组经过`$eval`迭代之后可能会改变的Angular的表达式集合。如果数据模型变化被监测到，那么`$watch`函数调用进而用新值更新DOM。
6. 一旦Anguar的`$digest`轮循完成，那么应用程序的执行就会离开Angular及JavaScript的上下文。然后浏览器重新渲染DOM来反应发生的变化。

接下来是传统的`Hello World`示例的流程剖析，这样就能明白整个例子是如何在用户输入时产生双向数据绑定的。
1. 编译阶段：
    1. `ng-model`和`input`指令在`<input>`标签中设置了一个`keydown`监听器
    2. 在`{{greeting}}`插值（也就是表达式）这里设置了一个`$watch`来监测`username`的变化
2. 执行阶段：
    1. 在`<input>`输入框按下`x`键引起浏览器发出一个`keydown`事件
    2. `input`指令捕捉到输入值的改变调用`apply("username = 'x';")`进入Angular的执行环境来更新应用的数据模型
    3. Angular将`username = 'x';`作用在数据模型上，这样`scope.username`是被赋值为'x'了；
    4. `$digest`轮循开始
    5. `$watch`列表中监测到`username`有一个变化，然后通知`{{greeting}}`插值表达式，进而更新DOM
    6. 执行离开Angular的上下文，进而`keydown`事件结束，然后执行也就是推出了JavaScript发的上下文；这样`$digest`完成
    7. 浏览器用更新了的值重新渲染视图

### AngularJS依赖注入(Dependency Injection)

依赖注入(DI)是一种让代码管理其依赖关系的设计模式。

#### DI简介

对象或函数可以通过这三种方式获得所依赖的对象：
1. 创建依赖，通常是通过`new`操作符
2. 查找依赖，在一个全局的注册表中查阅它
3. 传入依赖，需要此依赖的地方等待被依赖对象注入进来

前两种方式：创建或是查找依赖都不是那么理想，因为它们都将依赖写死在对象或函数里了。问题在于，想要修改这种方式获得依赖对象的逻是很困难的。尤其是在测试的时候，会遇到很多问题，因为测试的时候常常需要我们提供所依赖对象的替身(MOCK)。

第三种方式是最理想的，因为它免除了客户代码里定位相应的依赖这个负担。反过来，依赖总是还能够被简单地注入到需要它的组件中。

``` js
function SomeClass(greeter) {
  this.greeter = greeter;
}

SomeClass.prototype.doSomething = function (some) {
  this.greeter.greet(name);
}
```

上述例子中，`SomeClass`不必在意它所依赖的`greeter`对象从哪里来的，只要知道一点：运行的时候`greeter`依赖已经被传进来了，直接用就可以了。

这个例子的代码虽然理想，但是它把获得所依赖对象的大部分责任都放在了我们创建`SomeClass`的客户代码中。

为了分离"创建依赖"的职责，每个Angular应用都有一个`injector`对象。这个`injector`是一个服务定位器，负责创建和查找某个依赖。（当你的app的某处声明需要用到某个依赖的时候，Angular会调用这个依赖注入器去查找或是创建你所需要的依赖，然后返回来给你用）

下面是一个利用`injector`服务例子：

``` js
// Provide the wirting information in a module
angualr.module('myModule', []).
// 下面是叫injector如何构建一个'greeter'依赖
// 注意greeter本身依赖于'$window'
  factory('greeter', function ($window) {
    // 这是一个factory函数，负责'greeter'服务
    return {
      greet: function (text) {
        $window.alert(text);
      }
    };
  });

  // 从module创建的injector
  // 这个常常是Angular启动时自动完成的
  var injector = angular.injector(['myModule', 'ng']);

  // 通过injector请求任意的依赖
  var greeter = injector.get('greeter');
```

函数或对象通过请求依赖解决了硬编码的问题，但同时也就意味着injector需要通过应用传递，而传递injector破坏了Law of Demeter。为了弥补这个，我们通过像下面例子那样声明依赖，将依赖查找的任务丢给了injector去做：

``` html
<!-- Given this HTML -->
<div ng-controller="MyController">
  <button ng-click="sayHello()">Hello</button>
</div>
```

``` js
// And this controller definition
function MyController($scope, greeter) {
  $scope.sayHello = function () {
    greeter.greet('Hello World');
  };
}

// The 'ng-controller' directive does this behind the scenes
injector.instantiate(MyController);
```

注意，通过让`ng-controller`在背后调用injector初始化控制器类满足了`MyController`需要依赖的需求，而且可以让控制器根本不知道injector的存在。这是最好的结果了。应用中的代码简单地提交它需要依赖的请求，不需要去管injector,而且这样也不违反迪米特法则。

#### 依赖注释

**此处注释非代码注释，应理解为依赖声明的方法**

**推断依赖**

最简单的获取依赖的方法是让函数的参数名直接使用依赖名。

``` js
function MyController($scope, greeter) {
  doSomething...
}
```

给injector一个函数，它可以通过检查函数声明并抽取参数名可以推断需要注入的服务名。在上面的例子中，`$scope`和`greeter`是两个需要被注入到函数中的服务。

虽然这种方式很直观明了，但是它对压缩的JavaScript代码来说是不起作用的，因为压缩过后的JavaScript代码重命名了函数的参数名。这就让这种注释方式只对pretotyping和demo级应用有效。

**`$inject`注释**

为了让重命名了参数的压缩搬的JavaScript代码能够正确地注入相关地依赖服务。函数需要通过`$inject`属性进行标注，这个属性是一个存放需要注入的服务的数组。

``` js
var MyController = function (renamed$scope, renamedGreeter) {
  ....
}
MyController['$inject'] = ['$scope', 'greeter'];
```

**行内注释**

有时候用`$inject`注释的方式不方便，比如标注指令的时候（**这里可以理解为告诉指令需要加载哪些服务依赖的说明）。

例子:

``` js
someModule.factory('greeter', function ($window) {
  ...
});
```

``` js
var greeterFactory = function (renamed$window) {
  ...
};
greeterFactory.$inject = ['$window'];
someModule.factory('greeter', greeterFactory);
```

``` js
someModule.factory('greeter', ['$window', function(renamed$window)])
```

上面三种依赖注释的风格是等价的，在Angular中任何支持依赖注入的地方都可以使用。

**哪里使用DI

在Angular中，DI无处不在。通常在控制器和工厂方法中使用比较多。

> 控制器中使用DI

控制器是负责应用操作逻辑的JavaScript类，推荐的在控制器中使用DI的方式使用数组标记风格。这样会避免在全局作用域内创建控制器，同时也避免了代码压缩时引起的注入问题。

``` js
someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function ($scope, dep1, dep2) {
  ...
  $scope.aMethod = function () {
    ...
  }
  ...
}]);
```

> 工厂方法中使用DI

工厂方法负责创建Angular中的绝大多数对象。例如指令，服务和过滤器等。工厂方法是注册在模块之下的，推荐的声明方式如下：

``` js
angualr.module('myModule', [])
.config(['depProvider', function (depProvider){
  ...
}])
.factory('serviceId', ['depService', function (depService) {
  ...
}])
.directive('directiveName', ['depService', function (depService) {
  ...
}])
.filter('filterName', ['depService', function (depService) {
  ...
}])
.run(['depService', function (depService){
  ...
}]);
```
