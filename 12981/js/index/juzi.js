/*---------返回顶部----------*/
	$(".btn_top").hide();
	$(".btn_top").live("click",function(){
		$('html, body').animate({scrollTop: 0},300);return false;
	})
	$(window).bind('scroll resize',function(){
		if($(window).scrollTop()<=300){
			$(".btn_top").hide();
		}else{
			$(".btn_top").show();
		}
	})
/*---------返回顶部 end----------*/

/*---------弹出层----------*/	


	function kaihongbao(){
	
		$.post("yyadmin/xypchuli.php",{
			'erjifl':'huiyuan_addr',
		},
		function(data,status){
		
			if(data=='dlh'){
			alert('请登录后点击领取~~')
			location.href='login.html'; 
			}else{

				if(data=='swl'){
				alert('今天红包已被抢空~~')
				window.location.reload();
				}else{
					$('#xianshidejg2').html(data);
				}
			}	
		});
		
	}


	function popover(x){
	
//eval("$('."+x+"-btn').click(function(){$('."+x+"-popover-mask').show();$('."+x+"-popover-mask').height($(document).height());$('."+x+"-popover').slideDown(300);$('."+x+"-popbod').slideDown(300);});$('."+x+"-poptit .close').click(function(){$('."+x+"-popover-mask').hide();$('."+x+"-popover').slideUp(200);$('."+x+"-popbod').slideUp(200);})");
	
			$('.'+x+'-btn').click(function(){
			//console.log("sdf");
				
				//kaihongbao();
				
				$('.'+x+'-popover-mask').show();

				$('.'+x+'-popover-mask').height($(document).height());

				$('.'+x+'-popover').slideDown(300);

				$('.'+x+'-popbod').slideDown(300);
				
				
			});

	
	
	}	
	 
	popover("theme");
	popover("theme2");
	popover("theme3");
	
	$('.theme2-poptit .close').click(function(){
		$('.theme2-popover-mask').hide();
		$('.theme2-popover').slideUp(200);
	})

	$('.theme2-popbod .btn3').click(function(){
		$('.theme2-popover-mask').hide();
		$('.theme2-popover').slideUp(200);
	})
	
	
	
	function zaishiyici(x){
	
		kaihongbao();
		$('.theme3-popover').slideUp(200);
		$('.theme3-popbod').slideUp(200);
		
		$('.theme3-popover').slideDown(200);
		$('.theme3-popbod').slideDown(200);
		
		$('.'+x+'-popover-mask').show();

		$('.'+x+'-popover-mask').height($(document).height());

		$('.'+x+'-popover').slideDown(300);

		$('.'+x+'-popbod').slideDown(300);
		
	
	
	
	}
	
	function guanbide(x){
	
		$('.'+x+'-popover-mask').hide();

		$('.'+x+'-popover').slideUp(200);

		$('.'+x+'-popbod').slideUp(200);
	
	}
	

		
	
/*---------弹出层 end----------*/	




/*map*/
var beforenum=0;
var mAddr=[".d-heb",".d-cc",".d-sy",".d-dl",".d-tj",".d-sjz",".d-ty",".d-jn",".d-qd",".d-xa",".d-cd",".d-cq",".d-yt",".d-lz",".d-dq",".d-bd",".d-nj",".d-bj"];

var mCity=[".n-heb",".n-cc",".n-sy",".n-dl",".n-tj",".n-sjz",".n-ty",".n-jn",".n-qd",".n-xa",".n-cd",".n-cq",".n-yt",".n-lz",".n-dq",".n-bd",".n-nj",".n-bj"];

