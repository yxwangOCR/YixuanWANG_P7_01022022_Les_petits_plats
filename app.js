import createRecipes from "./src/createRecipes";
import createDropdowns from "./src/createDropdowns";
import displayDropdown from "./src/displayDropdown";
import { onSearch } from "./src/algo_1";
import { inSearch } from "./src/algo_2";
import recipes from "./src/data";

createRecipes(recipes);
createDropdowns();
displayDropdown();

const searchBar = document.getElementById("searchbar");
//Algo_1:
searchBar.addEventListener("keyup", onSearch);

//Algo_2:
//searchBar.addEventListener("keyup", inSearch);
