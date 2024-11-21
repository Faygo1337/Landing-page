document.addEventListener("DOMContentLoaded", function () {
  const consentPopup = document.getElementById("cookie-consent");
  const button1 = document.getElementById("confirm-button1");
  const button2 = document.getElementById("confirm-button2");
  const button3 = document.getElementById("confirm-button3");
  function saveConsent() {
    localStorage.setItem("cookieConsent", "true");
  }
  button1.addEventListener("click", function () {
    consentPopup.classList.remove("cookie-fadeUp");
    consentPopup.classList.add("cookie-fadeDown");
    saveConsent();
  });
  button2.addEventListener("click", function () {
    consentPopup.classList.remove("cookie-fadeUp");
    consentPopup.classList.add("cookie-fadeDown");
    saveConsent();
  });
  button3.addEventListener("click", function () {
    consentPopup.classList.remove("cookie-fadeUp");
    consentPopup.classList.add("cookie-fadeDown");
  });

  function checkConsent() {
    if (localStorage.getItem("cookieConsent") === "true") {
      consentPopup.style.display = "none";
    }
  }
  checkConsent();
});

document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.querySelectorAll(".contact-button");
  const closePopupButton = document.getElementById("closePopup");
  const closeThanks = document.getElementById("closeThanks");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const note = document.getElementById("note");
  const thankYou = document.getElementById("thankYou");
  const superButton = document.getElementById("superButton");
  openPopupButton.forEach((button) => {
    button.addEventListener("click", function () {
      overlay.style.display = "flex";
      popup.style.display = "block";
      thankYou.style.display = "none";
    });
  });

  closePopupButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
  contactForm.addEventListener("input", function () {
    const isValid = contactForm.checkValidity();
    submitButton.classList.toggle("enabled", isValid);
    submitButton.disabled = !isValid;
    note.style.display = isValid ? "none" : "block";
    checkFieldContent("name");
    checkFieldContent("email");
    checkFieldContent("phone");
  });
  function checkFieldContent(fieldId) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.getElementById(`${fieldId}Error`);
    if (field.value === "") {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (contactForm.checkValidity()) {
      popup.style.display = "none";
      thankYou.style.display = "block";
    }
  });
  superButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  closeThanks.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});

window.addEventListener("scroll", function () {
  const yellowBlock = document.querySelector(".header-item");
  const buddsBlock = document.querySelector(".header");

  const spacer = document.getElementById("spacer");
  const block1Bottom = yellowBlock.getBoundingClientRect().bottom;
  const block2Height = buddsBlock.offsetHeight;
  if (block1Bottom <= 0) {
    buddsBlock.classList.add("fixed");
    spacer.style.display = "block";
    spacer.style.height = `${block2Height}px`;
  } else {
    buddsBlock.classList.remove("fixed");
    spacer.style.display = "none";
  }
});

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    menuIcon.classList.remove("active");
    closeIcon.classList.add("active");
  } else {
    menuIcon.classList.add("active");
    closeIcon.classList.remove("active");
  }
}
function closeMenu() {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  navMenu.classList.remove("active");
  menuIcon.classList.add("active");
  closeIcon.classList.remove("active");
}
