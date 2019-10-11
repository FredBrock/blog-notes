一. 在 ios safari 或者安卓比较早版本会出现点击延迟

    1.

    ```
        <meta name="viewport" content="width=device-width, user-scalable=no">

    ```

    如果设置视口，某些移动浏览器会消除 300 毫秒的点击延迟

    2.

    ```
        html {
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        }

    ```

    浏览器只允许进行滚动和持续缩放操作。任何其它被 auto 值支持的行为不被支持。启用平移和缩小缩放手势，但禁用其他非标准手势，例如双击以进行缩放。 禁用双击可缩放功能可减少浏览器在用户点击屏幕时延迟生成点击事件的需要。

    3. [fastclick](https://github.com/ftlabs/fastclick)

    它使用 touch events 代替 click  并且删除 double-tap,它会查看你的手指在touchstart和touchend之间的移动量，以区分滚动和点击。

    4. https://github.com/filamentgroup/tappy/


        ios > 9.3 解决了此问题
    原因：移动浏览器有一个手势称为双击缩放，并使双点击缩放工作，浏览器不会触发click事件（或各种鼠标事件）,需要等待300ms 后才能知道是click 事件

ios 解决方案：ios 会区分你是快点击还是慢点击(fast or slow),快点击 ios 可能会认为你是双击缩放操作，慢速点击不太可能成为双击缩放的一部分，
UIWebView 和 WKWebView
新的 iOS 8 启发式只出现在 iOS 8 Safari 和 iOS 的新 WKWebView 类中。遗留类中不存在启发式方法 UIWebView，并且对于作为主屏幕 Web 应用程序运行的应用程序，它们也不存在。

### 相关链接

[触摸测试](https://patrickhlauke.github.io/touch/tests/results/)

二. 如何判断触摸屏设备

    1. document.createEvent('TouchEvent')

    在pc上创建TouchEvent 会报错说无效,只有触摸屏设置才行。

    1.  'ontouchstart' in window

    检查window是否有onstouchstart 属性。
    1. window.DocumentTouch && document instanceof DocumentTouch

    判断window对象下是否有Document构造函数,并且Document 是否是document父类型。


    1. navigator.maxTouchPoints

    根据当前设备返回同时最大触摸点数 判断是否是触摸屏设备.

三. 使用场景？

--- 有了更好的问题，你就会有更好的答案。---

四. javascript 浏览器性能测试

    1.https://browserbench.org/JetStream/
    2.https://www.telerik.com/
    3.https://www.html5test.com
    4.https://plg.uwaterloo.ca/~dynjs/jsbench/
    5.https://jsperf.com/
