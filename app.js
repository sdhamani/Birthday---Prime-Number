const moment = require('moment');

var input = document.querySelector('#input')

var button = document.querySelector('#checkBtn');


function checkYear() {
    moment(input.value).isValid();
    console.log(input.value)
}


button.addEventListener('click', checkYear)