/*Reference for Keys : 
https://www.techiedelight.com/detect-enter-key-press-javascript/
*/

const searchInput = document.getElementById("searchbar");
const tags = document.querySelector(".tags");

function displayTags(event) {
  console.log("Display Tags");
  if (event.key === "Enter") {
    console.log("Key Input");
    const tagValue = createTags(searchBar.value);
    tags.appendChild(tagValue);
  }
}
searchInput.addEventListener("keyup", displayTags);

export default displayTags;
