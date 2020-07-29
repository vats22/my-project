$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
 })
});

$(document).ready(function() {
    $("#btnshow").click(function(){
        $("#loginmodal").modal('show');
    });
    $("#loginmodalD").click(function(){
        $("#loginmodal").modal('hide');
    });
    $("#modalcancle").click(function(){
        $("#loginmodal").modal('hide');
    });
});           

$(document).ready(function(){
    $("#booktable").click(function(){
        $("#resevermodal").modal('show');
    });
    $("#canclemodal").click(function(){
        $("#resevermodal").modal('hide');
    });
    $("#modaldismiss").click(function(){
        $("#resevermodal").modal('hide');
    });
});