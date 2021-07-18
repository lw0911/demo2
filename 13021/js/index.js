/****************************************************************
 *																*		
 * 						      							*
 *                       							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function(){
    $(".product .product_nav ul li").click(function(){
        if($(this).children("a").hasClass("active")){
            if($(".sort_up").css("border-bottom-color")=="rgb(255, 162, 1)"){
                $(".sort_up").css("border-bottom-color","#9B9B9B");
                $(".sort_down").css("border-top-color","#BD0000");
            }else if($(".sort_up").css("border-bottom-color")=="rgb(155, 155, 155)"){
                $(".sort_up").css("border-bottom-color","#FFA201");
                $(".sort_down").css("border-top-color","#9B9B9B");
            }
        }
        $(".product .product_nav ul li a .sort").css("display","none");
        $(this).children("a").children(".sort").css("display","inline-block");
        $(this).children("a").addClass("active");
        $(this).siblings().children("a").removeClass("active");
    });
    $("footer a").click(function(){
        $(this).addClass("active");
        $(this).siblings("a").removeClass("active");
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        loop:true
//        autoplayDisableOnInteraction: false
    });
});