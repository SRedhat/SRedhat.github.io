//封装一个animate函数
//01-运动的目标位置不写死.
//02-做运动的元素不写死
//03-运动的方向不写死
function animate(ele, target) {
  //设置新计时器之前要清空老的计时器
  clearInterval(ele.timerId);
  //设置计时器
  ele.timerId = setInterval(function () {
    //获取元素当前的定位的left值
    let currentLeft = ele.offsetLeft;
    //设置步长
    let step = target > currentLeft ? 31 : -31;
    //计算运动后的位置.
    currentLeft += step;
    // console.log(currentLeft);
    //判断赋值
    if (Math.abs(target - currentLeft) > Math.abs(step)) {
      ele.style.left = currentLeft + "px";
    } else {
      ele.style.left = target + "px";
      clearInterval(ele.timerId);
    }
  }, 20);
}
