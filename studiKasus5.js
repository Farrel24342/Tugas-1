const hadir = [true, false, true, true, false, true];
let jumlahHadir = 0;

for (let i = 0; i < hadir.length; i++) {
    if (hadir[i]) {
        jumlahHadir++;
        console.log(`Mahasiswa ke-${i + 1} hadir`);
    } else {
        console.log(`Mahasiswa ke-${i + 1} tidak hadir`);
    }
}