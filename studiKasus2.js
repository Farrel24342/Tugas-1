const nilai = [90, 75, 60, 45, 88];
let LulusCount = 0;
let TidakLulusCount = 0;

for (let i = 0; i < nilai.length; i++) {
    let status = "";
    if (nilai[i] >= 70) {
        status = "Lulus";
        LulusCount++;
    } else {
        status = "Tidak Lulus";
        TidakLulusCount++;
    }
    console.log(`Nilai: ${nilai[i]}, Status: ${status}`);
}
console.log(`Jumlah Mahasiswa Lulus: ${LulusCount}`);
console.log(`Jumlah Mahasiswa Tidak Lulus: ${TidakLulusCount}`);