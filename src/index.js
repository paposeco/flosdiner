import header from "./header.js";
import frontpage from "./page-load.js";
import contact from "./contact.js";
import menu from "./menu.js";
import footer from "./footer.js";

function navigation() {
  const header = document.querySelector("header");
  const nav = document.createElement("nav");
  nav.setAttribute("id", "navigation");
  header.appendChild(nav);

  const navList = document.createElement("ul");
  const contact = document.createElement("li");
  contact.setAttribute("id", "contact");
  const menu = document.createElement("li");
  menu.setAttribute("id", "menu");

  contact.textContent = "Contacts";
  menu.textContent = "Menu";

  nav.appendChild(navList);
  navList.appendChild(menu);
  navList.appendChild(contact);
}

function clearDom(event) {
  let contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const thistarget = event.target.id;
  if (thistarget === "contact") {
    tabbedbrowsing();
    contact();
    footer();
    const contactLi = document.getElementById("contact");
    contactLi.classList.toggle("selected");
  } else if (thistarget === "menu") {
    tabbedbrowsing();
    menu();
    footer();
    const menuLi = document.getElementById("menu");
    menuLi.classList.toggle("selected");
  } else {
    tabbedbrowsing();
    frontpage();
    footer();
  }
}

function tabbedbrowsing() {
  header();
  navigation();
  const contactLi = document.getElementById("contact");
  const menuLi = document.getElementById("menu");
  const headerLi = document.querySelector("header");
  const wasSelectedCont = contactLi.classList.contains("selected");
  const wasSelectedMenu = menuLi.classList.contains("selected");
  contactLi.classList.toggle("selected", wasSelectedCont);
  menuLi.classList.toggle("selected", wasSelectedMenu);
  contactLi.addEventListener("click", clearDom);
  menuLi.addEventListener("click", clearDom);
  headerLi.addEventListener("click", clearDom);
}
tabbedbrowsing();
frontpage();
footer();
