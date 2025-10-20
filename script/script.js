const add = document.getElementById("add");
add.addEventListener("click", () => {
  const addModal = document.querySelector("#modal");
  addModal.classList.remove("hidden");
  const disableScroll = document.querySelector("body");
  disableScroll.classList.add("overflow-hidden");
});

const close = document.getElementById("closeModal");
close.addEventListener("click", () => {
  const closeModal = document.querySelector("#modal");
  closeModal.classList.add("hidden");
});
