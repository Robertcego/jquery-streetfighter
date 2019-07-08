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
            playHadouken(); // Play hadouken sound
            $(".ryu-ready").hide();
            $(".ryu-throwing").show();
            $(".hadouken").finish().show().animate (
                {"left": "1020px"},
                500,
                function() {
                    $(".hadouken").hide();
                    $(".hadouken").css("left","625px")
                }
                );
            // show hadouken and the animation to the right
        })
        .mouseup(function(){
            $(".ryu-throwing").hide();
            $(".ryu-ready").show();
            // ryu goes back to the ready position
        });
        function playHadouken() {
            $("#hadouken-sound")[0].volume = 0.5;
            $("#hadouken-sound")[0].load();
            $("#hadouken-sound")[0].play();
        }
    }); /* Last line of the script code */