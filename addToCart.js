import {getCartProductFromLS} from "./getCartProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector('.productQuantity').innerText;
  let price = currentProdElem.querySelector('.productPrice').innerText;

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id );

    if (existingProd && quantity > 1) {

      quantity = Number(existingProd.quantity) + Number(quantity);
      price = Number(price * quantity);
      let updatedCart = { id, quantity, price };

     updatedCart = arrLocalStorageProduct.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
      });
      localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

      showToast("Add", id);
    }

    if (existingProd) {
      return false;
    }

  price = Number(price * quantity);
  quantity = Number(quantity);
 
   // console.log (quantity, price);
  arrLocalStorageProduct.push({id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);

  showToast("Add", id);

}