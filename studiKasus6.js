const umur = [8, 13, 17, 20, 25, 11];

// Menggunakan perulangan for...of
for (const u of umur) {
  if (u >= 17) {
    console.log(`Umur ${u}: Boleh Masuk`);
  } else {
    console.log(`Umur ${u}: Tidak Boleh Masuk`);
  }
}