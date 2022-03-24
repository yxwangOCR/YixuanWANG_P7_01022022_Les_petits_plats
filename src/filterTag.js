

function filterTag() {
  const recipeCard = document.querySelectorAll(".recipeCard");
  const tags = document.querySelectorAll(".tag");
  const displayedCard = Array.from(recipeCard).filter(
    (card) => card.style.display !== "none"
  );
  const tagsValue = Array.from(tags).map(
    (tag) => tag.querySelectorAll(".tag-value")[0].innerHTML
  );

  console.log(displayedCard);
  console.log(tagsValue);
 
}

export default filterTag;
