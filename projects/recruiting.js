const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const topic = document.querySelector("#topic").value;
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || topic === "" || message === "") {
    formMessage.textContent = "Bitte füllen Sie alle Felder aus.";
    formMessage.className = "error";
    return;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    formMessage.className = "error";
    return;
  }

  formMessage.textContent = "Das Formular wurde erfolgreich geprüft. In einer echten Anwendung würde die Nachricht jetzt versendet.";
  formMessage.className = "success";

  contactForm.reset();
});