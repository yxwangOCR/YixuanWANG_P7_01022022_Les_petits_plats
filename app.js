import displayRecipes from "./src/recipes";
import { onSearch } from "./src/sort_1";
import { inSearch } from "./src/sort_2";

displayRecipes();

const searchBar = document.getElementById("searchbar");
//Sort_1:
//searchBar.addEventListener("keyup", onSearch);

//Sort_2:
searchBar.addEventListener("keyup", inSearch);
