const closeBtn = document.querySelector(".close-icon");
const tag = document.querySelector(".tag");

function closeTags(e) {
  e.target.parentElement.style.display = "none";
}

//closeBtn.addEventListener("click", closeTags);

export default closeTags;
