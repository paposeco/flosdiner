import Entrance from "./entrance.jpg";
export default function frontpage() {
  const contentDiv = document.getElementById("content");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");
  const pageHeadline = document.createElement("h2");

  pageTitle.textContent = "Flo's Diner";
  pageHeadline.textContent = "~ Welcome to the best diner in town ~";

  header.appendChild(pageTitle);
  header.appendChild(pageHeadline);

  const article = document.createElement("article");
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "entrance");
  const entranceImg = new Image();
  entranceImg.src = Entrance;
  imgDiv.appendChild(entranceImg);

  article.appendChild(imgDiv);

  const section = document.createElement("section");
  section.setAttribute("id", "copy");
  const frontpageCopyT = document.createElement("h3");
  frontpageCopyT.textContent = "~ ~ ~";
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const para3 = document.createElement("p");
  para1.textContent =
    "Located on a quirky street, Flo's Diner offers the best breakfast in town at a reasonable price. We are very proud of menu; from pancakes, to oatmeal, there is something for everyone.";
  para2.textContent =
    "We use only organic local ingredients, and that includes our coffee!";
  para3.textContent = "We server breakfast every day from 6AM to 22PM.";

  section.appendChild(frontpageCopyT);
  section.appendChild(para1);
  section.appendChild(para2);
  section.appendChild(para3);
  article.appendChild(section);

  contentDiv.appendChild(header);
  contentDiv.appendChild(article);
}
