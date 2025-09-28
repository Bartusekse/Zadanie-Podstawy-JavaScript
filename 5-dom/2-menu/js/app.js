document.addEventListener('DOMContentLoaded', () => {
    // 1. Znajdź wszystkie elementy LI, które są elementami nawigacji
    const navElements = document.querySelectorAll('.nav-el');
    
    // Sprawdzenie, czy elementy zostały znalezione
    if (navElements.length === 0) {
        console.error("Nie znaleziono elementów nawigacji o klasie '.nav-el'.");
        return;
    }

    // Dodaj obsługę zdarzenia click do każdego elementu LI
    navElements.forEach(liElement => {
        
        // Używamy funkcji anonimowej do obsługi kliknięcia
        liElement.addEventListener('click', (event) => {
            
            // 2. Zapobieganie przeładowaniu strony
            // Ponieważ kliknięcie następuje na LI, a event "bąbelkuje" do linku <a>
            // musimy zapobiec domyślnej akcji linku <a>, która jest zagnieżdżona wewnątrz LI.
            // Najpewniej jest użyć preventDefault() bezpośrednio.
            event.preventDefault();

            // 3. Znajdź obecnie aktywny element i usuń mu klasę
            const currentlyActive = document.querySelector('.nav-el-active');
            if (currentlyActive) {
                currentlyActive.classList.remove('nav-el-active');
            }

            // 4. Dodaj klasę .nav-el-active do klikniętego elementu LI
            // event.currentTarget zawsze odnosi się do elementu, do którego przypisano nasłuchiwanie (w tym przypadku do LI)
            event.currentTarget.classList.add('nav-el-active');

            // Opcjonalne: Wyświetl informację w konsoli
            const linkText = event.currentTarget.querySelector('.nav-link').textContent;
            console.log(`Aktywny element zmieniony na: ${linkText}`);
        });
    });
});