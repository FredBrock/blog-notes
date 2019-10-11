/* 探测浏览器种类 */
function whichTransitionEvent() {
  var t
  var el = document.createElement('div')
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  }

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t]
    }
  }
}
/* 监听变换事件! */
var transitionEvent = whichTransitionEvent()
transitionEvent &&
  e.addEventListener(transitionEvent, function() {
    console.log(
      'Transition complete!  This is the callback, no library needed!'
    )
  })
