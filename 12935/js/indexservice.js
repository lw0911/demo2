/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
var btop = 0;
var sA = true;
var sG = true;
var sS = true;
function animationToService() {

    for (var i = 0; i < 6; i++) {
        setTimeout("e1_animationToService(" + i + ",true)", i * 150)
    }
}

function e1_animationToService(i, t) {
    if (t) {
        $('.W_slist li').eq(i).addClass('hover');
		
    } else {
        $('.W_slist li').eq(i).removeClass('hover');
    } if (i == 5 && t) {
        setTimeout(function() {
            for (var i = 6; i >= 0; i--) {
                setTimeout("e1_animationToService(" + i + ",false)", Math.abs(i) * 150)
            }
        }, 1000)
    }
}

function In_GgIndex(){
	$(".GgBodys #Gg2").animate({opacity:"1",top:[28,'easeOutBounce']},600);
	$(".GgBodys #Gg1").delay(600).animate({opacity:"1",left:[21,'easeOutCubic']},300);
	$(".GgBodys #Gg3").delay(600).animate({opacity:"1",left:[793,'easeOutCubic']},300);
	
	}


function In_Service(){
	
	var tis=0;

	for(var i=1;i<5;i++){
	
	$(".WhyRight").find("#w_t"+i).delay(tis).animate({opacity: '1',top:'-=20'},500, 'easeOutBounce' );
	tis+=150;

		}
		
		
		
	}
	
	



$(window).scroll(function() {
    var top = $(window).scrollTop();
	
    var btop = parseInt($('.W_service').offset().top) - 600;
	var Gtop =	parseInt($('.GgBody').offset().top) -300;
	var Stop =	parseInt($('.WhyBos').offset().top)-150;

    if ((top - btop) >= 0) {
		
        if (sA) {
			
            animationToService();
            sA = false
        }
    }
	
 if ((top - Gtop) >= 0) {
		 if (sG) {
		In_GgIndex();
		     sG = false;
        }
  }
	
 if ((top - Stop) >= 0) {
		 if (sS) {
		In_Service();
		
		     sS = false;
        }
  }	

});

$(document).ready(function() {
 $(".ServiceLists").find(".imgs").animate({opacity:"0"},0);



$(".ServiceLists").hover(function() {
 	$(this).find(".imgs").stop(true,false).animate({opacity:"1"},600,'easeInOutQuart');
	$(this).find(".top").stop(true,false).animate({left:"280px"},600,'easeInOutQuart');
	$(this).find(".tops").stop(true,false).animate({left:"0px"},600,'easeInOutQuart');
	
	$(this).find(".title").stop(true,false).animate({left:"-280px"},600,'easeInOutQuart');
	$(this).find(".titles").stop(true,false).animate({left:"0px"},600,'easeInOutQuart');

	$(this).find(".com").stop(true,false).animate({left:"-280px"},600,'easeInOutQuart');
	$(this).find(".coms").stop(true,false).animate({left:"16px"},600,'easeInOutQuart');
	
	
	}, function() {
	 	$(this).find(".imgs").stop(true,false).animate({opacity:"0"},600,'easeInOutQuart');
		$(this).find(".top").stop(true,false).animate({left:"0px"},600,'easeInOutQuart');	
		$(this).find(".tops").stop(true,false).animate({left:"-280px"},600,'easeInOutQuart');
		
		$(this).find(".title").stop(true,false).animate({left:"0px"},600,'easeInOutQuart');
		$(this).find(".titles").stop(true,false).animate({left:"280px"},600,'easeInOutQuart');
		
		$(this).find(".com").stop(true,false).animate({left:"16px"},600,'easeInOutQuart');
		$(this).find(".coms").stop(true,false).animate({left:"280px"},600,'easeInOutQuart');
		
	});
});