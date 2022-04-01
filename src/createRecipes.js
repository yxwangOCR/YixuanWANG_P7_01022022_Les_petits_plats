import recipes from "./data";
const cards = document.getElementById("cards");

function createRecipes() {
  recipes.forEach((recipe) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.id = recipe.id
    const ingredientsWrapper = document.createElement("div");
    const ingredients = recipe.ingredients;
    ingredients.forEach((ingredient) => {
      const ingredientContent = document.createElement("div");
      ingredientContent.classList.add("ingredients");
      ingredientContent.innerHTML = `<div class="ingredients-quantity">
      <span>${ingredient.ingredient}:</span> ${ingredient?.quantity || ""} ${
        ingredient?.unit || ""
      }</div>`;
      ingredientsWrapper.classList.add("ingredients-list");
      ingredientsWrapper.appendChild(ingredientContent);
    });

    cardWrapper.classList.add("recipeCard");
    cardWrapper.innerHTML = `<div class="card">
                        <span class="image-placeholder"></span>
                        <div class="card-body">
                            <div class="card-head">
                                <div class="recipe-name">${recipe.name}</div>
                                <div class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
                                ${recipe.time} mins</div>
                            </div>
                            <div class="preparation">${ingredientsWrapper.outerHTML}
                              <p class="description">${recipe.description}</p>
                            </div>
                        </div>
                    </div>`;
    cards.appendChild(cardWrapper);
  });
}

export default createRecipes;
