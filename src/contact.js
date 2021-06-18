import style from "./style.css";
import Seating from "./seating.jpg";

export default function contact() {
  const contentDiv = document.getElementById("content");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");
  const pageHeadline = document.createElement("h2");

  pageTitle.textContent = "Flo's Diner";
  pageHeadline.textContent = "Welcome to the best diner in town";

  header.appendChild(pageTitle);
  header.appendChild(pageHeadline);

  const article = document.createElement("article");
  article.setAttribute("id", "articleContacts");
  const section = document.createElement("section");
  section.setAttribute("id", "sectionContacts");

  const div = document.createElement("div");
  div.setAttribute("id", "contacts");
  const address = document.createElement("div");
  address.setAttribute("id", "address");
  const addressTitle = document.createElement("h3");
  addressTitle.textContent = "Address";
  const paraA = document.createElement("p");
  paraA.setAttribute("style", "white-space: pre;");
  paraA.textContent = "Main Road nr 20 \r\n";
  paraA.textContent += "22zz Mars";
  address.appendChild(addressTitle);
  address.appendChild(paraA);

  const tel = document.createElement("div");
  tel.setAttribute("id", "tel");
  const telTitle = document.createElement("h3");
  telTitle.textContent = "Telephone";
  const paraT = document.createElement("p");
  paraT.textContent = "999999900";
  tel.appendChild(telTitle);
  tel.appendChild(paraT);

  const emailAddress = document.createElement("div");
  emailAddress.setAttribute("id", "email");
  const emailAddressTitle = document.createElement("h3");
  emailAddressTitle.textContent = "E-mail";
  const paraE = document.createElement("p");
  paraE.textContent = "hello@flosdiner.np";
  emailAddress.appendChild(emailAddressTitle);
  emailAddress.appendChild(paraE);

  const socialmedia = document.createElement("div");
  socialmedia.setAttribute("id", "socialmedia");
  const socialmediaTitle = document.createElement("h3");
  socialmediaTitle.textContent = "Social Media";
  const sociallist = document.createElement("ul");
  const sociallistface = document.createElement("li");
  const sociallistinsta = document.createElement("li");

  socialmediaTitle.appendChild(sociallist);
  sociallist.appendChild(sociallistface);
  sociallist.appendChild(sociallistinsta);

  sociallistface.innerHTML =
    '<i class="fab fa-facebook-f"></i> <a href="https://github.com/paposeco/">Facebook</a>';
  sociallistinsta.innerHTML =
    '<i class="fab fa-instagram"></i> <a href="https://github.com/paposeco/">Instagram</a>';

  socialmedia.appendChild(socialmediaTitle);

  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "seating");
  const seatingImg = new Image();
  seatingImg.src = Seating;
  imgDiv.appendChild(seatingImg);

  contentDiv.appendChild(header);
  contentDiv.appendChild(article);
  article.appendChild(section);
  section.appendChild(div);
  div.appendChild(address);
  div.appendChild(tel);
  div.appendChild(emailAddress);
  div.appendChild(socialmedia);
  section.appendChild(imgDiv);
}
