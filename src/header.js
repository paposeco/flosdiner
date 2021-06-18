export default function header() {
  const contentDiv = document.getElementById("content");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");
  const pageHeadline = document.createElement("h2");

  pageTitle.textContent = "Flo's Diner";
  pageHeadline.textContent = "~Welcome to the best diner in town~";

  header.appendChild(pageTitle);
  header.appendChild(pageHeadline);
  contentDiv.appendChild(header);
}
