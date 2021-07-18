(function ($) {
    "use strict"
    /*Contact agent box*/
    $('#contact_agent_action').on('click', function (e) {
        e.preventDefault();
        bootbox.dialog({
            title: "Contact Agent",
            message: '<div class="agent_boxes boxes clearfix">'+
                     '       <div class="agent_details clearfix">'+
                     '            <div class="col-lg-12 col-md-12 col-sm-12">'+
                     '                <div class="agents_widget">'+
                     '                    <h3 class="big_title">Mark ANTHONY<small>Total (36) pieces of property</small></h3>'+
                     '                    <div class="agencies_widget row">'+
                     '                        <div class="col-lg-5 clearfix">'+
                     '                            <img class="img-thumbnail img-responsive" src="img/demo/team_2.jpg" alt="">'+
                     '                        </div><!-- end col-lg-5 -->'+
                     '                        <div class="col-lg-7 clearfix">'+
                     '                            <div class="agent_meta clearfix">'+
                     '                                <span><i class="fa fa-envelope"></i> <a href="mailto:support@sitename.com">support@sitename.com</a></span>'+
                     '                                <span><i class="fa fa-link"></i> <a href="#">www.sitename.com</a></span>'+
                     '                                <span><i class="fa fa-phone-square"></i> +1 232 444 55 66</span>'+
                     '                                <span><i class="fa fa-print"></i> +1 232 444 55 66</span>'+
                     '                                <span><i class="fa fa-facebook-square"></i> <a href="#">facebook.com/tagline</a></span>'+
                     '                                <span><i class="fa fa-twitter-square"></i> <a href="#">twitter.com/tagline</a></span>'+
                     '                                <span><i class="fa fa-linkedin-square"></i> <a href="#">linkedin.com/tagline</a></span>'+
                     '                            </div><!-- end agencies_meta -->'+
                     '                        </div><!-- end col-lg-7 -->'+
                     '                        <div class="clearfix"></div>'+
                     '                        <hr>'+
                     '                        <div class="col-lg-12">'+
                     '                            <p>'+
                     '                                With a handful of model sentence structures, to generate Lorem Ipsum '+
                     '                                which looks reasonable. The generated Lorem Ipsum is therefore always free.'+
                     '                            </p>'+
                     '                       </div>'+
                      '                   </div><!-- end agencies_widget -->'+
                      '               </div><!-- agents_widget -->'+
                      '           </div><!-- end col-lg-7 -->'+

                      '           <div class="col-lg-12 col-md-12 col-sm-12">'+
                        '             <h3 class="big_title"><small>Have a Question? Ask this Agent</small></h3>'+
                        '             <form action="#" id="agent_form">'+
                        '                 <input type="text" class="form-control" placeholder="Name">'+
                        '                 <input type="text" class="form-control" placeholder="Email">'+
                        '                 <input type="text" class="form-control" placeholder="Phone">'+
                         '                <input type="text" class="form-control" placeholder="Subject">'+
                        '                 <textarea class="form-control" rows="5" placeholder="Message goes here..."></textarea>'+
                 
                        '             </form><!-- end search form -->'+
                        '         </div><!-- end col-lg-6 -->'+
                        '     </div><!-- end agent_details -->'+
                        ' </div><!-- end agent_boxes -->',
            buttons: {
                success: {
                    label: "Send Message",
                    className: "btn btn-lg btn-asad",
                    callback: function () {                        
                        bootbox.alert("Thank you!");
                    }
                }
            }
        }
        );
    });
    
    
    /*Report abuse box*/
    $('#report_abuse_action').on('click', function (e) {
        e.preventDefault();
        bootbox.dialog({
            title: " Report Abuse",
            message: '<div class="agent_boxes boxes clearfix">'+
                     '       <div class="agent_details clearfix">'+   
                      '           <div class="col-lg-12 col-md-12 col-sm-12">'+
                        '             <form action="#" id="agent_form">'+
                        '                 <input type="text" class="form-control" placeholder="Name">'+
                        '                 <input type="text" class="form-control" placeholder="Email">'+
                        '                 <input type="text" class="form-control" placeholder="Phone">'+
                         '                <input type="text" class="form-control" placeholder="Subject">'+
                        '                 <textarea class="form-control" rows="5" placeholder="Message goes here..."></textarea>'+
                        '             </form><!-- end search form -->'+
                        '         </div><!-- end col-lg-6 -->'+
                        '     </div><!-- end agent_details -->'+
                        ' </div><!-- end agent_boxes -->',
            buttons: {
                success: {
                    label: "Report ",
                    className: "btn btn-lg btn-asad",
                    callback: function () {
                        bootbox.alert("Succefully reported !");
                    }
                }
            }
        }
        );
    });
    
    /*add to compare  box*/
    $('#add_to_compare_list_action').on('click', function (e) {
        e.preventDefault();
        bootbox.alert("Succefully added to compare list !");
    });
    /*add  Add to favorites box*/
    $('#add_to_favorites').on('click', function (e) {
        e.preventDefault();
        bootbox.alert("Succefully added to your favorites !");
    });
    
})(jQuery);