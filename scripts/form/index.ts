import { first } from "lodash";

const form = document.querySelectorAll('form')[0];
const firstname = document.querySelector('#firstname') as HTMLInputElement;
const age = document.querySelector('#age') as HTMLInputElement;

function giftAge(age:number) {
  return age + 3;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (+age.value < 18) {
    console.log('not ok');
  } else {
    console.log(`Bienvenue ${firstname.value}`);
    console.log(`Vous aurez un cadeau a ${giftAge(+age.value)} ans`);
  }
});