$(document).ready(function(){
conTime();	
});
function conTime()
{
	$(".m-pop").remove();
	$(".m-icon").removeClass("m-orange");
	$(".m-addr").removeClass("n-orange");
	var md = Math.floor((Math.random()*mAddr.length));
	
	while(true)
	{
		if(beforenum == md){
			md = Math.floor((Math.random()*mAddr.length));
		}else{
			beforenum = md;
			break;
		}
	}
	
	$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>aaa</span>bbb</div></div>");
	switch (md)
	{
		case 0:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  哈尔滨分部</span>黑龙江省哈尔滨市南岗区哈尔滨大街，金爵万象</div></div>");
			break;
		case 1:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  长春分部</span>吉林省长春市南关区卫星广场财富领域</div></div>");
			break;
		case 2:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  沈阳分部</span>辽宁省沈阳市浑南新区三义街28—4瑞宝东方大厦</div></div>");
			break;
		case 3:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  大连总部</span>辽宁省大连市甘井子区黄浦路549号锦辉商城</div></div>");
			break;
		case 4:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  天津分部</span>天津市宾水西道大学城站文博园</div></div>");
			break;
		case 5:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  石家庄分部</span>河北省石家庄市长安区中山东路39号勒泰中心</div></div>");
			break;
		case 6:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  太原分部</span>山西省太原市迎泽区柳巷南路15号千里商厦</div></div>");
			break;
		case 7:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  济南分部</span>山东省济南市长清区三庆-青年城</div></div>");
			break;
		case 8:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  青岛分部</span>山东省青岛市黄岛区庐山路147号北江支路小区</div></div>");
			break;
		case 9:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  西安分部</span>陕西省西安市雁塔区雁塔西路161号世纪经典大厦</div></div>");
			break;
		case 10:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  成都分部</span>四川省成都市郫县犀浦地铁站百伦广场</div></div>");
			break;
		case 11:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  重庆分部</span>重庆市沙坪坝区大学城中路48号</div></div>");
			break;
		case 12:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  烟台分部</span>山东省烟台市莱山区港城东大街世纪华庭</div></div>");
			break;
		case 13:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  兰州分部</span>甘肃省兰州市安宁区建宁东路宝石花路口居安小区</div></div>");
			break;
		case 14:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  大庆分部</span>黑龙江省大庆市开发区博学大街17号摩码写字楼</div></div>");
			break;
		case 15:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  保定分部</span>河北省保定市北市区七一东路德翰园小区</div></div>");
			break;
		case 16:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  南京分部</span>江苏省南京市浦口区浦口大道阅景龙华小区</div></div>");
			break;
		case 17:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  北京分部</span>北京市朝阳区酒仙桥路4号宏源大厦19楼</div></div>");
			break;
		/*case 18:
			$(mAddr[md]).append("<div class='m-pop' style='display:none;'><div class='m-tx'><img src='style/images/map-tx.jpg'></div><div class='m-text'><span class='m-name'>×××分期  廊坊分部</span>廊坊市爱民西道新儒苑2-2-301</div></div>");
			break;*/
	}
	$(".m-pop").fadeIn(1000);
	$(mAddr[md]).addClass("m-orange");
	$(mCity[md]).addClass("n-orange");
	setTimeout("conTime()",5000);
}

/*map end*/
/*---------select_list----------*/	
$(document).ready(function(e) {
	$(".select_list li:first-child").addClass("active");
    $(".select_list li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
		
});
/*---------select_list end----------*/
/*---------促销 换购 promotion_gift----------*/	
$(document).ready(function(e) {
    $(".promotion_gift li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).parents(".promotion dd").children(".promotion_box").fadeOut('slow');
	});
		
});
/*---------促销 换购 promotion_gift end----------*/
/*---------select----------*/
$(".sel_wrap").on("change", function() {
var o;
var opt = $(this).find('option');
opt.each(function(i) {
if (opt[i].selected == true) {
o = opt[i].innerHTML;
}
})
$(this).find('label').html(o);
}).trigger('change');
/*---------select end----------*/
/*---------促销---------*/
$(document).ready(function(){
	$(".promotion .open").click(function(){
		$(this).parents(".promotion dd").children(".promotion_box").show();
	});
	$(".promotion .close").click(function(){
		$(this).parents(".promotion dd").children(".promotion_box").hide();
	});
});
/*---------促销 end----------*/
/*---------star 打分----------*/
$(document).ready(function(){
    var stepW = 24;
    var stars = $("#star > li");
    $("#showb").css("width",0);
    stars.each(function(i){
        $(stars[i]).click(function(e){
            var n = i+1;
            $("#showb").css({"width":stepW*n});
            $(this).find('a').blur();
            return stopDefault(e);
        });
    });
});
function stopDefault(e){
    if(e && e.preventDefault)
           e.preventDefault();
    else
           window.event.returnValue = false;
    return false;
};
/*---------star 打分 end----------*/
/*---------detail.html----------*/
$(document).ready(function(){
	var handle = null;	
    $(".popv").hide();
	$(".user_icon.phone").mouseover(function(){
		handle = setTimeout(function(){
			$(".popv.phone").fadeIn("fast");}, 200);
	}).mouseout(function () {
    clearTimeout(handle);
});
	$(".user_icon.card").mouseover(function(){
		handle = setTimeout(function(){
			$(".popv.card").fadeIn("fast");}, 200);
	}).mouseout(function () {
    clearTimeout(handle);
});
	$(".user_icon.identity").mouseover(function(){
		handle = setTimeout(function(){
			$(".popv.identity").fadeIn("fast");}, 200);
	}).mouseout(function () {
    clearTimeout(handle);
});
	$(".user_icon.pw_trade").mouseover(function(){
		handle = setTimeout(function(){
			$(".popv.pw_trade").fadeIn("fast");}, 200);
	}).mouseout(function () {
    clearTimeout(handle);
});
	$(".user_icon").mouseleave(function(){
		$(this).children(".popv").fadeOut("fast");
	});
});
/*---------detail.html end----------*/

/*---------top_float----------*/
$(document).ready(function(){
	$(".top_float .close").click(function() {
		$(".top_float").hide();
	});
});
/*---------top_float end----------*/

/*---------pocket----------*/
$(document).ready(function() {
    $(".pocket_form .del").click(function(){
		 //$(this).parent(".pocket_form").children("input").val('');
		 $(this).siblings("input").val('');
	});
});
/*---------pocket end----------*/