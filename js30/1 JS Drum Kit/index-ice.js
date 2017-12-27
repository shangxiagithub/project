function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    console.log('event.target',event.target);
    
    // event.target.classList.remove('playing');
    this.classList.remove('playing');
}

function playSound(event) {
    
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keys = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!sound) return; // 过滤其他按钮的事件

    keys.classList.add('playing'); // 添加样式
    sound.currentTime = 0; // 播放重新归零
    sound.play(); // 播放
}

// 获取所有的按钮 返回一个数组
var keyArr = Array.from(document.querySelectorAll('.content'));
// 遍历数组元素给其添加事件监听函数，直接就得到了数组元素的值，并且给其添加事件监听,当元素身上的transition过渡属性执行完毕，执行removeTransition函数，移除掉样式

// 监听按钮事件
window.addEventListener("keydown", playSound);
console.log('keyArr',keyArr);

keyArr.forEach(domEvent => domEvent.addEventListener('transitionend', removeTransition));
// keyArr.forEach(function (domEvent) { domEvent.addEventListener('transitionend',removeTransition });
