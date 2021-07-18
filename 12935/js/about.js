/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
	$(function(){
	var About_top = $("#AboutBody1").offset().top+60;
	var Abouts_top = $("#AboutBody2").offset().top;
	var Abouts_pq = $("#AboutBody3").offset().top;
	$(window).scroll(function(){
	var scroH = $(this).scrollTop();
	if(scroH>=About_top){
		AboutTo();
		}
		 if(scroH>=Abouts_top){
			AboutsTo();
		}

		if (scroH>=Abouts_pq){About_pq();}
	
	});
		$(".no1").hover(function(){
	$(".AcBody1").animate({top:'-=10'});
	},function(){
	$(".AcBody1").animate({top:'+=10'});
	});
		$(".no2").hover(function(){
	$(".AcBody4").animate({top:'-=10'});
	},function(){
	$(".AcBody4").animate({top:'+=10'});
	});
		$(".no3").hover(function(){
	$(".AcBody2").animate({top:'-=10'});
	},function(){
	$(".AcBody2").animate({top:'+=10'});
	});
		$(".no4").hover(function(){
	$(".AcBody5").animate({top:'-=10'});
	},function(){
	$(".AcBody5").animate({top:'+=10'});
	});
		$(".no5").hover(function(){
	$(".AcBody3").animate({top:'-=10'});
	},function(){
	$(".AcBody3").animate({top:'+=10'});
	});
		$(".no6").hover(function(){
	$(".AcBody6").animate({top:'-=10'});
	},function(){
	$(".AcBody6").animate({top:'+=10'});
	});
	
	$(".team1").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team2").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team3").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team4").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team5").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team6").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team7").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
	$(".team9").hover(function(){$(this).animate({top:'-=10'});},function(){$(this).animate({top:'+=10'});});
function AboutTo(){
	 $(".AboutBody1").find(".znw").animate({opacity: '1',top:'428px'},500);
	}
	
	function AboutsTo(){
	 $(".AboutBody2").find(".AcBody1").animate({opacity: '1',left:"48px"},500);
	  $(".AboutBody2").find(".AcBody2").delay(150).animate({opacity: '1',left:"36px"},500);
	   $(".AboutBody2").find(".AcBody3").delay(300).animate({opacity: '1',left:"60px"},500);
	    $(".AboutBody2").find(".AcBody4").delay(450).animate({opacity: '1',right:"61px"},500);
		 $(".AboutBody2").find(".AcBody5").delay(600).animate({opacity: '1',right:"44px"},500);
		  $(".AboutBody2").find(".AcBody6").delay(750).animate({opacity: '1',right:"70px"},500);
	}
	
function About_pq(){
	
	var tis=0;
	for(var i=1;i<10;i++){
	if (i<7){
	$(".team"+i).delay(tis).animate({opacity: '1',top:'240px'},500);
	}else{
	$(".team"+i).delay(tis).animate({opacity: '1',top:'500px'},500);
	}
	tis+=150;
		}
	}
	});