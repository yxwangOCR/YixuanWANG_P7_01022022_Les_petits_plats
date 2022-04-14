import filterTag from "./filterTag";
import autocomplete from "./autocompleteSearch";

const closeBtn = document.querySelector(".close-icon");
const tag = document.querySelector(".tag");

function createTags(label, type) {
  const tagWrapper = document.createElement("div");
  tagWrapper.setAttribute("class", "tag");
  tagWrapper.classList.add(`${type}`);
  tagWrapper.setAttribute("data-type", type);

  const inputText = document.createElement("span");
  inputText.setAttribute("class", "tag-value");
  inputText.innerHTML = label;

  const closeIcon = document.createElement("span");
  closeIcon.setAttribute("class", "close-icon");
  closeIcon.innerHTML = "&#215";

  tagWrapper.appendChild(inputText);
  tagWrapper.appendChild(closeIcon);

  closeIcon.addEventListener("click", closeTags);

  return tagWrapper;
}
export default createTags;

// Close Tags:
export function closeTags(event) {
  event.target.parentElement.style.display = "none";
  const value = event.target.value;
  const index = tag.indexOf(value);
  ingredient = [...tag.slice(0, index), ...tag.slice(index + 1)];
  console.log(tag);
}

/*
export function reset() {
  tag.forEach(function (tag) {
    tag.parentElement.removeChild(tag);
    console.log(tag.parentElement);
    console.log(tag);
  });
}
*/
