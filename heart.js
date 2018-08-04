//点击页面 生成桃心(桃心可以由一个正方形和两个圆形重叠形成)
document.body.addEventListener('click',(e)=>{
	//获取鼠标点击的位置pageX , pageY
	var x = e.pageX,
		y = e.pageY;
	//创建元素
	var ele = document.createElement('span');
	ele.className = 'heart';
	ele.style.left = (x-10) + 'px';
	ele.style.top = (y-15) + 'px';
	document.body.appendChild(ele);
	//防止页面元素越来越多  使用animationend事件 元素动画结束从页面移除
	ele.addEventListener('animationend',()=>{
		document.body.removeChild(ele);
	})
})