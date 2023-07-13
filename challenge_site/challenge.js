$(function() {
    $(".menu-trigger").on("click",function(event){
        $(this).toggleClass("active");
        $(".nav-list").fadeToggle();
        event.preventDefault();
    });
});