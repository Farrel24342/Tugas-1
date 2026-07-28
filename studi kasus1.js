const nama = "Budi";
const umur = "20";

const hargaBarang = [12000, 15000, 8000, 5000];


let totalBelanja = 0;
for (let i = 0; i < hargaBarang.length; i++) {
  totalBelanja += hargaBarang[i];
}


let statusDiskon = "";

if (totalBelanja > 30000) {
  console.log("Selamat! Anda mendapatkan diskon.");
  statusDiskon = "Mendapat Diskon";
} else {n
  console.log("Belanja lagi agar mendapat diskon.");
  statusDiskon = "Tidak Mendapat Diskon";
}


console.log(`nama : ${nama}`);
console.log(`umur : ${umur}`);
console.log(`total Belanja : ${totalBelanja}`);
console.log(`status : ${statusDiskon}`);
//newogjeogfjeogfkeoekg[kao[pek]]