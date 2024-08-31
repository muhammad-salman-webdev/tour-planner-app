// Select all elements with the class 'search_item' within '.search_container'
const selecterElems = document.querySelectorAll(
  ".search_container > .search_item"
);

// Function to manage the visibility of the popup and overlay
function managePopup(toggleBox, popup, overlay) {
  if (toggleBox.classList.contains("active")) {
    // If toggleBox is active, hide the popup and overlay with animation
    popup.classList.remove("animate");
    overlay.classList.remove("animate");
    setTimeout(() => {
      popup.classList.remove("show");
      overlay.classList.remove("show");
    }, 200); // Delay to allow the animation to complete before hiding
  } else {
    // If toggleBox is not active, show the overlay and popup with animation
    overlay.classList.add("show");
    popup.classList.add("show");
    setTimeout(() => {
      overlay.classList.add("animate");
      popup.classList.add("animate");
    }, 10); // Short delay to trigger the animation
  }
  // Toggle the active class on the toggleBox to track state
  toggleBox.classList.toggle("active");
}

// Loop through each selected element
selecterElems.forEach((selecterElem, index) => {
  // Get the necessary elements within each selected element
  const toggleBox = selecterElem.querySelector(".selector_box");
  const popupCon = selecterElem.querySelector(".select_popup-main");
  const overlay = popupCon.querySelector(".popup_overlay");
  const popup = popupCon.querySelector(".select_popup-container");
  const closeBtn = popupCon.querySelector(".popup-header .close-btn");

  // Add event listeners to handle showing/hiding the popup
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
// Select all product card elements within '.property_section'
const productCards = document.querySelectorAll(
  ".property_section .card-container .card-main"
);

// Function to manage the visibility of small popups
function manageSmallPopup(popupBtn, popup) {
  if (popupBtn.classList.contains("active")) {
    // If popup button is active, hide the popup with animation
    popup.classList.remove("animate");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 200); // Delay to allow the animation to complete before hiding
  } else {
    // If popup button is not active, show the popup with animation
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.add("animate");
    }, 10); // Short delay to trigger the animation
  }
  // Toggle the active class on the popup button to track state
  popupBtn.classList.toggle("active");
}

// Loop through each product card
productCards.forEach((card, index) => {
  // Managing Small Popup
  const popupBtn = card.querySelector(".note");
  const popup = card.querySelector(".details");
  const popupCBtn = popup.querySelector(".close-icon");

  // Add event listeners to handle showing/hiding the small popup
  popupBtn.addEventListener("click", () => manageSmallPopup(popupBtn, popup));
  popupCBtn.addEventListener("click", () => manageSmallPopup(popupBtn, popup));

  // Managing Details Popup
  const dPopupBtn = card.querySelector(".card-head .cost-details > i");
  const dPopup = card.querySelector(".card-head .cost-details > .popup");
  const dPopupCBtn = dPopup.querySelector(".popup-header > .close_icon");

  // Add event listeners to handle showing/hiding the details popup
  dPopupBtn.addEventListener("click", () =>
    manageSmallPopup(dPopupBtn, dPopup)
  );
  dPopupCBtn.addEventListener("click", () =>
    manageSmallPopup(dPopupBtn, dPopup)
  );
});

// Select all filter card elements within '.filters_section'
const filters = document.querySelectorAll(
  ".filters_section .filter_cards > .filter-card"
);

filters.forEach((filter) => {
  const filterBtn = filter.querySelector(".filter-btn");

  // If the filter has a popup
  if (filter.classList.contains("filter-card-popup")) {
    const filterPopup = filter.querySelector(".filter-popup");
    const filterCBtn = filterPopup.querySelector(
      ".filter-headings .close-icon"
    );
    const filterOverlay = filter.querySelector(".filter-overlay");

    // Add event listeners to handle showing/hiding the filter popup
    filterBtn.addEventListener("click", () =>
      managePopup(filterBtn, filterPopup, filterOverlay)
    );

    filterCBtn.addEventListener("click", () =>
      managePopup(filterBtn, filterPopup, filterOverlay)
    );

    filterOverlay.addEventListener("click", () =>
      managePopup(filterBtn, filterPopup, filterOverlay)
    );

    // If the filter has a sub-popup
    if (filter.classList.contains("sub-popup")) {
      const subPopupElems = filter.querySelectorAll(
        ".time-period-for-travelers > ul > li"
      );

      subPopupElems.forEach((subPopupElem) => {
        const calBtn = subPopupElem.querySelector(
          ".add-filter-types .add-filter-type.calendar_btn"
        );
        const calPopup = subPopupElem.querySelector(".popup-for-calendar");
        const calPopupCBtn = calPopup.querySelector(".close_icon");
        const wtripBtn = subPopupElem.querySelector(
          ".add-filter-types .add-filter-type.whole_trip_btn"
        );

        // Add event listeners to manage sub-popup interactions
        calBtn.addEventListener("click", () => {
          calBtn.classList.remove("active");
          manageSmallPopup(calBtn, calPopup);
          wtripBtn.classList.remove("active");
        });

        calPopupCBtn.addEventListener("click", () => {
          manageSmallPopup(calBtn, calPopup);
          calBtn.classList.add("active");
        });

        wtripBtn.addEventListener("click", () => {
          calBtn.classList.add("active");
          manageSmallPopup(calBtn, calPopup);
          wtripBtn.classList.add("active");
        });
      });
    } else {
      // Handling sub-tabs within the filter popup
      const subTabBtns = filterPopup.querySelectorAll(
        ".filter-content > .add-head .add-filter-type"
      );

      const subTabs = filterPopup.querySelectorAll(
        ".filter-content > .filters-details > .filter-details-container"
      );

      // Add event listeners to manage sub-tab interactions
      subTabBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          subTabBtns.forEach((b) => b.classList.toggle("active"));
          subTabs.forEach((t) => t.classList.toggle("active"));
        });
      });
    }
  } else {
    // If the filter doesn't have a popup, toggle its active state directly
    filterBtn.addEventListener("click", () => {
      filterBtn.classList.toggle("active");
    });
  }
});
