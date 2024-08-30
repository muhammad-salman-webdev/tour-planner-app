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
});

// --------
const productCards = document.querySelectorAll(
  ".property_section .card-container .card-main"
);

function manageSmallPopup(popupBtn, popup) {
  if (popupBtn.classList.contains("active")) {
    popup.classList.remove("animate");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 200);
  } else {
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.add("animate");
    }, 10);
  }
  popupBtn.classList.toggle("active");
}

productCards.forEach((card, index) => {
  // Managing Small Popup
  const popupBtn = card.querySelector(".note");
  const popup = card.querySelector(".details");
  const popupCBtn = popup.querySelector(".close-icon");

  popupBtn.addEventListener("click", () => manageSmallPopup(popupBtn, popup));
  popupCBtn.addEventListener("click", () => manageSmallPopup(popupBtn, popup));

  // Managing Details Popup
  const dPopupBtn = card.querySelector(".card-head .cost-details > i");
  const dPopup = card.querySelector(".card-head .cost-details > .popup");
  const dPopupCBtn = dPopup.querySelector(".popup-header > .close_icon");

  dPopupBtn.addEventListener("click", () =>
    manageSmallPopup(dPopupBtn, dPopup)
  );
  dPopupCBtn.addEventListener("click", () =>
    manageSmallPopup(dPopupBtn, dPopup)
  );
});
