/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$("document").ready(function(){
	/***不需要自动滚动，去掉即可***/
	var time = window.setInterval(function(){
		$('.picRight').click();	
	},5000);
	$('.picListBd2').mouseover(function() {
			clearInterval(time);
		});
	$('.picListBd2').mouseout(function(){
		  time = window.setInterval(function(){
			$('.picRight').click();	
		 },5000);
	});
	/***不需要自动滚动，去掉即可***/
	var page=1;
	var i=1;
	var box=$('.picListBd2');
	var h=$('.picListBd2 ul').width()+20;
	var pagetotal= $('.picListBd2 ul').length;
	$(".picListBd2").css("width",pagetotal*h+"px");
	$('.htmlpic2').html($('.htmlpic1').html());//复制内容
   // document.getElementById("a").innerHTML =  document.getElementById("b").innerHTML;
    w = pagetotal*960;	
	$('.picLeft').bind('click',upwardsfn);
	$('.picRight').bind('click',downfn);	
	function upwardsfn(){
		/*
		if($('.htmlpic1,.htmlpic2').is(':animated')){
			$('.htmlpic1,.htmlpic2').stop(true,true);
		}*/
		/*if(page>1){
			box.animate({ marginLeft : '+='+h }, "slow");
			page--;
		}*/
		if($('.htmlpic2,.htmlpic1').is(':animated')){
			$('.htmlpic2,.htmlpic1').stop(true,true);
		}
		if($('.picListBd2 li').length>5){
			ml = parseInt($('.htmlpic1').css('left'));
			sl = parseInt($('.htmlpic2').css('left'));
		   // alert(ml);
			if(ml<=0 && ml>w*-1){
				//alert("aa");
				$('.htmlpic2').css({left: w * -1 + 'px'});
				$('.htmlpic1').animate({left: ml + 960 + 'px'},'slow');				
				if(ml==0){
					$('.htmlpic2').animate({left: (w - 960) * -1 + 'px'},'slow');
				}
			}else{
				//alert("bb");
				$('.htmlpic1').css({left: w * -1 + 'px'});
				$('.htmlpic2').animate({left: sl + 960 + 'px'},'slow');
				if(sl==0){
					$('.htmlpic1').animate({left: ml+960+'px'},'slow');
				}
			}
		}
	}
	function downfn(){
		/*
		if(pagetotal>page){
			box.animate({ marginLeft : '-='+h }, "slow");
			page++;
		}*/
		if($('.htmlpic1,.htmlpic2').is(':animated')){
			$('.htmlpic1,.htmlpic2').stop(true,true);
		}
		if($('.picListBd2 li').length>5){//多于4张图片
			ml = parseInt($('.htmlpic1').css('left'));//默认图片ul位置
			sl = parseInt($('.htmlpic2').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
			  // alert("aa");
				$('.htmlpic2').css({left: '960px'});//交换图片放在显示区域右侧
				$('.htmlpic1').animate({left: ml - 960 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-960)*-1){//默认图片最后一屏时
					$('.htmlpic2').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
			   // alert("bb");
				$('.htmlpic1').css({left: '960px'})//默认图片放在显示区域右
				$('.htmlpic2').animate({left: sl - 960 + 'px'},'slow');//交换图片滚动
				if(sl==(w-960)*-1){//交换图片最后一屏时
					$('.htmlpic1').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}

	}

});



$("document").ready(function(){
  $(".nav li:last-child").css("padding-right","0px");							 
  $(".nav > li").hover(function(){
	
    $(this).children("div").stop(true,true).slideDown();
  },function(){
    $(this).removeClass("menu");
	$(this).children("div").stop(true,true).slideUp();
  })
  var pgname = document.location.href; 	
	  pgname=pgname.replace(/\?.*$/,'')
	  pgname=pgname.replace(/^.*\//,'')
  if(pgname=="index.php"||pgname==null||pgname==""){
    scrolling("proList","proList1","proList2");
  }
  
   $(".mainContectCom").find("img").css("height","auto");
  $(".mainContect .con").find("img").css("height","auto");
  
  
  $(".inav li").eq(1).css({"margin-left":"99px","margin-right":"99px"});
  $(".picList li:nth-child(5n+1)").css({"width":"620px","height":"225px"});
  $(".picList li:nth-child(5n+2)").css("margin-right","0px");
  $(".picList li:nth-child(5n+5)").css("margin-right","0px");	
  $(".picList li:nth-child(5n+1) .title").css({"width":"585px","height":"80px"});
  
  $(".picList li").hover(function(){$(this).find(".title").stop(true,true).fadeIn();},function(){$(this).find(".title").stop(true,true).fadeOut();});
  
  $("#proList li").hover(function(){$(this).find(".title").stop(true,true).fadeIn();},function(){$(this).find(".title").stop(true,true).fadeOut();});
  $(".newsB li").hover(function(){
		$(this).toggleClass("lihover");
	});
  $(".newsB li:last-child a").css("border-bottom","none");
  $(".qq li:last-child").css("margin-top","20px");
  $(".qq li").eq(1).hover(function(){$(this).find(".weixin").fadeIn();},function(){$(this).find(".weixin").fadeOut();});
  $('.top').click(function(){
		$('body,html').animate({scrollTop:0},500)
	});
  
  $(".proListpic li:nth-child(3n)").css("margin-right","0");
  $(".proListpic li").hover(function(){$(this).find(".title").stop(true,true).fadeIn();},function(){$(this).find(".title").stop(true,true).fadeOut();});
  
  $(".pglist ul li").not(".on").hover(function(){ $(this).addClass("on");},function(){$(this).removeClass("on");})
  $(".leftNews li:first-child").css( "border-top","1px solid #c9c9c9");
 
});
//导航定位
function dingwei(){
	var nav = document.getElementById("nav"); 
	var links = nav.getElementsByTagName("li"); 
	var lilen =$("#nav").find("a");
	var st2=new Array();
	var str1=new Array();
	var urrenturl = document.location.href; 	
	st2= urrenturl.split("_")
	var last = 0; 
	for (var i=0;i<links.length;i++) 
	{ 
	    linkurl =  lilen[i].getAttribute("rel"); 
		str1 = linkurl.split("/");
		var length2 = str1.length-1;
		str11 = str1[length2].split(".");
		 if(st2[0].indexOf(str11[0])!=-1) 
			{ 
			 last = i; 
			}
	} 
	links[last].className = "menu";
}
function scrolling(a,b,c){
	var speedp=30;
	var tabp=document.getElementById(a);
	var tab1p=document.getElementById(b);
	var tab2p=document.getElementById(c);
	tab2p.innerHTML=tab1p.innerHTML;
	function Marqueep(){
	if(tab2p.offsetWidth-tabp.scrollLeft<=0)
	tabp.scrollLeft-=tab1p.offsetWidth
	else{
	tabp.scrollLeft++;
	}
	}
	var MyMarp=setInterval(Marqueep,speedp);
	tabp.onmouseover=function() {clearInterval(MyMarp)};
	tabp.onmouseout=function() {MyMarp=setInterval(Marqueep,speedp)};
}


