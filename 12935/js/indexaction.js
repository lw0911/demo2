/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
// JavaScript Document

	$(function(){
$("#zt_web").css("display","none");
	var pro_top = $("#pro").offset().top;
	var news_top = $("#news").offset().top;
	var ser_top = $("#ser").offset().top;
	var con_top = $("#con").offset().top;
	var job_top = $("#job").offset().top;
	var Head_top = $("#Head").offset().top;
	//alert(tops);
	$(window).scroll(function(){
	
		var scroH = $(this).scrollTop();
		if (scroH>240){
		$(".F_nav").css("display","block");	
		}else{
		$(".F_nav").css("display","none");
		}
		
		
		if(scroH>=job_top){
			set_cur(".job");
				
		}else if(scroH>=con_top){
			set_cur(".con");
		
		}else if(scroH>=ser_top){
			set_cur(".ser");
		}else if(scroH>=news_top){
			set_cur(".news");
		}else if(scroH>=pro_top){
			set_cur(".pro");
		}
	});

	
		$(".F_nav li").click(function() {
		var el = $(this).attr('class');
		$('html, body').animate({
		 	scrollTop: $("#"+el).offset().top
			});
 	});
	
	
});

function set_cur(n){
	if($(".F_nav li").hasClass("cur")){
		$(".F_nav li").removeClass("cur");
	}
	$(".F_nav li"+n).addClass("cur");
}