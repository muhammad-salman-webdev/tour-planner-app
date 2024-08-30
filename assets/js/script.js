const selecterElems = document.querySelectorAll(
  ".search_container > .search_item"
);

function managePopup(toggleBox, popup, overlay) {
  if (toggleBox.classList.contains("active")) {
    // Hidding the Popup
    popup.classList.remove("animate");
    overlay.classList.remove("animate");
    setTimeout(() => {
      popup.classList.remove("show");
      overlay.classList.remove("show");
    }, 200);
  } else {
    // Showing the Overlay & Popup
    overlay.classList.add("show");
    popup.classList.add("show");
    setTimeout(() => {
      overlay.classList.add("animate");
      popup.classList.add("animate");
    }, 10);
  }
  toggleBox.classList.toggle("active");
}

selecterElems.forEach((selecterElem, index) => {
  const toggleBox = selecterElem.querySelector(".selector_box");
  const popupCon = selecterElem.querySelector(".select_popup-main");
  const overlay = popupCon.querySelector(".popup_overlay");
  const popup = popupCon.querySelector(".select_popup-container");
  const closeBtn = popupCon.querySelector(".popup-header .close-btn");

  toggleBox.addEventListener("click", () =>
    managePopup(toggleBox, popup, overlay)
  );
  overlay.addEventListener("click", () =>
    managePopup(toggleBox, popup, overlay)
  );
  closeBtn.addEventListener("click", () =>
    managePopup(toggleBox, popup, overlay)
  );

  if (index === 2) {
    toggleBox.click();
  }
});
