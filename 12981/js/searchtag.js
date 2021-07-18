/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/

//ie6 select框层遮罩解决插件
(function($){
	$.fn.bgIframe = $.fn.bgiframe = function(s) {
		if ( $.browser.msie && /6.0/.test(navigator.userAgent) ) {
			s = $.extend({
				top     : 'auto', // auto == .currentStyle.borderTopWidth
				left    : 'auto', // auto == .currentStyle.borderLeftWidth
				width   : 'auto', // auto == offsetWidth
				height  : 'auto', // auto == offsetHeight
				opacity : true,
				src     : 'javascript:false;'
			}, s || {});
			var prop = function(n){return n&&n.constructor==Number?n+'px':n;},
				html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
						   'style="display:block;position:absolute;z-index:-1;'+
							   (s.opacity !== false?'filter:Alpha(Opacity=\'0\');':'')+
							   'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+
							   'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+
							   'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+
							   'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+
						'"/>';
			return this.each(function() {
				if ( $('> iframe.bgiframe', this).length == 0 )
					this.insertBefore( /*document.createElement(html),*/ this.firstChild );
			});
		}
		return this;
	};
})(jQuery);

//浮动层定位设置插件
jQuery.fn.selectCity = function(targetId) {
	var _seft = this;
	var targetId = $(targetId);
	this.click(function(){
		var A_top = $(this).offset().top + $(this).outerHeight(true);  //  1
		var A_left =  $(this).offset().left;
		targetId.bgiframe();
		targetId.show();/*.css({"position":"absolute","top":A_top+"px" ,"left":A_left+"px"});*/
	});
	targetId.find("#tagClose").click(function(){
		targetId.hide();
	});
	$(document).click(function(event){
		if(event.target.id!=_seft.selector.substring(1)){
			targetId.hide();	
		}
	});
	targetId.click(function(e){
		e.stopPropagation(); //  2
			targetId.hide();	
	});
    return this;
}

//调用浮动层
$(function(){
	$("#selecttags").selectCity("#searchTag");
});

//为文本域连续赋值
function checktag(o){
	var tagid = function(id){
		return document.getElementById(id);
	}
	var tags = [];//存放标签,避免重复加入
	var tagidSPLITCHAR = ' ';//设定分隔符,根据程序需求可改
	var d = tagid('selecttags');
	if (d.value)
	tags = d.value.split(tagidSPLITCHAR);
	var v = o.innerHTML;//如果tag有别的值或者别的非innerHTML里体现的内容
	var s = tagidSPLITCHAR+tags.join(tagidSPLITCHAR)+tagidSPLITCHAR
	if(!new RegExp(tagidSPLITCHAR+v+tagidSPLITCHAR,'g').test(s)){
		s=v;
	}
	s = s.replace(new RegExp("(^"+tagidSPLITCHAR+"*|"+tagidSPLITCHAR+"*tagid)","g"),'');
	d.value = s;
	tags = s.split(tagidSPLITCHAR);
}


function checktag1(o){
	var tagid = function(id){
		return document.getElementById(id);
	}
	var tags = [];//存放标签,避免重复加入
	var tagidSPLITCHAR = ' ';//设定分隔符,根据程序需求可改
	var d = tagid('selecttags');
	if (d.value)
	tags = d.value.split(tagidSPLITCHAR);
	var v = o.innerHTML;//如果tag有别的值或者别的非innerHTML里体现的内容
	var s = tagidSPLITCHAR+tags.join(tagidSPLITCHAR)+tagidSPLITCHAR
	if(!new RegExp(tagidSPLITCHAR+v+tagidSPLITCHAR,'g').test(s)){
		s=v;
	}
	s = s.replace(new RegExp("(^"+tagidSPLITCHAR+"*|"+tagidSPLITCHAR+"*tagid)","g"),'');
	d.value = "去"+s+"购物";
	tags = s.split(tagidSPLITCHAR);
}

function keyup(){
	$("#searchTag").hide();
}; 