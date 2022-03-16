import displayRecipes from "./src/recipes";
import createTags from "./src/createTags";
import displayTags from "./src/displayTags";
import { onSearch } from "./src/sort_1";
import { inSearch } from "./src/sort_2";

displayRecipes();
createTags();
displayTags();

const searchBar = document.getElementById("searchbar");
//Sort_1:
//searchBar.addEventListener("keyup", onSearch);

//Sort_2:
//searchBar.addEventListener("keyup", inSearch);

//Tags:
//searchInput.addEventListener("keyup", displayTags);
