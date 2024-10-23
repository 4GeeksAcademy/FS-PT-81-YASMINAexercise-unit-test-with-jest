// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("1.07 Dollars should be 154.15 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const Yen = fromDollarToYen(3.745);

    // Si 1.07 dolares son 154.15 yenes, entonces 3.7 dolares debe ser (3.7 * 154.15)
    const expected = 3.745 * 154.15;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.7)).toBe(570.355); // 1 dolar son 154.15 yenes, entonces 3.7 Dolarés deberían ser = (3.7 * 154.15)
})
test("154.15 yenes should be 0.85 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(570.355);

    // Si 154,15 yenes son 0.85 pounds, entonces 570,35 yenes debe ser (570.35 * 0.85)
    const expected = 570.355 * 0.85;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(570.355)).toBe(484.80175); // 154.15 son 0.85 pounds, entonces 570.35 yenes deberían ser = (570.35 * 0.85)
})