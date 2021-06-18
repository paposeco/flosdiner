import style from "./style.css";
import Toast from "./toast.jpg";
import FrenchToast from "./frenchtoast.jpg";
import Oatmeal from "./oatmeal.jpg";
import Cereal from "./cereal.jpg";
import Pancakes from "./pancakes.jpg";
import FullBreakfast from "./fullbreakfast.jpg";
import EggsBacon from "./eggsandbacon.jpg";

import Coffee from "./filtercoffee.jpg";
import Latte from "./latte.jpg";
import Tea from "./tea.jpg";
import Milk from "./milk.jpg";
import OrangeJuice from "./orangejuice.jpg";

import Muffin from "./muffin.jpg";
import Donuts from "./donuts.jpg";
import ApplePie from "./applepie.jpg";
import PecanPie from "./pecanpie.jpg";

export default function menu() {
  const nav = document.querySelector("nav");
  const article = document.createElement("article");
  article.setAttribute("id", "articleMenu");
  //breakfast
  const breakfastDiv = document.createElement("div");
  breakfastDiv.setAttribute("id", "breakfastdiv");
  const breakfastTitle = document.createElement("h3");
  breakfastTitle.textContent = "~ Breakfast ~";
  breakfastDiv.appendChild(breakfastTitle);

  const breakfastDiv1 = document.createElement("div");
  breakfastDiv1.setAttribute("class", "menuitemsDiv");
  const breakfastDiv1FotoDiv = document.createElement("div");
  breakfastDiv1FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv1NameDiv = document.createElement("div");
  breakfastDiv1NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv1NameDescDiv = document.createElement("div");
  const breakfastDiv1NamePriceDiv = document.createElement("div");
  const breakfastDiv1NameDescPara = document.createElement("p");
  const breakfastDiv1NamePricePara = document.createElement("p");

  const toastImg = new Image();
  toastImg.src = Toast;
  breakfastDiv1FotoDiv.appendChild(toastImg);
  breakfastDiv1NameDescPara.textContent = "Toast";
  breakfastDiv1NamePricePara.textContent = "1.5€";
  fotoeventlistener(breakfastDiv1);

  breakfastDiv.appendChild(breakfastDiv1);
  breakfastDiv1.appendChild(breakfastDiv1FotoDiv);
  breakfastDiv1.appendChild(breakfastDiv1NameDiv);
  breakfastDiv1NameDiv.appendChild(breakfastDiv1NameDescDiv);
  breakfastDiv1NameDiv.appendChild(breakfastDiv1NamePriceDiv);
  breakfastDiv1NameDescDiv.appendChild(breakfastDiv1NameDescPara);
  breakfastDiv1NamePriceDiv.appendChild(breakfastDiv1NamePricePara);

  const breakfastDiv2 = document.createElement("div");
  breakfastDiv2.setAttribute("class", "menuitemsDiv");
  const breakfastDiv2FotoDiv = document.createElement("div");
  breakfastDiv2FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv2NameDiv = document.createElement("div");
  breakfastDiv2NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv2NameDescDiv = document.createElement("div");
  const breakfastDiv2NamePriceDiv = document.createElement("div");
  const breakfastDiv2NameDescPara = document.createElement("p");
  const breakfastDiv2NamePricePara = document.createElement("p");

  const frenchtoastImg = new Image();
  frenchtoastImg.src = FrenchToast;
  breakfastDiv2FotoDiv.appendChild(frenchtoastImg);
  breakfastDiv2NameDescPara.textContent = "French Toast";
  breakfastDiv2NamePricePara.textContent = "5€";
  fotoeventlistener(breakfastDiv2);

  breakfastDiv.appendChild(breakfastDiv2);
  breakfastDiv2.appendChild(breakfastDiv2FotoDiv);
  breakfastDiv2.appendChild(breakfastDiv2NameDiv);
  breakfastDiv2NameDiv.appendChild(breakfastDiv2NameDescDiv);
  breakfastDiv2NameDiv.appendChild(breakfastDiv2NamePriceDiv);
  breakfastDiv2NameDescDiv.appendChild(breakfastDiv2NameDescPara);
  breakfastDiv2NamePriceDiv.appendChild(breakfastDiv2NamePricePara);

  const breakfastDiv3 = document.createElement("div");
  breakfastDiv3.setAttribute("class", "menuitemsDiv");
  const breakfastDiv3FotoDiv = document.createElement("div");
  breakfastDiv3FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv3NameDiv = document.createElement("div");
  breakfastDiv3NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv3NameDescDiv = document.createElement("div");
  const breakfastDiv3NamePriceDiv = document.createElement("div");
  const breakfastDiv3NameDescPara = document.createElement("p");
  const breakfastDiv3NamePricePara = document.createElement("p");

  const oatmealImg = new Image();
  oatmealImg.src = Oatmeal;
  breakfastDiv3FotoDiv.appendChild(oatmealImg);
  breakfastDiv3NameDescPara.textContent = "Oatmeal";
  breakfastDiv3NamePricePara.textContent = "2€";
  fotoeventlistener(breakfastDiv3);

  breakfastDiv.appendChild(breakfastDiv3);
  breakfastDiv3.appendChild(breakfastDiv3FotoDiv);
  breakfastDiv3.appendChild(breakfastDiv3NameDiv);
  breakfastDiv3NameDiv.appendChild(breakfastDiv3NameDescDiv);
  breakfastDiv3NameDiv.appendChild(breakfastDiv3NamePriceDiv);
  breakfastDiv3NameDescDiv.appendChild(breakfastDiv3NameDescPara);
  breakfastDiv3NamePriceDiv.appendChild(breakfastDiv3NamePricePara);

  const breakfastDiv4 = document.createElement("div");
  breakfastDiv4.setAttribute("class", "menuitemsDiv");
  const breakfastDiv4FotoDiv = document.createElement("div");
  breakfastDiv4FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv4NameDiv = document.createElement("div");
  breakfastDiv4NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv4NameDescDiv = document.createElement("div");
  const breakfastDiv4NamePriceDiv = document.createElement("div");
  const breakfastDiv4NameDescPara = document.createElement("p");
  const breakfastDiv4NamePricePara = document.createElement("p");

  const cerealImg = new Image();
  cerealImg.src = Cereal;
  breakfastDiv4FotoDiv.appendChild(cerealImg);
  breakfastDiv4NameDescPara.textContent = "Cereal (various options)";
  breakfastDiv4NamePricePara.textContent = "1€";
  fotoeventlistener(breakfastDiv4);

  breakfastDiv.appendChild(breakfastDiv4);
  breakfastDiv4.appendChild(breakfastDiv4FotoDiv);
  breakfastDiv4.appendChild(breakfastDiv4NameDiv);
  breakfastDiv4NameDiv.appendChild(breakfastDiv4NameDescDiv);
  breakfastDiv4NameDiv.appendChild(breakfastDiv4NamePriceDiv);
  breakfastDiv4NameDescDiv.appendChild(breakfastDiv4NameDescPara);
  breakfastDiv4NamePriceDiv.appendChild(breakfastDiv4NamePricePara);

  const breakfastDiv5 = document.createElement("div");
  breakfastDiv5.setAttribute("class", "menuitemsDiv");
  const breakfastDiv5FotoDiv = document.createElement("div");
  breakfastDiv5FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv5NameDiv = document.createElement("div");
  breakfastDiv5NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv5NameDescDiv = document.createElement("div");
  const breakfastDiv5NamePriceDiv = document.createElement("div");
  const breakfastDiv5NameDescPara = document.createElement("p");
  const breakfastDiv5NamePricePara = document.createElement("p");

  const pancakeImg = new Image();
  pancakeImg.src = Pancakes;
  breakfastDiv5FotoDiv.appendChild(pancakeImg);
  breakfastDiv5NameDescPara.textContent = "Pancakes with maple syrup";
  breakfastDiv5NamePricePara.textContent = "4€";
  fotoeventlistener(breakfastDiv5);

  breakfastDiv.appendChild(breakfastDiv5);
  breakfastDiv5.appendChild(breakfastDiv5FotoDiv);
  breakfastDiv5.appendChild(breakfastDiv5NameDiv);
  breakfastDiv5NameDiv.appendChild(breakfastDiv5NameDescDiv);
  breakfastDiv5NameDiv.appendChild(breakfastDiv5NamePriceDiv);
  breakfastDiv5NameDescDiv.appendChild(breakfastDiv5NameDescPara);
  breakfastDiv5NamePriceDiv.appendChild(breakfastDiv5NamePricePara);

  const breakfastDiv6 = document.createElement("div");
  breakfastDiv6.setAttribute("class", "menuitemsDiv");
  const breakfastDiv6FotoDiv = document.createElement("div");
  breakfastDiv6FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv6NameDiv = document.createElement("div");
  breakfastDiv6NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv6NameDescDiv = document.createElement("div");
  const breakfastDiv6NamePriceDiv = document.createElement("div");
  const breakfastDiv6NameDescPara = document.createElement("p");
  const breakfastDiv6NamePricePara = document.createElement("p");

  const EggsBaconImg = new Image();
  EggsBaconImg.src = EggsBacon;
  breakfastDiv6FotoDiv.appendChild(EggsBaconImg);
  breakfastDiv6NameDescPara.textContent =
    "Fried Eggs (sunny side up) and bacon";
  breakfastDiv6NamePricePara.textContent = "3€";
  fotoeventlistener(breakfastDiv6);

  breakfastDiv.appendChild(breakfastDiv6);
  breakfastDiv6.appendChild(breakfastDiv6FotoDiv);
  breakfastDiv6.appendChild(breakfastDiv6NameDiv);
  breakfastDiv6NameDiv.appendChild(breakfastDiv6NameDescDiv);
  breakfastDiv6NameDiv.appendChild(breakfastDiv6NamePriceDiv);
  breakfastDiv6NameDescDiv.appendChild(breakfastDiv6NameDescPara);
  breakfastDiv6NamePriceDiv.appendChild(breakfastDiv6NamePricePara);

  const breakfastDiv7 = document.createElement("div");
  breakfastDiv7.setAttribute("class", "menuitemsDiv");
  const breakfastDiv7FotoDiv = document.createElement("div");
  breakfastDiv7FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv7NameDiv = document.createElement("div");
  breakfastDiv7NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv7NameDescDiv = document.createElement("div");
  const breakfastDiv7NamePriceDiv = document.createElement("div");
  const breakfastDiv7NameDescPara = document.createElement("p");
  const breakfastDiv7NamePricePara = document.createElement("p");

  const fullbreakfastImg = new Image();
  fullbreakfastImg.src = FullBreakfast;
  breakfastDiv7FotoDiv.appendChild(fullbreakfastImg);
  breakfastDiv7NameDescPara.textContent = "Full English Breakfast";
  breakfastDiv7NamePricePara.textContent = "6€";
  fotoeventlistener(breakfastDiv7);

  breakfastDiv.appendChild(breakfastDiv7);
  breakfastDiv7.appendChild(breakfastDiv7FotoDiv);
  breakfastDiv7.appendChild(breakfastDiv7NameDiv);
  breakfastDiv7NameDiv.appendChild(breakfastDiv7NameDescDiv);
  breakfastDiv7NameDiv.appendChild(breakfastDiv7NamePriceDiv);
  breakfastDiv7NameDescDiv.appendChild(breakfastDiv7NameDescPara);
  breakfastDiv7NamePriceDiv.appendChild(breakfastDiv7NamePricePara);

  //drinks
  const drinksDiv = document.createElement("div");
  drinksDiv.setAttribute("id", "drinksdiv");
  const drinksTitle = document.createElement("h3");
  drinksTitle.textContent = "~ Drinks ~";
  drinksDiv.appendChild(drinksTitle);

  const drinksDiv1 = document.createElement("div");
  drinksDiv1.setAttribute("class", "menuitemsDiv");
  const drinksDiv1FotoDiv = document.createElement("div");
  drinksDiv1FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv1NameDiv = document.createElement("div");
  drinksDiv1NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv1NameDescDiv = document.createElement("div");
  const drinksDiv1NamePriceDiv = document.createElement("div");
  const drinksDiv1NameDescPara = document.createElement("p");
  const drinksDiv1NamePricePara = document.createElement("p");

  const coffeeImg = new Image();
  coffeeImg.src = Coffee;
  drinksDiv1FotoDiv.appendChild(coffeeImg);
  drinksDiv1NameDescPara.textContent = "Filter coffee";
  drinksDiv1NamePricePara.textContent = "1€";
  fotoeventlistener(drinksDiv1);

  drinksDiv.appendChild(drinksDiv1);
  drinksDiv1.appendChild(drinksDiv1FotoDiv);
  drinksDiv1.appendChild(drinksDiv1NameDiv);
  drinksDiv1NameDiv.appendChild(drinksDiv1NameDescDiv);
  drinksDiv1NameDiv.appendChild(drinksDiv1NamePriceDiv);
  drinksDiv1NameDescDiv.appendChild(drinksDiv1NameDescPara);
  drinksDiv1NamePriceDiv.appendChild(drinksDiv1NamePricePara);

  const drinksDiv2 = document.createElement("div");
  drinksDiv2.setAttribute("class", "menuitemsDiv");
  const drinksDiv2FotoDiv = document.createElement("div");
  drinksDiv2FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv2NameDiv = document.createElement("div");
  drinksDiv2NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv2NameDescDiv = document.createElement("div");
  const drinksDiv2NamePriceDiv = document.createElement("div");
  const drinksDiv2NameDescPara = document.createElement("p");
  const drinksDiv2NamePricePara = document.createElement("p");

  const latteImg = new Image();
  latteImg.src = Latte;
  drinksDiv2FotoDiv.appendChild(latteImg);
  drinksDiv2NameDescPara.textContent = "Latte";
  drinksDiv2NamePricePara.textContent = "2€";
  fotoeventlistener(drinksDiv2);

  drinksDiv.appendChild(drinksDiv2);
  drinksDiv2.appendChild(drinksDiv2FotoDiv);
  drinksDiv2.appendChild(drinksDiv2NameDiv);
  drinksDiv2NameDiv.appendChild(drinksDiv2NameDescDiv);
  drinksDiv2NameDiv.appendChild(drinksDiv2NamePriceDiv);
  drinksDiv2NameDescDiv.appendChild(drinksDiv2NameDescPara);
  drinksDiv2NamePriceDiv.appendChild(drinksDiv2NamePricePara);

  const drinksDiv3 = document.createElement("div");
  drinksDiv3.setAttribute("class", "menuitemsDiv");
  const drinksDiv3FotoDiv = document.createElement("div");
  drinksDiv3FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv3NameDiv = document.createElement("div");
  drinksDiv3NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv3NameDescDiv = document.createElement("div");
  const drinksDiv3NamePriceDiv = document.createElement("div");
  const drinksDiv3NameDescPara = document.createElement("p");
  const drinksDiv3NamePricePara = document.createElement("p");

  const teaImg = new Image();
  teaImg.src = Tea;
  drinksDiv3FotoDiv.appendChild(teaImg);
  drinksDiv3NameDescPara.textContent = "Tea";
  drinksDiv3NamePricePara.textContent = "1€";
  fotoeventlistener(drinksDiv3);

  drinksDiv.appendChild(drinksDiv3);
  drinksDiv3.appendChild(drinksDiv3FotoDiv);
  drinksDiv3.appendChild(drinksDiv3NameDiv);
  drinksDiv3NameDiv.appendChild(drinksDiv3NameDescDiv);
  drinksDiv3NameDiv.appendChild(drinksDiv3NamePriceDiv);
  drinksDiv3NameDescDiv.appendChild(drinksDiv3NameDescPara);
  drinksDiv3NamePriceDiv.appendChild(drinksDiv3NamePricePara);

  const drinksDiv4 = document.createElement("div");
  drinksDiv4.setAttribute("class", "menuitemsDiv");
  const drinksDiv4FotoDiv = document.createElement("div");
  drinksDiv4FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv4NameDiv = document.createElement("div");
  drinksDiv4NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv4NameDescDiv = document.createElement("div");
  const drinksDiv4NamePriceDiv = document.createElement("div");
  const drinksDiv4NameDescPara = document.createElement("p");
  const drinksDiv4NamePricePara = document.createElement("p");

  const milkImg = new Image();
  milkImg.src = Milk;
  drinksDiv4FotoDiv.appendChild(milkImg);
  drinksDiv4NameDescPara.textContent = "Milk (ask for lactose free options)";
  drinksDiv4NamePricePara.textContent = "1€";
  fotoeventlistener(drinksDiv4);

  drinksDiv.appendChild(drinksDiv4);
  drinksDiv4.appendChild(drinksDiv4FotoDiv);
  drinksDiv4.appendChild(drinksDiv4NameDiv);
  drinksDiv4NameDiv.appendChild(drinksDiv4NameDescDiv);
  drinksDiv4NameDiv.appendChild(drinksDiv4NamePriceDiv);
  drinksDiv4NameDescDiv.appendChild(drinksDiv4NameDescPara);
  drinksDiv4NamePriceDiv.appendChild(drinksDiv4NamePricePara);

  const drinksDiv5 = document.createElement("div");
  drinksDiv5.setAttribute("class", "menuitemsDiv");
  const drinksDiv5FotoDiv = document.createElement("div");
  drinksDiv5FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv5NameDiv = document.createElement("div");
  drinksDiv5NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv5NameDescDiv = document.createElement("div");
  const drinksDiv5NamePriceDiv = document.createElement("div");
  const drinksDiv5NameDescPara = document.createElement("p");
  const drinksDiv5NamePricePara = document.createElement("p");

  const juiceImg = new Image();
  juiceImg.src = OrangeJuice;
  drinksDiv5FotoDiv.appendChild(juiceImg);
  drinksDiv5NameDescPara.textContent = "Fresh squeezed orange juice";
  drinksDiv5NamePricePara.textContent = "2.5€";
  fotoeventlistener(drinksDiv5);

  drinksDiv.appendChild(drinksDiv5);
  drinksDiv5.appendChild(drinksDiv5FotoDiv);
  drinksDiv5.appendChild(drinksDiv5NameDiv);
  drinksDiv5NameDiv.appendChild(drinksDiv5NameDescDiv);
  drinksDiv5NameDiv.appendChild(drinksDiv5NamePriceDiv);
  drinksDiv5NameDescDiv.appendChild(drinksDiv5NameDescPara);
  drinksDiv5NamePriceDiv.appendChild(drinksDiv5NamePricePara);

  //desserts
  const dessertDiv = document.createElement("div");
  dessertDiv.setAttribute("id", "dessertdiv");
  const dessertTitle = document.createElement("h3");
  dessertTitle.textContent = "~ Desserts ~";
  dessertDiv.appendChild(dessertTitle);

  const dessertDiv1 = document.createElement("div");
  dessertDiv1.setAttribute("class", "menuitemsDiv");
  const dessertDiv1FotoDiv = document.createElement("div");
  dessertDiv1FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv1NameDiv = document.createElement("div");
  dessertDiv1NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv1NameDescDiv = document.createElement("div");
  const dessertDiv1NamePriceDiv = document.createElement("div");
  const dessertDiv1NameDescPara = document.createElement("p");
  const dessertDiv1NamePricePara = document.createElement("p");

  const muffinImg = new Image();
  muffinImg.src = Muffin;
  dessertDiv1FotoDiv.appendChild(muffinImg);
  dessertDiv1NameDescPara.textContent = "Muffin of the day";
  dessertDiv1NamePricePara.textContent = "2€";
  fotoeventlistener(dessertDiv1);

  dessertDiv.appendChild(dessertDiv1);
  dessertDiv1.appendChild(dessertDiv1FotoDiv);
  dessertDiv1.appendChild(dessertDiv1NameDiv);
  dessertDiv1NameDiv.appendChild(dessertDiv1NameDescDiv);
  dessertDiv1NameDiv.appendChild(dessertDiv1NamePriceDiv);
  dessertDiv1NameDescDiv.appendChild(dessertDiv1NameDescPara);
  dessertDiv1NamePriceDiv.appendChild(dessertDiv1NamePricePara);

  const dessertDiv2 = document.createElement("div");
  dessertDiv2.setAttribute("class", "menuitemsDiv");
  const dessertDiv2FotoDiv = document.createElement("div");
  dessertDiv2FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv2NameDiv = document.createElement("div");
  dessertDiv2NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv2NameDescDiv = document.createElement("div");
  const dessertDiv2NamePriceDiv = document.createElement("div");
  const dessertDiv2NameDescPara = document.createElement("p");
  const dessertDiv2NamePricePara = document.createElement("p");

  const donutImg = new Image();
  donutImg.src = Donuts;
  dessertDiv2FotoDiv.appendChild(donutImg);
  dessertDiv2NameDescPara.textContent = "Donut (various options)";
  dessertDiv2NamePricePara.textContent = "1€";
  fotoeventlistener(dessertDiv2);

  dessertDiv.appendChild(dessertDiv2);
  dessertDiv2.appendChild(dessertDiv2FotoDiv);
  dessertDiv2.appendChild(dessertDiv2NameDiv);
  dessertDiv2NameDiv.appendChild(dessertDiv2NameDescDiv);
  dessertDiv2NameDiv.appendChild(dessertDiv2NamePriceDiv);
  dessertDiv2NameDescDiv.appendChild(dessertDiv2NameDescPara);
  dessertDiv2NamePriceDiv.appendChild(dessertDiv2NamePricePara);

  const dessertDiv3 = document.createElement("div");
  dessertDiv3.setAttribute("class", "menuitemsDiv");
  const dessertDiv3FotoDiv = document.createElement("div");
  dessertDiv3FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv3NameDiv = document.createElement("div");
  dessertDiv3NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv3NameDescDiv = document.createElement("div");
  const dessertDiv3NamePriceDiv = document.createElement("div");
  const dessertDiv3NameDescPara = document.createElement("p");
  const dessertDiv3NamePricePara = document.createElement("p");

  const applepieImg = new Image();
  applepieImg.src = ApplePie;
  dessertDiv3FotoDiv.appendChild(applepieImg);
  dessertDiv3NameDescPara.textContent = "Slice of Apple Pie";
  dessertDiv3NamePricePara.textContent = "2€";
  fotoeventlistener(dessertDiv3);

  dessertDiv.appendChild(dessertDiv3);
  dessertDiv3.appendChild(dessertDiv3FotoDiv);
  dessertDiv3.appendChild(dessertDiv3NameDiv);
  dessertDiv3NameDiv.appendChild(dessertDiv3NameDescDiv);
  dessertDiv3NameDiv.appendChild(dessertDiv3NamePriceDiv);
  dessertDiv3NameDescDiv.appendChild(dessertDiv3NameDescPara);
  dessertDiv3NamePriceDiv.appendChild(dessertDiv3NamePricePara);

  const dessertDiv4 = document.createElement("div");
  dessertDiv4.setAttribute("class", "menuitemsDiv");
  const dessertDiv4FotoDiv = document.createElement("div");
  dessertDiv4FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv4NameDiv = document.createElement("div");
  dessertDiv4NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv4NameDescDiv = document.createElement("div");
  const dessertDiv4NamePriceDiv = document.createElement("div");
  const dessertDiv4NameDescPara = document.createElement("p");
  const dessertDiv4NamePricePara = document.createElement("p");

  const pecanpieImg = new Image();
  pecanpieImg.src = PecanPie;
  dessertDiv4FotoDiv.appendChild(pecanpieImg);
  dessertDiv4NameDescPara.textContent = "Slice of Pecan Pie";
  dessertDiv4NamePricePara.textContent = "2.5€";
  fotoeventlistener(dessertDiv4);

  dessertDiv.appendChild(dessertDiv4);
  dessertDiv4.appendChild(dessertDiv4FotoDiv);
  dessertDiv4.appendChild(dessertDiv4NameDiv);
  dessertDiv4NameDiv.appendChild(dessertDiv4NameDescDiv);
  dessertDiv4NameDiv.appendChild(dessertDiv4NamePriceDiv);
  dessertDiv4NameDescDiv.appendChild(dessertDiv4NameDescPara);
  dessertDiv4NamePriceDiv.appendChild(dessertDiv4NamePricePara);

  article.appendChild(breakfastDiv);
  article.appendChild(drinksDiv);
  article.appendChild(dessertDiv);
  nav.appendChild(article);
}

function fotoeventlistener(somediv) {
  somediv.addEventListener("click", function (event) {
    const firstchild = event.currentTarget.firstElementChild;
    const lastchild = event.currentTarget.lastElementChild;
    const lastchildgrandchild = lastchild.firstElementChild;
    if (firstchild.classList.contains("menuitemFoto")) {
      firstchild.classList.replace("menuitemFoto", "menuitemFotoExpand");
      event.currentTarget.style.flexDirection = "column";
      lastchildgrandchild.style.marginLeft = "15px";
    } else {
      firstchild.classList.replace("menuitemFotoExpand", "menuitemFoto");
      event.currentTarget.style.flexDirection = "row";
      lastchildgrandchild.style.marginLeft = "0px";
    }
  });
}
