const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
const privacyClose = document.getElementById('privacy-close');

privacyLink.addEventListener('click', function(e) {
  e.preventDefault();
  privacyModal.style.display = 'flex';
});

privacyClose.addEventListener('click', function() {
  privacyModal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === privacyModal) {
    privacyModal.style.display = 'none';
  }
});

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    privacyModal.style.display = 'none';
  }
});

// Animate sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Contact modal from service cards
const contactModal = document.getElementById("contact-modal");
const contactModalTitle = document.getElementById("contact-modal-title");
const contactModalClose = document.getElementById("contact-modal-close");
const contactSubjectInput = document.getElementById("contact-subject");

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const selectedSubject = card.dataset.subject || card.dataset.service;
    contactModalTitle.textContent = `Kontakt - ${selectedSubject}`;
    contactSubjectInput.value = selectedSubject;
    contactModal.style.display = "flex";
  });
});

contactModalClose.addEventListener('click', () => {
  contactModal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// Form
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Ihre Nachricht wurde gesendet!');
  contactModal.style.display = "none";
  e.target.reset();
});

