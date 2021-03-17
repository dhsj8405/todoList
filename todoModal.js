const modalBtn = document.querySelector(".todoWrap");
const modalWindow = document.querySelector(".modalWindow");
const modalCloseBtn = modalWindow.querySelector(".modalCloseBtn");
const modaloverlay = modalWindow.querySelector(".modaloverlay");

function toggleModal(){
  modalWindow.classList.toggle("modalHidden");
}
function init(){
  modalBtn.addEventListener("dblclick", toggleModal);
  modaloverlay.addEventListener("click", toggleModal);
  modalCloseBtn.addEventListener("click", toggleModal);
}
init();
