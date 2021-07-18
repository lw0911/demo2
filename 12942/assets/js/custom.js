/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
//下拉导航
$(document).ready(function(){
  	$(".m-mnav li").mousemove(function(){
		$(this).find('ul').slideDown();
  	});
  	$(".m-mnav li").mouseleave(function(){
		$(this).find('ul').stop(1,1).slideUp();
  	});
});

//去字符空白
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,'');
}

//表单验证
function validate_required(field,alerttxt){
    with (field){
        if (value==null||value==""||trim(value)==''){
            alert(alerttxt);return false
        }
        else{
            return true;
        }
    }
}

//日期格式化
function FormatDate(str) {
	if (typeof str == "string") {
        var arrDateInfo = str.split(" ");
        if (arrDateInfo.length == 2) {
            var arrDate = arrDateInfo[0].split("-");
            if (arrDate.length == 3) {
                if (arrDate[1].length == 1) arrDate[1] = "0" + arrDate[1];
                if (arrDate[2].length == 1) arrDate[2] = "0" + arrDate[2];

                var arrTime = arrDateInfo[1].split(":");
                if (arrTime.length == 3) {
                    if (arrTime[0].length == 1) arrTime[0] = "0" + arrTime[0];
                    if (arrTime[1].length == 1) arrTime[1] = "0" + arrTime[1];
                    if (arrTime[2].length == 1) arrTime[2] = "0" + arrTime[2];
                    var szNewDateTime = arrDate[0] + "-" + arrDate[1] + "-" + arrDate[2] + " ";
                    szNewDateTime += arrTime[0] + ":" + arrTime[1] + ":" + arrTime[2];
                    return szNewDateTime;
                }
                return arrDate[0] + "-" + arrDate[1] + "-" + arrDate[2] + " " + arrDateInfo[1];
            }
        }
    }
	return str;
}