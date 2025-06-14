function toggleMenu() {
  // Ouverture et fermetur du menu
  let navigation = document.querySelector(".main-navbar");
  navigation.classList.toggle("open");
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close")
const btnSubmit = document.querySelector('.btn-submit');
const toggleMenuBtn = document.querySelector('.icon');
//const formData = document.querySelectorAll(".formData");

// Ecouteur pour ouvrir le menu
toggleMenuBtn.addEventListener("click", toggleMenu);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

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

let x = document.forms["reserve"];

//Fonction de validation du prénom de l'utilisateur
function validateInput(inputId, isValidId) {
  const inputElement = document.getElementById(inputId);
  const isValidElement = document.getElementById(isValidId);
  let isValid = inputElement.value.length >= 2;
  isValidElement.setAttribute("data-error-visible", String(!isValid));
  return isValid;
}

//Function de validation du format de l'email de l'utilisateur
function validateEmail() {
  let emailID = x.email.value;
  let target = document.getElementById("validEmail")
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(emailID)) {
      //alert("Le format de l'email est invalide")
      target.setAttribute("data-error-visible", "true")
      target.setAttribute("data-error", "Veuillez renseigner un email valide")
      return false
    }
    else {
      target.setAttribute("data-error-visible", "false")
      return true
    }
}

//Fonction de validation de la date de naisssance de l'utilisateur
function validateBirthdate() {
  if (x.birthdate.value === "" || x.birthdate.value === null) {
    document.querySelector("#validBirthdate").setAttribute("data-error-visible", "true")
    return false
  }
  else {
    document.querySelector("#validBirthdate").setAttribute("data-error-visible", "false")
    return true
  }
}

//Fonction de validation du nombre de tournoi auquel l'utilisateur à participé
function validateTournamentNumber() {
  let tournamentQuantity = document.querySelector("#validTournamentQuantity")
  if (x.quantity.value === null || x.quantity.value === "") {
    //alert("Une valeur (même 0) doit être inscrite")
    tournamentQuantity.setAttribute("data-error-visible", "true")
    return false
  } else {
    tournamentQuantity.setAttribute("data-error-visible", "false")
    return true
  }
}

//Fonction de validation de choix du lieu du prochain tournoi de notre choix
function validateLocation() {
  let radioButtons = document.getElementsByName('location');
  let isSelectedButton = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isSelectedButton = true;
      document.querySelector("#validLocation").setAttribute("data-error-visible","false")
      break;
    }
  }

  if(!isSelectedButton) {
    document.querySelector("#validLocation").setAttribute("data-error-visible","true")
    return false;
  } else {
    return true
  }
}

//Function de validation des conditions d'utilisations
function validateCheckbox() {
  let checkbox = document.getElementById('checkbox1')
  let validCheckBox = document.querySelector("#validCheckBox")
  if (!checkbox.checked) {
    validCheckBox.setAttribute("data-error-visible","true")
    return false
  }
  else {
    validCheckBox.setAttribute("data-error-visible", "false")
    return true
  }
}

function validateForm(event) {
  event.preventDefault();

  //Validation du prénom
  let firstnameIsValid = validateInput("first", "firstName");

  //validation du nom
  let lastnameIsValid = validateInput("last", "lastName");

  //Validation du mail
  let emailIsValid = validateEmail();

  //Validation de la date de naissance
  let birthdateIsValid = validateBirthdate();

  //Validation du nombre de tournoi effectué
  let tournamentNumberIsValid = validateTournamentNumber();

  //validation du lieu
  let locationIsValid = validateLocation();

  //Validation des conditions d'utilisation
  let checkboxIsValid = validateCheckbox();

  // Vérifiez si toutes les fonctions renvoient true
  if (firstnameIsValid && lastnameIsValid && emailIsValid && birthdateIsValid && tournamentNumberIsValid && locationIsValid && checkboxIsValid) {
    document.querySelector(".modal-confirm").classList.add("active");
    document.querySelector("form[name='reserve']").classList.add("inactive");
  }
}


btnSubmit.addEventListener("click", validateForm);