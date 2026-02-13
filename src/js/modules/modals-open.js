   function modalsOpen() {
    document.addEventListener('DOMContentLoaded', function() {
        // ---- Модальное окно доставки ----
        const deliveryBtn = document.querySelector('#delivery-options .change-btn');
        const deliveryModal = document.getElementById('delivery-modal-section');
        
        // ---- Модальное окно оплаты ----
        const paymentBtn = document.querySelector('#payment-options .change-btn');
        const paymentModal = document.getElementById('section-payment-modal');

        // Проверка наличия элементов (чтобы избежать ошибок, если чего-то нет)
        if (!deliveryModal) console.error('Модальное окно доставки не найдено');
        if (!paymentModal) console.error('Модальное окно оплаты не найдено');

        // ---- Функции открытия/закрытия (универсальные) ----
        function openModal(modal) {
            if (modal) modal.style.display = 'flex';
        }

        function closeModal(modal) {
            if (modal) modal.style.display = 'none';
        }

        // ---- Обработчики для кнопок "Изменить" ----
        if (deliveryBtn) {
            deliveryBtn.addEventListener('click', function(e) {
                e.preventDefault(); // на всякий случай, если кнопка внутри формы
                openModal(deliveryModal);
            });
        }

        if (paymentBtn) {
            paymentBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openModal(paymentModal);
            });
        }

        // ---- Закрытие по крестику и кнопке "Выбрать" для окна доставки ----
        if (deliveryModal) {
            const closeBtnDelivery = deliveryModal.querySelector('.close-btn');
            const submitBtnDelivery = deliveryModal.querySelector('.submit-btn');

            if (closeBtnDelivery) {
                closeBtnDelivery.addEventListener('click', () => closeModal(deliveryModal));
            }
            if (submitBtnDelivery) {
                submitBtnDelivery.addEventListener('click', () => closeModal(deliveryModal));
            }

            // Закрытие по клику на оверлей (саму секцию)
            deliveryModal.addEventListener('click', function(e) {
                if (e.target === deliveryModal) closeModal(deliveryModal);
            });
        }

        // ---- Закрытие по крестику и кнопке "Выбрать" для окна оплаты ----
        if (paymentModal) {
            // В разметке оплаты крестик имеет класс .close-button, кнопка "Выбрать" — .btn-primary
            const closeBtnPayment = paymentModal.querySelector('.close-button');
            const submitBtnPayment = paymentModal.querySelector('.btn-primary');

            if (closeBtnPayment) {
                closeBtnPayment.addEventListener('click', () => closeModal(paymentModal));
            }
            if (submitBtnPayment) {
                submitBtnPayment.addEventListener('click', () => closeModal(paymentModal));
            }

            paymentModal.addEventListener('click', function(e) {
                if (e.target === paymentModal) closeModal(paymentModal);
            });
        }

        // ---- Закрытие по клавише Esc (закрывает только открытое окно) ----
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (deliveryModal && deliveryModal.style.display === 'flex') {
                    closeModal(deliveryModal);
                }
                if (paymentModal && paymentModal.style.display === 'flex') {
                    closeModal(paymentModal);
                }
            }
        });
    });
}

export default modalsOpen;