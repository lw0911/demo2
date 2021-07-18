// JavaScript Document

/****************************************************************
 *																*		
 * 						     							*
 *                      						*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
//tab切换
function tabs(tabId, tabNum){
	$(tabId + " .tab-tit a").removeClass("active");
	$(tabId + " .tab-tit a").eq(tabNum).addClass("active");
	$(tabId + " .tab-con").hide();
	$(tabId + " .tab-con").eq(tabNum).show();
}
