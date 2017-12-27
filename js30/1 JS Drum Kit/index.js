function removeTransition(event) {

    // 过滤事件
    if (event.propertyName !== 'transform') return;
    console.log('event.propertyName',event.propertyName);
    console.log('event',event);
    console.log('event.target',event.target);
    // console.log('event==this',event.target === this); true
    
// 移除高亮样式
    // event.target.classList.remove('playing');
    this.classList.remove('playing');
}

 function playSound(event) {
    //  event.target.classList.remove('playing');
    //  通过键码，自定义属性筛选得到对应的audio按钮
     const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
    //  获取页面上对应键盘的字符
     const key=document.querySelector(`div[data-key="${event.keyCode}"]`);

     if (!audio) return; // 无效的键盘事件

     key.classList.add('playing'); // 添加播放样式

     audio.currentTime = 0; // 每次音频播放后都使播放进度为0
     
     audio.play(); // 播放对应的音频
 }
 // 获取页面所有的按钮元素
 const wrap= Array.from(document.querySelectorAll(".content")); 


// 添加 transition 事件监听
 wrap.forEach(key => key.addEventListener('transitionend', removeTransition));

 window.addEventListener('keydown',playSound);