var stage=0;
var progress = 0;
var max_progress = parseInt($("#content #progress").css("width"));

function progress_display(){
    var bar = progress*max_progress/100;
    if(bar<=max_progress){
        $("#content #progress #bar").css("width", bar);
    }else{
        $("#content #progress #bar").css("width", max_progress);
    }

    if(progress<=25){
        $("#content #progress #bar").css("background-color", "yellow");
        $("#content #progress #bar").html("<h3>Level: <br> Novice");
    }
    else if(progress<=50){
        $("#content #progress #bar").css("background-color", "blue");
        $("#content #progress #bar").html("<h3>Level: <br> Intermediate");
    }
    else if(progress<=75){
        $("#content #progress #bar").css("background-color", "purple");
        $("#content #progress #bar").html("<h3>Level: <br> Advanced");

    }
    else if(progress<100){
        $("#content #progress #bar").css("background-color", "green");
        $("#content #progress #bar").html("<h3>Level: <br> Master");
    }else{
        $("#content #progress #bar").html("<h3>Legendary: <br> Cat Guru");
    }
}

$(document).ready(function() {
    $("#content #progress #bar").html("<h3>Level: <br> Newbie");

    $("#continue").click(function(){
        if(stage==0){
            stage++;
            progress+=4;
            progress_display();
            $("#progress").css("opacity", 0.85);
            $("#text").html("What is your name? <br>");
            $("#text").append('<input type="text" id="user-name" name="mytext[]"/>');
        }
        else if(stage==1){
            stage++;
            progress+=4;
            progress_display();
            username = $("#text #user-name").val();
            username = username.charAt(0).toUpperCase() + username.slice(1);
            sessionStorage.setItem("username", username);
            $("#text").html("What would you like to name your cat, " + sessionStorage.username + "?<br>");
            $("#text").append('<input type="text" id="pet-name" name="mytext[]"/>');
        }
        else if(stage==2){
            stage++;
            progress+=4;
            progress_display();
            petname = $("#text #pet-name").val();
            petname = petname.charAt(0).toUpperCase() + petname.slice(1);
            sessionStorage.setItem("petname", petname);
            $("#text").html(sessionStorage.username +", you can start your adventure with "+sessionStorage.petname+" by going through rooms below");
            $("#content #room").addClass("display");
        }
        else if(stage==3){
            stage++;
            progress+=4;
            progress_display();
            $("#text").html("Collect all the notes to become the Cat Guru!");
            $(this).css("display", "none");
        }
        event.preventDefault();
    });

    $("#content #room-popup .close-button a").click(function(event){
        $("body").toggleClass("popup");
        $("#content #room-popup #text article.show-note").toggleClass("show-note");
        
        event.preventDefault();
    });

    $("#content #room div img").click(function(event){
        note($(this).next(".note"));
        event.preventDefault();
    });
});

function note(element) {
    $(element).next(".note-text").addClass("show");
    event.preventDefault();
}

function popup(element){
    $("body").toggleClass("popup");
    $($(element).attr("href")).toggleClass("show-note"); 
    progress+=11;
    progress_display();   
}

