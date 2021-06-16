import frontpage from "./page-load.js";
import contact from "./contact.js";

frontpage();

function navigation() {
  const header = document.querySelector("header");
  const nav = document.createElement("nav");
  nav.setAttribute("id", "navigation");
  header.appendChild(nav);

  const navList = document.createElement("ul");
  const mainpage = document.createElement("li");
  mainpage.setAttribute("id", "mainpage");
  const contact = document.createElement("li");
  contact.setAttribute("id", "contact");
  const menu = document.createElement("li");
  menu.setAttribute("id", "menu");

  mainpage.textContent = "Main Page";
  contact.textContent = "Contacts";
  menu.textContent = "Menu";

  nav.appendChild(navList);
  navList.appendChild(mainpage);
  navList.appendChild(contact);
  navList.appendChild(menu);
}

function clearDom(event) {
  let contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const target = event.target.id;
  if (target === "contact") {
    contact();
    tabbedbrowsing();
  } else if (target === "menu") {
    menu();
    tabbedbrowsing();
  } else {
    console.log("neither");
    frontpage();
    tabbedbrowsing();
  }
}

function tabbedbrowsing() {
  navigation();
  const contactLi = document.getElementById("contact");
  const menuLi = document.getElementById("menu");
  const mainpageLi = document.getElementById("mainpage");
  contactLi.addEventListener("click", clearDom);
  menuLi.addEventListener("click", clearDom);
  mainpageLi.addEventListener("click", clearDom);
}

tabbedbrowsing();
