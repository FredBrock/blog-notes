(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{250:function(e,t,n){"use strict";n.r(t);var r=n(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("迭代是编程中的常见做法，通常用于循环一组值，或者转换每个值，或者以某种方式使用或保存它以供以后使用")]),e._v(" "),n("h2",{attrs:{id:"iterators"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterators","aria-hidden":"true"}},[e._v("#")]),e._v(" Iterators")]),e._v(" "),n("p",[e._v("迭代器是一个对象可以从集合访问 item ,只需要一个 next 的方法移动到下一个项目作为有效迭代")]),e._v(" "),n("p",[e._v("实例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let  makeInterator = function (arr){\n    let currentIndex = 0;\n    return {\n        next:function(){\n            return currentIndex < arr.length\n                ? { value : arr[currentIndex++] ,done:false}\n                : {done:true}\n        }\n    }\n}\n\nlet iterator = makeIterator([1,2,3,4,5]);\nwhile(1){\n    let {value, done} = iterator.next();\n    if(done) break;\n    console.log(value);\n}\n\n\nIterables\n")])])]),n("p",[e._v("迭代\n可以迭代的数据结构在 ECMAScript 6 中称为迭代。它们有一个返回所有元素的迭代器的方法。该方法有一个特殊的键：符号 Symbol.iterator。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let iterableUser = {\n    name: 'kenneth',\n    lastName: 'truyers',\n    [Symbol.iterator]: function*(){\n        yield this.name;\n    }\n}\n// logs 'kenneth' and 'truyers'\nfor(let item of iterableUser){\n    console.log(item);\n}\n\n可以自己创建迭代对象， 我们可以为一个对象Object 添加 @@iterator 方法，或者Symbol.iterator 作为方法名称\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);