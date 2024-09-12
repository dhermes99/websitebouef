document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMenu");
  const menuContent = document.getElementById("menuContent");

  toggleButton.addEventListener("click", () => {
    if (menuContent.classList.contains("d-none")) {
      menuContent.classList.remove("d-none");
      toggleButton.textContent = "Hide Menu";
    } else {
      menuContent.classList.add("d-none");
      toggleButton.textContent = "Show Menu";
    }
  });
});
