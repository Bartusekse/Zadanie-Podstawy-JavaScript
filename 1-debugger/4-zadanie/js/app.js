const hoursEl = document.querySelector(".timer .hours");
const minutesEl = document.querySelector(".timer .minutes");
const secondEl = document.querySelector(".timer .second");
const clock = document.querySelector(".clock");
let count = 0;

function generateRandomColor() {
    const random = Math.floor(Math.random()*360);
    // ZADANIE 3: Zwiększamy nasycenie koloru z 20% na 90%, aby kolory były żywsze
    return `hsl(${random}, 90%, 60%)`;
}

function setTimer(h, m, s) {
    // ZADANIE 1: Dodajemy ustawianie godzin i minut dla zegara cyfrowego
    hoursEl.innerText = (""+h).padStart(2, "0");
    minutesEl.innerText = (""+m).padStart(2, "0");
    secondEl.innerText = (""+s).padStart(2, "0");
}

function setClockHands(h, m, s) {
    const secondDegrees = ((s / 60) * 360);
    
    // ZADANIE 2: Obliczanie i ustawianie kątów dla wskazówek minut i godzin (zegar analogowy)
    
    // Minuty (360 stopni na 60 minut)
    const minuteDegrees = ((m / 60) * 360);
    
    // Godziny (360 stopni na 12 godzin, uwzględniając ruch zależny od minut: m / 60)
    const hourDegrees = ((h % 12 + m / 60) / 12) * 360; 

    clock.style.setProperty('--second', `${secondDegrees}deg`);
    clock.style.setProperty('--minutes', `${minuteDegrees}deg`); // Ustawienie minut
    clock.style.setProperty('--hours', `${hourDegrees}deg`); // Ustawienie godzin
}

function time() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    setTimer(h, m, s);
    setClockHands(h, m, s);

    count++;
    if (count >= 5) {
        count = 0;
        document.body.style.backgroundColor = generateRandomColor();
    }
}

setInterval(() => {
    time();
}, 1000)