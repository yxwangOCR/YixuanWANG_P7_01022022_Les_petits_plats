/*Reference for Keys : 
https://www.techiedelight.com/detect-enter-key-press-javascript/
*/

import createTags from "./createTags";

const searchInput = document.getElementById("searchbar");
const tags = document.querySelector(".tags");

function displayTags(event) {
  console.log("Press Keys");
  if (event.key === "Enter") {
    console.log("Input Enter Key");
    const tagValue = createTags(searchInput.value);
    tags.appendChild(tagValue);
    searchInput.value = "";
  }
}
searchInput.addEventListener("keyup", displayTags);

export default displayTags;
