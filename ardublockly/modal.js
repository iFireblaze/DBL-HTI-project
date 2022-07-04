// When the user clicks the button, the Modal turns visible ("block")
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}