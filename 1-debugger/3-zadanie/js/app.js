let sum = 0;

users.forEach(user => {
    // Użycie Number() konwertuje wartość payment (niezależnie czy to string, czy liczba) na typ numeryczny,
    // co gwarantuje poprawne dodawanie matematyczne.
    sum += Number(user.payment);
});

console.log(`Zarobki wszystkich użytkowników: ${sum}`);