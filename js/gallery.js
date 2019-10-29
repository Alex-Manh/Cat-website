
var slideShow = document.querySelectorAll("#content #show img");
var slide = 0;
var color=["red","green", "orange", "yellow", "blue","purple", "pink"];

function showSlide(){
    for(i=0; i<slideShow.length; i++){
        $(slideShow[i]).removeClass("display");
    }
    $(slideShow[slide]).addClass("display");
    var text = $(slideShow[slide]).attr("alt");
    $("#content header").html(text);
    var header_color = Math.floor(Math.random()*color.length);
    console.log(header_color);
    console.log(color[header_color]);
    $("#content header").css("background-color", color[header_color]);
}

function prev(){
    slide--;
    if(slide<0){
        slide=slideShow.length-1;
    }
}

function next(){
    slide++;
    if(slide>=slideShow.length){
        slide=0;
    }
}

$(document).ready(function() {
    showSlide();
    $("#content #selector #prev").click(function(){
        prev();
        showSlide();
        event.preventDefault();
    });

    $("#content #selector #next").click(function(){
        next();
        showSlide();
        event.preventDefault();
    });
});