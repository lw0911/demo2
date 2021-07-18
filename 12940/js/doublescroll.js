/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
/*<style type="text/css">
	<!--
		ul,li,p { margin:0; padding:0; list-style-type:none; }
		#ScrollBox { width:500px; float:left; overflow:hidden; }
			#ScrollBox li { float:left; }
				#ScrollBox li img { width:160px; height:120px; }
		.ctrl { width:50px; height:140px; background:#333; float:left; }
	-->
</style>
<div>
  <div class="ctrl"></div>
  <div id="ScrollBox">
    <ul>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称1</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称2</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称3</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称4</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称5</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称6</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称7</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称8</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称9</a></p>
      </li>
      <li>
        <p><img src="/cn/images/pp1.jpg" border="0" /></p>
        <p><a href="#">名称10</a></p>
      </li>
    </ul>
  </div>
  <div class="ctrl"></div>
</div>*/

$().ready( function() {
	var box = new ScrollBox("ScrollBox");	//参数为滚动容器的id，容器必须具备overflow:hidden属性，容器下必须具备标签格式为<ul><li></li>...<li></li></ul>。
	box.ClientWidth = 500;	//显示窗口区域宽度。
	box.Step = 1;			//滚动步长。
	box.Speed = 30;			//滚动每步长执行时间（毫秒）。
	box.Space = 0;			//如果使用margin做图片间隔，在此设置间隔距离。
	box.Forward = "left";	//滚动初始方向。向左滚动，值为“left”，向右滚动，值为“right”。
	box.NoRecord = "<div style='font-size:20px;font-weight:bold;text-align:center;color:#AAA;letter-spacing:20px;'>暂无记录！</div>";		//暂无记录时插入页面的html代码。
	box.Control = true;	//是否可以控制滚动方向。是为true，否为false。
	box.CtrlClass = "ctrl";		//定义方向控制按钮的属性class。左右两个按钮设置为相同的class，并且页面中不能再次出现这个class。
	box.CtrlSpeed = 10;		//定义方向控制按钮按下时的速度加倍倍数。
	box.Stop = true;		//鼠标悬停时，是否停止。是为true，否为false。
	box.Default();			//初始化。初始化完成后将自动开始滚动。
} );
$().ready( function() {
	var box1 = new ScrollBox("ScrollBox1");	//参数为滚动容器的id，容器必须具备overflow:hidden属性，容器下必须具备标签格式为<ul><li></li>...<li></li></ul>。
	box1.ClientWidth = 500;	//显示窗口区域宽度。
	box1.Step = 1;			//滚动步长。
	box1.Speed = 30;			//滚动每步长执行时间（毫秒）。
	box1.Space = 0;			//如果使用margin做图片间隔，在此设置间隔距离。
	box1.Forward = "left";	//滚动初始方向。向左滚动，值为“left”，向右滚动，值为“right”。
	box1.NoRecord = "<div style='font-size:20px;font-weight:bold;text-align:center;color:#AAA;letter-spacing:20px;'>暂无记录！</div>";		//暂无记录时插入页面的html代码。
	box1.Control = true;	//是否可以控制滚动方向。是为true，否为false。
	box1.CtrlClass = "btngd";		//定义方向控制按钮的属性class。左右两个按钮设置为相同的class，并且页面中不能再次出现这个class。
	box1.CtrlSpeed = 10;		//定义方向控制按钮按下时的速度加倍倍数。
	box1.Stop = true;		//鼠标悬停时，是否停止。是为true，否为false。
	box1.Default();			//初始化。初始化完成后将自动开始滚动。
} );

function ScrollBox(Box) {
	this.Box = $("#" + Box);
	this.Name = "Li左右滚动类";
	this.Author = "Keboy";
	this.Version = "1.0";
	this.CreateDate = "2009-12-15";
}
ScrollBox.prototype = {
	ClientWidth: 0,
	Space: 0,
	Step: 0,
	DefStep: 0,
	Speed: 0,
	Forward: "",
	NoRecord: "",
	Control: false,
	CtrlClass: "",
	Stop: true,
	DefaultHtml: "",
	DefaultI: 1,
	GoCross: 0,
	CtrlSpeed: 0,
	Default: function() {
		var _this = this;
		this.DefaultHtml = this.Box.find("ul:first").html();
		this.DefStep = this.Step;
		this.Box.find("li").each( function() {
			_this.GoCross += ( $(this).get(0).offsetWidth + _this.Space );
		} );
		this.SetDefault();
	},
	SetDefault: function() {
		var _this = this;
		var li = this.Box.find("li");
		if ( li.length > 0 ) {
			var LiWidth = 0;
			li.each( function() {
				LiWidth += ( $(this).get(0).offsetWidth + _this.Space );
			} );
			if ( LiWidth >= 2 * this.ClientWidth ) {
				var endHTML = this.Box.find("ul:first").html();
				endHTML += endHTML;
				this.Box.find("ul:first").html(endHTML).css("width",LiWidth * 2 + "px");
				this.Start();
			}
			else {
				var newHTML = "";
				for ( var i = 0 ; i < this.DefaultI ; i++ ) {
					newHTML += this.DefaultHtml;
				}
				this.DefaultI++;
				this.Box.find("ul:first").html(newHTML);
				this.SetDefault();
			}
		}
		else {
			this.Box.find("ul:first").html(this.NoRecord);
		}
	},
	Start: function() {
		var _this = this;
		var mar = setInterval(GetScroll,this.Speed);
		function GetScroll() {
			if ( _this.Forward == "left" ) {
				if ( _this.Box.get(0).scrollLeft > _this.GoCross ) {
					_this.Box.get(0).scrollLeft -= _this.GoCross;
				}
				else {
					_this.Box.get(0).scrollLeft += _this.Step;
				}
			}
			else if ( _this.Forward == "right" ) {
				if ( _this.Box.get(0).scrollLeft <= 0 ) {
					_this.Box.get(0).scrollLeft += _this.GoCross;
				}
				else {
					_this.Box.get(0).scrollLeft -= _this.Step;
				}
			}
		}
		if ( this.Control ) {
			$("." + this.CtrlClass).css("cursor","pointer");
			$("." + this.CtrlClass + ":first").mouseover( function() {
				_this.Forward = "left";
			} ).mousedown( function() {
				_this.Step = _this.DefStep * _this.CtrlSpeed;
			} );
			$("." + this.CtrlClass + ":last").mouseover( function() {
				_this.Forward = "right";
			} ).mousedown( function() {
				_this.Step = _this.DefStep * _this.CtrlSpeed;
			} );
			$(document).mouseup( function() {
				_this.Step = _this.DefStep;
			} );
		}
		if ( this.Stop ) {
			this.Box.mouseover( function() {
				clearInterval(mar);
			} ).mouseout( function() {
				mar = setInterval(GetScroll,_this.Speed);
			} );
		}
	}
};