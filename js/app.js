    $(document).ready(function () {
        $('.ryu').mouseenter(function () {
            $(".ryu-still").hide();
            $(".ryu-ready").show();
        })
        .mouseleave(function() {
           $(".ryu-ready").hide();
           $(".ryu-still").show();
        })
        .mousedown(function(){
            // Play hadouken sound
            $(".ryu-ready").hide();
            $(".ryu-throwing").show();
            $(".hadouken").show();
            // show hadouken and the animation to the right
        })
        .mouseup(function(){
            $(".ryu-throwing").hide();
            $(".ryu-ready").show();
            // ryu goes back to the ready position
        });
    }); /* Last line of the script code */