import { recipes } from './data'


const cards = document.getElementById('cards')
const imageHolder = document.createElement("div");
const card = document.createElement("div");
const cardName = document.createElement("h3");
const ingredients = document.createElement("div");
const clock = document.createElement("span");
const time = document.createElement("div");
const description = document.createElement("p");




function displayRecipes() {
  console.log('recipes')
  console.log(recipes)

  recipes.forEach((recipe) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.innerText = recipe.name
    cards.appendChild(cardWrapper)

    /*
    const cardText = document.createElement("div");
    cardWrapper.className = "cards";
    cardText.className = "card-body";

    imageHolder.className = "card-img-top";
    card.className = "card";

    cardName.className = "name";
    ingredients.className = "ingredients";
    clock.className = "clock";
    time.className = "time";
    description.className = "description";

    card.innerHTML = ` 
      <div class="card" style="width: 18rem;">
        <div class="card-img-top">
        <div class="card-body">
          <h3 class="name></h3>
          <div class="ingredients"></div>
          <span class="clock"></span>
          <div class="time"></div>
          <p class="description"></p>
        </div>
      </div>`;

    cardName.textContent = `${recipe.name}`;
    ingredients.innerHTML = `${recipe.ingredients}`;
    clock.innerHTML = `<i class="far fa - clock"></i>`;
    time.innerHTML = `${recipe.time}`;
    description.innerHTML = `${recipe.description}`;

    cardWrapper.appendChild(imageHolder);
    cardWrapper.appendChild(card);
    card.appendChild(cardText);*/
  });
}

export default displayRecipes
