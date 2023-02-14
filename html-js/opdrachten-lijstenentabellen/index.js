// const title = document.createElement("h1"); // "h1" kan eender welk element zijn -> <h1></h1> wordt aangemaakt
// title.innerText = "Hallo" // zet de tekst in het h1 element -> <h1>Hallo</h1>

// const body = document.querySelector('body'); // body kan eender welk element zijn
// body.appendChild(title); // voeg het aangemaakte element toe aan de body

// const headElement = document.querySelector('head');
const body = document.querySelector('body');

const h1Element = document.createElement('h1');
h1Element.innerText = "Lievelingsdieren";
body.appendChild(h1Element);

const ulElement = document.createElement('ul');
body.appendChild(ulElement);


const lievelingsdieren =  ["kat", "hond", "papegaai"]
for (let i = 0; i < 3; i++ ){
    const liElement = document.createElement('li');
    liElement.innerText = lievelingsdieren[i];
    ulElement.appendChild(liElement);
};

//opdracht 2
const h1ElementRecept = document.createElement('h1');
h1ElementRecept.innerText = "Recepten";
body.appendChild(h1ElementRecept);

const h2ElementNaamRecept  = document.createElement('h2');
h2ElementNaamRecept.innerText = "Stoofvlees met frieten";
body.appendChild(h2ElementNaamRecept);

const imgElement1 = document.createElement('img');
body.appendChild(imgElement1);
imgElement1.src = "./stoofvlees-dat-uit-elkaar-valt.jpg";
body.appendChild(imgElement1);

const h3ElementIngredientRecept = document.createElement('h3');
h3ElementIngredientRecept.innerText = "Ingrediënten";
body.appendChild(h3ElementIngredientRecept);



const h3ElementBereidingRecept = document.createElement('h3');
h3ElementBereidingRecept.innerText = "Bereiding";
body.appendChild(h3ElementBereidingRecept);

