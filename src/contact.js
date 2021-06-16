import style from "./style.css";

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
  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");
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
  paraE.textContent = "moooooooo@flosdiner.np";
  emailAddress.appendChild(emailAddressTitle);
  emailAddress.appendChild(paraE);

  const socialmedia = document.createElement("div");
  socialmedia.setAttribute("id", "socialmedia");
  const socialmediaTitle = document.createElement("h3");
  socialmediaTitle.textContent = "Social Media";
  const paraS = document.createElement("p");
  paraS.innerHTML = '<a href="https://meyas.pt">Facebook</a> <br>';
  paraS.innerHTML += '<a href="https://meyas.pt">Instagram</a>';
  socialmedia.appendChild(socialmediaTitle);
  socialmedia.appendChild(paraS);

  contentDiv.appendChild(header);
  contentDiv.appendChild(article);
  article.appendChild(divLeft);
  article.appendChild(divRight);
  divLeft.appendChild(address);
  divLeft.appendChild(tel);
  divRight.appendChild(emailAddress);
  divRight.appendChild(socialmedia);
}
