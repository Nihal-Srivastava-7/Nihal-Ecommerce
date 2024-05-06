export function  showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (operation === "Add") {
    toast.textContent = `Product with ID ${id} has been added.`;
  } else {
    toast.textContent = `Product with ID ${id} has been deleted.`;
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}