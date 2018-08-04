# peach-heart
鼠标点击桃心效果
## 桃心组成
1正方形 + 2圆形重叠而成  圆形通过伪元素分别定位在方形左侧和上侧
## animationend事件
元素动画完成后执行回调删除元素
```
ele.addEventListener('animationend',()=>{
  document.body.removeChild(ele);
})
```
