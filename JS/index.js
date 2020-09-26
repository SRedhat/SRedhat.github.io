/* 思路分析：
1.鼠标移入移出显示隐藏左右箭头
2.左右轮播实现
3.无线轮播实现
*/

// 入口函数
window.onload = function () {
    // 获取元素
    let slideshow = document.querySelector('.slideshow');
    let arrow = document.querySelector('.arrow');
    let arrow_right = document.querySelector('.arrow_right');
    let arrow_left = document.querySelector('.arrow_left');
    let ul = document.querySelector('.slideshow ul');
    let lis = document.querySelectorAll('.slideshow ul li');

    // 1.鼠标移入移出显示隐藏左右箭头
    slideshow.onmouseenter = function () {
        arrow.style.display = 'block';
    }
    slideshow.onmouseleave = function () {
        arrow.style.display = 'none';
    }

    // 2.左右轮播实现
    // 节流阀
    let flag = true;
    // 声明一个变量，记录图片移动的张数
    let index = 0;
    arrow_right.onclick = function () {
        if (flag) {
            flag = false;
            if (index == 6) {
                index = 0;
                ul.style.left = 0 + 'px';
            }
            index++;
            // 计算ul滚动的距离
            let x = -(index * lis[0].offsetWidth);
            // 给ul赋值
            animateSlow(ul, {
                left: x
            }, function () {
                flag = true;
            });

        }
    }
    arrow_left.onclick = function () {
        if (flag) {
            flag = false;
            if (index == 0) {
                index = 6;
                ul.style.left = -(index * lis[0].offsetWidth) + 'px';
            }
            index--;
            // 计算ul滚动的距离
            let x = -(index * lis[0].offsetWidth);
            // 给ul赋值
            animateSlow(ul, {
                left: x
            }, function () {
                flag = true;
            });
        }
    }
    // 3.无限+自动轮播实现
    // 复制第一个图片 插入到最后面
    let liNew = lis[0].cloneNode(true);
    ul.appendChild(liNew);

    setInterval(() => arrow_right.onclick(), 3000)



    /* 毕业倒计时：12月15号 */
    let lastTime = "2020-12-15";
    let getTimer = () => {
        let timeDate = new Date(lastTime);
        let now = new Date();
        let date = timeDate.getTime() - now.getTime();
        let day = Math.floor(date / (1000 * 60 * 60 * 24));
        let hours = Math.floor(date / 1000 / 60 / 60 % 24);
        let Minutes = Math.floor(date / 1000 / 60 % 60);
        let Seconds = Math.floor(date / 1000 % 60);
        // console.log(day, hours, Minutes, Seconds);

        document.querySelector('.timer_title>span').innerHTML = lastTime;
        document.querySelector('.day>span').innerHTML = day;
        document.querySelector('.hours>span').innerHTML = hours;
        document.querySelector('.Minutes>span').innerHTML = Minutes;
        document.querySelector('.Seconds>span').innerHTML = Seconds;
    }
    getTimer();
    setInterval(getTimer, 1000);


}