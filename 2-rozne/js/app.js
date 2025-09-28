// ====================================================================
// ZADANIA - RÓŻNE (ROZWIĄZANIA OD 1 DO 17)
// ====================================================================

// === ZADANIE 1: Liczenie słów ===
function countWord(txt) {
    if (!txt) {
        return 0;
    }
    // Dzieli po jednej lub więcej spacji, filtruje puste ciągi
    return txt.split(/\s+/).filter(word => word.length > 0).length;
}

// Przykładowe użycie Zadania 1:
const input1 = prompt("Zadanie 1: Wpisz przykładowy tekst:");
if (input1) {
    const wordCount = countWord(input1);
    console.log(`Zadanie 1: Tekst '${input1}' składa się z ${wordCount} wyrazów`);
} else {
    console.log("Zadanie 1: nie mam co liczyć");
}

// --------------------------------------------------------------------

// === ZADANIE 2: Poprawianie imienia ===
function fixName(name) {
    if (!name) return "";
    const trimmedName = name.trim();
    if (trimmedName.length === 0) return "";
    
    const lower = trimmedName.toLowerCase();
    // Pierwsza litera na dużą, reszta małe
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

// Przykładowe użycie Zadania 2:
const userName = prompt("Zadanie 2: Podaj swoje imię:");
if (userName) {
    const correctedName = fixName(userName);
    console.log(`Zadanie 2: Imię ${correctedName} rozpoczyna się od litery ${correctedName.charAt(0)}`);
} else {
    console.log("Zadanie 2: nic nie wpisano");
}

// --------------------------------------------------------------------

// === ZADANIE 3: Informacje o pliku ===
function fileInfo(file) {
    const lastDotIndex = file.lastIndexOf('.');

    // Walidacja formatu nazwa.rozszerzenie
    if (lastDotIndex <= 0 || lastDotIndex === file.length - 1) {
        return false;
    }

    const name = file.slice(0, lastDotIndex);
    const extension = file.slice(lastDotIndex + 1);

    return { name, extension };
}

// Przykładowe użycie Zadania 3:
console.log("Zadanie 3:", fileInfo("raport.pdf"));
console.log("Zadanie 3:", fileInfo("plikBezRozszerzenia"));

// --------------------------------------------------------------------

// === ZADANIE 4: Generowanie ID ===
function generateID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let result = '';
    const length = 20;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Przykładowe użycie Zadania 4:
console.log("Zadanie 4: ID:", generateID());

// --------------------------------------------------------------------

// === ZADANIE 5: Drukowanie kolejnych liczb ===
function printNumbers(nr) {
    let result = "";
    for (let i = 1; i <= nr; i++) {
        result += i;
    }
    return result;
}

// Przykładowe użycie Zadania 5:
console.log(`Zadanie 5: printNumbers(12) => "${printNumbers(12)}"`);

// --------------------------------------------------------------------

// === ZADANIE 6: Funkcja pór roku/miesięcy ===
function getSeasonalActivity(imie, miesiac) {
    const month = miesiac.toLowerCase().trim();

    switch (month) {
        case 'grudzień':
        case 'styczeń':
        case 'luty':
            return `${imie} jezdzi na sankach`;
        case 'marzec':
        case 'kwiecień':
        case 'maj':
            return `${imie} chodzi po kaluzach`;
        case 'czerwiec':
        case 'lipiec':
        case 'sierpień':
            return `${imie} sie opala`;
        case 'wrzesień':
        case 'październik':
        case 'listopad':
            return `${imie} zbiera liscie`;
        default:
            return `${imie} uczy się JS`;
    }
}

// Przykładowe użycie Zadania 6:
console.log("Zadanie 6:", getSeasonalActivity("Ala", "STYCZEŃ"));
console.log("Zadanie 6:", getSeasonalActivity("Ola", "czerwiec"));
console.log("Zadanie 6:", getSeasonalActivity("Ala", "inne"));

// --------------------------------------------------------------------

// === ZADANIE 7: Losowanie i liczenie ===

// Funkcja generowania losowej liczby (wymagana także w Zadaniach 8 i 11)
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Logika Zadania 7:
const min7 = 1;
const max7 = 20;
const count7 = 10;
let aboveTenCount = 0;

for (let i = 0; i < count7; i++) {
    const randomNumber = generateRandom(min7, max7);
    if (randomNumber > 10) {
        aboveTenCount++;
    }
}

if (aboveTenCount >= count7 / 2) {
    console.log(`Zadanie 7: udało się (liczba > 10 wystąpiła ${aboveTenCount} razy)`);
} else {
    console.log(`Zadanie 7: niestety nie (liczba > 10 wystąpiła ${aboveTenCount} razy)`);
}

// --------------------------------------------------------------------

// === ZADANIE 8: Generowanie tablicy i formatowanie ===
function generateRandomTable(min, max, count) {
    const table = [];
    for (let i = 0; i < count; i++) {
        table.push(generateRandom(min, max));
    }
    return table;
}

// Przykładowe użycie Zadania 8:
const randomNumbers = generateRandomTable(10, 100000, 10);
const maxLineLength = 10;

console.log("Zadanie 8: Wyrównane liczby (max 10 znaków):");
randomNumbers.forEach(number => {
    // Wyrównanie do 10 znaków za pomocą '_'
    const formattedNumber = String(number).padStart(maxLineLength, '_');
    console.log(formattedNumber);
});

// --------------------------------------------------------------------

// === ZADANIE 9: Dzielenie, sortowanie, łączenie tekstu ===
function processText(text, separator) {
    // 1. Rozdzielenie tekstu na tablicę za pomocą split()
    const arr = text.split(separator);

    // 2. Sortowanie tablicy alfabetycznie
    arr.sort();

    // 3. Połączenie tablicy w nowy tekst za pomocą join()
    return arr.join(separator);
}

// Przykładowe użycie Zadania 9:
const str9 = "Ania|Marcin|Bartek";
console.log(`Zadanie 9: input: "${str9}"`);
console.log(`Zadanie 9: wynik: "${processText(str9, "|")}"`);

// --------------------------------------------------------------------

// === ZADANIE 10: Tekst w ramce ===
function printBorderText(txt, max) {
    let content = txt;
    const dots = "...";

    // 1. Przycięcie tekstu, jeśli jest za długi
    if (txt.length > max) {
        content = txt.slice(0, max - dots.length) + dots;
    }

    const padding = "  "; // Wyrównanie wewnątrz ramki
    const contentWithPadding = padding + content + padding;
    const length = contentWithPadding.length;

    // 2. Budowanie ramki
    const topBottomLine = "═".repeat(length);
    const topLine = `╔${topBottomLine}╗`;
    const middleLine = `║${contentWithPadding}║`;
    const bottomLine = `╚${topBottomLine}╝`;

    // 3. Wypisanie w konsoli
    console.log("Zadanie 10:");
    console.log(topLine);
    console.log(middleLine);
    console.log(bottomLine);
}

// Przykładowe użycie Zadania 10:
printBorderText("To jest jakiś tekst", 30);
printBorderText("Bardzo długi tekst, który będzie przycięty", 20);

// --------------------------------------------------------------------

// === ZADANIE 11: Zgadywanie liczby (pętla while) ===

// Przykładowe użycie Zadania 11:
const min11 = 1;
const max11 = 1000;
const userNumber = prompt(`Zadanie 11: Podaj liczbę z przedziału ${min11}-${max11}:`);

// Walidacja wejścia
const parsedNumber = Number(userNumber);

if (isNaN(parsedNumber) || parsedNumber < min11 || parsedNumber > max11) {
    console.log("Zadanie 11: podana wartość jest błędna");
} else {
    let iterations = 0;
    let randomNumber;

    while (true) {
        iterations++;
        randomNumber = generateRandom(min11, max11);

        if (randomNumber === parsedNumber) {
            break; 
        }
    }

    console.log(`Zadanie 11: Wylosowana liczba: ${randomNumber}`);
    console.log(`Zadanie 11: Wykonało się ${iterations} iteracji, aby wylosować Twoją liczbę.`);
}

// --------------------------------------------------------------------

// === ZADANIE 12: Liczenie kobiet ===

function checkFemale(name) {
    return name.toLowerCase().endsWith("a");
}

const users12 = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Karolak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Beata Lecka",
    "Katarzyna Małecka"
];

