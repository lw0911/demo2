
        $(function(){
							$(".aside_title").mouseover(function(){
								$(".aside_list").css('display','block');
							});
							$(".aside_title").mouseout(function(){
								$(".aside_list").css('display','none');
							});
						}); 
      // popover end ----------------->
       // nav site ----------------->
      
            $(document).ready(function() {
                var handle = null;
                $(".site_box").hide();
                $(".site").mouseover(function() {
                    handle = setTimeout(function() {
                        $(".site_box").slideDown("fast");
                    },
                    300);
                }).mouseout(function() {
                    clearTimeout(handle);
                });
                $(".site").mouseleave(function() {
                    $(".site_box").slideUp("fast");
                });
            });
			 
            //---------返回顶部----------*/
            $(".btn_top").hide();
            $(".btn_top").live("click",
            function() {
                $('html, body').animate({
                    scrollTop: 0
                },
                300);
                return false;
            }) 
			$(window).bind('scroll resize',function() {
                if ($(window).scrollTop() <= 300) {
                    $(".btn_top").hide();
                } else {
                    $(".btn_top").show();
                }
            })
            /*---------返回顶部 end----------*/
            
       
            function yhdlzh() {

                $.post("yyadmin/qtpchuli.php", {
                    erjifl: 'wjsdl',
                    a1: $('#a1').val(),
                    a3: $('#a3').val(),

                },
                function(data, status) {

                    if (data == "登录成功!") {
                        cooltiao(data, 'center_order.html');

                    } else {

                        alert(data);
                    }
                });

            }
			 
            function timer(intDiff, id) {
                intDiff = parseInt(intDiff);
                window.setInterval(function() {
                    var day = 0,
                    hour = 0,
                    minute = 0,
                    second = 0; //时间默认值		
                    if (intDiff > 0) {
                        day = Math.floor(intDiff / (60 * 60 * 24));
                        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                    }
                    if (minute <= 9) minute = '0' + minute;
                    if (second <= 9) second = '0' + second;
                    $('#' + id).html(day + "天" + '<s id="h"></s>' + hour + '时' + '<s></s>' + minute + '分' + '<s></s>' + second + '秒');
                    intDiff--;
                },
                1000);
            }

            timer('24416', 'tmsj313');

            timer('24476', 'tmsj300');

            timer('24476', 'tmsj301');

            timer('24476', 'tmsj293');

            timer('24476', 'tmsj299');
        //-------------- popover ----------------->
        //-------------- popover end ----------------->
        //-------------- nav site ----------------->
       
            $(document).ready(function() {
                var handle = null;
                $(".site_box").hide();
                $(".site").mouseover(function() {
                    handle = setTimeout(function() {
                        $(".site_box").slideDown("fast");
                    },
                    300);
                }).mouseout(function() {
                    clearTimeout(handle);
                });
                $(".site").mouseleave(function() {
                    $(".site_box").slideUp("fast");
                });
            });
			
       function baitiaoyi() {

                if ($('[name="yongtu"]').val() == '告诉我们你想买什么') {
                    alert('用途不能为空');
                    event.stopPropagation();
                }
                if ($('[name="jine"]').val() == '600元起借') {

                    alert('金额不能为空');
                    event.stopPropagation();
                }

                if ($('[name="jine"]').val() < 600) {

                    alert('600元起借');
                    event.stopPropagation();
                }

                if ($('[name="jine"]').val() > 1800) {

                    alert('最大不能超过1800');
                    event.stopPropagation();
                }

                if (isNaN($('[name="jine"]').val())) {

                    alert('金额格式错误');
                    event.stopPropagation();
                }

                var yongtu1 = fisker_encode_v2($('[name="yongtu"]').val());
                var jine1 = fisker_encode_v2($('[name="jine"]').val());

                window.open("baitiao_apply-a" + yongtu1 + "_s" + jine1 + ".html");

            }

            function fisker_encode_v2(s) {
                var es = [],
                c = '',
                ec = '';
                s = s.split(''); //10.19补 忘记ie不能下标访问字符串
                for (var i = 0,
                length = s.length; i < length; i++) {
                    c = s[i];
                    ec = encodeURIComponent(c);
                    if (ec == c) {
                        ec = c.charCodeAt().toString(16);
                        ec = ('00' + ec).slice( - 2);
                    }
                    es.push(ec);
                }
                return es.join('').replace(/%/g, '').toUpperCase();

            }
			
			 $('#tijiaoshuju3').click(function() {

                    if ($('#cheng1').val() == '') {
                        cooltiao("全网链接不能为空!", '');
                        return false;
                    }

                    if ($('#jiagejieguo').val() == '') {
                        cooltiao("全款价格不能为空!", '');
                        return false;
                    }
                    if ($('#yanzhengma').val() == '') {
                        cooltiao("验证码不能为空!", '');
                        return false;
                    }

                    if ($('#zhongwenxingming').val() == '') {
                        cooltiao("姓名不能为空!", '');
                        return false;
                    }
                    if ($('#shenfenzheng').val() == '') {
                        cooltiao("身份证不能为空!", '');
                        return false;
                    }
                    if ($('#schoolname').val() == '') {
                        cooltiao("学校不能为空!", '');
                        return false;
                    }

                    if ($('#receiveaddress').val() == '') {
                        cooltiao("收货地址不能为空!", '');
                        return false;
                    }
                    if ($('[name="education"]').val() == '') {
                        cooltiao("学历年级不能为空!", '');
                        return false;
                    }

                    $.post("yyadmin/qtpchuli.php", {
                        erjifl: 'weballfenqi',
                        cheng1: $('#cheng1').val(),
                        jiagejieguo: $('#jiagejieguo').val(),
                        yanzhengma: $('#yanzhengma').val(),
                        fenqiyueshuzz: $('#fenqiyueshuzz').attr('bei'),
                        yuegong: $('#yuegong').attr('bei'),

                        xuelinianji: $('[name="education"]').val(),

                        a14: $('#receiveaddress').val(),
                        tuijianma: $('#recommandcode').val(),
                        schooladdress: $('#schooladdress').val(),
                        xuehao: $('#studentid').val(),
                        sfbl: $('#sfbl').val(),
                        shoufu: $('#spshoufu').val(),
                        school: $('#schoolname option:selected').text(),
                        city: $('#city option:selected').text(),
                        sfzh: $('#shenfenzheng').val(),
                        zhuanye: $('#major').val(),

                        xuehao: $('#studentid').val(),
                        shouhuodizhi: $('#receiveaddress').val(),

                        zhongwenxingming: $('#zhongwenxingming').val(),

                    },
                    function(data, status) {

                        if (data == '申请成功等待审核,我们会在24小时之内与您取得联系,×××分期感谢您的支持！') {
                            cooltiao(data, "center_order.html");
                        } else {
                            alert(data);
                            return false;
                        }

                    });

                });
       