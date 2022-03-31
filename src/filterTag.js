import displayTags from "./displayTags";

function filterTag() {
  const recipeCard = document.querySelectorAll(".recipeCard");
  const tags = document.querySelectorAll(".tag");

  const displayedCard = Array.from(recipeCard).filter(
    (card) => card.style.display !== "none"
  );

  const tagsStringValue = Array.from(tags).map((tag) => {
    let tagString = tag.querySelectorAll(".tag-value")[0].innerHTML;
    console.log(tagString);
  });
  console.log(tagsStringValue);

  const tagsValue = Array.from(tags).map(
    (tag) => tag.querySelectorAll(".tag-value")[0].innerHTML
  );

  console.log(tagsValue);
  console.log(displayedCard);
}

export default filterTag;
