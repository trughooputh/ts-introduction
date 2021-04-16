"use strict";
exports.__esModule = true;
var form = document.querySelectorAll('form')[0];
var firstname = document.querySelector('#firstname');
var age = document.querySelector('#age');
function giftAge(age) {
    return age + 3;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('not ok');
    }
    else {
        console.log("Bienvenue " + firstname.value);
        console.log("Vous aurez un cadeau a " + giftAge(+age.value) + " ans");
    }
});
