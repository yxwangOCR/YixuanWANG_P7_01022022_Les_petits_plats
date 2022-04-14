/*Reference for Keys : 
https://www.techiedelight.com/detect-enter-key-press-javascript/
*/

import createTags from "./createTags";
import filterTag from "./filterTag";
import reset from "./createTags";

const tags = document.querySelector(".tags");

function displayTags(e) {
  const type = e.target.dataType;
  //console.log(type);

  const value = e.target.innerHTML;
  //console.log(value);

  const tagValue = createTags(value, type);
  //console.log(tagValue);

  tags.appendChild(tagValue);
  //console.log(tags);

  filterTag();
  //reset();
}

export default displayTags;
