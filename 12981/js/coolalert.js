/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
document.write('<link href="css/popover.css" rel="stylesheet" type="text/css"><div class="theme0-popover-mask"></div><div class="theme0-popover"><div class="theme0-poptit">×××分期温馨提示</div><div class="theme0-popbod"><div class="theme0-box" id="neirong"></div><div class="theme0-box2"><button class="button3" type="button" id="coolalertbutton">确 定</button></div></div></div>');
	
window.alert =function (msg){  
     
	   $('#neirong').html(msg);
        $('.theme0-popover-mask').show();
        $('.theme0-popover-mask').height($(document).height());
		$('.theme0-popover').slideDown(200); 
}

document.getElementById("coolalertbutton").onclick=function(){
window.location.reload();
}