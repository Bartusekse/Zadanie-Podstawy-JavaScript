const list = document.querySelector('.list');
const addBtn = document.querySelector('#add');
const elementTemplate = document.querySelector('#elementInner');

/**
 * Prze-numerowuje wszystkie elementy na liście (.element)
 * Aktualizuje numer wewnątrz span.nr.
 */
function renumberElements() {
    const elements = list.querySelectorAll('.element');
    elements.forEach((element, index) => {
        const nrSpan = element.querySelector('.nr');
        // Numeracja zaczyna się od 1
        nrSpan.textContent = index + 1;
    });
}

/**
 * Tworzy i dodaje nowy element na końcu listy.
 */
function addElement() {
    // 1. Pobranie i przygotowanie struktury z szablonu
    const newElementHtml = elementTemplate.textContent.trim();
    const newElement = document.createElement('div');
    newElement.classList.add('element');
    newElement.innerHTML = newElementHtml;

    // 2. Dodanie do listy
    list.appendChild(newElement);

    // 3. Prze-numerowanie elementów
    renumberElements();
}

// -----------------------------------------------------
// Inicjalizacja: Upewnij się, że pierwszy element ma poprawny numer 1
renumberElements();

// -----------------------------------------------------
// 1. Funkcjonalność "Dodaj element"
addBtn.addEventListener('click', addElement);

// -----------------------------------------------------
// 2 & 3. Funkcjonalność "Delete" i "Clone" za pomocą delegacji zdarzeń
// Zdarzenia przypisujemy do kontenera .list, który jest statyczny,
// a następnie sprawdzamy, który dynamiczny element został kliknięty.
list.addEventListener('click', function(event) {
    const target = event.target;
    // Znajdź najbliższego rodzica .element
    const element = target.closest('.element');

    if (!element) {
        return; // Kliknięcie nie było na przycisku wewnątrz elementu
    }

    // Obsługa usuwania
    if (target.classList.contains('delete')) {
        element.remove();
        // Prze-numeruj pozostałe elementy
        renumberElements();
    }

    // Obsługa klonowania
    if (target.classList.contains('clone')) {
        // Głębokie klonowanie całego elementu
        const clonedElement = element.cloneNode(true);
        // Wstawienie klonu bezpośrednio po elemencie oryginalnym
        element.after(clonedElement);
        // Prze-numeruj wszystkie elementy, aby klon otrzymał poprawny numer
        renumberElements();
    }
});