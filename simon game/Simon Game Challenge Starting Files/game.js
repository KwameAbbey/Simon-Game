var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green","yellow"];

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
})

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed")

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColour)
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()

}