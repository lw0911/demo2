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


$('#tuichudenglu').click(function (){

	 $.post("yyadmin/qtpchuli.php",
     {
	   erjifl:'wjstc',

     },
     function(data,status){
		 	
		cooltiao(data,window.location.href);
		
		
     });
	
});


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





