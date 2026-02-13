function modalsOpen(){
    document.addEventListener('DOMContentLoaded', function() {
    const modalLinks = document.querySelectorAll('.modal-link');
  
  modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });
  
  // Закрытие модального окна
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  });
  
  // Закрытие при клике вне окна
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
});

}

export default modalsOpen
