document.addEventListener('DOMContentLoaded', function() {
    
    // 1) Pobieranie elementu #menu i dodanie klasy .menu
    const menu = document.querySelector('#menu');
    if (!menu) {
        console.error("Element #menu nie został znaleziony!");
        return;
    }
    menu.classList.add('menu');

    // 2) Pobieranie wszystkich elementów LI i A
    const allListItems = menu.querySelectorAll('li');
    const allLinks = menu.querySelectorAll('a');

    // =========================================================
    // FUNKCJE POMOCNICZE
    // =========================================================

    /**
     * Funkcja czyszcząca klasy 'active', 'expand' i 'collapsed' ze wszystkich elementów LI w menu.
     */
    function resetMenuClasses() {
        allListItems.forEach(li => {
            li.classList.remove('active', 'expand', 'collapsed');
            
            // Usuwanie ewentualnych przycisków .close
            const closeButton = li.querySelector('.close');
            if (closeButton) {
                closeButton.remove();
            }
        });
    }

    /**
     * Funkcja wywoływana po zakończeniu animacji (transitionend).
     * @param {Event} event - Obiekt zdarzenia
     */
    function elementTransitionEnd(event) {
        // Upewniamy się, że zdarzenie pochodzi od elementu LI (currentTarget)
        const listItem = event.currentTarget;
        
        // 4) W funkcji tej: usuń zdarzenie "transitionend"
        // Używamy samej nazwy funkcji, by ją usunąć
        listItem.removeEventListener('transitionend', elementTransitionEnd);
        
        // Pobieramy link, aby uzyskać jego href
        const link = listItem.querySelector('a');
        if (link) {
            const href = link.getAttribute('href');
            // 4) Wypisz w konsoli href linka w tym LI (lub użyj location.href)
            console.log(`Przejście do: ${href}`);
            // Alternatywnie: location.href = href;
        }

        // =========================================================
        // 5) DLA CHĘTNYCH: Dodanie przycisku Zamknij
        // =========================================================
        
        const closeButton = document.createElement('button');
        closeButton.classList.add('close');
        closeButton.textContent = 'Zamknij';
        
        // Dodanie elementu do LI
        listItem.appendChild(closeButton);
        
        // Podpięcie zdarzenia kliknięcia dla przycisku .close
        closeButton.addEventListener('click', function() {
            // Po kliknięciu na przycisk .close wszystkim LI usuń klasy expand i collapsed
            resetMenuClasses();
            
            // Usuń kliknięty przycisk .close (przy kliknięciu on się usunie)
            // this.remove(); // to też działa, ale resetMenuClasses już to robi
        });
    }


    // =========================================================
    // OBSŁUGA ZDARZEŃ
    // =========================================================

    // 3) mouseover: Dodawanie klasy .active do najechanego LI
    allListItems.forEach(li => {
        li.addEventListener('mouseover', function() {
            // Usuwamy .active ze wszystkich pozostałych LI
            allListItems.forEach(item => {
                if (item !== this) {
                    item.classList.remove('active');
                }
            });
            // Dodajemy .active do bieżącego LI
            this.classList.add('active');
        });
    });

    // 4) click: Przełączanie stanów collapsed/expand
    allLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // 4) Zatrzymaj domyślną akcję linku
            event.preventDefault();
            
            const clickedLi = this.parentElement;

            // 4) Dodajemy klasę .collapsed do wszystkich LI poza klikniętym
            allListItems.forEach(li => {
                // Najpierw resetujemy wszystkie stany rozszerzenia/zwijania
                li.classList.remove('expand', 'collapsed'); 
                
                // Dodajemy .collapsed do innych LI
                if (li !== clickedLi) {
                    li.classList.add('collapsed');
                }
            });

            // 4) Rodzicowi klikniętego linka (LI) dodaj klasę .expand
            clickedLi.classList.add('expand');
            
            // Opcjonalnie usuwamy klasę .active, aby nie kolidowała wizualnie
            clickedLi.classList.remove('active'); 
            
            // 4) Rodzicowi klikniętego linka dodaj event "transitionend"
            // Używamy opcji { once: true }, aby zdarzenie zostało automatycznie usunięte po pierwszym wywołaniu
            // Można też użyć removeEventListener wewnątrz funkcji elementTransitionEnd, 
            // ale to jest bardziej czysty sposób.
            
            // Zgodnie z instrukcją - podpinamy i usuwamy w funkcji
            clickedLi.addEventListener('transitionend', elementTransitionEnd);
            
            // Usuwamy ewentualne przyciski .close, jeśli wcześniej były dodane
            const existingClose = clickedLi.querySelector('.close');
            if (existingClose) {
                existingClose.remove();
            }
        });
    });
});
