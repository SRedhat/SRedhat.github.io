//---------------------------------------------------
//缓动动画做一个函数封装.
//01-动画最终到达的目标位置不要写死 
//02-做动画的元素不要写死
//03-方向不写死
//04-做动画的样式不写死

function animateSlow(ele, obj, fn) {
    //设置新计时器之前清空老的计时器
    clearInterval(ele.timeId);
    //设置计时器
    ele.timeId = setInterval(function () {
        // 假设所有属性都到达目标值了
        let flag = true;
        for (let k in obj) {
            //获取元素传进来的样式的当前的值
            let currentValue = parseInt(getComputedStyle(ele, null)[k]);
            //设置步长
            let step = (obj[k] - currentValue) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //计算
            currentValue += step;
            //赋值
            ele.style[k] = currentValue + 'px';
            if (currentValue != obj[k]) {
                flag = false;
            }
        }
        //判断
        if (flag) {
            clearInterval(ele.timeId);
            // 调用回调函数
            if (typeof fn == 'function') {
                fn();
            }
        }
    }, 50)
}