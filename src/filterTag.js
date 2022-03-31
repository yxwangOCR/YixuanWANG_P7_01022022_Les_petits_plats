import { type, value } from "./displayTags";

let ingredientTags = [];
let appareilTags = [];
let ustensilTags = [];

function filterTag(value, type) {
  const recipeCard = document.querySelectorAll(".recipeCard");
  const tags = document.querySelectorAll(".tag");

  const recipeNames = document.querySelectorAll(".recipe-name");
  //console.log(recipeNames);

  const ingredients = document.querySelectorAll(".ingredients-list");
  //console.log(ingredients);

  const descriptions = document.querySelectorAll(".description");
  //console.log(descriptions);

  const tagsStringValue = Array.from(tags).map((tag) => {
    console.log(tag);

    let tagString = tag.querySelectorAll(".tag-value")[0].innerHTML;
    console.log(tagString);
    return tagString;
  });
  console.log(tagsStringValue);

  const tagsValue = Array.from(tags).map(
    (tag) => tag.querySelectorAll(".tag-value")[0].innerHTML
  );
  console.log(tagsValue);

  /** ========== Filter by type ========== */
  tags.forEach((tag) => {
    if (type === "ingredient") {
      console.log("This ingredient type");
      ingredientTags.push(tags);
    } else if (type === "appareils") {
      appareilTags.push(tags);
    } else if (type === "ustensils") {
      ustensilTags.push(tags);
    } else {
      console.log("TEST ForEach 1");
    }
  });

  /** ==========Filter by value ========= */
  tags.forEach((tag) => {
    if (recipeNames.includes(tagString)) {
      console.log("== coco ==");
    } else if (ingredients.includes(tagString)) {
      console.log("== lait ==");
    } else if (descriptions.includes(tagString)) {
      console.log("== eau ==");
    } else {
      console.log("TEST ForEach 2");
    }
  });

  /** ========== Display results ========= */
  const displayedCard = Array.from(recipeCard).filter((card) => {
    console.log(card);
    card.style.display !== "none";
  });

  const displayedCardArray = Array.from(recipeCard).filter(
    (card) => card.style.display !== "none"
  );
  console.log(displayedCardArray);
}

export default filterTag;
