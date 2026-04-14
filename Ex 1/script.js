const storageKey = "dark-mode";

function applyTheme(isDarkMode) {
  document.body.classList.toggle("dark-mode", isDarkMode);

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    toggleButton.setAttribute("aria-pressed", String(isDarkMode));
  }
}

function myFunction() {
  const isDarkMode = !document.body.classList.contains("dark-mode");
  applyTheme(isDarkMode);
  localStorage.setItem(storageKey, String(isDarkMode));
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(storageKey) === "true";
  applyTheme(savedTheme);
});
