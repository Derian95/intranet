const navFix = document.querySelector('.navFix')
const nav=document.querySelector('.nav')
const button = document.querySelector('.menu2')



button.addEventListener("click", () => {
    nav.classList.toggle("nav-menu_visible");

  if (nav.classList.contains("nav-menu_visible")) {
    button.setAttribute("aria-label", "Cerrar menú");
  } else {
    button.setAttribute("aria-label", "Abrir menú");
  }
  
 
});