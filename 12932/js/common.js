/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/


$(document).ready(function(){
      //返回顶部
      $("#gototop").click(function(){
          $("html,body").animate({scrollTop :0}, 800);return false;
      });
      // $("#gotocate").click(function(){
      //      $("html,body").animate({scrollTop:$("#categories").offset().top},800);return false;
      // });


      // 搜索
      // $("#small_search").click(function(){
      //     $("#topsearch").slideToggle();
      // });

      // 友情链接
      $("#link_btn").click(function(){
          if ($(".link_list").css('display') == "none"){
            $("#link_btn").addClass("glyphicon-minus");
          }else{
            $("#link_btn").removeClass("glyphicon-minus");
          }
          $(".link_list").slideToggle();      
      });

      $("#tags_btn").click(function(){
          if ($(".tags_rows").css('display') == "none"){
            $("#tags_btn").addClass("glyphicon-minus");
          }else{
            $("#tags_btn").removeClass("glyphicon-minus");
          }
          $(".tags_rows").slideToggle();      
      });  

      if($(window).width()>768){
          //鼠标划过就展开子菜单
          $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).slideDown();
          }, function() {
            $(this).find('.dropdown-menu').stop(true, true).slideUp();
          });
      }

      //scrollTop
      $(window).scroll(function(){
          var scrolls = $(window).scrollTop()
          if (scrolls > 10) {
            $(".navbar").addClass("small-nav")
          }else{
            $(".navbar").removeClass("small-nav")
          }
      });

      //左侧导航菜单
      // if ($("#firstpane .menu_body:eq(0)").text().replace(/[\r\n ]/g,"").length>0) {
      //   $("#firstpane .menu_body:eq(0)").show().prev().html("-").prev().addClass("left_active");
      // };
      $("ul.menu_body").each(function(){
       if ($(this).text().replace(/[\r\n ]/g,"").length<=0) {$(this).prev().remove();} //去掉span
      });

      $("#firstpane span.menu_head").click(function(){
          var spanatt = $(this).next("ul.menu_body").css('display');
          if (spanatt == "block"){
              var spantext = "+";
               $(this).prev().removeClass("left_active");
          }else{
              var spantext = "-";
              $(this).prev().addClass("left_active");
          }
          $(this).html(spantext).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body");
      });

      //菜单选中高亮
      var urlstr = location.href;  
      var urlstatus=false; 
      var urlnum = 1;
      $("#navbar a").each(function () {  
        if ((urlstr + '/').indexOf($(this).attr('href').replace(/[\r\n ]/g,"")) > -1 && $(this).attr('href')!='' && urlnum != 1) {  
          $(this).addClass('active'); urlstatus = true;
        }else {  
          $(this).removeClass('active');  
        } 
        urlnum++;
      });  
     if (!urlstatus) {$("#navbar a").eq(0).addClass('active'); }  

  
});console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");