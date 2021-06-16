import style from "./style.css";
import Seating from "./seating.jpg";

export default function menu() {
  const contentDiv = document.getElementById("content");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");
  const pageHeadline = document.createElement("h2");

  pageTitle.textContent = "Flo's Diner";
  pageHeadline.textContent = "Welcome to the best diner in town";

  header.appendChild(pageTitle);
  header.appendChild(pageHeadline);

  const article = document.createElement("article");
  article.setAttribute("id", "articleMenu");
  const tabTitle = document.createElement("h2");
  tabTitle.textContent = "Menu";
  const breakfastDiv = document.createElement("div");
  const breakfastTitle = document.createElement("h3");
  breakfastTitle.textContent = "Breakfast";
  breakfastDiv.appendChild(breakfastTitle);
  const drinksDiv = document.createElement("div");
  const drinksTitle = document.createElement("h3");
  drinksTitle.textContent = "Drinks";
  drinksDiv.appendChild(drinksTitle);
  const dessertDiv = document.createElement("div");
  const dessertTitle = document.createElement("h3");
  dessertTitle.textContent = "Desserts";
  dessertDiv.appendChild(dessertTitle);

  article.appendChild(tabTitle);
  article.appendChild(breakfastDiv);
  article.appendChild(drinksDiv);
  article.appendChild(dessertDiv);

  contentDiv.appendChild(header);
  contentDiv.appendChild(article);
}
