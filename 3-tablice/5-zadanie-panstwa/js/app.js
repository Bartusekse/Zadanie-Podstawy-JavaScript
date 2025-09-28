// Zakładamy, że tablica 'countries' jest dostępna globalnie z pliku data.js
// Jeśli countries nie jest zdefiniowane, odkomentuj poniższą linię (dla testów)
// const countries = []; 

// ====================================================================
// ZADANIE 1: Wypisz wszystkie nazwy państw, a następnie ile jest razem ludności
// ====================================================================

// Wypisanie nazw
console.log("=== ZADANIE 1: Nazwy państw ===");
const countryNames = countries.map(country => country.name);
console.log(countryNames.join(', '));

// Sumowanie ludności
const totalPopulation = countries.reduce((sum, country) => {
    return sum + country.population;
}, 0);

console.log("\n=== ZADANIE 1: Łączna populacja ===");
console.log(`Łączna liczba ludności: ${totalPopulation.toLocaleString()} osób.`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 2: Wypisz średnią ludność w państwach
// ====================================================================
const averagePopulation = totalPopulation / countries.length;

console.log("\n=== ZADANIE 2: Średnia ludność ===");
console.log(`Średnia populacja na państwo wynosi: ${Math.round(averagePopulation).toLocaleString()} osób.`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 3: Wypisz ile jest państw, które mają dodatni wzrost (grow > 0)
// ====================================================================
const positiveGrowthCount = countries.filter(country => country.grow > 0).length;

console.log("\n=== ZADANIE 3: Państwa z dodatnim wzrostem ===");
console.log(`Liczba państw z dodatnim wzrostem: ${positiveGrowthCount}`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 4: Wypisz ile jest państw, które mają ujemny wzrost (grow < 0)
// ====================================================================
const negativeGrowthCount = countries.filter(country => country.grow < 0).length;

console.log("\n=== ZADANIE 4: Państwa z ujemnym wzrostem ===");
console.log(`Liczba państw z ujemnym wzrostem: ${negativeGrowthCount}`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 5: Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
// ====================================================================
const totalWorldAreaPercent = countries.reduce((sum, country) => {
    return sum + country.world_area_in_percent;
}, 0);

console.log("\n=== ZADANIE 5: Procent powierzchni Ziemi ===");
console.log(`Wszystkie państwa zajmują łącznie ${totalWorldAreaPercent.toFixed(2)}% powierzchni Ziemi.`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 6: Średnia dzietności na świecie (fertility_rate) - ignoruj null
// ====================================================================
const validFertilityRates = countries.filter(country => country.fertility_rate !== null);

const totalFertilityRate = validFertilityRates.reduce((sum, country) => {
    return sum + country.fertility_rate;
}, 0);

const averageFertilityRate = totalFertilityRate / validFertilityRates.length;

console.log("\n=== ZADANIE 6: Średnia dzietność na świecie ===");
console.log(`Średnia dzietność (dla ${validFertilityRates.length} państw z danymi): ${averageFertilityRate.toFixed(2)}`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 7: Średnia wieku na świecie (medium_age) - ignoruj null
// ====================================================================
const validMediumAges = countries.filter(country => country.medium_age !== null);

const totalMediumAge = validMediumAges.reduce((sum, country) => {
    return sum + country.medium_age;
}, 0);

const averageMediumAge = totalMediumAge / validMediumAges.length;

console.log("\n=== ZADANIE 7: Średnia wieku na świecie ===");
console.log(`Średnia wieku (dla ${validMediumAges.length} państw z danymi): ${averageMediumAge.toFixed(1)} lat.`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 8: Wypisz wszystkie dane na temat Polski
// ====================================================================
const polandData = countries.find(country => country.name === 'Poland');

console.log("\n=== ZADANIE 8: Dane na temat Polski ===");
if (polandData) {
    console.log(polandData);
} else {
    console.log("Dane dla Polski nie zostały znalezione w tablicy.");
}

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 9: Sprawdź czy średnia wieku w Polsce jest większa od średniej na Świecie.
// ====================================================================
const polandMediumAge = polandData ? polandData.medium_age : null;

console.log("\n=== ZADANIE 9: Porównanie średniej wieku (Polska vs Świat) ===");

if (polandMediumAge !== null && averageMediumAge) {
    const isPolandOlder = polandMediumAge > averageMediumAge;
    
    console.log(`Polska (${polandMediumAge}) vs Świat (${averageMediumAge.toFixed(1)})`);
    
    if (isPolandOlder) {
        console.log("TAK. Średnia wieku w Polsce jest większa od średniej na Świecie.");
    } else {
        console.log("NIE. Średnia wieku w Polsce jest mniejsza lub równa średniej na Świecie.");
    }
} else {
    console.log("Brak danych (Polska lub Świat) do porównania średniej wieku.");
}