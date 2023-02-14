// const title = document.createElement("h1"); // "h1" kan eender welk element zijn -> <h1></h1> wordt aangemaakt
// title.innerText = "Hallo" // zet de tekst in het h1 element -> <h1>Hallo</h1>

// const body = document.querySelector('body'); // body kan eender welk element zijn
// body.appendChild(title); // voeg het aangemaakte element toe aan de body

const title = document.createElement("h1");
title.innerText= "Neefjes van Donald Duck";
const body = document.querySelector('body');
body.appendChild(title);

const lijst = document.createElement("ul");
body.appendChild(lijst);

const item1 = document.createElement("li");
item1.innerText = "Kwik";
lijst.appendChild(item1);

const item2 = document.createElement("li");
item2.innerText = "Kwek";
lijst.appendChild(item2);

const item3 = document.createElement("li");
item3.innerText = "Kwak";
lijst.appendChild(item3);