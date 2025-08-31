// Open photo in popup
const galleryItems = document.querySelectorAll(".gallery-item");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = item.src;
  });
});

function closePopup() {
  popup.style.display = "none";
}
