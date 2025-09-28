// Zakładamy, że tablica 'users' jest dostępna globalnie z pliku data.js

// ====================================================================
// ZADANIE 1: Wypisz imiona i nazwiska oraz ich email
// Claire Lucas -> clairelucas@memora.com
// ====================================================================
console.log("=== ZADANIE 1 ===");
users.forEach(user => {
    console.log(`${user.name} -> ${user.email}`);
});

// ====================================================================
// ZADANIE 2: Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi (wiek >= 18)
// ====================================================================
const adults = users.filter(user => user.age >= 18);

console.log("\n=== ZADANIE 2: Pełnoletni użytkownicy ===");
console.log(adults);

// ====================================================================
// ZADANIE 3: Wypisz tablicę z wszystkimi kobietami
// ====================================================================
const females = users.filter(user => user.gender === 'female');

console.log("\n=== ZADANIE 3: Kobiety ===");
console.log(females);

// ====================================================================
// ZADANIE 4: Wypisz tablicę użytkowników, którzy mają tag "dolor"
// ====================================================================
const hasDolorTag = users.filter(user => user.tags.includes('dolor'));

console.log("\n=== ZADANIE 4: Użytkownicy z tagiem 'dolor' ===");
console.log(hasDolorTag);

// ====================================================================
// ZADANIE 5: Wypisz true/false, czy wszyscy użytkownicy są pełnoletni
// ====================================================================
const allAdults = users.every(user => user.age >= 18);

console.log("\n=== ZADANIE 5: Czy wszyscy są pełnoletni? ===");
console.log(allAdults);

// ====================================================================
// ZADANIE 6: Wypisz true/false, czy chociaż jeden z użytkowników jest pełnoletni
// ====================================================================
const anyAdult = users.some(user => user.age >= 18);

console.log("\n=== ZADANIE 6: Czy jest choć jeden pełnoletni? ===");
console.log(anyAdult);

// ====================================================================
// ZADANIE 7: Wypisz nową tablicę zawierającą tylko imiona użytkowników
// (firstName + lastName), które będą pisane dużymi literami
// ====================================================================
const upperCaseNames = users.map(user => user.name.toUpperCase());

console.log("\n=== ZADANIE 7: Imiona dużymi literami ===");
console.log(upperCaseNames);

// ====================================================================
// ZADANIE 8: Wypisz liczbę kobiet i mężczyzn oraz która grupa jest liczniejsza
// ====================================================================
const genderCounts = users.reduce((counts, user) => {
    const gender = user.gender;
    counts[gender] = (counts[gender] || 0) + 1;
    return counts;
}, {});

const femaleCount = genderCounts['female'] || 0;
const maleCount = genderCounts['male'] || 0;

let winnerText;
if (femaleCount > maleCount) {
    winnerText = "kobiety wygrywają";
} else if (maleCount > femaleCount) {
    winnerText = "mężczyźni wygrywają";
} else {
    winnerText = "jest remis";
}

console.log("\n=== ZADANIE 8: Liczba kobiet i mężczyzn ===");
console.log(`Liczba kobiet: ${femaleCount}`);
console.log(`Liczba mężczyzn: ${maleCount}`);
console.log(`Wynik: "${winnerText}"`);