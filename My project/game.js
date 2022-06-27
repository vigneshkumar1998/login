var answer = Math.floor(XMath.random()*100)+ 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var msg1 = document.getElementById(elementid,"message1");
    var msg2 = document.getElementById(elementid, "message2");
    var msg3 = document.getElementById(elementid, "message3"); 

    var user_guess = document.getElementById( elementid,"guess").value
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter the number between 1 to 100.");
    } 
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+=1;
        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No of guesses: "+ no_of_guesses;
            msg3.textContent = "Guessed number are: "+guessed_nums;

        }
    else if(user_guess > answer){
        msg1.textContent = "Your guess is too high.";
        msg2.textContent = "No of guesses: "+ no_of_guesses;
        msg3.textContent = "Guessed number are: "+guessed_nums;


    }    
    else if(user_guess = answer){
        msg1.textContent = "You win!";
        msg2.textContent = "Correct number is: "+ answer;
        msg3.textContent = " You Guessed number in: "+no_of_guesses +"guessed";

    }
    

}

}
