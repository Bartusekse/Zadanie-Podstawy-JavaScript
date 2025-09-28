document.addEventListener('DOMContentLoaded', () => {
    // 1. Znajdź wszystkie linki w zakładkach
    const tabLinks = document.querySelectorAll('.tab-link');
    
    // 2. Znajdź wszystkie bloki z treścią zakładek
    const tabContents = document.querySelectorAll('.tab-content');

    // Sprawdzenie, czy elementy zostały znalezione
    if (tabLinks.length === 0 || tabContents.length === 0) {
        console.error("Nie znaleziono elementów zakładek (.tab-link lub .tab-content).");
        return;
    }

    // Dodaj obsługę zdarzenia click do każdego linku
    tabLinks.forEach(link => {
        
        link.addEventListener('click', (event) => {
            
            // 2.1. Zapobiegnij domyślnej akcji (przewinięciu do sekcji #id lub przeładowaniu)
            event.preventDefault();

            // 3. OBSŁUGA AKTYWNEJ ZAKŁADKI (LI)

            // a) Znajdź i usuń klasę .tab-el-active z obecnie aktywnego LI
            const currentlyActiveLi = document.querySelector('.tab-el-active');
            if (currentlyActiveLi) {
                currentlyActiveLi.classList.remove('tab-el-active');
            }

            // b) Dodaj klasę .tab-el-active do klikniętego LI (element rodzicielski linku)
            const clickedLi = event.currentTarget.closest('.tab-el');
            if (clickedLi) {
                clickedLi.classList.add('tab-el-active');
            }


            // 4. OBSŁUGA TREŚCI ZAKŁADEK (DIV)

            // a) Ukryj wszystkie bloki z treścią
            const currentlyActiveContent = document.querySelector('.tab-content-active');
            if (currentlyActiveContent) {
                currentlyActiveContent.classList.remove('tab-content-active');
            }
            // UWAGA: Ponieważ ukrywanie i pokazywanie jest sterowane przez klasę .tab-content-active,
            // możemy po prostu upewnić się, że usunęliśmy tę klasę z poprzedniego bloku.
            
            
            // b) Znajdź treść, którą należy wyświetlić
            // Link zawiera atrybut href, który wskazuje ID elementu treści (np. '#js')
            const targetId = event.currentTarget.getAttribute('href'); 

            // c) Pokaż odpowiednią treść, dodając jej klasę .tab-content-active
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.classList.add('tab-content-active');
                console.log(`Przełączono na zakładkę: ${targetId}`);
            }
        });
    });
});