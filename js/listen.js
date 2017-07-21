"use strict"
//回到顶部所用时间动画和点击事件
$(".top").click(function () {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
});
//当下拉到一定尺寸时出现回到顶部图片
$(document).on('scroll',function(){
    if($(document).scrollTop()>50){
        $(".top").css({"display":"block"});
    }else{
        $(".top").css({"display":"none"});
    }
});
//实例化swiper
var mySwiper = new Swiper('.Limain',{
    autoHeight:true
})
//当页面滑到一定位置导航栏固定定位
window.addEventListener("scroll",  function() {
    var lamp=1;
    if(document.body.scrollTop>90){
        if(lamp){
            lamp=0;
            document.querySelector(".Linav").style.position='fixed';
            document.querySelector(".Linav").style.top="1.12rem";
            document.querySelector(".Linav").style.marginTop=0;
        }
    }else{
        if(lamp==1){
            document.querySelector(".Linav").style.position='static';
            document.querySelector(".Linav").style.marginTop="0.2rem";
        }
    }
});
//滑动主体部分swiper导航栏样式随之变化
window.addEventListener("touchend",  function() {
    var lis = document.querySelector(".Linav").childNodes
    var lisArr = [];
//console.log(lis)
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].nodeType == 1) {
            lisArr.push(lis[i]);
        }
    }
    for (var j = 0; j < lisArr.length; j++) {

        lisArr[j].style.borderBottom = "0";
        lisArr[j].style.color="#323232";
        if(j==mySwiper.activeIndex){
            lisArr[mySwiper.activeIndex].style.borderBottom = "0.04rem solid #f66341";
            lisArr[mySwiper.activeIndex].style.color="#f66341";
        }
    }
})
//点击导航页面主体部分的swiper随之变换
jQuery(".Linav").on("click","p",function(){
    jQuery(this).css({"border-bottom":"0.04rem solid #f66341","color":"#f66341"});
    jQuery(this).siblings().css({"border-bottom":"0","color":"#323232"});
    var num=jQuery(this).index();
    mySwiper.slideTo(num, 1000, false);
})