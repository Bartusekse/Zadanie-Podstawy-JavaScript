document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Łapiemy wszystkie linki nawigacyjne (elementy <a> z klasą .nav-link)
    const navLinks = document.querySelectorAll('.nav-link');

    // 2. Iterujemy przez każdy link i podpinamy nasłuchiwacz zdarzeń 'click'
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // ZADANIE: Zapobieganie domyślnej akcji linku (przeładowanie/skok)
            event.preventDefault();

            // =========================================================
            // CZĘŚĆ 1: Przełączanie klasy aktywnej
            // =========================================================

            // Klasa jest na elemencie LI, który jest rodzicem klikniętego A
            const currentActiveLi = document.querySelector('.nav-li-active');
            
            // a) Jeśli istnieje obecnie aktywny element, usuwamy z niego klasę
            if (currentActiveLi) {
                currentActiveLi.classList.remove('nav-li-active');
            }
            
            // b) Dodajemy klasę '.nav-li-active' do elementu LI, który został kliknięty
            // 'this' w tym kontekście to element <a>
            const clickedLi = this.parentElement; 
            clickedLi.classList.add('nav-li-active');

            // =========================================================
            // CZĘŚĆ 2: Przewijanie do odpowiedniej sekcji
            // =========================================================

            // a) Pobieramy wartość atrybutu href, np. "#section1"
            const targetId = this.getAttribute('href');
            
            // b) Pobieramy element docelowy (sekcję)
            // Używamy document.querySelector z ID z href
            const targetElement = document.querySelector(targetId);

            // c) Przewijamy do elementu, jeśli istnieje
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Płynne przewijanie
                });
            }
        });
    });
});
