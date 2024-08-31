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

// Filter Cards Toggle Options
const filters = document.querySelectorAll(
  ".filters_section .filter_cards > .filter-card"
);
filters.forEach((filter) => {
  const filterBtn = filter.querySelector(".filter-btn");

  if (filter.classList.contains("filter-card-popup")) {
    const filterPopup = filter.querySelector(".filter-popup");
    const filterCBtn = filterPopup.querySelector(
      ".filter-headings .close-icon"
    );
    const filterOverlay = filter.querySelector(".filter-overlay");

    filterBtn.addEventListener("click", () =>
      managePopup(filterBtn, filterPopup, filterOverlay)
    );

    filterCBtn.addEventListener("click", () =>
      managePopup(filterBtn, filterPopup, filterOverlay)
    );

    filterOverlay.addEventListener("click", () =>
      managePopup(filterBtn, filterPopup, filterOverlay)
    );

    const subTabBtns = filterPopup.querySelectorAll(
      ".filter-content > .add-head .add-filter-type"
    );
    const subTabs = filterPopup.querySelectorAll(
      ".filter-content > .filters-details > .filter-details-container"
    );

    subTabBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        subTabBtns.forEach((b) => b.classList.toggle("active"));
        subTabs.forEach((t) => t.classList.toggle("active"));
      });
    });
  } else {
    filterBtn.addEventListener("click", () => {
      filterBtn.classList.toggle("active");
    });
  }
});
