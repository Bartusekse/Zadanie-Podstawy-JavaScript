// ====================================================================
// ZADANIE 1: Obiekty geometryczne
// ====================================================================

console.log("==========================\n=== ZADANIE 1: Figury ===\n==========================");

const PI = 3.14159265359;

const rectangle = {
    height: 15,
    width: 25,
    showArea: function() {
        return this.height * this.width;
    }
};

const circle = {
    radius: 7,
    showArea: function() {
        // Wzór: PI * r^2
        return PI * this.radius * this.radius;
    }
};

console.log("Obiekt rectangle:", rectangle);
console.log("Obiekt circle:", circle);

console.log(`
Kwadrat ma szerokość ${rectangle.width} i wysokość ${rectangle.height}
Jego pole to ${rectangle.showArea().toFixed(2)}

Koło ma promień ${circle.radius}
Jego pole to ${circle.showArea().toFixed(2)}
`);

// ====================================================================
// ZADANIE 2: Obiekt użytkownika
// ====================================================================

console.log("\n==========================\n=== ZADANIE 2: Użytkownik ===\n==========================");

const currentUser = {
    name: "Anna",
    surname: "Kowalska",
    email: "anna.kowalska@example.com",
    www: "http://example.com/anna",
    userType: "admin",
    isActive: true,

    show: function() {
        console.log("--- Szczegóły Użytkownika ---");
        // Użycie Object.entries do pętli po właściwościach
        Object.entries(this).forEach(([key, value]) => {
            if (typeof value !== 'function') {
                console.log(`- ${key}: ${value}`);
            }
        });
        console.log("---------------------------");
    },

    setActive: function(active) {
        this.isActive = active;
        console.log(`Status isActive zmieniony na: ${this.isActive}`);
    }
};

currentUser.show();
currentUser.setActive(false);
currentUser.show();


// ====================================================================
// ZADANIE 3: Obiekt książki i pętle
// ====================================================================

console.log("\n==========================\n=== ZADANIE 3: Książka i pętle ===\n==========================");

const book = {
    title: "Władca Pierścieni",
    author: "J.R.R. Tolkien",
    pageCount: 1216,
    publisher: "Houghton Mifflin",
    
    showDetails: function() {
        const details = [];

        // 1. Pętla for...in
        console.log("\n--- Właściwości (for...in) ---");
        for (const key in this) {
            // Sprawdzenie, czy klucz nie jest funkcją
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
        
        // 2. Object.keys()
        console.log("\n--- Właściwości (Object.keys()) ---");
        Object.keys(this).forEach(key => {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        });

        // 3. Object.values() - tylko wartości
        console.log("\n--- Wartości (Object.values()) ---");
        Object.values(this).forEach(value => {
            if (typeof value !== 'function') {
                console.log(`Wartość: ${value}`);
            }
        });

        // 4. Object.entries()
        console.log("\n--- Właściwości i Wartości (Object.entries()) ---");
        Object.entries(this).forEach(([key, value]) => {
            if (typeof value !== 'function') {
                console.log(`${key}: ${value}`);
            }
        });
    }
};

book.showDetails();

// ====================================================================
// ZADANIE 4: Obiekt spaceShip
// ====================================================================

console.log("\n==========================\n=== ZADANIE 4: Statek Kosmiczny ===\n==========================");

const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,

    flyTo: function(place, distance) {
        this.currentLocation = place;
        this.flyDistance += distance;
    },

    showInfo: function() {
        console.log(`
Informacje o statku:
----
Statek ${this.name} 
doleciał do miejsca ${this.currentLocation}
Statek przeleciał już całkowity dystans ${this.flyDistance.toLocaleString()}
        `);
    },

    meetClingon: function() {
        const totalRolls = 100;
        let positiveRolls = 0;
        
        for (let i = 0; i < totalRolls; i++) {
            // Losowanie 0-1, sprawdzamy, czy > 0.5 (pozytywny wynik)
            if (Math.random() > 0.5) {
                positiveRolls++;
            }
        }

        if (positiveRolls >= totalRolls / 2) {
            // console.log z kolorem (używamy CSS w konsoli)
            console.log(`%cStatek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`, "color: green; font-weight: bold;");
        } else {
            // console.warn dla żółtego tekstu
            console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
        }
    }
};

spaceShip.flyTo("Mars", 54600000);
spaceShip.showInfo();
spaceShip.meetClingon();


// ====================================================================
// ZADANIE 5: Obiekt book (Książka kontaktowa)
// ====================================================================

console.log("\n==========================\n=== ZADANIE 5: Książka Kontaktowa ===\n==========================");

