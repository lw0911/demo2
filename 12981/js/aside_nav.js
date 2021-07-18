
$(document).ready(function(){
	var handle = null;
    $(".aside_list").hide();
	$(".aside").mouseover(function(){
		handle = setTimeout(function(){
			$(".aside_list").slideDown("fast");}, 300);		
	}).mouseout(function () {
    clearTimeout(handle);
});
	$(".aside").mouseleave(function(){
		$(".aside_list").slideUp("fast");
	});
});
