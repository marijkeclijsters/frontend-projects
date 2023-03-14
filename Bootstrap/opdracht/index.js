const body = document.querySelector('body');


const element = document.getElementById('inhoud');
const divElement = document.createElement('div');
element.appendChild(divElement);
divElement.classList.add('lijstje');


const brElement = document.createElement('br');

const h2Element = document.createElement("h2");
h2Element.innerText = 'Lijstje';
h2Element.classList.add("text-bg-primary", "p-3");

const lijst = document.querySelector('.lijstje');
lijst.appendChild(brElement);
lijst.appendChild(h2Element);

const ulElement = document.createElement('ul');
ulElement.classList.add('list-group');
lijst.appendChild(ulElement);

for (let i = 0; i < 4; i++) {
    const liElement = document.createElement('li');
    liElement.innerHTML = 'element ' + (i + 1);
    liElement.classList.add("list-group-item");
    if (i === 0){
        liElement.classList.add("active");
    }
    ulElement.appendChild(liElement); 
}
