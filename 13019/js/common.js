/****************************************************************
 *																*		
 * 						     							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/

function BtHide(id) {
    var Div = document.getElementById(id);
    if (Div) {
        Div.style.display = "none";
    }
}

function BtShow(id) {
    var Div = document.getElementById(id);
    if (Div) {
        Div.style.display = "block";
    }
}

function BtPopload(showId ,topId) { //蒙版生成div
    var h = Math.max(document.documentElement.offsetHeight, document.documentElement.clientHeight) - document.getElementById(topId).offsetHeight + 'px';
    var h1= Math.max(document.documentElement.offsetHeight, document.documentElement.clientHeight) - document.getElementById(topId).offsetHeight-4+ 'px';
    var w = document.documentElement.scrollWidth + 'px';
    var t=document.getElementById(topId).offsetHeight + 'px';
    var popCss = "background:#000;opacity:0.6;filter:alpha(opacity=60);position:absolute;left:0;overflow:hidden;"

    //生成遮罩层
    var exsit = document.getElementById("popBox");
    if (!exsit) {
        pop_Box = document.createElement("div");
        pop_Box.id = "popBox";
        document.getElementsByTagName("body")[0].appendChild(pop_Box);
        pop_Box.style.cssText = popCss;
        pop_Box.style.zIndex = "10";
        pop_Box.style.height = h;
        pop_Box.style.width = w;
        pop_Box.style.top=t;
    }

    //生成箭头
    var icoArrow=document.getElementById("iconArrow");
    if (!icoArrow) {
        icon_Arrow = document.createElement("span");
        icon_Arrow.id = "iconArrow";
        document.getElementById(topId).appendChild(icon_Arrow);
     }

    //显示隐藏的图层
    BtShow("popBox");
    BtShow(showId);
    BtShow("iconArrow");
    pop_Win = document.getElementById(showId);
    pop_Win.style.zIndex = "11";
    pop_Win.style.top = t;
    pop_Win.style.height=h1;
}

function fnNav(Bid, Did ,topId) {
    var UploadBtn = document.getElementById(Bid);
    var navDiv= document.getElementById(Did);

    if (UploadBtn) {
        UploadBtn.onclick = function() {
            if(navDiv.style.display=='block'){
                BtHide(Did);
                BtHide("iconArrow");
                BtHide("popBox");
            }else{
                BtPopload(Did ,topId);
            }
            return false;
        }
    }
}


/*购物车结算*/
/*
sumObj====总计
subObj====店铺
obj   ====复选框
*/
function fnSelect(sumObj,subObj,obj){

	if($(sumObj+' '+obj).hasClass('checked')){
		$(obj).addClass('checked');//全选
	}

	sum(sumObj,subObj,obj);//计算金额

	$(sumObj+' '+obj).click(function(){
		if(!$(this).hasClass('checked')){
			$(obj).addClass('checked');//全选
		}else{
			$(obj).removeClass('checked');//全不选
		}
		sum(sumObj,subObj,obj);//计算金额
	});

	$(subObj).each(function(){
		var _this=$(this);

		//店铺全选
		_this.find(obj).eq(0).bind('click', function() {
			if(!$(this).hasClass('checked')){
				$(this).parentsUntil(subObj).parent().find(obj).addClass('checked');//当前店铺下的商品全选
				var s=true;
				$(this).parentsUntil(subObj).parent().siblings(subObj).find(obj).eq(0).each(function(){
					if (!$(this).hasClass('checked')) {
						s=false;
						return false;
					}
				});
				if (s) {
					$(sumObj+' '+obj).addClass('checked');
				}
			}else{
				$(this).parentsUntil(subObj).parent().find(obj).removeClass('checked');
				$(sumObj+' '+obj).removeClass('checked'); //取消整体全选
			}
			sum(sumObj,subObj,obj);//计算金额
		});

		//商品
		_this.find(obj+':gt(0)').bind('click',function(){
			var $this=$(this);
			if(!$this.hasClass('checked')){
				$this.addClass('checked');

				var s=true;
				$this.parentsUntil(subObj).children().find(obj).each(function() {
					if (!$(this).hasClass('checked')) {
						s=false;
						return false;
					}
				});
				if(s){
					$this.parentsUntil(subObj).parent().find(obj).eq(0).addClass('checked');//当前店铺全选
					var t=true;
					$this.parentsUntil(subObj).parent().parent().find(subObj+' '+obj).eq(0).each(function() {
						if(!$(this).hasClass('checked')){
							t=false;
							return false;
						}
					});
					if(t){
						$(sumObj+' '+obj).addClass('checked');
					}
				}
			}else{
				$this.removeClass('checked');
				$this.parentsUntil(subObj).parent().find(obj).eq(0).removeClass('checked'); //当前店铺取消全选
				$(sumObj+' '+obj).removeClass('checked'); //取消整体全选
			}

			sum(sumObj,subObj,obj);//计算金额
		});

	});

}


//计算金额
function sum(sumObj,subObj,obj){
	var sum=0;//总金额

	$(subObj).each(function() {
		var subSum=0;//每家店铺金额小计
		var $this=$(this);
		var n=0;
		$this.find(obj+":gt(0)").each(function(){
			if($(this).hasClass("checked")){
				var price=parseFloat($(this).parent().find(".price span").eq(0).text());
				var num=parseInt($(this).parent().find(".num").eq(0).text());
				subSum+=price*num;
				n++;
			}
		});
		$this.find('.subtotal').text(subSum.toFixed(2));
		$this.find('.subtotal').parent().parent().find('.num').text(n);
		sum+=subSum;
	});

	$(sumObj).find(".price").text(sum.toFixed(2));
}

//数量加
function fnPlus(obj, numObj, lessObj){
	var n=$(obj).parent().find(numObj).eq(0).text();
	n++;
	$(obj).parent().find(numObj).eq(0).text(n);
	if(n>1){
		$(obj).siblings(lessObj).removeClass('failed');
	}
}

//数量减
function fnLess(obj, numObj){
	var n=$(obj).parent().find(numObj).eq(0).text();
	if(n>=2){
		if(n==2) $(obj).addClass('failed');
		n--;
		$(obj).parent().find(numObj).eq(0).text(n);
	}else{
		$(obj).addClass('failed');
		return false;
	}
	$(obj).parent().find(numObj).eq(0).text(n);
}

//选择商品属性
function fnGetSelected(){
    $('.options').each(function() {
        var $this=$(this);
        $this.click(function(){
            if(!!$(this).hasClass("cur")){
                $(this).removeClass('cur');
                $(this).find('.selected').remove();
            }else{
                $(this).siblings(".options").removeClass('cur');
                $(this).siblings(".options").find('.selected').remove();
                $(this).addClass("cur");
                $(this).append('<span class="selected"><img src="images/icon_select.png"></span>');
            }
        });

    });
}
