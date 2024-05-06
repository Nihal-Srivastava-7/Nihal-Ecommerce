import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { products } from "/api/products.js";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    const LSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".category").textContent = category;

    productClone.querySelector(".productQuantity").textContent =
      LSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      LSActualData.price;

      productClone.querySelector(".stockElement").addEventListener("click", (event) => {
        incrementDecrement(event, id, stock,price);
      });

      productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.appendChild(productClone);
  });
};

showCartProduct();
updateCartProductTotal();
