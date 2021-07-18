/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function(){
	// 服务栏目
	var $service_main = $('.service_main');
	if($service_main.length>0){
		var service_arrow_x = [78,268,458,648,838,1028];
		var $service_arrow = $('.service_arrow');
		var $service_prev = $('.service_main .prev');
		var $service_next = $('.service_main .next');
		var $service_item = $('.service_main .item');

		var $service_bd_item = $('.service_bd>li');
		var service_current;
		var service_next;
		var $this;
		$service_bd_item.on('click', function(){
			service_current = $('.service_bd .current').index();
			$this = $(this);
			service_next = $this.index();
			$this.addClass('current').siblings().removeClass('current');
			if(service_next==0){
				$service_prev.fadeOut();
			}else{
				$service_prev.fadeIn();
			}
			if(service_next==5){
				$service_next.fadeOut();
			}else{
				$service_next.fadeIn();
			}
			if(service_next>service_current){
				$service_item.eq(service_current).animate({'left':'-100%'}, {duration:500, queue:false, easing:'easeOutQuart'});
				$service_item.eq(service_next).css('left', '100%').animate({'left':0}, {duration:500, queue:false, easing:'easeOutQuart'});
			}else if(service_next<service_current){
				$service_item.eq(service_current).animate({'left':'100%'}, {duration:500, queue:false, easing:'easeOutQuart'});
				$service_item.eq(service_next).css('left', '-100%').animate({'left':0}, {duration:500, queue:false, easing:'easeOutQuart'});
			}
			$service_arrow.animate({'left':service_arrow_x[service_next]}, {duration:500, queue:false, easing:'easeOutQuart'});
		});
		
		$service_prev.on('click', function(){
			 $('.service_bd .current').prev().trigger('click');
			 return false;
		});
		$service_next.on('click', function(){
			 $('.service_bd .current').next().trigger('click');
			 return false;
		});
	}
	


});
