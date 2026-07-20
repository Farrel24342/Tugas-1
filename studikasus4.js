const stok = [12, 0, 5, 8, 0, 20];
let barangHabis = 0;

for (let i = 0; i < stok.length; i++) {
    if (stok[i] === 0) {
        barangHabis++;
        console.log(`Barang ke-${i + 1} habis`);
    } else {
        console.log(`Barang ke-${i + 1} tersedia`);
    }
}

console.log(`Jumlah Barang Habis: ${barangHabis}`);