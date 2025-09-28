document.addEventListener('DOMContentLoaded', () => {

    // Pomocnicza funkcja do usuwania elementów po wykonaniu zadania
    // Działa tylko wtedy, gdy element ma klasę 'el'
    const removeElements = (selector) => {
        const elementsToRemove = document.querySelectorAll(selector);
        elementsToRemove.forEach(el => {
            if (el.classList.contains('el')) {
                el.remove();
            }
        });
    };

    // ==========================================================
    // 1. Znajdź elementy o klasie `.first-attempt` - dodaj im klasę `.active`
    // Kwadraty z numerem 1
    // ==========================================================
    console.log("1. Znajdź .first-attempt, dodaj .active");
    const firstAttemptElements = document.querySelectorAll('.first-attempt');
    
    // Używamy forEach
    firstAttemptElements.forEach(el => {
        el.classList.add('active');
    });
    
    // Usuń elementy po wykonaniu zadania
    removeElements('.first-attempt');


    // ==========================================================
    // 2. Znajdź elementy z atrybutem `data-border` i dodaj im atrybut `data-el-active`. 
    // Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu.
    // Kwadraty z numerem 2
    // ==========================================================
    console.log("2. Znajdź [data-border], dodaj data-el-active (dataset, pętla for...of)");
    const dataBorderElements = document.querySelectorAll('[data-border]');
    
    // Używamy pętli for...of
    for (const el of dataBorderElements) {
        // Użycie dataset do ustawienia nowego atrybutu data-*
        el.dataset.elActive = 'true';
    }

    // Usuń elementy po wykonaniu zadania
    removeElements('[data-border]');


    // ==========================================================
    // 3. Znajdź elementy z klasą `.hack`. Dodaj im atrybut title ustawiony na wartość "hacking". 
    // Atrybut ten nie powinien zaczynać się od `data-`
    // Kwadraty z numerem 3
    // ==========================================================
    console.log("3. Znajdź .hack, dodaj atrybut title='hacking'");
    const hackElements = document.querySelectorAll('.hack');
    
    hackElements.forEach(el => {
        el.setAttribute('title', 'hacking');
    });

    // Usuń elementy po wykonaniu zadania
    removeElements('.hack');


    // ==========================================================
    // 4. Znajdź elementy o klasie `.hijack`. Usuń im atrybut `title`
    // Kwadraty z numerem 4
    // ==========================================================
    console.log("4. Znajdź .hijack, usuń atrybut title");
    const hijackElements = document.querySelectorAll('.hijack');

    hijackElements.forEach(el => {
        el.removeAttribute('title');
    });

    // Usuń elementy po wykonaniu zadania
    removeElements('.hijack');


    // ==========================================================
    // 5. Znajdź elementy które mają 2 klasy równocześnie: `.st1` i `.st2`. 
    // Dodaj im style: `color na red`, i `font-size na 15px`
    // Kwadraty z numerem 5
    // ==========================================================
    console.log("5. Znajdź .st1.st2, dodaj style");
    // Selektor z połączonymi klasami: .st1.st2
    const st1st2Elements = document.querySelectorAll('.st1.st2');
    
    st1st2Elements.forEach(el => {
        el.style.color = 'red';
        el.style.fontSize = '15px'; // Zgodnie z poleceniem, choć 15px jest bardzo małe
    });

    // Usuń elementy po wykonaniu zadania
    removeElements('.st1.st2');


    // ==========================================================
    // 6. Znajdź elementy które mają klasę `.attrib`. Dodaj im atrybut `data-hack-active`, 
    // usuń atrybut `data-hack-inactive`
    // Kwadraty z numerem 6
    // ==========================================================
    console.log("6. Znajdź .attrib, zmień atrybuty data-*");
    const attribElements = document.querySelectorAll('.attrib');
    
    // Używamy dataset, ponieważ to atrybuty data-*
    attribElements.forEach(el => {
        el.dataset.hackActive = 'true'; // Dodaje data-hack-active="true"
        delete el.dataset.hackInactive; // Usuwa data-hack-inactive
    });
    
    // Usuń elementy po wykonaniu zadania
    removeElements('.attrib');


    // ==========================================================
    // 7. Znajdź elementy o klasie `.last-attempt` i ukryj (nie usuwaj) w ich wnętrzu spany
    // Kwadraty z numerem 7
    // ==========================================================
    console.log("7. Znajdź .last-attempt, ukryj spany wewnątrz");
    // Znajdujemy wszystkie spany zagnieżdżone w elementach z klasą .last-attempt
    const lastAttemptSpans = document.querySelectorAll('.last-attempt span');

    lastAttemptSpans.forEach(span => {
        // Możemy ukryć element za pomocą atrybutu style display: none
        span.style.display = 'none';
    });

    // UWAGA: Kwadraty z numerem 7 są usuwane przez kod z data-source.js, 
    // jeżeli w ich wnętrzu nie ma widocznych elementów span. 
    // Po poprawnym ukryciu spanów, usuwanie nastąpi automatycznie.
    
    console.log("\nZadanie zakończone. Kwadraty o numerach 1-6 zostały usunięte. Kwadraty 7 są ukryte.");
});