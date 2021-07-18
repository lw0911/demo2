
/*----------jquery.cookie-----------*/
$(function(){
	if($.cookie("isClose") != 'yes'){
		var winWid = $(window).width()/2 - $('.alert_windows').width()/2;
		var winHig = $(window).height()/2 - $('.alert_windows').height()/2;
		$(".alert_windows").css({"left":winWid,"top":-winHig*2});	//自上而下
		$(".alert_windows").show();
		$(".alert_windows").animate({"left":winWid,"top":winHig},500);
		$(".alert_windows span").click(function(){
			$(this).parent().fadeOut(300);
			//$.cookie("isClose",'yes',{ expires:1/8640});	//测试十秒
			$.cookie("isClose",'yes',{ expires:365});		//天
		});
	}
});
/*----------jquery.cookie end-----------*/