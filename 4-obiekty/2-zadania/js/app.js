// Dane wejściowe (ZŁA FORMA DANYCH)
const users = [
    //id, name, surname, email, age, cash
    [ 1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28] ,
    [ 2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37] ,
    [ 3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06] ,
    [ 4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64] ,
    [ 5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54] ,
    [ 6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08] ,
    [ 7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21] ,
    [ 8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72] ,
    [ 9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68] ,
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44] ,
    [ 11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52] ,
    [ 12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10] ,
    [ 13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07] ,
    [ 14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97] ,
    [ 15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
];

// ====================================================================
// ZADANIE 1: Poprawianie danych (fixData)
// ====================================================================

console.log("==========================\n=== ZADANIE 1: Naprawa Danych ===\n==========================");

console.log("Dostarczona tablica jest 'zła', ponieważ:\n1. Dane są nieczytelne: ich znaczenie zależy wyłącznie od **kolejności** w tablicy (np. 'piąty element to zawsze wiek').\n2. Kod staje się kruchy: zmiana kolejności kolumn w tablicy wejściowej natychmiast spowoduje błędy w logice programu.");


/**
 * Transformuje "płaską" tablicę tablic w tablicę obiektów, używając destrukturyzacji.
 * @param {Array<Array>} data Tablica tablic użytkowników.
 * @returns {Array<Object>} Tablica obiektów użytkowników.
 */
function fixData(data) {
    // Używamy Array.prototype.map() do iteracji i transformacji każdego elementu.
    return data.map(item => {
        // Destrukturyzacja tablicy wejściowej na nazwane zmienne.
        const [id, name, surname, email, age, cash] = item;
        
        // Zwrócenie nowego, poprawnego obiektu z kluczami.
        // Używamy skróconej składni dla właściwości obiektu (shorthand property names).
        return { id, name, surname, email, age, cash };
    });
}

// Utworzenie nowej, poprawnej tablicy obiektów
const correctedUsers = fixData(users);

console.log("\nPoprawiona tablica użytkowników (pierwszy element):");
console.log(correctedUsers[0]);
console.log(`Liczba użytkowników: ${correctedUsers.length}`);


// ====================================================================
// ZADANIE 2: Analiza danych
// ====================================================================

console.log("\n==========================\n=== ZADANIE 2: Analiza Danych ===\n==========================");


// 1. Wylicz ile pieniędzy mają wszyscy użytkownicy razem (Suma 'cash')
// Używamy Array.prototype.reduce()
const totalCash = correctedUsers.reduce((sum, user) => {
    // Używamy parseFloat() dla upewnienia się, że wartość jest traktowana jako liczba
    return sum + user.cash; 
}, 0);

console.log(`1. Całkowita suma pieniędzy u wszystkich użytkowników: ${totalCash.toFixed(2)} PLN`);

// 2. Wylicz średni wiek wszystkich użytkowników
// a) Suma lat (reduce)
const totalAge = correctedUsers.reduce((sum, user) => sum + user.age, 0);

// b) Średnia
const averageAge = totalAge / correctedUsers.length;

console.log(`2. Średni wiek wszystkich użytkowników: ${averageAge.toFixed(2)} lat`);


// 3. Stwórz nową tablicę tylko z mailami
// Używamy Array.prototype.map()
const userEmails = correctedUsers.map(user => user.email);

console.log("\n3. Tablica zawierająca tylko adresy e-mail:");
console.log(userEmails);