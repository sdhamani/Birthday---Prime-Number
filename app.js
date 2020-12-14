// import moment from 'src/moment.js';

// // var moment = require('moment');

var input = document.querySelector('#input')


var button = document.querySelector('#checkBtn');

var displayMsg = document.querySelector('#message');

displayMsg.dis

var isPrime = true;



function checkYear() {
    var array = (input.value).split("-");
    var birthDay = array[2];

    console.log(birthDay)

    if (birthDay == 1){
        displayMsg = "1 is neither prime nor composite number";

    }

    else if(birthDay > 1){

        for (var i=2 ; i < birthDay ; i++){
            if(birthDay % i == 0){
                displayMsg = "Your BirthDay is not a prime number";
                isPrime = false;
                break;
            }
        }
        if(isPrime){
        displayMsg = "Your BirthDay is a prime number"}

    }

    else{
        displayMsg = "Your BirthDay is not a prime number";
    }
    console.log(displayMsg)

    
    document.getElementById('message').innerHTML  = displayMsg
    
}

button.addEventListener('click', checkYear)