document.addEventListener('DOMContentLoaded', () => {
    // 1. Znajdź główny element UL (zakładamy, że jest tylko jeden, lub jest to pierwszy)
    const ulElement = document.querySelector('ul');
    
    // Sprawdzenie, czy element został znaleziony
    if (!ulElement) {
        console.error("Nie znaleziono elementu <ul> w dokumencie.");
        return;
    }

    // Pobranie wszystkich elementów LI
    const liElements = ulElement.querySelectorAll('li');
    
    // Pobranie wszystkich elementów A
    const linkElements = ulElement.querySelectorAll('a');
    
    // ==========================================================
    // 1. Dodaj mu klasę .menu
    // ==========================================================
    ulElement.classList.add('menu');

    // Sprawdzenie, czy lista zawiera wystarczającą liczbę elementów
    if (liElements.length < 3) {
        console.warn("Lista menu musi mieć co najmniej 3 elementy dla pełnego wykonania zadania.");
        return;
    }

    // ==========================================================
    // 2. Pierwszemu LI dodaj klasę `.first`
    // 3. Ostatniemu LI dodaj klasę `.last`
    // 4. Trzeciemu LI ustaw klasę `.active`
    // ==========================================================
    
    // Elementy skrajne
    liElements[0].classList.add('first');
    liElements[liElements.length - 1].classList.add('last');

    // Trzeci element (indeks 2)
    const activeLi = liElements[2];
    activeLi.classList.add('active');

    // ==========================================================
    // 5. Trzeciemu LI ustaw za pomocą JS kolor tekstu na `#fff`
    // ==========================================================
    // Kolor tekstu jest na linku A, a nie LI. Ustawiamy kolor na linku.
    const activeLink = activeLi.querySelector('a');
    if (activeLink) {
        activeLink.style.color = '#fff';
    }


    // ==========================================================
    // 6. i 7. Ustawienie atrybutów title i href dla każdego linka
    // ==========================================================
    
    linkElements.forEach(link => {
        const linkText = link.textContent;
        
        // 6. Ustaw atrybut title
        link.setAttribute('title', `Przejdź na stronę ${linkText}`);
        
        // 7. Ustaw atrybut href na #
        link.setAttribute('href', '#');
    });

    console.log("Pytanie 7: Po co ustawiamy atrybut href na #? Czy jest alternatywna metoda?");
    console.log("Odpowiedź:");
    console.log("Ustawienie `href=\"#\"` jest często robione, aby link zachowywał się jak link (np. miał domyślny wygląd kursora i możliwość kliknięcia), ale nie powodował przeładowania strony, tylko przewijał do góry strony (czyli do fragmentu `#`).");
    console.log("Alternatywna metoda (i lepsza) to użycie `event.preventDefault()` w funkcji obsługującej zdarzenie kliknięcia lub użycie elementu niebędącego linkiem, np. `<button>` lub `<span>`, odpowiednio go stylizując, jeśli jego przeznaczeniem jest tylko wywołanie akcji JS.");

    // ==========================================================
    // 8. Dodaj zdarzenie CLICK (alert)
    // ==========================================================
    
    // Funkcja do obsługi kliknięcia
    const clickHandler = function(event) {
        //event.preventDefault(); // Opcjonalnie: zapobiega domyślnej akcji (przewinięciu do góry przez href="#")
        
        const linkText = event.target.textContent;
        alert(`Kliknięto ${linkText}`);
    };

    // Dodanie nasłuchiwania do wszystkich linków
    linkElements.forEach(link => {
        link.addEventListener('click', clickHandler);
    });


    // ==========================================================
    // 9. Dla linka w `li.active` usuń zdarzenie click
    // ==========================================================

    // Usunięcie zdarzenia wymaga podania TEJ SAMEJ funkcji, która została dodana.
    // Dlatego zapisaliśmy ją jako stałą `clickHandler`.
    if (activeLink) {
        activeLink.removeEventListener('click', clickHandler);
        console.log(`\nZdarzenie CLICK usunięte dla linka: ${activeLink.textContent}`);
    }

});

/* 1. Po co to robimy (href="#")?

- Estetyka i Użyteczność: Ustawienie href na cokolwiek (nawet #) sprawia, że przeglądarka traktuje element <a> jak prawdziwy link. Powoduje to, że domyślny kursor zmienia się na wskaźnik (pointer), co sygnalizuje użytkownikowi, że element jest klikalny.

- Dostępność (Accessibility): Linki z atrybutem href są naturalnie uwzględniane przez czytniki ekranu i można się po nich poruszać za pomocą klawisza Tab.

- Działanie Domyślne: Link z href="#" po kliknięciu nie przeładowuje strony, lecz przewija okno widoku do samego szczytu dokumentu.*/

/* 2. Czy jest alternatywna metoda?

- Tak, jest lepsza alternatywa. Najbardziej poprawną metodą w kontekście elementu, który ma tylko wywoływać akcję JavaScript, jest użycie elementu <button> lub ogólnego elementu <span> lub <div>, a następnie odpowiednie ostylowanie go, aby wyglądał jak link. Jeśli musimy użyć <a>, należy użyć:

  - event.preventDefault() wewnątrz funkcji obsługującej zdarzenie click, aby całkowicie zablokować domyślną akcję elementu <a> (np. przejście na inny adres lub przewinięcie do góry).

  - Ustawienie href="javascript:void(0)" (praktyka historyczna, obecnie niezalecana).

- Podsumowując, jeśli celem jest tylko wywołanie funkcji JS, lepszym semantycznie wyborem jest użycie <button type="button"> i obsługa zdarzenia click, ponieważ link (<a>) z definicji służy do nawigacji.*/