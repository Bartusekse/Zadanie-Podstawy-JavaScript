// ====================================================================
// ZADANIA - TABLICE (ROZWIĄZANIA OD 1 DO 8)
// ====================================================================

// === ZADANIE 1: Wypisywanie tablicy i liczenie liter ===

const animals = [
    "pies",
    "kot",
    "slon",
    "zyrafa",
    "tygrys",
    "lew"
];

function showArray(arr) {
    let totalLetters = 0;

    console.log("--- Zadanie 1: Pętla for ---");
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        console.log(`Element ${i+1}: ${word} (${word.length} liter)`);
        totalLetters += word.length;
    }

    console.log("--- Zadanie 1: Pętla for...of ---");
    for (const word of arr) {
        // Ponowne zliczanie liter nie jest wymagane w pętli, ale pokazujemy długość
        console.log(`Słowo: ${word} (${word.length} liter)`);
    }

    console.log("--- Zadanie 1: Metoda forEach ---");
    arr.forEach((word, index) => {
        console.log(`Index ${index}: ${word} (${word.length} liter)`);
    });
    
    console.log(`Suma wszystkich liter w tablicy: ${totalLetters}`);
}

// Wywołanie Zadania 1
showArray(animals);

// --------------------------------------------------------------------

// === ZADANIE 2: Sprawdzanie palindromu ===

function checkPalindrom(txt) {
    const normalizedTxt = txt.toLowerCase();
    const reversedTxt = normalizedTxt.split('').reverse().join('');
    return normalizedTxt === reversedTxt;
}

// Wywołanie Zadania 2
console.log("--- Zadanie 2: Palindrom ---");
console.log(`'kajak' jest palindromem: ${checkPalindrom("kajak")}`);
console.log(`'KajAk' jest palindromem: ${checkPalindrom("KajAk")}`);
console.log(`'pies' jest palindromem: ${checkPalindrom("pies")}`);

// --------------------------------------------------------------------

// === ZADANIE 3: Normalizacja i liczenie imion ===

const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotr",
    "Beata",
    "ania",
    "marcin",
    "piotr",
    "PIOTR",
    "ANIA",
    "MONIKA"
];

// Funkcja normalizująca imiona (Utrudnienie: pierwsza litera duża, reszta małe)
function unifyNames(names) {
    return names.map(name => {
        if (!name) return "";
        const lower = name.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    });
}

// Funkcja licząca wystąpienia imion
function countDifferentNames(names) {
    const unifiedNames = unifyNames(names);

    // Użycie reduce do zliczenia wystąpień
    return unifiedNames.reduce((acc, name) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc;
    }, {});
}

// Wywołanie Zadania 3
const unifiedNames = unifyNames(names);
console.log("--- Zadanie 3: Znormalizowane imiona ---");
console.log(unifiedNames);

const nameCounts = countDifferentNames(names);
console.log("--- Zadanie 3: Liczba wystąpień ---");
console.log(nameCounts);

// --------------------------------------------------------------------

// === ZADANIE 4: Losowa tablica, suma i średnia ===

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Generowanie 20-elementowej tablicy z liczbami 0-100
const randomArray = [];
for (let i = 0; i < 20; i++) {
    randomArray.push(random(100));
}

// Sortowanie
randomArray.sort((a, b) => a - b);

// Suma
const sum = randomArray.reduce((acc, num) => acc + num, 0);

// Średnia
const average = sum / randomArray.length;

// Wywołanie Zadania 4
console.log("--- Zadanie 4: Losowa tablica, suma i średnia ---");
console.log("Wygenerowana i posortowana tablica:", randomArray);
console.log("Suma wszystkich liczb:", sum);
console.log("Średnia wszystkich liczb:", average.toFixed(2));

// --------------------------------------------------------------------

// === ZADANIE 5: Sortowanie po długości i suma długości ===

const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
];

// Sortowanie po długości
tab.sort((a, b) => a.length - b.length);

// Sumowanie wszystkich liter
const totalLength = tab.reduce((total, el) => total + el.length, 0);

// Wywołanie Zadania 5
console.log("--- Zadanie 5: Posortowana tablica (wg. długości) ---");
console.log(tab);
console.log("Łączna liczba liter we wszystkich elementach:", totalLength);

