/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
//---------- 图片自动比例
$( function() {
	$(".PicAuto").each( function() {
		var BoxWidth = $(this).attr("width"),BoxHeight = $(this).attr("height");
		var img = new Image(),_this = $(this);
		img.src = $(this).attr("src");
		if ( img.complete ) {
			var RealWidth = img.width,RealHeight = img.height,Padding = 0;
			if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
				RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
				RealWidth = parseInt( BoxWidth );
				Padding = parseInt( ( BoxHeight - RealHeight ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",Padding + "px 0");
			}
			else {
				RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
				RealHeight = parseInt( BoxHeight );
				Padding = parseInt( ( BoxWidth - RealWidth ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding","0 " + Padding + "px");
			}
		}
		img.onload = function() {
			var RealWidth = img.width,RealHeight = img.height,Padding = 0;
			if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
				RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
				RealWidth = parseInt( BoxWidth );
				Padding = parseInt( ( BoxHeight - RealHeight ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding",Padding + "px 0");
			}
			else {
				RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
				RealHeight = parseInt( BoxHeight );
				Padding = parseInt( ( BoxWidth - RealWidth ) / 2 );
				_this.attr("width",RealWidth).attr("height",RealHeight).css("padding","0 " + Padding + "px");
			}
			return;
		};
	} );
} );

//内页图片自动缩放
$( function() {
	$(".PicLoad").hide().each( function() {
		var img = new Image(),_this = $(this),maxwidth = parseInt( $(this).attr("maxwidth") ),showtime = $(this).attr("showtime");
		img.src = $(this).attr("src");
		if ( /^[0-9]+$/.test(showtime) ) {
			showtime = parseInt(showtime);
		}
		if ( img.complete ) {
			if ( maxwidth > img.width ) {
				maxwidth = img.width;
			}
			$(this).attr("width",maxwidth).show(showtime);
		}
		img.onload = function() {
			if ( maxwidth > this.width ) {
				maxwidth = this.width;
			}
			_this.attr("width",maxwidth).show(showtime);
			return;
		};
	} );
} );
document.writeln("<style type=\"text/css\">")
document.writeln("	<!--")
document.writeln("		.PicLoad { display:none; }")
document.writeln("	-->")
document.writeln("</style>")