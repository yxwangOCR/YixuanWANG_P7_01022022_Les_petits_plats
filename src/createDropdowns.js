const dropdownContainer = document.getElementById("dropdown-container");

function createDropdowns() {
  const dropdowns = document.createElement("div");
  dropdowns.classList.add("dropdown-input");
  dropdowns.innerHTML = `<div id="dropdown-1">
        <button type="button" class="drop-btn-1" >
        <label for ="input-1" class="input-label-1">
        <input placeholder="Ingredients" class="search-input-1" id="ingredients-input">
        <span>&#10095;</span>
        <ul class="dropdown-menu" id="selected-ingredients"></ul>
        </button> </div>
        
        <div id="dropdown-2">
        <button type="button" class="drop-btn-2" >
        <label for ="input-2" class="input-label-2">
        <input placeholder="Appareils" class="search-input-2" id="appareils-input">   
        <span>&#10095;</span>
        <ul class="dropdown-menu" id="selected-appareils"></ul>
        </button> </div>

        <div id="dropdown-3">
        <button type="button" class="drop-btn-3" >
        <label for ="input-3" class="input-label-3">
        <input placeholder="Ustensiles" class="search-input-3" id="ustensiles-input">   
        <span>&#10095;</span>
         <ul class="dropdown-menu" id="selected-ustensiles"></ul>
        </button> </div>
        `;
  dropdownContainer.appendChild(dropdowns);
}

export default createDropdowns;
