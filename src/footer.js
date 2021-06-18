export default function footer() {
  const content = document.getElementById("content");
  const footerDiv = document.createElement("footer");
  const para = document.createElement("p");
  para.innerHTML =
    "<a href='https://github.com/paposeco/' alt='github'><span><i class='fab fa-github'></i></span>Fabi</a>";
  footerDiv.appendChild(para);
  content.appendChild(footerDiv);
}
