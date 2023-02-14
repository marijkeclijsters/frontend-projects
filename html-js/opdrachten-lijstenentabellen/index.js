// const title = document.createElement("h1"); // "h1" kan eender welk element zijn -> <h1></h1> wordt aangemaakt
// title.innerText = "Hallo" // zet de tekst in het h1 element -> <h1>Hallo</h1>

// const body = document.querySelector('body'); // body kan eender welk element zijn
// body.appendChild(title); // voeg het aangemaakte element toe aan de body

// const headElement = document.querySelector('head');
const body = document.querySelector('body');

const h1Element = document.createElement('h1');
h1Element.innerText = "Lievelingsdieren";
body.appendChild(h1Element);

const olElement = document.createElement('ol');
body.appendChild(olElement);


const lievelingsdieren =  ["kat", "hond", "papegaai"]
for (let i = 0; i < 3; i++ ){
    const liElement = document.createElement('li');
    liElement.innerText = lievelingsdieren[i];
    olElement.appendChild(liElement);
};

//opdracht 2
const h1ElementRecept = document.createElement('h1');
h1ElementRecept.innerText = "Recepten";
body.appendChild(h1ElementRecept);

const h2ElementNaamRecept1 = document.createElement('h2');
h2ElementNaamRecept1.innerText = "Stoofvlees met frieten";
body.appendChild(h2ElementNaamRecept1);

