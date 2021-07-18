/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
	$(document).ready(function(){
		$('.flexslider').flexslider({
			animationLoop:false,
			directionNav: true,
			pauseOnAction: false
		});
		if ($(".l_top_menu").length > 0){  
		l_top_menu_show=$(".l_top_menu").css("display");
		}else{
			l_top_menu_show="none";
		}
		//alert(l_top_menu_show);
		$(".top ul li").hover(function(){
			$("#top2").hide().children("ul").hide();
			//alert(y);
			l_t=$("#top2").show().children("ul").eq($(this).index()).html();
			l_t=$.trim(l_t);
			if(l_t!=""){
			$("#top2").show().children("ul").eq($(this).index()).show();
			}
			$(".l_top_menu").hide();
		},function(){
			if(l_top_menu_show=="block"){
			$(".l_top_menu").show();	
			}
		})
		
				$(".lgocl_trbs ul li").hover(function(){

	$(this).addClass("on");

},function(){
	$(this).removeClass("on");
	})

		$(".top_d").mouseleave(function () {
			$("#top2").hide().children("ul").hide();
		})

$(".table_formatted tr").hover(function(){
		$(this).css("background-color","#faf7f0");
	 },function(){
		$(this).css("background-color","#ffffff"); 
	 })
$(".i_bottom_l span").hover(function(){
		$(this).find('.dis_img').show("slow");
	 },function(){
		$(this).find('.dis_img').hide("slow");
	 })

$(".l_top_tabqh span").click(function(e) {
	$(".l_top_tabqh span").removeClass("on");
	$(this).addClass("on");
	
});
$(".l_hq .div_l ul li").click(function(e) {
	$(".l_hq .div_l ul li").removeClass("on");
	$(this).addClass("on");
	
});

});
function showta(num){
$(".l_top_tabdp").hide();	
$(".l_top_tabdp").eq(num).show();
}
function showta2(num){
$(".l_tab_i").hide();	
$(".l_tab_i").eq(num).show();
}

function showpic(y){//alert(y);
var model = document.getElementById(y);
  model.className='on';
    }
