/*
 * @Author: icessun 
 * @Date: 2017-12-03 20:10:35 
 * @Last Modified by: icessun
 * @Last Modified time: 2017-12-03 21:03:24
 * 
 * 主要目的是：当我们按键盘的时候，对应的字符调用audio，播放音乐
 * 
 * 键盘事件
 * 
 * 自定义属性
 */
function removeTransition(event) {
    console.log('1111');
    
    // 过滤事件
    if (event.propertyName !== 'transform') return;
  
// 移除高亮样式
    event.target.classList.remove('playing');
}


 function playSound(event) {
    //  通过键码，属性筛选得到对应的audio
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
 console.log('wrap',wrap);
 
 
 
// 添加 transition 事件监听
 wrap.forEach(key => key.addEventListener('transitionend', removeTransition));

 window.addEventListener('keydown',playSound);