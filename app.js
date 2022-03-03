import displayRecipes from "./src/recipes";
import { onSearch } from "./src/sort_simple";


displayRecipes()


const searchBar = document.getElementById("searchbar");
searchBar.addEventListener("keyup", onSearch);