function countWomanInTable(arr) {
    let womanCount = 0;
    
    arr.forEach(fullName => {
        // Używamy split(' ') do pobrania imienia
        const firstName = fullName.split(' ')[0];

        if (checkFemale(firstName)) {
            womanCount++;
        }
    });
    return womanCount;
}

// Przykładowe użycie Zadania 12:
const womenCount = countWomanInTable(users12);
console.log(`Zadanie 12: W tablicy jest ${womenCount} kobiet.`);
console.log(`Zadanie 12: checkFemale("Marcin") => ${checkFemale("Marcin")}`);

// --------------------------------------------------------------------

// === ZADANIE 13: Nazwa miesiąca ===

function monthName(nr) {
    const months = [
        "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
        "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
    ];

    // Walidacja
    if (typeof nr !== 'number' || nr < 1 || nr > 12 || !Number.isInteger(nr)) {
        return false;
    }

    return months[nr - 1];
}

// Przykładowe użycie Zadania 13:
console.log(`Zadanie 13: monthName(10) => ${monthName(10)}`);
console.log(`Zadanie 13: monthName("ala") => ${monthName("ala")}`);

// --------------------------------------------------------------------

// === ZADANIE 14: Palindrom ===

function checkPalindrom(txt) {
    const normalizedTxt = txt.toLowerCase();
    const reversedTxt = normalizedTxt.split('').reverse().join('');
    return normalizedTxt === reversedTxt;
}

