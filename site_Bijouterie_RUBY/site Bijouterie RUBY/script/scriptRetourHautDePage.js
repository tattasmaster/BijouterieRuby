$(document).ready(function(){
    var offset = 250;
    var duration = 500;

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('.haut-page').fadeIn(duration);
        }else{
            $('.haut-page').fadeOut(duration);
        }
    });

    $('.haut-page').click(function(){
        $('html, body').animate({scrollTop: 0}, duration);
    });

});