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

let x = document.forms["reserve"];

//Fonction de validation du prénom de l'utilisateur
function validateFirstname() {
  if (x.first.value === "" || x.first.value.length < 2) {
    //alert("Le prénom ne peut pas être vide");
    document.getElementById('firstName').setAttribute("data-error-visible", "true")
    return false
  }
  else {
    document.getElementById('firstName').setAttribute("data-error-visible", "false")
    return true
  }
}

//Fonction de validation du nom de l'utilisateur
function validateLastname() {
  if (x.last.value === "" || x.last.value.length < 2) {
    //alert("Le prénom ne peut pas être vide");
    document.getElementById('lastName').setAttribute("data-error-visible", "true")
    return false
  }
  else {
    document.getElementById('lastName').setAttribute("data-error-visible", "false")
    return true
  }
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

function validateForm() {
  //Validation du prénom
  let firstnameIsValid = validateFirstname();

  //validation du nom
  let lastnameIsValid = validateLastname();

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
    return true;
  } else {
    return false;
  }
}