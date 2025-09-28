// ====================================================================
// ZADANIE 1: RYSOWANIE ZA POMOCĄ TABLIC DWUWYMIAROWYCH
// UWZGLĘDNIA STYLE Z "float: left"
// ====================================================================

//zmiennych colors i tab w tym zadaniu nie zmieniaj
const colors = ['#ffffff', '#F8AA00', '#7E1C03', '#DB0F3B', '#0026FF']
const tab = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,3,3,3,3,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,2,2,2,1,1,2,1,0,0,0,0],[0,0,2,1,2,1,1,1,2,1,1,1,0,0],[0,0,2,1,2,2,1,1,1,2,1,1,1,0],[0,0,2,2,1,1,1,1,2,2,2,2,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,3,3,4,3,3,3,0,0,0,0,0],[0,0,3,3,3,4,3,3,4,3,3,3,0,0],[0,3,3,3,3,4,4,4,4,3,3,3,3,0],[0,1,1,3,4,1,4,4,1,4,3,1,1,0],[0,1,1,1,4,4,4,4,4,4,1,1,1,0],[0,1,1,4,4,4,4,4,4,4,4,1,1,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0],[0,0,2,2,2,0,0,0,0,2,2,2,0,0],[0,2,2,2,2,0,0,0,0,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

//--------------------------------------------------------------------------------
//START
//--------------------------------------------------------------------------------
let text = '';

// 1. Zrób pętlę po 2-wymiarowej tablicy "tab" (wiersze)
for (let i = 0; i < tab.length; i++) {
    // Pętla wewnętrzna po elementach wiersza (kolumny)
    for (let j = 0; j < tab[i].length; j++) {
        
        // Pobierz indeks koloru
        const colorIndex = tab[i][j];
        
        // Pobierz kolor z tablicy 'colors'
        const pobranyKolor = colors[colorIndex];

        // 2. Dodawaj każdą pobraną wartość do tekstu w postaci <div>
        // Klasa 'pixel' nie jest potrzebna, ponieważ CSS działa na wszystkie divy w .canvas
        text += `<div style="background-color: ${pobranyKolor}"></div>`;
    }
    
    // 3. Po zakończeniu każdego wiersza, dodaj <br>
    // W tym przypadku, <br> jest niezbędne, by wymusić przejście do nowej linii
    // po zakończeniu 'float: left', co jest najlepszym rozwiązaniem dla tego zestawu CSS.
    text += '<br>';
}

//tutaj wstawiamy do div wygenerowany html - nie ruszaj poniższej linijki
document.querySelector('.canvas').innerHTML = text;