const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const successMessage = document.getElementById("successMessage");

const fields = {
  name: {
    input: nameInput,
    error: document.getElementById("nameError"),
  },
  email: {
    input: emailInput,
    error: document.getElementById("emailError"),
  },
  password: {
    input: passwordInput,
    error: document.getElementById("passwordError"),
  },
  confirmPassword: {
    input: confirmPasswordInput,
    error: document.getElementById("confirmPasswordError"),
  },
};

function showError(fieldKey, message) {
  const field = fields[fieldKey];
  field.error.textContent = message;
  field.input.classList.add("input-error");
}

function clearError(fieldKey) {
  const field = fields[fieldKey];
  field.error.textContent = "";
  field.input.classList.remove("input-error");
}

function clearAllErrors() {
  Object.keys(fields).forEach(clearError);
}

function isValidEmail(email) {
  return email.includes("@") && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearAllErrors();
  successMessage.textContent = "";
  successMessage.classList.remove("visible");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  let hasError = false;

  if (nameValue === "") {
    showError("name", "Le nom est obligatoire.");
    hasError = true;
  }

  if (emailValue === "") {
    showError("email", "L'email est obligatoire.");
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    showError("email", "Entrez un email valide contenant @.");
    hasError = true;
  }

  if (passwordValue === "") {
    showError("password", "Le mot de passe est obligatoire.");
    hasError = true;
  } else if (passwordValue.length < 8) {
    showError("password", "Le mot de passe doit contenir au moins 8 caracteres.");
    hasError = true;
  }

  if (confirmPasswordValue === "") {
    showError("confirmPassword", "La confirmation est obligatoire.");
    hasError = true;
  } else if (confirmPasswordValue !== passwordValue) {
    showError("confirmPassword", "Les deux mots de passe doivent etre identiques.");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  successMessage.textContent = "Inscription reussie. Le formulaire a ete reinitialise.";
  successMessage.classList.add("visible");
  form.reset();
});

Object.keys(fields).forEach((fieldKey) => {
  const field = fields[fieldKey];

  field.input.addEventListener("input", () => {
    clearError(fieldKey);
    successMessage.textContent = "";
    successMessage.classList.remove("visible");
  });
});
