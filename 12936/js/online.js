/****************************************************************
 *																*		
 * 						      							*
 *                        							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/

$(function () {

    // cms客服浮动面板
    if ($("#cmsFloatPanel")) {
        $("#cmsFloatPanel > .ctrolPanel > a.arrow").click(function () { $("html,body").animate({ scrollTop: 0 }, 800); return false; });
        var objServicePanel = $("#cmsFloatPanel > .servicePanel");
        var objMessagePanel = $("#cmsFloatPanel > .messagePanel");
        var objQrcodePanel = $("#cmsFloatPanel > .qrcodePanel");
        var w_s = objServicePanel.outerWidth();
        var w_m = objMessagePanel.outerWidth();
        var w_q = objQrcodePanel.outerWidth();
        $("#cmsFloatPanel .ctrolPanel > a.service").bind({
            click: function () { return false; },
            mouseover: function () {
                objMessagePanel.stop().hide(); objQrcodePanel.stop().hide();
                if (objServicePanel.css("display") == "none") {
                    objServicePanel.css("width", "0px").show();
                    objServicePanel.animate({ "width": w_s + "px" }, 300);
                }
                return false;
            }
        });
        $(".servicePanel-inner > .serviceMsgPanel > .serviceMsgPanel-hd > a", objServicePanel).bind({
            click: function () {
                objServicePanel.animate({ "width": "0px" }, 0, function () {
                    objServicePanel.hide();
                });
                return false;
            }
        });
        $("#cmsFloatPanel > .ctrolPanel > a.message").bind({
            click: function () { return false; },
            mouseover: function () {
                objServicePanel.stop().hide(); objQrcodePanel.stop().hide();
                if (objMessagePanel.css("display") == "none") {
                    objMessagePanel.css("width", "0px").show();
                    objMessagePanel.animate({ "width": w_m + "px" }, 300);
                }
                return false;
            }
        });
        $(".messagePanel-inner > .formPanel > .formPanel-bd > a", objMessagePanel).bind({
            click: function () {
                objMessagePanel.animate({ "width": "0px" }, 0, function () {
                    objMessagePanel.stop().hide();
                });
                return false;
            }
        });
        $("#cmsFloatPanel > .ctrolPanel > a.qrcode").bind({
            click: function () { return false; },
            mouseover: function () {
                objServicePanel.stop().hide(); objMessagePanel.stop().hide();
                if (objQrcodePanel.css("display") == "none") {
                    objQrcodePanel.css("width", "0px").show();
                    objQrcodePanel.animate({ "width": w_q + "px" }, 300);
                }
                return false;
            }
        });
        $(".qrcodePanel-inner > .codePanel > .codePanel-hd > a", objQrcodePanel).bind({
            click: function () {
                objQrcodePanel.animate({ "width": "0px" }, 0, function () {
                    objQrcodePanel.stop().hide();
                });
                return false;
            }
        });

    }

});

if (window.sessionStorage.getItem("copyright") != "true" && window.location.href.indexOf("keyweb.cn") > -1) {
    $(window).ready(function () {
        var url = window.location.href;
        url = url.substring(0, url.indexOf("keyweb.cn") + 9);
        $.getJSON('http://www.keyweb.cn/Handler/keyweb.ashx?callback=?', { keywords: url }, function (data) {
            console.log(data);
            //var data = eval('(' + result + ')');
            //alert(data);
            var html = '';
            html += '<div class="modal fade" id="keywebModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
            html += '<div class="modal-dialog">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">';
            html += '&times;';
            html += '</button>';
            html += '<h4 class="modal-title" id="myModalLabel">';
            html += '官网提醒';
            html += '</h4>';
            html += '</div>';
            html += '<div class="modal-body">';
            html += data.msg;
            html += '</div>';
            html += '<div class="modal-footer">';
            html += '<button type="button" class="btn btn-default" data-dismiss="modal">关闭';
            html += '</button>';
            html += '<a target="_blank" href="' + data.buyurl + '" class="btn btn-primary">';
            html += '购买正版';
            html += '</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            $("body").append(html);
            $("#keywebModal").modal("show");
            window.sessionStorage.setItem("copyright", "true");
        });
    });
}