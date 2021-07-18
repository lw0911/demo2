/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
function coolurl(x){

	
var strs=x.split("-"); //字符分割
var get=strs[1].replace(".html","");
 
 
get=get.split("_");
var jieguo='{"cool":"xingbuxing"';
for(var i=0;i<get.length;i++){
if(get[i]==''){break;}	
	
	
	//eval('var get'+get[i].substr(0, 1)+'="'+get[i].slice(1)+'"; ');
	jieguo+=',"get'+get[i].substr(0, 1)+'":"'+get[i].slice(1)+'"';
	
	
	
	 
}
	
jieguo+='}';

return jieguo;
	
}


function chulineirong(x){
	if(x!=null){
		
	var jieguo=x.replace(/\sclass=\"(.*?)\"/g, "");
	jieguo=jieguo.replace(/<\/li>/g, "|");
	jieguo=jieguo.replace(/\sonclick=\"shuxing1\((.*?)\)\"/g, "");
	jieguo=jieguo.replace(/\sonclick=\"shuxing2\((.*?)\)\"/g, "");
	jieguo=jieguo.replace(/\|<div><\/div>/g, "");
	jieguo=jieguo.replace(/<li>/g, "");
	
	return jieguo;
	}else{
	return '';	
	}
	
}

function coolalertguanbi(){
	
	if($('#wjstz').val()==''){
		$('.themey-popover-mask').hide();
		$('.themey-popover').slideUp(200);
	}else{
		location.href=$('#wjstz').val();
	}
		
}
function cooltiao(msg,dizhi){ 

     $('#wjstz').val(dizhi);
	   $('#neirongy').html(msg);
        $('.themey-popover-mask').show();
        $('.themey-popover-mask').height($(document).height());
		$('.themey-popover').slideDown(200); 
		$('#zdcyonghuiche').focus();
		
}


$('#sousuo').click(function (){
	
	var j=fisker_encode_v2($('#sousuozhi').val());
	location.href="search-a"+j+".html";
	
});

function sousuo(){
	
	var j=fisker_encode_v2($('#sousuozhi').val());
	location.href="search-a"+j+".html";
	
}





$('#yudingfenqi').click(function (){
	
	if($('#cheng1').val()==''){	
	cooltiao("全网链接不能为空!",'');	
	return false;
	}

	
	if($('#jiagejieguo').val()==''){	
	cooltiao("全款价格不能为空!",'');	
	return false;
	}
	if($('#yanzhengma').val()==''){	
	cooltiao("验证码不能为空!",'');	
	return false;
	}
	

	 $.post("yyadmin/qtpchuli.php",
     {
	   erjifl:'weballfenqi',
	   cheng1:$('#cheng1').val(),
	   jiagejieguo:$('#jiagejieguo').val(),
	   yanzhengma:$('#yanzhengma').val(),
	   fenqiyueshuzz:$('#fenqiyueshuzz').attr('bei'),
	   yuegong:$('#yuegong').attr('bei'),
	   tuijianma:$('#tuijianma').val(),
		huankuanriqi:$('#huankuanri').val(),

     },
     function(data,status){
		
		if(data=='申请成功等待审核！'){
		cooltiao(data,"center_order.html");
		}else{
		if(data!='请登录在执行此操作！' && data!='验证码不正确'){
			cooltiao(data,"center_set.html");
			}else{
				cooltiao(data,"");
			}
		}
		
     });
	
});






$('#tuichudenglu').click(function (){

	 $.post("yyadmin/qtpchuli.php",
     {
	   erjifl:'wjstc',

     },
     function(data,status){
		 	
		cooltiao(data,window.location.href);
		
		
     });
	
});





function shuxing1(x){


if(x==''){
$('#jianshuzz').attr('bei','0');	

}else{

$('#jianshuzz').attr('bei',x);


}

qjsyg();


	
}

if($('#keneng').val()!='0'){
shuxing1($('#shouyanse').val());
}

qjsyg();



$(".select_list li").click(function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");

	qjsyg();
});

$(".select_list1 li").click(function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	$('#fenqiyueshuzz').attr('bei',$(this).html().replace("个月",""));
	qjsyg();
});
$(".select_list1 li:nth-child(4)").addClass("active");





function clear(){
var jianshu=0;
var shoufubili=0;
var fenqiyueshu=12;



$('#jianshuzz').attr('bei',jianshu);
$('#fenqiyueshuzz').attr('bei',fenqiyueshu);


}



function sfbl(){
	

qjsyg();
//alert(sfbl);
	
	
}



function qjsyg(){
	var lilv=0;
	switch($('#fenqiyueshuzz').attr('bei')){
		case '3':
		lilv=0.015
		break;
		case '6':
		lilv=0.014
		break;
		case '9':
		lilv=0.013
		break;
		case '12':
		lilv=0.012
		break;
		case '15':
		lilv=0.011
		break;
		case '18':
		lilv=0.01
		break;
		case '24':
		lilv=0.009
		break;
		
	}
	
	
	
	var zhongjianjia=parseFloat($('#jianshuzz').attr('bei'));
			
	var jianshoufu=zhongjianjia-(zhongjianjia*parseFloat($('#sfbl').val()));
			
			
	var benjin=(jianshoufu)/$('#fenqiyueshuzz').attr('bei');

	//console.log(benjin);	
	var fuwufei=((jianshoufu)*lilv);
			
	var yuegong= benjin+fuwufei;
	benjin=benjin.toFixed(2);
	fuwufei=fuwufei.toFixed(2);
	yuegong=yuegong.toFixed(2);
	$('#yuegong').attr('bei',yuegong);
	$('#shijiyuefen').html($('#fenqiyueshuzz').attr('bei'));
	
	$('#zongjia').html(jianshoufu);
	$('#yuegongjieguo').html("￥"+yuegong+"（本金￥"+benjin+"+服务费：￥"+fuwufei+"）*"+$('#fenqiyueshuzz').attr('bei')+"期");
		
		
		
	
	$('#zongjiagede').html(jianshoufu);
	$('#spjiege').val(jianshoufu);
	$('#zongjiagede2').html(jianshoufu);
	$('#spshenqingfenqi').val(jianshoufu);
	$('#spshuliang').val(jianshoufu);
	$('#spshoufu').val(zhongjianjia*parseFloat($('#sfbl').val()));
	$('#spshoufude').html(zhongjianjia*parseFloat($('#sfbl').val()));
	

	
	
}





function fisker_encode_v2(s){
    var es = [],c='',ec='';
    s = s.split('');//10.19补 忘记ie不能下标访问字符串
    for(var i=0,length=s.length;i<length;i++){
        c = s[i];
        ec = encodeURIComponent(c);
        if(ec==c){
            ec = c.charCodeAt().toString(16);
            ec = ('00' + ec).slice(-2);
        }
        es.push(ec);
    }
    return es.join('').replace(/%/g,'').toUpperCase();
}