document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('trigger-modal');
  // const overlay = document.querySelector('.modal__overlay');
  const closeButton = document.querySelector('.close');
  const openButton1 = document.getElementById('sign-up-now');
  const openButton2 = document.getElementById('signup-btn');
  const closeButton2 = document.querySelector('.submit');

  function showModal() {
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  openButton1.addEventListener('click', showModal);
  openButton2.addEventListener('click', showModal);

  closeButton.addEventListener('click', closeModal);
  closeButton2.addEventListener('click', closeModal);
  // overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
