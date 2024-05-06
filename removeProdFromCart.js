import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";
//import { showToast } from "./showToast";
//import { updateCartProductTotal } from "./updateCartProductTotal";
//import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // update the localStorage after removing the item
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  //   to remove the div onclick
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    showToast("Delete", id);
  }

  updateCartValue(cartProducts);
  updateCartProductTotal();
};
