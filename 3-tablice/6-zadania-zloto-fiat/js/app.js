// Zakładamy, że tablice 'gold' i obiekt 'payments' są dostępne globalnie z plików js/gold.js i js/payments.js

// AKTUALNA CENA ZŁOTA (PLN za uncję) - MUSISZ JĄ WPROWADZIĆ RĘCZNIE
// W oparciu o aktualne ceny (wrzesień 2025 r.) wprowadzam przykładową, wysoką wartość. 
// Użyj bieżącej ceny np. z Goldenmark.
const CURRENT_GOLD_PRICE_PLN = 10500; 

// ====================================================================
// POMOCNICZA FUNKCJA: Pobiera rok z daty (np. '2013-07-16' -> 2013)
// ====================================================================
function getYearFromDateString(dateString) {
    // Wycina pierwsze 4 znaki, czyli rok
    return parseInt(dateString.substring(0, 4));
}


// ====================================================================
// GŁÓWNA LOGIKA INWESTYCJI
// Użyjemy reduce do jednoczesnego liczenia oszczędności i kupowanego złota
// ====================================================================

const initialValue = {
    totalSavings: 0,
    totalOunces: 0
};

const investmentResult = gold.reduce((acc, monthlyData) => {
    // 1. Ustal, w którym roku jesteśmy (rok zamknięcia danego okresu)
    const year = getYearFromDateString(monthlyData.endDateTime);
    
    // Upewnij się, że mamy dane o pensji dla danego roku
    if (!payments[year]) {
        console.warn(`Brak danych o płacy dla roku ${year}. Pomijam ten miesiąc.`);
        return acc;
    }

    // 2. Oblicz kwotę odłożoną w tym miesiącu (1/3 pensji)
    const monthlyPayment = payments[year];
    const savingsAmount = monthlyPayment / 3;

    // 3. Oblicz całkowite oszczędności (Zadanie 1 - część 1)
    acc.totalSavings += savingsAmount;

    // 4. Oblicz ile uncji złota (monet) można kupić
    const goldPrice = monthlyData.close;
    const ouncesBought = savingsAmount / goldPrice;

    // 5. Zsumuj kupione uncje (monety)
    acc.totalOunces += ouncesBought;

    return acc;
}, initialValue);


// ====================================================================
// ZADANIE 1: Ile bym oszczędził (łączna suma)
// ====================================================================
console.log("=== ZADANIE 1: Oszczędności w Skarpecie ===");
console.log(`Całkowita odłożona kwota (1/3 pensji przez ${gold.length} miesięcy):`);
console.log(`${investmentResult.totalSavings.toFixed(2)} PLN`);

// ====================================================================
// ZADANIE 2: Wartość inwestycji w złoto
// ====================================================================
const totalValueToday = investmentResult.totalOunces * CURRENT_GOLD_PRICE_PLN;

console.log("\n=== ZADANIE 2: Wartość Inwestycji w Złoto ===");
console.log(`Łączna zakupiona ilość złota (monet): ${investmentResult.totalOunces.toFixed(4)} uncji.`);
console.log(`Aktualna cena 1 uncji (przyjęta na podstawie CURRENT_GOLD_PRICE_PLN): ${CURRENT_GOLD_PRICE_PLN.toLocaleString()} PLN.`);
console.log(`Łączna wartość zakupionych monet na dziś: ${totalValueToday.toFixed(2)} PLN.`);