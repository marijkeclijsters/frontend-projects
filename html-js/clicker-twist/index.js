const countEl = document.querySelector("#count");
const countElUpgrade = document.querySelector("#upgrade");
let number = 0;
let upgradeCounter = 0;
const button1 = document.querySelector('#button1');

const button2 = document.querySelector('#button2');
button2.disabled= true;

const button3 = document.querySelector("#button3");

if (number < 10) {
  button3.disabled = true;
} else  {
  button3.disabled = false;
}


function plusOne() {
  number++;
  countEl.textContent = number;
  if (number === 10) {
    document.querySelector("#button1").disabled = true;
    button2.disabled = false;
    button3.disabled = false;
  }
}

function plusTwo() {
  number = number + 2;
  countEl.textContent = number;
  button2.disabled = true;
  button1.disabled = false;
  countEl.textContent = number;
}



function upgrade() {
  if (number >= 10) {
    number = number - 10;
    upgradeCounter++;
    countElUpgrade.textContent = upgradeCounter;
  }

  if (number < 10) {
    button3.disabled = true;
     countEl.textContent = number;
  }
}


// setInterval(() =>{
//   plusOne();
//   plusTwo();
//   upgrade();
      

//  }, 3000);
