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

// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Função para mostrar a notificação
  function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");
    notification.classList.add("visible");

    // Esconde a notificação após 5 segundos
    setTimeout(() => {
      notification.classList.remove("visible");
      notification.classList.add("hidden");
    }, 5000);
  }

  // Simula a notificação sendo mostrada
  // Em uma aplicação real, você pode chamar `showNotification()` com base em eventos específicos
  showNotification();
});
