try{
var marqueesHeight = 30; //高度
var stopscroll     = false;
var scrollElem =   document.getElementById("red_text");
with(scrollElem){
style.width     = 840;//宽度
style.height    = marqueesHeight;
style.overflow  = 'hidden';
noWrap          = true;
}
scrollElem.onmouseover = new   Function('stopscroll = true');
scrollElem.onmouseout  = new   Function('stopscroll = false');
var preTop     = 0;
var currentTop = 0;
var stoptime   = 0;
var leftElem =   document.getElementById("red_list");
scrollElem.appendChild(leftElem.cloneNode(true));
init_srolltext();
}catch(e) {}
function init_srolltext(){
scrollElem.scrollTop = 0;
setInterval('scrollUp()', 15); //滚动速度
}
function scrollUp(){
if(stopscroll) return;
currentTop += 1;
if(currentTop == 31) { //滚动距离
stoptime += 1;
currentTop -= 1;
if(stoptime == 220) { //停顿时间
currentTop = 0;
stoptime = 0;
}
}else{
preTop = scrollElem.scrollTop;
scrollElem.scrollTop += 1;
if(preTop == scrollElem.scrollTop){
scrollElem.scrollTop = 0;
scrollElem.scrollTop += 1;
}
}
}