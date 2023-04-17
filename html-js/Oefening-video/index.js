const doeActie = () => {
    const ulElement = document.querySelector("#lijst");

    const newLiElement = document.createElement("li");
    newLiElement.textContent = "vier";
    newLiElement.classList.add("list-item");

    ulElement.appendChild(newLiElement);
    console.log(newLiElement);

    const firstElement = ulElement.querySelector("li");
    firstElement.remove();
  };