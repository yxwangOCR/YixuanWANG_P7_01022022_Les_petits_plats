/*Reference for Keys : 
https://www.techiedelight.com/detect-enter-key-press-javascript/
*/

import createTags from "./createTags";
import filterTag from "./filterTag";


const searchInput = document.getElementById("searchbar-tag");
const tags = document.querySelector(".tags");

function displayTags(event) {
  if (event?.key && event.key === "Enter") {
    console.log("Input Enter Key");
    const tagValue = createTags(searchInput.value);
    tags.appendChild(tagValue);

    filterTag();
    
    searchInput.value = "";
  }
}
searchInput.addEventListener("keyup", displayTags);

export default displayTags;
