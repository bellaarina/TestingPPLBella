/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const cart = require('../helpers.js');

test('Saat ditambahkan akan bertambah 2', ()=>{
    expect(cart.incrementQty(1)).toBe(2);
});

test('Saat dikurangkan akan berkurang 2', ()=>{
    expect(cart.decrementQty(3)).toBe(2);
});

test('Hitung diskon dengan kode promo', ()=>{
    expect(cart.calculateDiscount(300000, "BELLA CANTIK")).toBe(240000);
});

test("Hitung subtotal 30000 dengan total 2 barang menjadi 60000", () => {
    expect(cart.recalculateSubtotal(30000, 2)).toBe(60000);
});
