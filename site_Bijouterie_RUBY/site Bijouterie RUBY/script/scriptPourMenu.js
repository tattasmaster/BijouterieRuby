$(document).ready(function(){
    $('a[href="#"]').on('click', function(){

        var target = this.hash;

        var $target = $(target);

        $('html, body').animate({
            'scrollTop':$target.offset().top
        }, 2000, swing);
        
    });
});