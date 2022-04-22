//import recipes from "./data";

export const inSearch = () => {
  const searchText = document.getElementById("searchbar").value.toUpperCase(); // convert to uppercase
  const recipeCard = document.querySelectorAll(".recipeCard");

  for (let i = 0; i < recipeCard.length; i++) {
    let isName = recipeCard[i].querySelectorAll(".recipe-name")[0];
    let nameValue = isName.innerText;

    let isDescription = recipeCard[i].querySelectorAll(".description")[0];
    let descriptionValue = isDescription.innerText;

    let isIngredient = recipeCard[i].querySelectorAll(
      ".ingredients-quantity span"
    )[0];
    let ingredientValue = isIngredient.innerText;

    if (nameValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else if (descriptionValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else if (ingredientValue.toUpperCase().indexOf(searchText) > -1) {
      recipeCard[i].style.display = "";
    } else {
      recipeCard[i].style.display = "none";
    }
  }
};

/*
reference:
1. What is the Difference Between textContents, innerText, and innerHtml? : 
https://www.microfocus.com/documentation/silk-test/200/en/silktestworkbench-help-en/SILKTEST-21EEFF3F-DIFFERENCEBETWEENTEXTCONTENTSINNERTEXTINNERHTML-REF.html
innerText returns all text contained by an element and all its child elements.

2. indexOf: 
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

*/
