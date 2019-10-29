$(document).ready(function() {
    $($(".title a:first-child").attr("href")).addClass("show-mode");
    $(".title li:first-child a").css("color", "#ffc34d");

    $(".title a").click(function(){
        $(".title a").css("color", "black");
        $(".text article").removeClass("show-mode");
        $($(this).attr("href")).addClass("show-mode");
        $(this).css("color", "#ffc34d");

        event.preventDefault();
    });
});


