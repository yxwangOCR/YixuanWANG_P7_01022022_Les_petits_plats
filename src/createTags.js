function createTags(label) {
  const tagWrapper = document.createElement("div");
  tagWrapper.setAttribute("class", "tag");

  const inputText = document.createElement("span");
  inputText.innerHTML = label;

  const closeIcon = document.createElement("span");
  closeIcon.setAttribute("class", "close-icon");
  closeIcon.innerHTML = "&#215";

  tagWrapper.appendChild(inputText);
  tagWrapper.appendChild(closeIcon);
  return tagWrapper;
}

export default createTags;
