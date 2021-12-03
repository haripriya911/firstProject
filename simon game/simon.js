
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];

var userClickedPattern=[];
var level  = 0;
var started=false;
$(document).keypress(function(event){
  
    if(!started){
        $("h1").html("level "+level); 
        nextSequence( );
        started=true;
    }
    console.log("value",event.key)
  });


$(".btn").click(function(){
    if(started){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("userClickedPattern",userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    }});
function nextSequence(){
    level++;
    $("h1").html("level "+level ); 
   
    var randomNumber=Math.floor(Math.random()*4);
    //console.log("randomNumber",randomNumber)
    var randomChosenColors= buttonColors[randomNumber];
//console.log('randomChosenColors',randomChosenColors)
    gamePattern.push(randomChosenColors);
    console.log("gamePattern",gamePattern);
    $("#"+randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColors);
}
function playSound(name){
var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColor){
    $('#'+currentColor).addClass( "pressed");
    setTimeout(function() {
        $('#'+currentColor).removeClass( "pressed");
        //your code to be executed after 1 second
      }, 100);
}
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
      userClickedPattern=[];
    }, 1000);
  }

    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").html("Game Over, Press Any Key to Restart"); 
        startOver();
    }

}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}