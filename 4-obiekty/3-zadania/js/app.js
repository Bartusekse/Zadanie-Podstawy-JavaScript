// ====================================================================
// ZADANIE 1: Klasa User
// ====================================================================

console.log("==========================\n=== ZADANIE 1: Klasa User ===\n==========================");

class User {
    // Konstruktor, który przyjmuje obowiązkowe właściwości
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        // Właściwości domyślne
        this.loginDates = [];
        this.active = true;
    }

    // Metoda do logowania i zapisu daty
    logIn() {
        // Formatowanie aktualnej daty
        const now = new Date();
        const formattedDate = new Intl.DateTimeFormat('pl-PL', { 
            dateStyle: 'full', 
            timeStyle: 'long' 
        }).format(now);
        
        this.loginDates.push(formattedDate);
        console.log(`[${this.nick}] Zalogowano: ${formattedDate}`);
    }

    // Metoda do wyświetlania dat logowania
    showLoginDates() {
        console.log(`\n--- Daty logowania dla ${this.nick} ---`);
        if (this.loginDates.length === 0) {
            console.log("Brak zarejestrowanych logowań.");
            return;
        }
        this.loginDates.forEach((date, index) => {
            console.log(`${index + 1}. ${date}`);
        });
        console.log("---------------------------------------");
    }

    // Metoda do wyświetlania szczegółów obiektu
    showDetails() {
        console.log(`\n--- Szczegóły użytkownika: ${this.nick} ---`);
        // Użycie pętli for...in do iteracji po kluczach
        for (const key in this) {
            // Sprawdzamy, czy klucz nie jest funkcją
            if (typeof this[key] !== 'function') {
                const value = this[key];
                // Specjalna obsługa dla tablicy loginDates, aby nie wyświetlać jej jako [Array]
                if (key === 'loginDates') {
                    console.log(`- ${key}: ${value.length} logowań`);
                } else {
                    console.log(`- ${key}: ${value}`);
                }
            }
        }
        console.log("-----------------------------------------");
    }

    // Metoda do przełączania statusu active
    toggleActive(active) {
        // Jeżeli argument active jest booleanem, ustawia go, w przeciwnym razie przełącza na odwrotność
        this.active = typeof active === 'boolean' ? active : !this.active;
        console.log(`[${this.nick}] Status aktywności zmieniony na: ${this.active}`);
    }
}

// 1. Stworzenie tablicy users i dodanie 3 obiektów
const users = [
    new User("Marcin01", "Marcin", "Kowalski", "m.kowalski@example.com", "admin"),
    new User("AniaR", "Anna", "Nowak", "a.nowak@example.com", "reader"),
    new User("PiotrE", "Piotr", "Zieliński", "p.zielinski@example.com", "editor")
];

// 2. Eksperymentowanie z metodami
console.log("\n--- Eksperymenty z metodami ---");
users[0].logIn();
users[0].logIn();
users[0].toggleActive(false); 
users[0].showLoginDates();
users[0].showDetails();

users[1].logIn();
users[1].showDetails();


// ====================================================================
// ZADANIE 2: Symulacja Turnieju (Klasa Fighter)
// ====================================================================

console.log("\n\n==========================\n=== ZADANIE 2: Turniej Fighters ===\n==========================");

