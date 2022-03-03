import recipes from "./data";
const cards = document.getElementById("cards");

function displayRecipes() {
  recipes.forEach((recipe) => {
    const cardWrapper = document.createElement("div");
    const ingredientsWrapper = document.createElement("div");
    const ingredients = recipe.ingredients;
    ingredients.forEach((ingredient) => {
      const ingredientContent = document.createElement("div");
      ingredientContent.classList.add("ingredients");
      ingredientContent.innerHTML = `<div class="ingredients-quantity"><span>${
        ingredient.ingredient
      }:</span> ${ingredient?.quantity || ''} ${ingredient?.unit || ""}</div>`;

      ingredientsWrapper.appendChild(ingredientContent);
    });

    cardWrapper.classList.add("recipeCard");
    cardWrapper.innerHTML = `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="..." alt="Card image cap">
                            <div class="card-body">
                                <div class="recipe-name">${recipe.name}</div>
                                <div class="time">${recipe.time} min</div>
                            </div>
                            <div class="realisation">${ingredientsWrapper.outerHTML}
                                <p class="preparation">${recipe.description}</p>
                            </div>
                        </div>
                    </div>`;
    cards.appendChild(cardWrapper);
  });
}

export default displayRecipes;
