const menu = [10000, 25000, 18000, 12000, 50000];

menu.forEach((harga) => {
  const kategori = harga > 20000 ? "Menu Premium" : "Menu Reguler";
  console.log(`Rp${harga.toLocaleString()} : ${kategori}`);
});