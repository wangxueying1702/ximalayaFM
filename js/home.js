/**
 * Created by Administrator on 2017/7/20.
 */
//头部导航swiper实例化
var mySwiper = new Swiper('.hnav-l',{
    freeMode : true,
    freeModeMomentum:false,
    slidesPerView : 4.5,
    slidesOffsetBefore:5,
    slidesOffsetAfter:40,
})
//主题部分swiper实例化
var mySwiper1 = new Swiper('.home',{
})
//使两个swiper相关联
mySwiper1.params.control = mySwiper;
//循环拿到所有导航的li
var lis = document.querySelector(".hnav-l").childNodes[1].childNodes
//循环拿到分类列表的所有li
var lis2 = document.querySelector(".hfenlei").childNodes[1].childNodes
var lisArr = [];
var lisArr2 = [];
for (var i = 0; i < lis.length; i++) {
    if (lis[i].nodeType == 1) {
        lisArr.push(lis[i]);
    }
}
for (var i = 0; i < lis2.length; i++) {
    if (lis2[i].nodeType == 1) {
        lisArr2.push(lis2[i]);
    }
}
//滑动swiper导航栏相对应变化
window.addEventListener("touchend",  function() {
    for (var j = 0; j < lisArr.length; j++) {
        lisArr[j].style.borderBottom = "0";
        lisArr[j].style.color="#323232";
        lisArr2[j].style.backgroundColor = "#f3f7fa";
        lisArr2[j].style.color="#323232";
        if(j==mySwiper1.activeIndex){
            lisArr[mySwiper1.activeIndex].style.borderBottom = "0.04rem solid #f66341";
            lisArr[mySwiper1.activeIndex].style.color="#f66341";
            lisArr2[mySwiper1.activeIndex].style.backgroundColor = "#f66341";
            lisArr2[mySwiper1.activeIndex].style.color="#fff";
        }
    }
})
//点击下拉菜单出现分类列表，创建蒙层，反之隐藏分类列表删除蒙层
var tt=true
jQuery(".valign").click(function(){
    if(tt){
        jQuery(".hfenlei").css({"display":"block"})
        jQuery(this).attr({src:"images/g5.png"});
        var div=document.createElement("div");
        div.id="meng1"
        div.style.cssText="width:100%;height:100%;background:#000;opacity:0.3;z-index:999;position:absolute;left:0;top:0.83rem"
        document.body.appendChild(div);
        tt=false
    }else{
        jQuery(".hfenlei").css({"display":"none"})
        jQuery(this).attr({src:"images/g6.png"});
        var meng1=document.getElementById("meng1")
        document.body.removeChild(meng1)[1];
        tt=true
    }

});
//点击分类列表swiper出现在相应位置
$(".fenlei-li").on("click","li",function(){
    tt=true
    var d=$(this).index();
    $(this).css({"background":"#f66341","color":"#fff"})
    $(this).siblings().css({"background":"#f3f7fa","color":"#323232"})
    $(".hfenlei").css({"display":"none"})
    var meng1=document.getElementById("meng1")
    document.body.removeChild(meng1)[1];
    mySwiper.slideTo(d, 1000, false);
    mySwiper1.slideTo(d, 1000, false);
    //循环头部导航栏，样式随之变化
    for (var j = 0; j < lisArr.length; j++) {
        lisArr[j].style.borderBottom = "0";
        lisArr[j].style.color="#323232";
        if(j==mySwiper1.activeIndex){
            lisArr[mySwiper1.activeIndex].style.borderBottom = "0.04rem solid #f66341";
            lisArr[mySwiper1.activeIndex].style.color="#f66341";
        }
    }
})
//点击导航栏swiper主体swiper相应变化
jQuery(".hnav-l ul").on("click","li",function(){
    jQuery(this).css({"border-bottom":"0.04rem solid #f66341","color":"#f66341"});
    jQuery(this).siblings().css({"border-bottom":"0","color":"#323232"});
    var num=jQuery(this).index();
    mySwiper.slideTo(num, 1000, false);
    mySwiper1.slideTo(num, 1000, false);
})