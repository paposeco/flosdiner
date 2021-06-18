import Entrance from "./entrance.jpg";
import contact from "./contact.js";

export default function frontpage() {
  const nav = document.querySelector("nav");
  const article = document.createElement("article");
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "entrance");
  const entranceImg = new Image();
  entranceImg.src = Entrance;

  const section = document.createElement("section");
  section.setAttribute("id", "copy");
  const frontpageCopyT = document.createElement("h3");
  frontpageCopyT.setAttribute("id", "frontpagecopy");
  frontpageCopyT.textContent = "~ ~ ~";
  const para1 = document.createElement("p");
  const para3 = document.createElement("p");
  para1.textContent =
    "Located on a quirky street, Flo's Diner offers the best breakfast in town at a reasonable price. We are very proud of our menu; from pancakes, to oatmeal, there is something for everyone.";

  para3.innerHTML =
    "Breakfast is served every day from 6-22. You can find us on Main Road 20. Contact us for more.";

  section.appendChild(para1);
  section.appendChild(imgDiv);
  section.appendChild(frontpageCopyT);

  imgDiv.appendChild(entranceImg);
  section.appendChild(para3);

  article.appendChild(section);

  nav.appendChild(article);
}
