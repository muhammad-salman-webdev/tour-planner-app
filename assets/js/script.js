const selecterElems = document.querySelectorAll(
  ".search_container > .search_item"
);
selecterElems.forEach((selecterElem, index) => {
  const toggleBox = selecterElem.querySelector(".selector_box");
  const popup = selecterElem.querySelector(".select_popup-container");

  toggleBox.addEventListener("click", () => {
    if (toggleBox.classList.contains("active")) {
      // Hidding the Popup
      popup.classList.remove("animate");
      setTimeout(() => {
        popup.classList.remove("show");
      }, 300);
    } else {
      // Showing the Popup
      popup.classList.add("show");
      setTimeout(() => {
        popup.classList.add("animate");
      }, 10);
    }
    toggleBox.classList.toggle("active");
  });
});
