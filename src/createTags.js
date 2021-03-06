import filterTag from "./filterTag";

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
  event.target.parentElement.remove();
  filterTag();
}
