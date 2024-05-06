const cartValue = document.querySelector(".cart");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};