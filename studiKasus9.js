const produk = ["Laptop", "Mouse", "Keyboard", "Monitor", "Flashdisk"];
const harga = [7000000, 150000, 350000, 1800000, 120000];

// Menggunakan perulangan for biasa untuk mencocokkan indeks array
for (let i = 0; i < produk.length; i++) {
  let kategori = "";

  if (harga[i] > 1000000) {
    kategori = "Produk Mahal";
  } else {
    kategori = "Produk Murah";
  }

  console.log(`${produk[i]} - Rp${harga[i]} (${kategori})`);
}