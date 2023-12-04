(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'initial';
    });
})();


// Получаем ссылку на элементы бургер меню и модального окна
const mobileMenuToggle = document.querySelector('.header__mobile-menuform_toggle');
const mobileMenuModal = document.querySelector('#mobile-menu');

// Функция для открытия/закрытия модального окна
function toggleMobileMenu() {
    mobileMenuModal.classList.toggle('active');
}

// Обработчик события клика по иконке бургера для открытия/закрытия модального окна
mobileMenuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMobileMenu();
});

// Закрываем модальное окно при клике на крестик
const modalCloseButton = document.querySelector('.menu__close');
modalCloseButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMobileMenu();
});

// Закрываем модальное окно при клике за его пределами
window.addEventListener('click', function(event) {
    if (event.target === mobileMenuModal) {
        toggleMobileMenu();
    }
});


  