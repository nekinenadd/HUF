function openForm(type) {
  document.getElementById("cleaningType").value = type;
  document.getElementById("contactModalLabel").textContent = "Contact Us - " + type + " Cleaning";
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  contactModal.show();
}


