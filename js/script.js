$(document).ready(function () {
    $('.check__btn').click(function(){
        $(this).toggleClass('active')
        $('.menu').toggleClass('nav-active')
        if($('.menu').hasClass('nav-active')){
            $('body').addClass('no-scroll')
        }else {
            $('body').removeClass('no-scroll')
        }
    })
})