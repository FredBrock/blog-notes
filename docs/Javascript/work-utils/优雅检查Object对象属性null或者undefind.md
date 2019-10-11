在开发过程中经常会遇到一个常见的问题，就是通过Ajax请求后台得到一段 Data 数据，比如：

```json
{
    "code":200,
    "state":0,
    "data":{
            "name":'张三',
            "email": 'jack@dev.com',
            "personalInfo": {
              name: 'Jack',
              address: {
                  line1: 'westwish st',
                  line2: 'washmasher',
                  city: 'wallas',
                  state: 'WX'
              }
          	}
        }
}
```

如上当我们得到上面一个信息的，我想获取address字段，需要  

```javascript
var data = resource.data
var address = data.personalInfo.address
```

这段代码看起来没什么问题，但是当遇到一些边缘情况的时候就会出现问题了，如果访问对象的属性是null或者undefind 的时候，控制台会抛出一个异常，比如：

```javascript
var data = resource.data
var address = data.personalInfo.info.name
```

当我们访问data.personalInfo.info得到的是一个undefind值,然后访问undefind的name 会报错。

```javascript
VM2268:1 Uncaught TypeError: Cannot read property 'name' of undefined
    at <anonymous>:1:10
```



1. 常见做法



```javascript
const name = user && user.personalInfo ? user.personalInfo.name : null;
```

如果嵌套结构层级太多会导致难以理解

二. 最佳实践

1. 

```javascript
const name = ((user || {}).personalInfo || {}).name;
```

2. 

```javascript
const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}
```

3. 

```javascript
var getPath = function (obj, keyStr) {
    return key.split(".").reduce(function(o, x) {
        return (typeof o == "undefined" || o === null) ? o : o[x];
    }, obj);
}

 getPath(data, 'personalInfo.name')     // Jack
 getPath(data, 'personalInfo.info.name') // undefined
```