// --------------------------------------------------------------------

// === ZADANIE 6: Pełnoletni użytkownicy ===

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Weronika", age: 20},
    {name : "Ania", age: 19},
    {name : "Agnieszka", age: 13},
    {name : "Magda", age: 30},
];

// Sprawdzenie, czy są pełnoletni
const hasAdults = tabUsers.some(user => user.age >= 18);

console.log("--- Zadanie 6: Pełnoletni użytkownicy ---");
if (!hasAdults) {
    console.log("same małolaty");
} else {
    // Stworzenie nowej tablicy tylko z pełnoletnimi
    const adults = tabUsers.filter(user => user.age >= 18);

    // Sortowanie (alfabetyczne po imieniu)
    adults.sort((a, b) => a.name.localeCompare(b.name));

    console.log("Pełnoletni użytkownicy (posortowani):");
    console.log(adults);
}

// --------------------------------------------------------------------

// === ZADANIE 7: Generowanie i dzielenie tablicy liter ===

function generateArray() {
    const alphabet = [];
    // Kod ASCII dla 'A' to 65, dla 'Z' to 90
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

function splitArray(tab, nr) {
    const result = [];
    let index = 0;

    // Dopóki mamy elementy do pocięcia
    while (index < tab.length) {
        // Używamy slice(start, end) do wycięcia podtablicy o długości 'nr'
        result.push(tab.slice(index, index + nr));
        // Przesuwamy indeks o długość wyciętej podtablicy
        index += nr;
    }
    return result;
}

// Wywołanie Zadania 7
const alphabet = generateArray();
const splitResult = splitArray(alphabet, 6);

console.log("--- Zadanie 7: Generowanie i dzielenie tablicy ---");
console.log("Pełny alfabet:", alphabet);
console.log("Podział na podtablice po 6 elementów:");
console.log(splitResult);

// --------------------------------------------------------------------

// === ZADANIE 8: Dekodowanie ukrytej wiadomości ===

const arr = [
    [ 66, 97, 114, 100, 4, 2, 110, 11, 1, 6, 20 ],
    [ 99, 3, 10, 122, 76, 101, 111, 3, 32, 100, 0 ],
    [ 6, 22, 1, 111, 32, 10, 110, 7, 97, 97, 67 ],
    [ 60, 97, 116, 32, 100, 23, 97, 114, 100, 32, 34 ],
    [ 2, 106, 15, 6, 111, 56, 80, 20, 10, 86, 10 ],
    [ 20, 110, 121, 32, 107, 55, 50, 99, 110, 105, 8 ],
    [ 12, 9, 22, 102, 66, 100, 12, 105, 50, 76, 110 ],
    [ 42, 81, 123, 92, 26, 98, 20, 1, 20, 11, 10 ],
];

const str = "rrrdddllddrrruuuurrddrruurddddlld";

function decodeMessage(matrix, path) {
    // Start w lewym górnym rogu: [wiersz (x), kolumna (y)]
    let x = 0; // Wiersz (pozioma oś)
    let y = 0; // Kolumna (pionowa oś)
    
    // Pierwszy znak jest pobierany z miejsca startowego
    const codes = [matrix[x][y]];

    for (const move of path) {
        switch (move) {
            case 'r': // Prawo (zwiększ kolumnę)
                y++;
                break;
            case 'd': // Dół (zwiększ wiersz)
                x++;
                break;
            case 'l': // Lewo (zmniejsz kolumnę)
                y--;
                break;
            case 'u': // Góra (zmniejsz wiersz)
                x--;
                break;
            default:
                // Ignoruj nieznane kierunki
                continue; 
        }

        // Sprawdzenie granic (zapobiega błędom, choć zakładamy poprawną ścieżkę)
        if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length) {
            codes.push(matrix[x][y]);
        }
    }

    // Konwersja kodów na litery i połączenie w hasło
    return codes.map(code => String.fromCharCode(code)).join('');
}

// Wywołanie Zadania 8
const secretMessage = decodeMessage(arr, str);
console.log("--- Zadanie 8: Zdekodowana informacja ---");
console.log(`Hasło: ${secretMessage}`);