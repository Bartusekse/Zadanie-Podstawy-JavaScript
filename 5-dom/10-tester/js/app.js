document.addEventListener('DOMContentLoaded', function() {

    // Tworzenie stałego elementu tooltipa (Zadanie 1b)
    const tooltip = document.createElement('div');
    tooltip.id = 'dom-debugger-tooltip';
    tooltip.style.cssText = `
        position: fixed;
        top: -99999px; /* Ukrycie poza ekranem */
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 12px;
        z-index: 99999; /* Zapewnienie widoczności nad innymi elementami */
        pointer-events: none; /* Ignorowanie kliknięć/najechania na sam tooltip */
        transition: opacity 0.2s;
        opacity: 0;
        max-width: 250px;
    `;
    document.body.appendChild(tooltip);

    /**
     * Główna funkcja: Dodaje obramowanie debugujące i obsługę tooltipa.
     */
    function applyDomDebugger() {
        
        // 1) Pobieranie wszystkich elementów z BODY (bez BODY i SCRIPTów)
        // Używamy body.querySelectorAll('*') by złapać wszystkie elementy wewnątrz
        const allElements = document.body.querySelectorAll('*');
        
        // Konwertujemy NodeList do Array, aby łatwiej iterować i wykluczyć pewne elementy,
        // oraz upewnić się, że nie łapiemy naszego tooltipa
        const elementsToDebug = Array.from(allElements).filter(el => 
            el.id !== 'dom-debugger-tooltip'
        );

        // Usuwamy istniejące nasłuchiwacze, jeśli funkcja była już wywołana (dobra praktyka)
        elementsToDebug.forEach(el => {
            el.removeEventListener('mouseover', handleMouseOver);
            el.removeEventListener('mouseout', handleMouseOut);
            el.style.removeProperty('background'); // Usuwanie tła, jeśli istniało
        });
        
        // Iteracja i dodawanie atrybutów oraz obramowania
        elementsToDebug.forEach(element => {
            // Dla każdego elementu wylosuj losową liczbę z zakresu 0-360
            const hue = Math.floor(Math.random() * 361);
            
            // Wylosowaną liczbę zapisz w atrybucie data-my-debug-color
            element.setAttribute('data-my-debug-color', hue);
            
            // Ustawienie obramowania w kolorze HSL
            const color = `hsl(${hue}, 100%, 60%)`;
            
            // Używamy box-shadow zamiast outline, ponieważ box-shadow nie wpływa na pozycję elementu.
            element.style.boxShadow = `0 0 0 1px ${color}`;

            // =========================================================
            // Zadanie 1b: Obsługa zdarzeń dla tooltipa
            // =========================================================
            element.addEventListener('mouseover', handleMouseOver);
            element.addEventListener('mouseout', handleMouseOut);
        });
    }

    /**
     * Obsługuje zdarzenie mouseover: ustawia tło i wyświetla tooltip.
     * @param {MouseEvent} event
     */
    function handleMouseOver(event) {
        const element = event.currentTarget;
        const hue = element.getAttribute('data-my-debug-color');
        
        // ZADANIE 1b: Ustawienie tła
        const backgroundColor = `hsla(${hue}, 100%, 60%, 0.2)`;
        element.style.background = backgroundColor;

        // ZADANIE 1b: Pobieranie i wyświetlanie wymiarów (Tooltip)
        const rect = element.getBoundingClientRect();
        
        // Wypełnienie tooltipa
        tooltip.innerHTML = `
            Tag: &lt;${element.tagName.toLowerCase()}&gt;<br>
            **Wymiary (px)**<br>
            Szerokość: ${Math.round(rect.width)}<br>
            Wysokość: ${Math.round(rect.height)}<br>
            Pozycja:<br>
            Top: ${Math.round(rect.top)}<br>
            Left: ${Math.round(rect.left)}
        `;

        // Pozycjonowanie tooltipa w prawym górnym rogu
        tooltip.style.top = '10px';
        tooltip.style.right = '10px';
        tooltip.style.opacity = '1';
        
        // Zapobieganie bąbelkowaniu zdarzenia do rodziców, aby nie pokazywać 
        // tooltipa dla każdego elementu najechanego wewnątrz innego elementu
        event.stopPropagation();
    }

    /**
     * Obsługuje zdarzenie mouseout: usuwa tło i ukrywa tooltip.
     * @param {MouseEvent} event
     */
    function handleMouseOut(event) {
        const element = event.currentTarget;
        
        // Usuń tło
        element.style.background = '';
        
        // Ukryj tooltip
        tooltip.style.top = '-99999px';
        tooltip.style.opacity = '0';
        
        event.stopPropagation();
    }

    // Uruchomienie funkcji, gdy strona jest załadowana
    applyDomDebugger();

    // Możesz również dodać nasłuch na resize, aby debugować elementy po zmianie rozmiaru okna,
    // ale to nie jest wymagane w zadaniu.
    // window.addEventListener('resize', applyDomDebugger);
});
