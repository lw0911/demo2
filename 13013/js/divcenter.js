/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
// JavaScript Document
//弹出半透明浮动DIV
function div_100(){
			//获取客户端页面宽高
		var _client_width = document.body.clientWidth;
		var _client_height = document.documentElement.scrollHeight;
		
		//create shadow
		if(typeof($("#jd_shadow")[0]) == "undefined"){
			//前置
			$("body").prepend("<div id='jd_shadow'>&nbsp;</div>");
			var _jd_shadow = $("#jd_shadow");
			_jd_shadow.css("width", _client_width + "px");
			_jd_shadow.css("height", _client_height + "px");
		}else{
			if($("#jd_shadow").css("display")=="none"){
				//alert(div_width);
			$("#jd_shadow").css({display:"block"}); 
			}
		}
		
}

 //浮动DIV居中
function div_center2(id,url){
			//获取对象宽度。
			if(!url){
			$(id).find('#lgoclb').load("/templets/default/lgoclnull.html div[class^='news_con']");
			}else{
			$(id).find('#lgoclb').load(url+" div[class^='news_con']");
			}
			var div_width=$(id).width();
			var div_width=$(id).width();
alert($(id).height());
alert($(id).height());
			//
			if($(id).css("visibility")=="hidden"){
				//alert(div_width);
			$(id).css({visibility:"visible"}); 
			}
		    var isIe = $.browser.msie;
    var isIe6 = $.browser.msie && ('6.0' == $.browser.version);
			if(typeof($(id)[0]) != "undefined"){
				div_100();
			var left = ($(window).width() - $(id).width()) / 2;
			var top = ($(window).height() - $(id).height()) / 2;
			if(!isIe6){
		$(id).css({top:top,left:left,width:div_width}); 
			}else{
		$(id).css({top:top+$(document).scrollTop(),left:left+$(document).scrollLeft()});	
			}
					/*  IE6 兼容fixed代码 */
        if(isIe6)
        {
           $(id).css('position','absolute');
            
            var top = parseInt($(id).css('top')) - $(document).scrollTop();
            var left = parseInt($(id).css('left')) - $(document).scrollLeft();
            $(window).scroll(function(){
                $(id).css({'top':$(document).scrollTop() + top,'left':$(document).scrollLeft() + left});
            });
        }

var divclose = $('<div id="jd_close" class="close png"></div>');
    $(id).append(divclose);
	$(id).find('.close').bind('click',function(){
		if($(id).css("visibility")=="hidden"){
				
			$(id).css({visibility:"visible"}); 
			}else{
			$(id).css({visibility:"hidden"}); 
			}
			//alert("ok");
	divclose.remove();
	$("#jd_shadow").hide();
	  $("#lgoclb").html("");
  });
			}
}
function loaddiv(id,url,id2){
				if(!url){
			$(id).load("/templets/default/lgoclnull.html div[class^='news_con']");
			}else{
			$(id).load(url+" div[class^='news_con']");
			}
div_center(id2);
}

function lgocldiv(id,url,id2){
lh=480;
lw=720;
if($(window).width()<lw){
	lw=$(window).width();
}
if($(window).height()<lh){
	lh=$(window).height();
}

$("#jd_div3").height(lh);
$("#jd_div3").width(lw);
$("#lgoclb").height(lh);
$("#lgoclb").width(lw);
$(id).html('<embed src="'+url+'"  windowlessVideo="true" wmode="transparent"   allowFullScreen="true" quality="high" width="100%" height="480" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>');
	//$(id).html('<iframe scrolling="no"  src="'+url+'" width="100%"  allowtransparency="true"  marginwidth="0" height="100%" marginheight="0" align="middle" frameborder="0" style="overflow-x:hidden;overflow-y:hidden;background-color=transparent;background-color:#000000;"></iframe>');
	div_center(id2);
 }
 //浮动DIV居中
function div_center(id){
			//获取对象宽度。
			var div_width=$(id).width();
			//
			if($(id).css("visibility")=="hidden"){
				//alert(div_width);
			$(id).css({visibility:"visible"}); 
			}
		    var isIe = $.browser.msie;
    var isIe6 = $.browser.msie && ('6.0' == $.browser.version);
			if(typeof($(id)[0]) != "undefined"){
				div_100();
			var left = ($(window).width() - $(id).width()) / 2;
			var top = ($(window).height() - $(id).height()) / 2;
			if(!isIe6){
		$(id).css({top:top,left:left,width:div_width}); 
			}else{
		$(id).css({top:top+$(document).scrollTop(),left:left+$(document).scrollLeft()});	
			}
					/*  IE6 兼容fixed代码 */
        if(isIe6)
        {
           $(id).css('position','absolute');
            
            var top = parseInt($(id).css('top')) - $(document).scrollTop();
            var left = parseInt($(id).css('left')) - $(document).scrollLeft();
            $(window).scroll(function(){
                $(id).css({'top':$(document).scrollTop() + top,'left':$(document).scrollLeft() + left});
            });
        }

var divclose = $('<div id="jd_close" class="close png"></div>');
    $(id).append(divclose);
	$(id).find('.close').bind('click',function(){
		if($(id).css("visibility")=="hidden"){
				//alert(div_width);
			$(id).css({visibility:"visible"}); 
			}else{
			$(id).css({visibility:"hidden"}); 
			}
			//alert("ok");
	divclose.remove();
	$("#jd_shadow").hide();
	  $("#lgoclb").html("");
  });
			}

}


$(function(){
		   $(window).load(function(){
$("#jd_div3").height(480);
$("#jd_div3").width(720);
$("#lgoclb").height(480);
$("#lgoclb").width(720);
});	
	});	

