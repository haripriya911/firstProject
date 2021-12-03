var randomNumber1=Math.floor(Math.random()*6)+1; 
console.log("randomNumber1",randomNumber1);
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomImage;
console.log("randomImageSource",randomImageSource);
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
console.log("randomNumber2",randomNumber2);
var randomImageSource2="images/dice"+randomNumber2+".png";
console.log("randomImageSource2",randomImageSource2)
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
 if(randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML="player1 win";
     document.getElementsByClassName("dicep")[0].innerHTML="player1 win";
     
 }
 else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player2 win";
    document.getElementsByClassName("dicep")[0].innerHTML="player2 win";

 }
 else {
document.querySelector("h1").innerHTML="draw";
document.getElementsByClassName("dicep")[0].innerHTML="draw";
 }

