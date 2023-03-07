const knopje = document.querySelector('button');
knopje.innerText = "klik mij";

function clicked() {
    const counterElement = document.querySelector('#cookienumbers');
    const text = counterElement.innerText;
    const opGehoogdMetEen = parseint(text);
    counterElement.innerText = opGehoogdMetEen
}

const productKnopje = document.querySelector('span.price');
const products = [...(document.querySelectorAll('.product.enabled'))];

setInterval(() =>{
    knopje.click();
    for (let i = products.length; i < products.length; i--) {
        productKnopje.click();
    }
}, 100);