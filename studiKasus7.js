const nilai = [80, 95, 70, 88, 100, 65];

let nilaiTertinggi = nilai[0];
let nilaiTerendah = nilai[0];

for (const n of nilai) {
  if (n > nilaiTertinggi) {
    nilaiTertinggi = n;
  }
  if (n < nilaiTerendah) {
    nilaiTerendah = n;
  }
}

console.log(`Nilai tertinggi : ${nilaiTertinggi}`);
console.log(`Nilai terendah : ${nilaiTerendah}`);