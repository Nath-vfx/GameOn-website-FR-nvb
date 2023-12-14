function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close")
//const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal)




// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  if (modalbg.classList.contains("close-content")) {
    modalbg.classList.remove("close-content")
  }
}

function  closeModal() {
  modalbg.classList.add("close-content")
}


