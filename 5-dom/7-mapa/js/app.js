document.addEventListener('DOMContentLoaded', function() {
    
    // Sprawdzenie, czy dane są dostępne
    if (typeof cities === 'undefined' || !cities.length) {
        console.error('Błąd: Tablica "cities" jest niedostępna lub pusta.');
        return;
    }

    const mapContainer = document.querySelector('.map');
    
    // Funkcja do formatowania populacji (dla lepszej czytelności w tooltipie)
    const formatPopulation = (population) => {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    
    // =========================================================
    // Zadanie 2: Tworzenie elementu tooltipa
    // =========================================================
    const tooltip = document.createElement('div');
    tooltip.classList.add('map-tooltip');
    tooltip.style.left = '-9999px'; // Ukrycie początkowe
    tooltip.style.top = '-9999px';
    
    document.body.appendChild(tooltip); 

    // =========================================================
    // Zadanie 1: Generowanie markerów (pętla)
    // =========================================================
    
    cities.forEach(city => {
        
        const marker = document.createElement('a');
        
        // 1. Ustawienie href i klasy
        marker.setAttribute('href', city.href);
        marker.classList.add('map-marker');
        
        // 1. Ustawienie dataset
        marker.dataset.name = city.name;
        marker.dataset.population = city.population;
        
        // 1. Ustawienie stylu (pozycji) - odejmujemy połowę szerokości/wysokości dla wyśrodkowania
        marker.style.left = `${city.map_x - 6}px`;
        marker.style.top = `${city.map_y - 6}px`;
        
        // Tekst (jest ukryty przez CSS, ale dodany dla kompletności)
        marker.textContent = city.name;
        
        // Wrzucenie do mapy
        mapContainer.appendChild(marker);
    });

    // =========================================================
    // Zadanie 3: Obsługa zdarzeń dla markerów
    // =========================================================
    
    const markers = document.querySelectorAll('.map-marker');
    
    markers.forEach(marker => {
        
        // 3a) mouseover: Wypełnienie, ustawienie pozycji i pokazanie
        marker.addEventListener('mouseover', function(event) {
            const cityName = this.dataset.name;
            const cityPopulation = formatPopulation(this.dataset.population);
            
            // Wypełnienie htmlem
            tooltip.innerHTML = `
                <h2>${cityName}</h2>
                <div>Population: <strong>${cityPopulation}</strong></div>
            `;

            // Ustawienie pozycji kursora (+30 do x i y)
            const x = event.pageX + 30;
            const y = event.pageY + 30;
            
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
            
            // Pokazanie
            tooltip.classList.add('visible');
        });
        
        // 3b) mousemove: Ustawianie pozycji za kursorem
        marker.addEventListener('mousemove', function(event) {
            // Ustawienie pozycji kursora (+30 do x i y)
            const x = event.pageX + 30;
            const y = event.pageY + 30;
            
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        });
        
        // 3c) mouseout: Ukrycie i wyczyszczenie
        marker.addEventListener('mouseout', function() {
            // Ukrycie
            tooltip.classList.remove('visible');
            
            // Ukrycie i wyczyszczenie HTMLa
            tooltip.style.left = '-9999px';
            tooltip.style.top = '-9999px';
            tooltip.innerHTML = '';
        });
    });
});
