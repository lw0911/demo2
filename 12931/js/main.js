$(function(){var animate_time=200;var interval_time=5000;var ad_size=jQuery(".ad_position .limit .ad_small_box ul li").size()-1;var ad_huandeng_click_i=0;function ad_huandeng_play(){ad_huandeng_click_i++;if(ad_huandeng_click_i<=ad_size)
{jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");}
else
{jQuery(".ad_small_box ul li").eq(0).trigger("dblclick");ad_huandeng_click_i=0}}
var ad_huandeng_setInterval=setInterval(ad_huandeng_play,interval_time);jQuery(".ad_position").hover(function(){clearInterval(ad_huandeng_setInterval);},function(){ad_huandeng_setInterval=setInterval(ad_huandeng_play,interval_time);});jQuery(".ad_position .limit .ad_small_box ul li").dblclick(function(){ad_huandeng_click_i=jQuery(".ad_position .limit .ad_small_box ul li").index(jQuery(this));jQuery(".ad_position .limit .ad_left_big").animate({"margin-top":ad_huandeng_click_i*-320},{duration:animate_time,queue:false});if(ad_huandeng_click_i<ad_size)
{if(ad_huandeng_click_i==0||ad_huandeng_click_i==1)
{jQuery(".ad_position .limit .ad_small_box ul").animate({"margin-top":"0px"},{duration:animate_time,queue:false});}
else
{jQuery(".ad_position .limit .ad_small_box ul").animate({"margin-top":(ad_huandeng_click_i-1)*-96},{duration:animate_time,queue:false});}}
if(ad_huandeng_click_i==0)
{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top","0px");}
else if(ad_huandeng_click_i==ad_size)
{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top","96px");}
else
{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top","96px");}
if(ad_huandeng_click_i==0)
{jQuery(".ad_small_box .top_button").addClass("off");jQuery(".ad_small_box .bottom_button").removeClass("off");}
else if(ad_huandeng_click_i==ad_size)
{jQuery(".ad_small_box .top_button").removeClass("off");jQuery(".ad_small_box .bottom_button").addClass("off");}
else
{jQuery(".ad_small_box .top_button").removeClass("off");jQuery(".ad_small_box .bottom_button").removeClass("off");}});jQuery(".ad_position .limit .ad_small_box ul li").mouseover(function(){var small_ad_hover_i=jQuery(".ad_position .limit .ad_small_box ul li").index(jQuery(this));var this_ad_top=jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top");this_ad_top=parseInt(this_ad_top);jQuery(".ad_position .limit .ad_left_big").animate({"margin-top":small_ad_hover_i*-320},{duration:animate_time,queue:false});if(small_ad_hover_i!=ad_huandeng_click_i);if(small_ad_hover_i==0)
{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top","0px");}
else if(small_ad_hover_i<ad_huandeng_click_i)
{if(ad_huandeng_click_i-small_ad_hover_i==1)
{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top",this_ad_top-96);}
else
{{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top",this_ad_top-96);}}}
else if(small_ad_hover_i>ad_huandeng_click_i)
{if(small_ad_hover_i-ad_huandeng_click_i==1)
{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top",this_ad_top+96);}
else
{{jQuery(".ad_position .limit .ad_small_box .small_right_limit .this_ad").css("top",this_ad_top+96);}}}
ad_huandeng_click_i=small_ad_hover_i;if(ad_huandeng_click_i==0)
{jQuery(".ad_small_box .top_button").addClass("off");jQuery(".ad_small_box .bottom_button").removeClass("off");}
else if(ad_huandeng_click_i==ad_size)
{jQuery(".ad_small_box .top_button").removeClass("off");jQuery(".ad_small_box .bottom_button").addClass("off");}
else
{jQuery(".ad_small_box .top_button").removeClass("off");jQuery(".ad_small_box .bottom_button").removeClass("off");}});jQuery(".ad_small_box .top_button").click(function(){ad_huandeng_click_i=ad_huandeng_click_i-1;if(ad_huandeng_click_i<0)
{ad_huandeng_click_i=0;}
jQuery(".ad_position .limit .ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");});jQuery(".ad_small_box .bottom_button").click(function(){ad_huandeng_click_i=ad_huandeng_click_i+1;if(ad_huandeng_click_i>=ad_size)
{ad_huandeng_click_i=ad_size;jQuery(".ad_position .limit .ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");jQuery(".ad_position .limit .ad_small_box ul").animate({"margin-top":(ad_huandeng_click_i-1)*-96},{duration:animate_time,queue:false});}
jQuery(".ad_position .limit .ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");});});