迭代是编程中的常见做法，通常用于循环一组值，或者转换每个值，或者以某种方式使用或保存它以供以后使用

## Iterators

迭代器是一个对象可以从集合访问 item ,只需要一个 next 的方法移动到下一个项目作为有效迭代

实例：

```
let  makeInterator = function (arr){
    let currentIndex = 0;
    return {
        next:function(){
            return currentIndex < arr.length
                ? { value : arr[currentIndex++] ,done:false}
                : {done:true}
        }
    }
}

let iterator = makeIterator([1,2,3,4,5]);
while(1){
    let {value, done} = iterator.next();
    if(done) break;
    console.log(value);
}


Iterables
```

迭代
可以迭代的数据结构在 ECMAScript 6 中称为迭代。它们有一个返回所有元素的迭代器的方法。该方法有一个特殊的键：符号 Symbol.iterator。

```
let iterableUser = {
    name: 'kenneth',
    lastName: 'truyers',
    [Symbol.iterator]: function*(){
        yield this.name;
    }
}
// logs 'kenneth' and 'truyers'
for(let item of iterableUser){
    console.log(item);
}

可以自己创建迭代对象， 我们可以为一个对象Object 添加 @@iterator 方法，或者Symbol.iterator 作为方法名称
```
