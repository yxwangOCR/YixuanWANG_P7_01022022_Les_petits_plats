/*Reference for Keys : 
https://www.techiedelight.com/detect-enter-key-press-javascript/
*/

import createTags from "./createTags";
import filterTag from "./filterTag";


const tags = document.querySelector(".tags");

function displayTags(event) {
    const type = event.target.dataType;
    const value = event.target.innerHTML;
    const tagValue = createTags(value, type);
    tags.appendChild(tagValue);

    filterTag();
}

export default displayTags;
