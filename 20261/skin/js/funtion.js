
$(function () {
    
    jQuery(".picFocus").slide({ mainCell:".bd ul",effect:"fold",autoPlay:true, });  
    
    window.onresize=function(){
        var w = $(".picFocus .bd").width();
        var h = $(".picFocus .bd").height();
        $(".picFocus .bd ul").width(w);
        $(".picFocus .bd ul").height(h);
        $(".picFocus .bd ul li").height(h);
        $(".picFocus .bd ul li").width(w);
    };

    
     //手机banner滚动
      $(".swiper-banner").swiper({
          pagination: '.swiper-doteban ul',
          paginationElement : 'li',
          autoplay : 3000,
          paginationClickable :true,
      });
    // 选项卡
      $(function(){
           $(".slide_pro .hd ul li").click(function(){
           $(this).addClass("on").siblings().removeClass("on");
           var index=$(this).index(); 
           $(".slide_pro .bd > .detil").eq(index).show().siblings().hide(); 
           });
      });
    //手机产品滚动
      $(".swiper-pro").swiper({
          pagination: '.swiper-dotepro ul',
          paginationElement : 'li',
          autoplay : 3000,
          paginationClickable :true,
      });
   
    // 手机pro滚动
    $(".swiper-teach").swiper({
        pagination: '.swiper-dotetea',
        autoplay : 3000,
        slidesPerView: 2,
        spaceBetween: 14,
        autoplayDisableOnInteraction : false,
        paginationClickable :true
    });
    
    // 手机city滚动
    $(".swiper-city").swiper({
        autoplay : 3000,
        slidesPerView: 3,
        spaceBetween: 8,
        autoplayDisableOnInteraction : false,
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    });

    // 产品详情
    $(".swiper-pdec").swiper({
          autoplay : 3000,
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
      });
    /******滚回头部******/
    $(".back-top").click(function(){
        $("html,body").animate({scrollTop:'0px'},800);
    });
    
   //隐藏导航跟wrap的切换
    $(".mol_navbutton,.navbtn,.navbtn1").click(function(){
      $(".left_nav").removeClass("page-prev").addClass("page-in");
      $(".wrap").removeClass("page-active").addClass("page-next page-in")
      $(".opacity2").show()
      // pageSlideOver();
    })
    $(".opacity2,.class-close").on('click touchstart',function(){
      $(".left_nav").addClass("page-prev page-out")
      $(".wrap").removeClass("page-next").addClass(" page-out")
      $(".opacity2").hide()
      $(".newsclass").removeClass("show")
      // pageSlideOver();
      return false;
    });
    // 二级导航下拉
      $(".ericon").click(function(){
          $(this).toggleClass("xz").parents().siblings().find(".ericon").removeClass("xz");
          $(this).parents().siblings().find(".menu_body").hide(300);
          $(this).siblings(".menu_body").slideToggle()
              
      })
    // 三级下拉
      $(".thricon").click(function(){
          $(this).toggleClass("tz").parents().siblings().find(".thricon").removeClass("tz");
          $(this).parents().siblings().find(".thr_body").hide(300);
          $(this).siblings(".thr_body").slideToggle()
              
      })
    
     $(".lists ul.prolist li:nth-child(2n)").addClass("li2");
    
    // 鼠标滚动渐入
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };

	// 分享
      $("#share_btn").click(function(){
        $(".newsclass").addClass("show")
        $(".opacity2").show()
        return false
      })
      // 取消分享
      $(".share-cance").click(function(){
        $(".newsclass").removeClass("show")
        $(".opacity2").hide()
      })
    
    // 内页二级导航下拉
    $("#posnav_ny .item .city").hover(function () {
        $(this).find(".ernav").stop(true, false).slideDown();
    },function () {
        $(this).find(".ernav").slideUp();
    });

    $(".swiper-city ul li>a").click(function(){
        $(this).parents().siblings().find(".mol_ernav").hide(300);
        $(this).siblings(".mol_ernav").slideToggle()
    })
    
});