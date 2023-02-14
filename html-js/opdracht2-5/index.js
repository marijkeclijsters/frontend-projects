// const title = document.createElement("h1"); // "h1" kan eender welk element zijn -> <h1></h1> wordt aangemaakt
// title.innerText = "Hallo" // zet de tekst in het h1 element -> <h1>Hallo</h1>

// const body = document.querySelector('body'); // body kan eender welk element zijn
// body.appendChild(title); // voeg het aangemaakte element toe aan de body

// const headElement = document.querySelector('head');
const title = document.querySelector('title');
title.innerText = "Marijke Clijsters";

const h1Element = document.createElement("h1");
h1Element.innerText = 'Marijke Clijsters';
const body = document.querySelector('body');
body.appendChild(h1Element);

const pElement = document.createElement("p");
pElement.innerText = "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.";
body.appendChild(pElement);

const imgElement = document.createElement("img");
imgElement.src = "./orchidee.jpg";
body.appendChild(imgElement);

body.appendChild(document.createElement('br'));
const aElement1 = document.createElement('a');
aElement1.href= ("https://www.bree.be/");
aElement1.innerText= "Bree";

const aElement2 = document.createElement('a');
aElement2.href= ("https://www.oudsbergen.be/");
aElement2.innerText= "Oudsbergen";

const aElement3 = document.createElement('a');
aElement3.href= ("https://www.orshof.be/");
aElement3.innerText= "Orshof";

body.appendChild(aElement1);
body.appendChild(document.createElement('br'));
body.appendChild(aElement2);
body.appendChild(document.createElement('br'));
body.appendChild(aElement3);
body.appendChild(document.createElement('br'));



