const skor = [100, 450, 800, 150, 900];

// Menggunakan perulangan for biasa untuk mendapatkan nomor Player (index + 1)
for (let i = 0; i < skor.length; i++) {
  let rank = "";

  // Percabangan if - else if - else
  if (skor[i] >= 800) {
    rank = "Mythic";
  } else if (skor[i] >= 500) {
    rank = "Legend";
  } else if (skor[i] >= 300) {
    rank = "Epic";
  } else {
    rank = "Warrior";
  }

  console.log(`Player ${i + 1} : ${skor[i]} -> ${rank}`);
}