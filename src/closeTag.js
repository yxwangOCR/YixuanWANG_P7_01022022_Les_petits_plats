const closeBtn = document.querySelector(".close-icon");
const tag = document.querySelector(".tag");

function closeTags() {
  console.log("Close");
  tag.style.display = "none";
}

//closeBtn.addEventListener("click", closeTags);

export default closeTags;
