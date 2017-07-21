"use strict"

$(function(){
    var t=true
    $(".kaiguan").click(function(){
        if(t){
            $(this).css({"right":"0.2rem"})
            $(this).siblings("h6").css({"background":"#f76241"})
            t=false
        }else{
            $(this).css({"right":"0.7rem"})
            $(this).siblings("h6").css({"background":"#7e7e7e"})
            t=true
        }
    })
    var h= window.screen.availHeight;
    var h1=document.body.clientHeight;
    var w=document.body.clientWidth;
    var h2=h-h1
    $(".dingshi").css({"bottom":+(-h)+"px"})
    $(".zhuantese").click(function(){
        $(".tese").css({"display":"block"})
        $(".tese").animate({
            right:0,
            index:1000
        },500)
        $(".tese").height(h)
    })
    $(".fanhui").click(function(){
        $(".tese").animate({
            right:"-100%",
            index:1000
        },500)
        setTimeout(function(){
            $(".tese").css({"display":"none"})
        },500)

        $(".tese").height(h)
    });
    $(".zhuandingshi").click(function(){
        $(".dingshi").animate({
            bottom:-h2,
            index:10000
        },500);
        setTimeout(function(){
            var div=document.createElement("div");
            div.id="meng"
            div.style.cssText="width:100%;height:100%;background:#000;opacity:0.3;z-index:999;position:absolute;left:0;top:0"
            document.body.appendChild(div);
        },500)

    })
    $(".guanbi").click(function(){
        $(".dingshi").animate({
            bottom:-h,
            index:10000
        },500)

        setTimeout(function(){
            var meng=document.getElementById("meng")
            document.body.removeChild(meng)[1];
        },400)
    })
    $("b").click(function(){
        $(this).html("√");
        $(this).css({"background":"red"})
        $(this).parent("p").siblings().children("b").html("");
        $(this).parent("p").siblings().children("b").css({"background":"none"})
    })
})

