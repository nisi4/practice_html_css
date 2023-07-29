const swiper = new Swiper ('.swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

$(function(){
    $('#btn a').on('click',function(event){
        $('body,html').animate({
            scrollTop:0
        },800);
        event.preventDefault();
    });
});