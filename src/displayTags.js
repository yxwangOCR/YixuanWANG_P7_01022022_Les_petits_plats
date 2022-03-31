/*Reference for Keys : 
https://www.techiedelight.com/detect-enter-key-press-javascript/
*/

import createTags from "./createTags";
import filterTag from "./filterTag";

const tags = document.querySelector(".tags");

function displayTags(event) {
  const type = event.target.dataType;
  //console.log(type);

  const value = event.target.innerHTML;
  //console.log(value);

  const tagValue = createTags(value, type);
  //console.log(tagValue);

  tags.appendChild(tagValue);
  //console.log(tags);

  filterTag();
}

export default displayTags;