const userBook = {
    users: [],

    addUser: function(name, age, phone) {
        const newUser = {
            name: name,
            age: age,
            phone: phone
        };
        this.users.push(newUser);
    },

    showUsers: function() {
        console.log("\n--- Wszyscy użytkownicy w książce ---");
        this.users.forEach(user => {
            console.log(`Imię: ${user.name}, Wiek: ${user.age}, Tel: ${user.phone}`);
        });
    },

    findByName: function(name) {
        // Array.prototype.find()
        const user = this.users.find(user => user.name === name);
        console.log(`\nSzukanie imienia "${name}":`);
        return user || false;
    },

    findByPhone: function(phone) {
        // Array.prototype.find()
        const user = this.users.find(user => user.phone === phone);
        console.log(`\nSzukanie telefonu "${phone}":`);
        return user || false;
    },

    getCount: function() {
        const count = this.users.length;
        console.log(`\nLiczba użytkowników w książce: ${count}`);
        return count;
    }
};

userBook.addUser("Alicja", 28, "123-456-789");
userBook.addUser("Bartosz", 35, "987-654-321");
userBook.addUser("Celina", 22, "111-222-333");

userBook.showUsers();
userBook.getCount();
console.log("Wynik findByName('Bartosz'):", userBook.findByName("Bartosz")); 
console.log("Wynik findByPhone('999-999-999'):", userBook.findByPhone("999-999-999"));


// ====================================================================
// ZADANIE 6: Obiekt tableGenerator
// ====================================================================

console.log("\n==========================\n=== ZADANIE 6: Generator Tablic ===\n==========================");

const tableGenerator = {
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generateIncTable: function(nr) {
        // Tablica o długości nr+1, mapowana na index (0 do nr)
        return Array.from({ length: nr + 1 }, (_, i) => i);
    },

    generateRandomTable: function(lng, min, max) {
        // Tworzy tablicę o długości lng, wypełnioną losowymi liczbami
        return Array.from({ length: lng }, () => this.randomNumber(min, max));
    },

    generateTableFromText: function(str) {
        if (typeof str !== 'string') {
            return [];
        }
        // Dzieli tekst po białych znakach (regex /\s+/) i filtruje puste słowa
        return str.split(/\s+/).filter(word => word.length > 0);
    },

    getMaxFromTable: function(arr) {
        // Używa Math.max z operatorem spread
        return Math.max(...arr);
    },

    getMinFromTable: function(arr) {
        // Używa Math.min z operatorem spread
        return Math.min(...arr);
    },

    delete: function(arr, index) {
        // Używa splice do usunięcia 1 elementu od podanego indexu
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
        }
    }
};

const randTable = tableGenerator.generateRandomTable(5, 1, 50);
const mutableArray = [10, 20, 30, 40];

console.log("1. RandomNumber (1-10):", tableGenerator.randomNumber(1, 10));
console.log("2. IncTable (do 4):", tableGenerator.generateIncTable(4));
console.log("3. RandomTable (5 el.):", randTable);
console.log("4. TableFromText ('Ala ma kota'):", tableGenerator.generateTableFromText("Ala ma kota"));
console.log("5. Max z RandomTable:", tableGenerator.getMaxFromTable(randTable));
console.log("6. Min z RandomTable:", tableGenerator.getMinFromTable(randTable));
tableGenerator.delete(mutableArray, 2);
console.log("7. Tablica po usunięciu indexu 2:", mutableArray);


// ====================================================================
// ZADANIE 7: Obiekt text (Narzędzia tekstowe)
// ====================================================================

console.log("\n==========================\n=== ZADANIE 7: Narzędzia Tekstowe ===\n==========================");

const textUtils = {
    check: function(txt, word) {
        // String.prototype.includes()
        return txt.includes(word);
    },

    getCount: function(txt) {
        // Zwraca długość tekstu
        return txt.length;
    },

    getWordsCount: function(txt) {
        // Dzieli po białych znakach i filtruje puste elementy
        const words = txt.split(/\s+/).filter(word => word.length > 0);
        return words.length;
    },

    setCapitalize: function(txt) {
        // Dzieli tekst na słowa, a następnie mapuje: pierwsza litera duża, reszta małe
        return txt.split(' ').map(word => {
            if (word.length === 0) return '';
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    },

    setMix: function(txt) {
        let result = '';
        for (let i = 0; i < txt.length; i++) {
            // Indeksy parzyste na małe litery, nieparzyste na duże
            result += i % 2 === 0 ? txt[i].toLowerCase() : txt[i].toUpperCase();
        }
        return result;
    },

    generateRandom: function(lng) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < lng; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};

const sampleText = "ala ma kota";

console.log(`1. check("${sampleText}", "kota"):`, textUtils.check(sampleText, "kota"));
console.log(`2. getCount("${sampleText}"):`, textUtils.getCount(sampleText));
console.log(`3. getWordsCount("${sampleText}"):`, textUtils.getWordsCount(sampleText));
console.log(`4. setCapitalize("${sampleText}"):`, textUtils.setCapitalize(sampleText));
console.log(`5. setMix("${sampleText}"):`, textUtils.setMix(sampleText));
console.log("6. generateRandom(10):", textUtils.generateRandom(10));