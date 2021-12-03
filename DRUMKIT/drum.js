
var numOfDrumbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<numOfDrumbutton;i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonOfInnerHTML= this.innerHTML;
    
    makeSound("buttonOfInnerHTML");

    buttonAnimation(buttonOfInnerHTML);
    
        

});
}


document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
        var crash =new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/0.mp3");
crash .play();
break;
case "a":
        var kick =new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/1.mp3");
kick.play();
break;
case "s":
        var snare=new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/2.mp3");
snare.play();
break;
case "d":
        var tom1 =new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/4.mp3");
tom1.play();
break;
case "j":
        var tom2 =new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/5.mp3");
tom2.play();
break;
case "k":
        var tom3 =new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/6.mp3");
tom3.play();
break;
case "l":
        var tom4 =new Audio("C:/Users/mohan/Desktop/testing/DRUMKIT/sounds/7.mp3");
tom4.play();
break;

    }
    
}

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
activeButton.classList.remove("pressed");
        },100);

}


















