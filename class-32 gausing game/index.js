// select all elements
const input = document.querySelector("#input");
const form = document.querySelector("form");
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");
const remainingAttemps = document.querySelector("#remaining");
const showResult = document.querySelector("#show-result");

var won=0;
var loss=0
var attemp=5


form.addEventListener("submit", function (event) {
    event.preventDefault();
    //generate random number betoween 1 - 5
    const randomNumber = Math.floor(1 + Math.random() * 5)
    // get user value
    const userInput=input.value;
    attemp--;
    remainingAttemps.innerHTML="Remaining attemps " + attemp + " times";
        if(userInput==randomNumber){
            won++
            message.innerHTML="You have won, random number was: " + randomNumber;
        }else{
            loss++
            message.innerHTML="You have loss, random number was: " + randomNumber; 
        }
        showResult.innerHTML=`Won:${won} , Lost: ${loss}`;

        if(attemp==0){
              btn.disabled=true;
              input.disabled=true;
        }
        input.value=""

});