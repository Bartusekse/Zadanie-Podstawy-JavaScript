document.addEventListener('DOMContentLoaded', () => {
    // 1. Znajdź wszystkie przyciski do przełączania detali
    const toggleButtons = document.querySelectorAll('.car-toggle-detail');
    
    // Definicja początkowego i zmienionego tekstu przycisku
    const SHOW_TEXT = 'Pokaż detale';
    const HIDE_TEXT = 'Schowaj detale';
    const ACTIVE_CLASS = 'car-show-detail';

    // Sprawdzenie, czy przyciski zostały znalezione
    if (toggleButtons.length === 0) {
        console.error("Nie znaleziono przycisków o klasie '.car-toggle-detail'.");
        return;
    }

    // Dodaj obsługę zdarzenia click do każdego przycisku
    toggleButtons.forEach(button => {
        
        button.addEventListener('click', (event) => {
            
            // event.currentTarget to przycisk, który został kliknięty
            const clickedButton = event.currentTarget;
            
            // 2. Znajdź element rodzica .car (cały samochód)
            // Używamy .closest() do znalezienia najbliższego przodka o klasie '.car'
            const carElement = clickedButton.closest('.car');

            if (!carElement) {
                console.error("Nie znaleziono elementu '.car' dla klikniętego przycisku.");
                return;
            }

            // 3. Znajdź element z detalami .car-detail wewnątrz elementu .car
            const detailElement = carElement.querySelector('.car-detail');
            
            if (!detailElement) {
                console.error("Nie znaleziono elementu '.car-detail' wewnątrz elementu '.car'.");
                return;
            }

            // 4. Logika przełączania (toggle)
            // Sprawdzamy, czy element .car ma już klasę aktywną
            const isActive = carElement.classList.contains(ACTIVE_CLASS);
            
            if (isActive) {
                // JEŚLI JEST AKTYWNY -> UKRYJ (SCHOWAJ DETALE)
                
                // a) Usuń klasę aktywną z elementu .car
                carElement.classList.remove(ACTIVE_CLASS);
                
                // b) Ukryj detale (zakładamy, że styl inline 'display:none' jest używany do ukrycia)
                detailElement.style.display = 'none';
                
                // c) Zmień tekst przycisku
                clickedButton.textContent = SHOW_TEXT;
                
            } else {
                // JEŚLI NIE JEST AKTYWNY -> POKAŻ (POKAŻ DETALE)
                
                // a) Dodaj klasę aktywną do elementu .car
                carElement.classList.add(ACTIVE_CLASS);
                
                // b) Pokaż detale (usuń styl 'display:none' lub ustaw 'display:block/flex/etc')
                detailElement.style.display = 'block';
                
                // c) Zmień tekst przycisku
                clickedButton.textContent = HIDE_TEXT;
            }
        });
    });
});