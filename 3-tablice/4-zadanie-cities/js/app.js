// Zakładamy, że tablica 'cities' jest dostępna globalnie z pliku cities.js
// Jeśli cities nie jest zdefiniowane, skomentuj poniższą linię (dla testów w środowisku bez cities.js)
// const cities = []; 

// ====================================================================
// ZADANIE 1: Wypisz ile miast jest w Polsce
// ====================================================================
const totalCities = cities.length;

console.log("=== ZADANIE 1: Liczba miast ===");
console.log(`W tablicy jest ${totalCities} miast.`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 2: Wypisz ile jest ludzi w tych miastach (łączna populacja)
// ====================================================================
const totalPopulation = cities.reduce((sum, city) => {
    return sum + city.people;
}, 0);

console.log("\n=== ZADANIE 2: Łączna populacja ===");
console.log(`Łączna liczba ludności w miastach to ${totalPopulation.toLocaleString()} osób.`);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 3: Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
// ====================================================================
const largeCityThreshold = 10000;
const firstLargeCity = cities.find(city => city.people > largeCityThreshold);

console.log(`\n=== ZADANIE 3: Pierwsze miasto z populacją > ${largeCityThreshold} ===`);
// Sprawdzamy, czy miasto zostało znalezione, by uniknąć błędu
if (firstLargeCity) {
    console.log(`Nazwa miasta: ${firstLargeCity.name} (Ludność: ${firstLargeCity.people.toLocaleString()})`);
} else {
    console.log("Nie znaleziono miasta spełniającego kryterium.");
}


// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 4: Wypisz miasta, w których ludzi jest ponad średnią
// ====================================================================
// Średnia musi być obliczona najpierw, na podstawie Zadania 2
const averagePopulation = totalPopulation / totalCities;

const citiesAboveAverage = cities.filter(city => city.people > averagePopulation);

console.log("\n=== ZADANIE 4: Miasta z populacją ponad średnią ===");
console.log(`Średnia populacja wynosi: ${Math.round(averagePopulation).toLocaleString()}`);
console.log("Miasta powyżej średniej:");
console.log(citiesAboveAverage);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 5: Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
// ====================================================================
const largeCitiesNames = cities
    .filter(city => city.people > largeCityThreshold) // Filtrujemy obiekty
    .map(city => city.name);                            // Mapujemy na same nazwy

console.log(`\n=== ZADANIE 5: Nazwy miast z populacją > ${largeCityThreshold} ===`);
console.log(largeCitiesNames);

// --------------------------------------------------------------------

// ====================================================================
// ZADANIE 6: Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych
// ====================================================================

// Oszczędność czasu: używamy wyniku Zadania 5 do liczenia dużych miast
const largeCitiesCount = largeCitiesNames.length;

// Liczba małych miast to różnica między całkowitą liczbą a dużymi miastami
const smallCitiesCount = totalCities - largeCitiesCount;

let winnerText;
if (largeCitiesCount > smallCitiesCount) {
    winnerText = `Miast z populacją > ${largeCityThreshold} jest więcej (Duże: ${largeCitiesCount}, Małe: ${smallCitiesCount})`;
} else if (smallCitiesCount > largeCitiesCount) {
    winnerText = `Miast z populacją <= ${largeCityThreshold} jest więcej (Małe: ${smallCitiesCount}, Duże: ${largeCitiesCount})`;
} else {
    winnerText = `Liczba miast jest równa (Duże: ${largeCitiesCount}, Małe: ${smallCitiesCount})`;
}

console.log("\n=== ZADANIE 6: Porównanie liczebności grup miast ===");
console.log(winnerText);