// Przykładowe użycie Zadania 14:
console.log(`Zadanie 14: 'kajak' jest palindromem: ${checkPalindrom("kajak")}`);
console.log(`Zadanie 14: 'pies' jest palindromem: ${checkPalindrom("pies")}`);

// --------------------------------------------------------------------

// === ZADANIE 15: Mieszanie wielkości liter ===

function mix(txt) {
    let result = '';
    for (let i = 0; i < txt.length; i++) {
        // Co druga litera (indeksy 0, 2, 4...) duża, reszta małe
        if (i % 2 === 0) {
            result += txt[i].toUpperCase();
        } else {
            result += txt[i].toLowerCase();
        }
    }
    return result;
}

const names15 = ["Ania", "Marcin", "Bartek", "Piotr"];

function smallNames(arr) {
    return arr.map(name => name.toLowerCase());
}

function bigNames(arr) {
    return arr.map(name => name.toUpperCase());
}

function mixNames(arr) {
    return arr.map(name => mix(name));
}

// Przykładowe użycie Zadania 15:
console.log(`Zadanie 15: smallNames: ${JSON.stringify(smallNames(names15))}`);
console.log(`Zadanie 15: bigNames: ${JSON.stringify(bigNames(names15))}`);
console.log(`Zadanie 15: mixNames: ${JSON.stringify(mixNames(names15))}`);

// --------------------------------------------------------------------

// === ZADANIE 16: Podsumowanie tablicy ===

function arraySummary(arr) {
    const summary = {
        sum: 0
    };

    for (const nr of arr) {
        // Sumowanie
        summary.sum += nr;

        // Zliczanie wystąpień (kluczem musi być string)
        const key = String(nr);

        if (summary[key]) {
            summary[key]++;
        } else {
            summary[key] = 1;
        }
    }
    return summary;
}

// Przykładowe użycie Zadania 16:
const tab16 = [1, 1, 1, 2, 2, 1, 3, 3, 5, 7, 5];
console.log("Zadanie 16: Wynik podsumowania tablicy:");
console.log(arraySummary(tab16));

// --------------------------------------------------------------------

// === ZADANIE 17: Logowanie z licznikiem (Closure - Domknięcie) ===

function createLogger() {
    let counter = 0; // Zmienna domknięta (closure)

    // Zwracana funkcja ma dostęp do zmiennej 'counter'
    return function log(txt) {
        counter++; 
        console.log(`Zadanie 17: ${counter}. ${txt}`);
    };
}

// Tworzymy nową instancję funkcji logującej
const log = createLogger();

// Przykładowe użycie Zadania 17:
log("To jest pierwszy tekst");
log("Kolejny tekst do logowania");
log("Trzeci raz");