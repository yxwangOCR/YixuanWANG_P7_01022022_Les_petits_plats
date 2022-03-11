import displayRecipes from "./src/recipes";
import { onSearch } from "./src/sort_1";
import { inSearch } from "./src/sort_2";

displayRecipes();

const searchBar = document.getElementById("searchbar");
searchBar.addEventListener("keyup", onSearch);
//searchBar.addEventListener("keyup", inSearch);
