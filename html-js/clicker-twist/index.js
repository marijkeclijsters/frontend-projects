const countEl = document.querySelector("#count");
const countEl2 = document.querySelector("#count2");
let number = 0;
const button1 = document.querySelector('#button1');

const button2 = document.querySelector('#button2');
button2.disabled= true;

function plusOne() {
  number++;
  countEl.textContent = number;

  if (number === 10) {
    document.querySelector("#button1").disabled = true;
    button2.disabled = false;
  }
}

function plusTwo() {
  number = number + 2;
  countEl.textContent = number;
  button2.disabled = true;
  button1.disabled = false;
}