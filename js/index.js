"use strict"
$(function(){
    //广播页面的分类列表点击事件
    var t=true;
    $(".dianji").click(function(){
        if(t){
            jQuery(".yincang").css({"display":"none"});
            jQuery(this).children().attr({src:"images/g6.png"});
            t=false;
        }else {
            jQuery(".yincang").css({"display":"block"});
            jQuery(this).children().attr({src:"images/g5.png"});
            t=true;
        }
    })
    //banner部分轮播图swiper实例化
    var mySwiper = new Swiper('.Banner',{
        loop:true,
        pagination: '.swiper-pagination',
        autoplay:2000,
    })
    //热门页面分类图标swiper实例化
    var my1Swiper = new Swiper('.RmFL',{
        freeMode : true,
        freeModeMomentum:false,
        slidesPerView : 5.5,
        slidesOffsetBefore:5,
        slidesOffsetAfter:10,
    })
    //首页大的页面分类swiper实例化
    var my2Swiper = new Swiper('.index',{
        autoHeight:true,
    })

    var my3Swiper = new Swiper('.fmbt',{
        loop:true,
        pagination: '.swiper-pagination',
        autoplay:2000
    });
    //点击回到顶部
    jQuery(".top").click(function () {
        jQuery('body,html').animate({scrollTop: 0}, 500);
        return false;
    });
    //当页面滑动到一定位置出现回到顶部图片
    jQuery(document).on('scroll',function(){
        if(jQuery(document).scrollTop()>50){
            jQuery(".top").css({"display":"block"});
        }else{
            jQuery(".top").css({"display":"none"});
        }
    });

window.addEventListener("touchend",  function() {
//循环拿到首页导航栏的所有li
var lis = document.querySelector(".RmNav").childNodes[1].childNodes
var lisArr = [];
//console.log(lis)
for (var i = 0; i < lis.length; i++) {
    if (lis[i].nodeType == 1) {
        lisArr.push(lis[i]);
    }
}
    //循环导航列表设置主题swiper与导航栏样式的一一对应（my2Swiper.activeIndex当前下标）
for (var j = 0; j < lisArr.length; j++) {

    lisArr[j].style.borderBottom = "0";
    lisArr[j].style.color="#323232";
    if(j==my2Swiper.activeIndex){
        lisArr[my2Swiper.activeIndex].style.borderBottom = "0.1rem solid #f66341";
        lisArr[my2Swiper.activeIndex].style.color="#f66341";
    }
}
})
    //点击导航栏使swiper与导航栏一一对应
    jQuery(".RmNav ul").on("click","li",function(){
        jQuery(this).css({"border-bottom":"0.1rem solid #f66341","color":"#f66341"});
        jQuery(this).siblings().css({"border-bottom":"0","color":"#323232"});
        var num=jQuery(this).index();
        my2Swiper.slideTo(num, 1000, false);
    })


})
