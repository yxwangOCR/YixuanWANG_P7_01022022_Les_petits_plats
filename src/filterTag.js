function filterTag() {
  const recipeCard = document.querySelectorAll(".recipeCard");
  const tags = document.querySelectorAll(".tag");

  /*
  const recipeNames = document.querySelectorAll(".recipe-name");
  console.log(recipeNames);

  const ingredients = document.querySelectorAll(".ingredients-list");
  console.log(ingredients);

  const descriptions = document.querySelectorAll(".description");
  console.log(descriptions);

*/

  const tagsStringValue = Array.from(tags).map((tag) => {
    console.log(tag);

    let tagString = tag.querySelectorAll(".tag-value")[0].innerHTML;
    console.log(tagString);
    return tagString;
  });
  console.log(tagsStringValue);

  /*
  if (recipeNames.value.includes(tagString)) {
    console.log("== coco ==");
  } 
  */

  const displayedCard = Array.from(recipeCard).filter((card) => {
    console.log(card);
    card.style.display !== "none";
  });

  const displayedCardArray = Array.from(recipeCard).filter(
    (card) => card.style.display !== "none"
  );
  console.log(displayedCardArray);

  const tagsValue = Array.from(tags).map(
    (tag) => tag.querySelectorAll(".tag-value")[0].innerHTML
  );
  console.log(tagsValue);
}

export default filterTag;
