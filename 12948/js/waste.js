/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function(){
	//页面导入
	$.get("head.html",function(html){$("body").prepend(html);nav();});
	$.get("foot.html",function(html){$("body").append(html);nav();});	
})