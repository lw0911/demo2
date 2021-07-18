/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
//图片滚动 调用方法 imgscroll({speed: 30,amount: 1,dir: "up"});
$.fn.imgscroll = function(o){
    var defaults = {
        speed: 40,	//图片滚动速度
        amount: 0,	//图片滚动过渡时间
        width: 1,	//图片滚动步数
        dir: "left"	// "left" 或 "up" 向左或向上滚动
    };
    o = $.extend(defaults, o);
     
    return this.each(function(){
        var _li = $("li", this);
        _li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
        _li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
        _li.css({position: "relative", overflow: "hidden"}); //li
        if(o.dir == "left") _li.css({float: "left"});
         
        //初始大小
        var _li_size = 0;
        for(var i=0; i<_li.size(); i++)
            _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
         
        //循环所需要的元素
        if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
        _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
        _li = $("li", this);
  
        //滚动
        var _li_scroll = 0;
        function goto(){
            _li_scroll += o.width;
            if(_li_scroll > _li_size)
            {
                _li_scroll = 0;
                _li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
                _li_scroll += o.width;
            }
                _li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
        }
         
        //开始
        var move = setInterval(function(){ goto(); }, o.speed);
        _li.parent().hover(function(){
            clearInterval(move);
        },function(){
            clearInterval(move);
            move = setInterval(function(){ goto(); }, o.speed);
        });
    });
};console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");