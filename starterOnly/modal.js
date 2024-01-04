function editNav() {
  let x = document.querySelector("#myTopnav");
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
  //test pour savoir si la modale contient la class 'close-modal'
  //Si oui, l'enlever
  if (modalbg.classList.contains("close-content")) {
    modalbg.classList.remove("close-content")
  }
}

//fonction pour refermer la modale avec animation inversée
function  closeModal() {
  modalbg.classList.add("close-content")
}

function validateEmail() {
  let emailID = document.reserve.email.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(emailID)) {
    alert("Le format de l'email est invalide")
    return false
  }
}

function validateLocation() {
  let radioButtons = document.getElementsByName('location');
  let isSelectedButton = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isSelectedButton = true;
      break;
    }
  }

  if(!isSelectedButton) {
    alert("Veuillez sélectionner une ville");
    return false;
  }
}

function validateCheckbox() {
  let checkbox = document.getElementById('checkbox1')
  if (!checkbox.checked) {
    alert("Pour continuer vous devez accepter les conditions d'utilisations")
    return false
  }
}

function validateForm() {
  let x = document.forms["reserve"];

  if (x.first.value === "") {
    alert("Le prénom ne peut pas être vide");
    return false
  }
  if (x.first.value.length < 2) {
    alert("Le nombre minimum de caractère autorisé pour le prénom est de 2")
    return false
  }
  if (x.last.value === "") {
    alert("Le nom ne peut pas être vide");
    return false
  }
  if (x.last.value.length < 2) {
    alert("Le nombre minimum de caractère autorisé pour le nom est de 2")
    return false
  }
  if (x.email.value === "") {
    alert("L'email ne peut pas être vide")
    return false
  }
  if (x.birthdate.value === null || x.birthdate.value === "") {
    alert("La date de naissance ne peut être nulle" + x.birthdate.value);
    return false
  }
  if (x.quantity.value === null || x.quantity.value === "") {
    alert("Une valeur (même 0) doit être inscrite")
    return false
  }
  if (x.location.value === null || x.quantity.value === "") {
    alert("Veuillez choisir une ville");
    return false
  }
  if (!validateEmail()) {
    return false
  }
  if (!validateLocation()) {
    return false;
  }
  if (!validateCheckbox()) {
    return false
  }
}


