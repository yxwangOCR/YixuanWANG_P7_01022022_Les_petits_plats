/*
import createTags from "./src/createTags";
import displayTags from "./src/displayTags";
import closeTags from "./src/closeTag";
*/

import displayRecipes from "./src/recipes";
import { onSearch } from "./src/sort_1";
import { inSearch } from "./src/sort_2";
import showDropdown from "./src/subSearch";

displayRecipes();
showDropdown();

const searchBar = document.getElementById("searchbar");
//Sort_1:
//searchBar.addEventListener("keyup", onSearch);

//Sort_2:
searchBar.addEventListener("keyup", inSearch);
