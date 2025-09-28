document.addEventListener('DOMContentLoaded', () => {
    // Stałe referencje do elementów DOM
    const userList = document.querySelector('.user-list');
    const form = document.querySelector('.form');
    const nameInput = document.querySelector('#name');
    const phoneInput = document.querySelector('#phone');

    // Sprawdzenie, czy elementy zostały znalezione
    if (!userList || !form || !nameInput || !phoneInput) {
        console.error("Nie znaleziono wymaganych elementów DOM (user-list, form, #name, #phone).");
        return;
    }

    // --- FUNKCJA WSPOMAGAJĄCA: GENEROWANIE NOWEGO UŻYTKOWNIKA (LI) ---
    /**
     * Tworzy nowy element <li> użytkownika.
     * @param {string} name Imię i nazwisko użytkownika.
     * @param {string} phone Numer telefonu użytkownika.
     * @returns {HTMLLIElement} Nowy element <li>.
     */
    function createNewUserElement(name, phone) {
        const li = document.createElement('li');
        li.classList.add('user');
        
        // Używamy innerHTML dla prostoty i czytelności, ale w praktyce 
        // można tworzyć elementy za pomocą document.createElement dla bezpieczeństwa.
        li.innerHTML = `
            <div class="user-data">
                <div class="user-name">${name}</div>
                <div class="user-phone">${phone}</div>
            </div>
            <button type="button" class="btn user-delete">
                Usuń
            </button>
        `;
        
        return li;
    }

    // --- ZADANIE 1: OBSŁUGA WYSYŁKI FORMULARZA (DODAWANIE UŻYTKOWNIKA) ---

    // Podpięcie się pod zdarzenie 'submit' dla całego formularza
    form.addEventListener('submit', (event) => {
        // ZAPOBIEGANIE PRZEŁADOWANIU STRONY
        event.preventDefault(); 

        const nameValue = nameInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        // Prosta walidacja
        if (nameValue === '' || phoneValue === '') {
            alert('Proszę wypełnić oba pola: Imię i nazwisko oraz Telefon.');
            return;
        }

        // a) Utwórz nowy element użytkownika
        const newUserEl = createNewUserElement(nameValue, phoneValue);

        // b) Dodaj nowego użytkownika na koniec listy
        userList.appendChild(newUserEl);

        // c) Opcjonalnie: wyczyść pola formularza
        form.reset();
        
        console.log(`Dodano nowego użytkownika: ${nameValue}`);
    });


    // --- ZADANIE 2: OBSŁUGA USUWANIA UŻYTKOWNIKA (DELEGACJA ZDARZEŃ) ---

    // Zamiast dodawać listener do każdego przycisku "Usuń", 
    // dodajemy jeden listener do elementu nadrzędnego (userList)
    userList.addEventListener('click', (event) => {
        
        // Sprawdź, czy kliknięty element to przycisk usuwania
        const clickedElement = event.target;
        
        if (clickedElement.classList.contains('user-delete')) {
            
            // Znajdź najbliższy element przodka z klasą '.user' (cały wiersz użytkownika)
            const userToRemove = clickedElement.closest('.user');
            
            if (userToRemove) {
                // Usuń element z listy
                userList.removeChild(userToRemove);
                console.log("Usunięto użytkownika.");
            }
        }
    });

});