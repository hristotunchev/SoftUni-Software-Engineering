function storeProvision(currentProducts, orderedProducts) {
    let storeProducts = {};

    let currentL = currentProducts.length;
    let orderedL = orderedProducts.length;

    for (let i = 0; i < currentL; i += 2) {
        let product = currentProducts[i];
        storeProducts[product] = Number(currentProducts[i + 1]);
    }

    for (let i = 0; i < orderedL; i += 2) {
        let product = orderedProducts[i];

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }

        storeProducts[product] += Number(orderedProducts[i + 1]);
    }

    for (let item of Object.keys(storeProducts)) {
        console.log(`${item} -> ${storeProducts[item]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']);