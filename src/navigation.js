export default function navigation() {
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