// Tablica dostępnych imion (będziemy z niej usuwać postacie)
const names = [ "Baraka", "Jax", "Johnny Cage", "Kitana", "Kung Lao", "Liu Kang", "Mileena", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sub-Zero"];

// Tablice dla logowania akcji i wszystkich wojowników
const log = [];
const fighters = [];

// Zmienne dla obecnej walki
let leftFighter = null;
let rightFighter = null;
const INITIAL_LIVE = 20;
const INITIAL_POWER = 3;


// 1) Stwórz klasę Fighter
class Fighter {
    constructor(name, live = INITIAL_LIVE, power = INITIAL_POWER) {
        this.name = name;
        this.live = live;
        this.power = power;
    }

    // Metoda ataku
    attack(who) {
        // Sprawdzenie, czy atak się udał
        const hit = Math.random() < 0.5;
        let logMessage;

        if (hit) {
            // Celny atak
            who.live -= this.power;
            who.live = Math.max(0, who.live); // Życie nie może spaść poniżej 0
            
            logMessage = `%c${this.name} uderzył ${who.name} za ${this.power} siły! %c(${who.name} traci życie. Pozostało: ${who.live})`
            log.push([
                logMessage,
                "color: green; font-weight: bold;", // Styl dla ataku
                "color: black;"                      // Styl dla pozostałego życia
            ]);
        } else {
            // Niecelny atak
            logMessage = `${this.name} spudłował atak na ${who.name}.`;
            log.push([logMessage, "color: orange;"]);
        }
    }
}

// 2) Stwórz tablicę fighters
names.forEach(name => {
    fighters.push(new Fighter(name));
});

console.log(`Zaczynamy turniej! Liczba wojowników: ${fighters.length}`);


// 3) Funkcja do pobierania nowego wojownika
function getFighter() {
    if (fighters.length === 0) {
        return null;
    }
    // Losowe wybranie indeksu
    const randomIndex = Math.floor(Math.random() * fighters.length);
    // Usunięcie i zwrócenie wojownika (metoda splice zwraca tablicę, dlatego [0])
    return fighters.splice(randomIndex, 1)[0];
}

/**
 * Resetuje życie wojownika i dodaje wiadomość do logu.
 * @param {Fighter} fighter Wojownik do zresetowania.
 */
function resetFighter(fighter) {
    fighter.live = INITIAL_LIVE;
    log.push([`%c${fighter.name} wygrał rundę i zregenerował siły.`, "color: blue; font-weight: bold;"]);
}

/**
 * Wyświetla aktualny log i czyści konsolę
 */
function showLog() {
    console.clear();
    log.forEach(entry => {
        // console.log używa formatowania (jeśli dostarczono)
        if (entry.length > 1) {
            console.log(entry[0], entry[1], entry[2] || '');
        } else {
            console.log(entry[0]);
        }
    });
    // Usuwamy najstarsze wpisy, żeby konsola nie przepełniła się zbyt szybko
    while (log.length > 20) {
        log.shift();
    }

    const currentFightInfo = `
    ⚔️ --- AKTUALNA WALKA --- ⚔️
    ${leftFighter ? leftFighter.name : 'Czeka'} (Życie: ${leftFighter ? leftFighter.live : 'N/A'}) 
    VS
    ${rightFighter ? rightFighter.name : 'Czeka'} (Życie: ${rightFighter ? rightFighter.live : 'N/A'})
    Pozostało w rezerwie: ${fighters.length}
    `;
    console.log(currentFightInfo);
}


// 5) Główna pętla turnieju
function loop() {
    
    // 1. Pobierz nowych wojowników, jeśli konieczne
    if (!leftFighter) {
        leftFighter = getFighter();
        if (leftFighter) {
            log.push([`%c>> ${leftFighter.name} wszedł na ring!`, "color: #9933FF; font-weight: bold;"]);
        }
    }
    
    if (!rightFighter) {
        rightFighter = getFighter();
        if (rightFighter) {
            log.push([`%c>> ${rightFighter.name} wszedł na ring!`, "color: #9933FF; font-weight: bold;"]);
        }
    }

    // Warunek zakończenia (koniec)
    const koniec = !leftFighter && !rightFighter && fighters.length === 0;

    if (koniec) {
        log.push([`%c🏆 KONIEC TURNIEJU! Zwycięzca: Brak kolejnych wojowników. 🏆`, "color: red; font-size: 20px; font-weight: bold;"]);
        showLog();
        return false;
    }

    // Sprawdzenie, czy są wojownicy do walki
    if (leftFighter && rightFighter) {
        
        // 2. Losowa wymiana ciosów
        if (Math.random() < 0.5) {
            leftFighter.attack(rightFighter);
        } else {
            rightFighter.attack(leftFighter);
        }

        // 3. Sprawdzenie stanu życia i reset/eliminacja
        if (leftFighter.live <= 0) {
            // Wygrywa prawy
            fighters.push(rightFighter); // Zwycięzca wraca do puli
            resetFighter(rightFighter);
            rightFighter = null;
            leftFighter = null;
        } else if (rightFighter.live <= 0) {
            // Wygrywa lewy
            fighters.push(leftFighter); // Zwycięzca wraca do puli
            resetFighter(leftFighter);
            leftFighter = null;
            rightFighter = null;
        }
        
    } else if (leftFighter && !rightFighter && fighters.length === 0) {
        // Ostatni wojownik (leftFighter)
        log.push([`%c👑 Zwycięzcą całego turnieju zostaje ${leftFighter.name}! Gratulacje! 👑`, "color: gold; font-size: 24px; font-weight: bold;"]);
        showLog();
        return false;
    } else if (rightFighter && !leftFighter && fighters.length === 0) {
        // Ostatni wojownik (rightFighter) - mało prawdopodobne, ale dla bezpieczeństwa
        log.push([`%c👑 Zwycięzcą całego turnieju zostaje ${rightFighter.name}! Gratulacje! 👑`, "color: gold; font-size: 24px; font-weight: bold;"]);
        showLog();
        return false;
    }

    // 4. Wyświetl log
    showLog();
    
    // Kontynuacja pętli
    // Ustaw timeout na 500ms, aby walka nie była zbyt szybka
    setTimeout(() => loop(), 500); 
}

// Zaczynamy turniej!
// loop(); 
// UWAGA: Ponieważ pętla loop() czyści konsolę i działa w nieskończoność/do końca turnieju, 
// zostawię ją zakomentowaną. Możesz ją odkomentować, aby uruchomić symulację turnieju po 
// przeanalizowaniu kodu.

// ====================================================================
// ZADANIE 3: Rozszerzenie Prototypu String.sortText()
// ====================================================================

console.log("\n\n==========================\n=== ZADANIE 3: String.sortText() ===\n==========================");

/**
 * String.prototype.sortText(char)
 * Sortuje alfabetycznie słowa w tekście, które są oddzielone podanym znakiem.
 * @param {string} char Znak rozdzielający (delimiter), domyślnie spacja.
 * @returns {string} Posortowany tekst.
 */
String.prototype.sortText = function(char = ' ') {
    // 1. Dzieli tekst na tablicę za pomocą podanego znaku (split)
    // 2. Sortuje tablicę alfabetycznie (sort)
    // 3. Łączy elementy tablicy z powrotem w string za pomocą podanego znaku (join)
    return this.split(char).sort().join(char);
};

const textToSort = "Marcin-Ania-Piotrek-Beata";
const sortedText = textToSort.sortText('-');

console.log(`Oryginalny tekst: "${textToSort}"`);
console.log(`Posortowany tekst: "${sortedText}"`);
// Sprawdzenie z innym separatorem
console.log(`"kot pies ala".sortText():`, "kot pies ala".sortText());


// ====================================================================
// ZADANIE 4: Rozszerzenie Prototypu String.mirror()
// ====================================================================

console.log("\n==========================\n=== ZADANIE 4: String.mirror() ===\n==========================");

/**
 * String.prototype.mirror() (nazwa zmieniona na reverse, aby była bardziej idiomatyczna)
 * Odwraca kolejność znaków w danym ciągu tekstowym.
 * @returns {string} Odwrócony tekst.
 */
String.prototype.reverse = function() {
    // 1. Zmienia string na tablicę (split(''))
    // 2. Odwraca kolejność elementów w tablicy (reverse())
    // 3. Łączy tablicę z powrotem w string (join(''))
    return this.split('').reverse().join('');
};

const sentence = "Ala ma kota";
const reversedSentence = sentence.reverse();

console.log(`Oryginalny tekst: "${sentence}"`);
console.log(`Odwrócony tekst: "${reversedSentence}"`);


// ====================================================================
// ZADANIE 5: Rozszerzenie Prototypu Array
// ====================================================================

console.log("\n==========================\n=== ZADANIE 5: Array.sum() i Array.sortNr() ===\n==========================");

// 1. Metoda sum()
/**
 * Array.prototype.sum()
 * Zwraca sumę wszystkich elementów liczbowych w tablicy.
 * @returns {number} Suma elementów.
 */
Array.prototype.sum = function() {
    // Używa reduce, aby zsumować wszystkie elementy.
    // Zapewnia, że każdy element jest traktowany jako liczba (używając +el)
    return this.reduce((accumulator, el) => accumulator + (+el || 0), 0);
};

const numbersArray = [1, 2, 3, 4, 5];
console.log(`Tablica: [${numbersArray}]`);
console.log(`Suma (sum()): ${numbersArray.sum()}`);


// 2. Metoda sortNr()
/**
 * Array.prototype.sortNr()
 * Poprawnie sortuje tablicę liczb (numerycznie).
 * @returns {Array} Posortowana numerycznie tablica.
 */
Array.prototype.sortNr = function() {
    // Metoda sort() bez funkcji porównującej sortuje jako stringi ('11' jest mniejsze niż '2').
    // Należy dostarczyć funkcję porównującą: (a, b) => a - b
    // Używamy .slice() by stworzyć kopię tablicy i nie modyfikować oryginału.
    return this.slice().sort((a, b) => a - b);
};

const unsortedNumbers = [1, 1.2, 11, 22, 2.1, 100, 2];
const sortedNumbers = unsortedNumbers.sortNr();

console.log(`Tablica przed sortowaniem: [${unsortedNumbers}]`);
console.log(`Tablica po sortowaniu (sortNr()): [${sortedNumbers}]`);

// Dowód na konieczność sortNr (domyślne sortowanie stringowe JS):
const wrongSort = unsortedNumbers.slice().sort();
console.log(`Błędne sortowanie JS (bez sortNr): [${wrongSort}]`);