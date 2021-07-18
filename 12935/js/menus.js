/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
// JavaScript Document

			$(document).ready(function(){
		/*首页服务*/	
			var $liCur = $(".nav ul li.cur"),
				  curP = $liCur.position().left,
				  curW = $liCur.outerWidth(true),
				  $slider = $(".curBg"),
				  $navBox = $(".nav");
				 $targetEle = $(".nav ul li a"),
				$slider.animate({
				  "left":curP,
				  "width":curW
				});
				$targetEle.mouseenter(function () {
						$(".cur>a").css({"color":"#2A2B2c"});	
					//	$(this).css({"color":"#EDEFEE"});	
				  var $_parent = $(this).parent(),
					_width = $_parent.outerWidth(true),
					posL = $_parent.position().left;
				  $slider.stop(true, true).animate({
					"left":posL,
					"width":_width
					
				  }, "fast");
				});
				$navBox.mouseleave(function (cur, wid) {
			$(".cur>a").css({"color":"#EDEFEE"});		
				cur = curP;
				  wid = curW;
				  $slider.stop(true, true).animate({
					"left":cur,
					"width":wid
				  }, "fast");
				});
		/**/	
		
		/*首页案例*/
$(".CaseBody .list").hover(function() {
	// $("#orderedlist li:last").hover(function() {
	 var self = this;
	 $(this).find(".title").stop(true,false).animate({borderBottomColor:'#dc7e3f'});
		$(this).find(".title a").stop(true,false).animate({color:"#fff"},100);
		$(this).find(".coms").stop(true,false).animate({color:"#fff",borderTopColor:'#ffaa70'},400);
		$(this).find("a img").stop(true,false).animate({width:'281px',height:'159px',left:'-3px',top:'-3px'},150);
		$(this).find(".a5").stop(true,false).animate({opacity:1},150);
		$(this).find(".a1").stop(true,false).delay(250).animate({height:'150'},200);
		$(this).find(".a2").stop(true,false).delay(250).animate({height:'150'},200,function(){
		$(self).find(".a3").stop(true,false).animate({width:'50%'},100);
		$(self).find(".a4").stop(true,false).animate({width:'50%'},100);
		});
		
		
	}, function() {
		 var self = this;
		$(this).find(".a3").stop(true,false).animate({width:'0'},100);
		$(this).find(".a4").stop(true,false).animate({width:'0'},100);
		$(self).find(".a1").stop(true,false).delay(200).animate({height:'0'},200);
		$(self).find(".a2").stop(true,false).delay(200).animate({height:'0'},200);
		$(this).find("a img").stop(true,false).animate({width:'275px',height:'153px',left:'0px',top:'0px'},150);
		$(this).find(".a5").stop(true,false).delay(500).animate({opacity:0},100);
		$(this).find(".title").stop(true,false).delay(400).animate({borderBottomColor:'#C9C9C9'},400);
		$(this).find(".title a").stop(true,false).delay(400).animate({color:"#2A2B2C",borderBottomColor:'#C9C9C9'},400);
		$(this).find(".coms").stop(true,false).delay(400).animate({color:"#999999",borderTopColor:'#ffffff'},400);

	});
	
	
	/*案例MORE*/
	
	
	$(".CaseMore a").hover(function() {
	// $("#orderedlist li:last").hover(function() {

	 var self = ".CaseMore";
	
		$(self).find(".a1").stop(true,false).animate({height:'40'},300);
	$(self).find(".a2").stop(true,false).animate({height:'40'},300);
	$(self).find(".a3").stop(true,false).delay(300).animate({width:'60'},150);
	$(self).find(".a4").stop(true,false).delay(300).animate({width:'60'},150);
		
		
	}, function() {
		  var self = ".CaseMore";
		
		$(self).find(".a3").stop(true,false).animate({width:'0'},150);
		$(self).find(".a4").stop(true,false).animate({width:'0'},150);
		$(self).find(".a1").stop(true,false).delay(150).animate({height:'0'},300);
		$(self).find(".a2").stop(true,false).delay(150).animate({height:'0'},300);

	});
	
/**	判断滑动条方向
	var initTop = 0;
$(window).scroll(function(){
 var scrollTop = $(document).scrollTop();
 if(scrollTop > initTop){



 } else {




 }
 initTop = scrollTop;
});
	
*/	
	
/*新闻列表动画*/


$(".I_NewList").hover(function(){
							   
			$(this).children("a").animate({left:'6px'},300);		   
	   
							   },function(){
										  
								$(this).children("a").animate({left:'0px'},300);				  
										  
									});
	
	
});