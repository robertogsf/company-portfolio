const WHATSAPP_NUMBER = "5355555555";
const WHATSAPP_MESSAGE = "Hola, quiero desarrollar un proyecto de software y me gustaria coordinar una consulta.";

const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (whatsappLink) {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
